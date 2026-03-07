const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(filePath));
        } else if (file === 'page.tsx') {
            results.push(filePath);
        }
    });
    return results;
}

const appDir = path.resolve('app');
const pages = walk(appDir);
const missing = [];

pages.forEach(p => {
    const content = fs.readFileSync(p, 'utf8');
    if (!content.includes('canonical')) {
        missing.push(p);
    }
});

console.log(JSON.stringify({
    total: pages.length,
    missingCount: missing.length,
    missingPaths: missing
}, null, 2));
