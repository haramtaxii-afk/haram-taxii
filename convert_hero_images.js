const sharp = require('sharp');
const path = require('path');

const makkahSrc = 'C:\\Users\\ummeh\\.gemini\\antigravity\\brain\\c5ce939e-7bf7-4f7c-a7be-0ead96c8a1d0\\makkah_landscape_1772729169806.png';
const madinahSrc = 'C:\\Users\\ummeh\\.gemini\\antigravity\\brain\\c5ce939e-7bf7-4f7c-a7be-0ead96c8a1d0\\madinah_landscape_1772729190944.png';
const fleetSrc = 'C:\\Users\\ummeh\\.gemini\\antigravity\\brain\\c5ce939e-7bf7-4f7c-a7be-0ead96c8a1d0\\fleet_landscape_1772729209626.png';

async function convert() {
    try {
        await sharp(makkahSrc)
            .webp({ quality: 85, effort: 6 })
            .toFile(path.join(__dirname, 'public', 'makkah-clock-tower.webp'));
        console.log('Successfully saved to public/makkah-clock-tower.webp');

        await sharp(madinahSrc)
            .webp({ quality: 85, effort: 6 })
            .toFile(path.join(__dirname, 'public', 'madinah-prophets-mosque.webp'));
        console.log('Successfully saved to public/madinah-prophets-mosque.webp');

        await sharp(fleetSrc)
            .webp({ quality: 85, effort: 6 })
            .toFile(path.join(__dirname, 'public', 'gmc-yukon.webp'));
        console.log('Successfully saved to public/gmc-yukon.webp');
    } catch (err) {
        console.error(err);
    }
}

convert();
