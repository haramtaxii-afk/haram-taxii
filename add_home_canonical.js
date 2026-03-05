const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Add import if missing
if (!content.includes("import { Metadata } from 'next';")) {
    content = "import { Metadata } from 'next';\n" + content;
}

const metadataBlock = `
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://haramtaxiservice.com',
  },
};
`;

// Insert metadata before the default export function
if (!content.includes('export const metadata')) {
    const exportIndex = content.indexOf('export default async function Home()');
    if (exportIndex !== -1) {
        content = content.slice(0, exportIndex) + metadataBlock + '\n' + content.slice(exportIndex);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Added metadata with canonical to app/page.tsx');
    } else {
        console.error('Could not find default export in app/page.tsx');
    }
} else {
    console.log('Metadata already exists in app/page.tsx');
}
