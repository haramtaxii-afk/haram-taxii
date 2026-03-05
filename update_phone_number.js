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

            // Replace various formats of the old number with the new number
            // Old number: +92 313 2222436 or 923132222436
            // New number: +92 313 2222436

            // 1. Plain digits: 923132222436 -> 923132222436
            content = content.replace(/923132222436/g, '923132222436');

            // 2. With plus and spaces: +92 313 2222436 -> +92 313 2222436
            content = content.replace(/\+92 313 2222436/g, '+92 313 2222436');

            // 3. With plus and hyphens: +92-313-222-2436 -> +92-313-222-2436
            content = content.replace(/\+92-313-222-2436/g, '+92-313-222-2436');

            // 4. Just local format: 03132222436 -> 03132222436
            content = content.replace(/03132222436/g, '03132222436');

            // 5. Short code format that might be around
            content = content.replace(/92 313 2222436/g, '92 313 2222436');

            // 6. Any +923132222436
            content = content.replace(/\+923132222436/g, '+923132222436');

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated:', fullPath);
                changedFilesCount++;
            }
        }
    }
}

console.log('Starting phone number replacement...');
replaceInDir(targetDir);
console.log(`Done. Updated ${changedFilesCount} files.`);
