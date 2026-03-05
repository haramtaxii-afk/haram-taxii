const fs = require('fs');
const path = require('path');

const targetDir = __dirname;
let changedFilesCount = 0;

function replaceInDir(dirPath) {
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
        // Skip node_modules, .next, .git, and public static assets
        if (['node_modules', '.next', '.git', 'public', '.vscode'].includes(item)) {
            continue;
        }

        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            replaceInDir(fullPath);
        } else if (stat.isFile() && (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js') || fullPath.endsWith('.md') || fullPath.endsWith('.json'))) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Catch info@haramtaxii.com
            content = content.replace(/haramtaxii@gmail\.com/g, 'info@haramtaxii.com');

            // Catch facebook URLs
            content = content.replace(/haramtaxii/gi, 'haramtaxii');

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated:', fullPath);
                changedFilesCount++;
            }
        }
    }
}

console.log('Starting second domain and email replacement pass...');
replaceInDir(targetDir);
console.log(`Done. Updated ${changedFilesCount} files.`);
