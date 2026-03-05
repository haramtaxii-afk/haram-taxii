const fs = require('fs');
const path = require('path');

const targetDir = 'd:\\Taxi KSA\\haramtaxiservice';

function replaceInDir(dirPath) {
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
        if (item === 'node_modules' || item === '.next' || item === '.git' || item === 'public' || item.endsWith('.png') || item.endsWith('.jpg')) {
            continue;
        }

        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            replaceInDir(fullPath);
        } else if (stat.isFile() && (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js') || fullPath.endsWith('.md'))) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            if (content.includes('923080628195')) {
                content = content.replace(/923080628195/g, '923080628195');
                modified = true;
            }

            if (content.includes('92-308-062-8195')) {
                // Change any variants of +92-308-062-8195 to +92-308-062-8195
                content = content.replace(/92-308-062-8195/g, '92-308-062-8195');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Modified:', fullPath);
            }
        }
    }
}

replaceInDir(targetDir);
console.log('Done.');
