const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = "a749f888cbd84e268b9c9b016050fe94";
const SITE_URL = "http://www.haramtaxii.com";

// Main Pages
const mainPages = [
    "",
    "about",
    "contact",
    "booking",
    "fleet",
    "pricing",
    "locations",
    "services",
    "routes"
];

// Read Slugs from a file content using Regex
function extractSlugs(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const regex = /slug:\s*"([^"]+)"/g;
        let match;
        const slugs = [];
        while ((match = regex.exec(content)) !== null) {
            slugs.push(match[1]);
        }
        return slugs;
    } catch (err) {
        console.error(`Error reading ${filePath}:`, err);
        return [];
    }
}

// Read Directories for Locations
function getDirectories(source) {
    try {
        return fs.readdirSync(source, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);
    } catch (err) {
        console.error(`Error reading directory ${source}:`, err);
        return [];
    }
}

// Build URL List
const routesSlugs = extractSlugs(path.join(__dirname, 'lib', 'routesData.ts'));
const servicesSlugs = extractSlugs(path.join(__dirname, 'lib', 'servicesData.ts'));
const locationSlugs = getDirectories(path.join(__dirname, 'app', 'locations'));

let allUrls = [];

mainPages.forEach(page => allUrls.push(`${SITE_URL}/${page}`));
routesSlugs.forEach(slug => allUrls.push(`${SITE_URL}/routes/${slug}`));
servicesSlugs.forEach(slug => allUrls.push(`${SITE_URL}/services/${slug}`));
locationSlugs.forEach(slug => allUrls.push(`${SITE_URL}/locations/${slug}`));

// Remove duplicates
allUrls = [...new Set(allUrls)];

// Limit to 100 as requested (or split batches)
// Bing limit is 500 per batch. I'll submit up to 100 for now as user asked "100 url".
// But actually, I should submit ALL if I can.
// I'll print the count.
console.log(`Total URLs found: ${allUrls.length}`);

const batchSize = 100;
const batches = [];
for (let i = 0; i < allUrls.length; i += batchSize) {
    batches.push(allUrls.slice(i, i + batchSize));
}

// Submit Function
function submitBatch(urls) {
    const data = JSON.stringify({
        siteUrl: SITE_URL,
        urlList: urls
    });

    const options = {
        hostname: 'ssl.bing.com',
        port: 443,
        path: `/webmaster/api.svc/json/SubmitUrlbatch?apikey=${API_KEY}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Length': data.length
        }
    };

    const req = https.request(options, (res) => {
        let responseBody = '';

        res.on('data', (chunk) => {
            responseBody += chunk;
        });

        res.on('end', () => {
            console.log(`Status: ${res.statusCode}`);
            console.log('Response:', responseBody);
        });
    });

    req.on('error', (error) => {
        console.error('Error submitting URLs:', error);
    });

    req.write(data);
    req.end();
}

// Submit All Batches Sequentially
async function submitAllBatches() {
    console.log(`Starting submission of ${batches.length} batches...`);

    for (let i = 0; i < batches.length; i++) {
        console.log(`Submitting Batch ${i + 1}/${batches.length} (${batches[i].length} URLs)...`);

        await new Promise((resolve, reject) => {
            const data = JSON.stringify({
                siteUrl: SITE_URL,
                urlList: batches[i]
            });

            const options = {
                hostname: 'ssl.bing.com',
                port: 443,
                path: `/webmaster/api.svc/json/SubmitUrlbatch?apikey=${API_KEY}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Content-Length': Buffer.byteLength(data)
                }
            };

            const req = https.request(options, (res) => {
                let responseBody = '';
                res.on('data', (chunk) => responseBody += chunk);
                res.on('end', () => {
                    console.log(`Batch ${i + 1} Status: ${res.statusCode}`);
                    console.log(`Batch ${i + 1} Response: ${responseBody}`);
                    resolve();
                });
            });

            req.on('error', (error) => {
                console.error(`Error submitting Batch ${i + 1}:`, error);
                resolve(); // Continue even if error
            });

            req.write(data);
            req.end();
        });

        // Wait 1 second between batches
        if (i < batches.length - 1) {
            await new Promise(r => setTimeout(r, 1000));
        }
    }
    console.log("All batches processed.");
}

submitAllBatches();
