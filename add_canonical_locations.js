const fs = require('fs');
const path = require('path');

const locationsDir = path.resolve(__dirname, 'app/locations');
console.log(`Scanning ${locationsDir}...`);

if (!fs.existsSync(locationsDir)) {
    console.error("Locations directory not found!");
    process.exit(1);
}

const dirs = fs.readdirSync(locationsDir).filter(f => fs.statSync(path.join(locationsDir, f)).isDirectory());

let updatedCount = 0;

dirs.forEach(dir => {
    const filePath = path.join(locationsDir, dir, 'page.tsx');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if canonical already exists (unless we force update, but let's check first)
    if (content.includes('alternates: {')) {
        console.log(`[SKIP] ${dir} - Alternates already exists.`);
        return;
    }

    const canonicalUrl = `http://www.haramtaxii.com/locations/${dir}`;
    const alternatesBlock = `
    alternates: {
        canonical: '${canonicalUrl}',
    },`;

    // Attempt to insert inside export const metadata = { ... }
    // We look for `export const metadata: Metadata = {`
    const metadataRegex = /export const metadata:\s*Metadata\s*=\s*\{/;
    const match = content.match(metadataRegex);

    if (match) {
        const insertionIndex = match.index + match[0].length;
        content = content.slice(0, insertionIndex) + alternatesBlock + content.slice(insertionIndex);

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`[UPDATE] ${dir} - Added canonical: ${canonicalUrl}`);
        updatedCount++;
    } else {
        console.log(`[WARN] ${dir} - Could not find metadata export object.`);
    }
});

console.log(`\nJob complete. Updated ${updatedCount} files.`);
