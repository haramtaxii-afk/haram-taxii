const fs = require('fs');
const path = require('path');

const xml = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://haramtaxiservice.com</loc></url>
<url><loc>https://haramtaxiservice.com/about</loc></url>
<url><loc>https://haramtaxiservice.com/booking</loc></url>
<url><loc>https://haramtaxiservice.com/contact</loc></url>
<url><loc>https://haramtaxiservice.com/faq</loc></url>
<url><loc>https://haramtaxiservice.com/fleet</loc></url>
<url><loc>https://haramtaxiservice.com/locations</loc></url>
<url><loc>https://haramtaxiservice.com/privacy-policy</loc></url>
<url><loc>https://haramtaxiservice.com/terms-conditions</loc></url>
<url><loc>https://haramtaxiservice.com/services</loc></url>
<url><loc>https://haramtaxiservice.com/routes</loc></url>
<url><loc>https://haramtaxiservice.com/blog</loc></url>
<url><loc>https://haramtaxiservice.com/fleet/gmc-yukon</loc></url>
<url><loc>https://haramtaxiservice.com/fleet/hyundai-starex</loc></url>
<url><loc>https://haramtaxiservice.com/fleet/hyundai-staria</loc></url>
<url><loc>https://haramtaxiservice.com/fleet/toyota-camry</loc></url>
<url><loc>https://haramtaxiservice.com/fleet/toyota-coaster</loc></url>
<url><loc>https://haramtaxiservice.com/fleet/toyota-hiace</loc></url>
<url><loc>https://haramtaxiservice.com/locations/abha</loc></url>
<url><loc>https://haramtaxiservice.com/locations/abqaiq</loc></url>
<url><loc>https://haramtaxiservice.com/locations/al-ahsa</loc></url>
<url><loc>https://haramtaxiservice.com/locations/al-baha</loc></url>
<url><loc>https://haramtaxiservice.com/locations/al-hofuf</loc></url>
<url><loc>https://haramtaxiservice.com/locations/al-jouf</loc></url>
<url><loc>https://haramtaxiservice.com/locations/al-namas</loc></url>
<url><loc>https://haramtaxiservice.com/locations/al-qunfudhah</loc></url>
<url><loc>https://haramtaxiservice.com/locations/al-rass</loc></url>
<url><loc>https://haramtaxiservice.com/locations/al-ula</loc></url>
<url><loc>https://haramtaxiservice.com/locations/al-wajh</loc></url>
<url><loc>https://haramtaxiservice.com/locations/arar</loc></url>
<url><loc>https://haramtaxiservice.com/locations/batha</loc></url>
<url><loc>https://haramtaxiservice.com/locations/bisha</loc></url>
<url><loc>https://haramtaxiservice.com/locations/buraidah</loc></url>
<url><loc>https://haramtaxiservice.com/locations/dammam</loc></url>
<url><loc>https://haramtaxiservice.com/locations/dawadmi</loc></url>
<url><loc>https://haramtaxiservice.com/locations/dhahran</loc></url>
<url><loc>https://haramtaxiservice.com/locations/duba</loc></url>
<url><loc>https://haramtaxiservice.com/locations/hafr-al-batin</loc></url>
<url><loc>https://haramtaxiservice.com/locations/hail</loc></url>
<url><loc>https://haramtaxiservice.com/locations/haql</loc></url>
<url><loc>https://haramtaxiservice.com/locations/jazan</loc></url>
<url><loc>https://haramtaxiservice.com/locations/jeddah</loc></url>
<url><loc>https://haramtaxiservice.com/locations/jubail</loc></url>
<url><loc>https://haramtaxiservice.com/locations/kaec</loc></url>
<url><loc>https://haramtaxiservice.com/locations/khafji</loc></url>
<url><loc>https://haramtaxiservice.com/locations/khamis-mushait</loc></url>
<url><loc>https://haramtaxiservice.com/locations/kharj</loc></url>
<url><loc>https://haramtaxiservice.com/locations/khobar</loc></url>
<url><loc>https://haramtaxiservice.com/locations/madinah</loc></url>
<url><loc>https://haramtaxiservice.com/locations/majmaah</loc></url>
<url><loc>https://haramtaxiservice.com/locations/makkah</loc></url>
<url><loc>https://haramtaxiservice.com/locations/najran</loc></url>
<url><loc>https://haramtaxiservice.com/locations/neom</loc></url>
<url><loc>https://haramtaxiservice.com/locations/qatif</loc></url>
<url><loc>https://haramtaxiservice.com/locations/qurayyat</loc></url>
<url><loc>https://haramtaxiservice.com/locations/rabigh</loc></url>
<url><loc>https://haramtaxiservice.com/locations/rafha</loc></url>
<url><loc>https://haramtaxiservice.com/locations/ras-tanura</loc></url>
<url><loc>https://haramtaxiservice.com/locations/riyadh</loc></url>
<url><loc>https://haramtaxiservice.com/locations/salwa</loc></url>
<url><loc>https://haramtaxiservice.com/locations/shaqra</loc></url>
<url><loc>https://haramtaxiservice.com/locations/sharurah</loc></url>
<url><loc>https://haramtaxiservice.com/locations/tabuk</loc></url>
<url><loc>https://haramtaxiservice.com/locations/taif</loc></url>
<url><loc>https://haramtaxiservice.com/locations/turaif</loc></url>
<url><loc>https://haramtaxiservice.com/locations/umluj</loc></url>
<url><loc>https://haramtaxiservice.com/locations/unaizah</loc></url>
<url><loc>https://haramtaxiservice.com/locations/wadi-ad-dawasir</loc></url>
<url><loc>https://haramtaxiservice.com/locations/yanbu</loc></url>
<url><loc>https://haramtaxiservice.com/locations/zulfi</loc></url>
<url><loc>https://haramtaxiservice.com/routes/jeddah-airport-to-makkah</loc></url>
<url><loc>https://haramtaxiservice.com/routes/jeddah-to-madinah</loc></url>
<url><loc>https://haramtaxiservice.com/routes/makkah-to-madinah</loc></url>
<url><loc>https://haramtaxiservice.com/routes/makkah-hotel-to-jeddah-airport</loc></url>
<url><loc>https://haramtaxiservice.com/routes/makkah-to-jeddah-airport</loc></url>
<url><loc>https://haramtaxiservice.com/routes/madinah-hotel-to-jeddah-airport</loc></url>
<url><loc>https://haramtaxiservice.com/routes/madinah-hotel-to-madinah-airport</loc></url>
<url><loc>https://haramtaxiservice.com/routes/dammam-to-makkah</loc></url>
<url><loc>https://haramtaxiservice.com/routes/riyadh-to-makkah</loc></url>
<url><loc>https://haramtaxiservice.com/routes/alula-to-madinah</loc></url>
<url><loc>https://haramtaxiservice.com/routes/hafr-to-kuwait-border</loc></url>
<url><loc>https://haramtaxiservice.com/routes/al-ahsa-to-uae</loc></url>
<url><loc>https://haramtaxiservice.com/routes/hail-to-riyadh</loc></url>
<url><loc>https://haramtaxiservice.com/routes/jazan-to-abha</loc></url>
<url><loc>https://haramtaxiservice.com/routes/hafr-to-riyadh</loc></url>
<url><loc>https://haramtaxiservice.com/routes/al-ahsa-to-qatar</loc></url>
<url><loc>https://haramtaxiservice.com/routes/buraidah-to-unayzah</loc></url>
<url><loc>https://haramtaxiservice.com/routes/yanbu-to-madinah</loc></url>
<url><loc>https://haramtaxiservice.com/routes/abha-to-khamis</loc></url>
<url><loc>https://haramtaxiservice.com/routes/qassim-to-riyadh</loc></url>
<url><loc>https://haramtaxiservice.com/routes/train-station-transfers-makkah</loc></url>
<url><loc>https://haramtaxiservice.com/routes/train-station-transfers-madinah</loc></url>
<url><loc>https://haramtaxiservice.com/routes/makkah-ziyarat-tour</loc></url>
<url><loc>https://haramtaxiservice.com/routes/madinah-ziyarat-tour</loc></url>
<url><loc>https://haramtaxiservice.com/routes/umrah-travel-agency</loc></url>
<url><loc>https://haramtaxiservice.com/routes/hajj-travel-agency</loc></url>
<url><loc>https://haramtaxiservice.com/routes/umrah-transport</loc></url>
<url><loc>https://haramtaxiservice.com/routes/luxury-umrah-transport</loc></url>
<url><loc>https://haramtaxiservice.com/routes/madinah-to-makkah</loc></url>
<url><loc>https://haramtaxiservice.com/routes/hotel-to-haram-transport</loc></url>
<url><loc>https://haramtaxiservice.com/services/jeddah-airport-transfer</loc></url>
<url><loc>https://haramtaxiservice.com/services/madinah-airport-transfer</loc></url>
<url><loc>https://haramtaxiservice.com/services/makkah-ziyarat</loc></url>
<url><loc>https://haramtaxiservice.com/services/madinah-ziyarat</loc></url>
<url><loc>https://haramtaxiservice.com/services/riyadh-airport-transfer</loc></url>
<url><loc>https://haramtaxiservice.com/services/dammam-airport-transfer</loc></url>
<url><loc>https://haramtaxiservice.com/services/neom-bay-transfer</loc></url>
<url><loc>https://haramtaxiservice.com/services/hegra-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/bahrain-border-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/business-travel</loc></url>
<url><loc>https://haramtaxiservice.com/services/hourly-chauffeur</loc></url>
<url><loc>https://haramtaxiservice.com/services/tabuk-city-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/alula-airport-transfer</loc></url>
<url><loc>https://haramtaxiservice.com/services/neom-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/dammam-to-bahrain</loc></url>
<url><loc>https://haramtaxiservice.com/services/khobar-to-bahrain-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/bahrain-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/jubail-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/yanbu-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/taif-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/abha-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/jazan-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/najran-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/al-ahsa-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/tabuk-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/hail-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/qassim-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/arar-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/al-jouf-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/bisha-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/rafha-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/sharurah-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/turaif-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/wadi-ad-dawasir-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/al-wajh-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/yanbu-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/qurayyat-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/al-ahsa-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/qassim-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/luxury-chauffeur</loc></url>
<url><loc>https://haramtaxiservice.com/services/family-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/tabuk-airport-transfer</loc></url>
<url><loc>https://haramtaxiservice.com/services/jubail-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/dammam-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/dawadmi-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/abha-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/qaisumah-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/jeddah-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/khobar-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/al-baha-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/neom-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/red-sea-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/kaec-jeddah-airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/tabuk-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/buraidah-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/hofuf-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/khobar-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/riyadh-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/dammam-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/najran-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/sharurah-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/rabigh-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/medina-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/qurayyat-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/umluj-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/baljurashi-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/tanomah-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/city-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/local-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/kaec-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/alula-city-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/jeddah-city-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/yanbu-city-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/old-town-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/rijal-almaa-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/thee-ain-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/al-qara-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/soudah-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/jubbah-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/al-jouf-heritage-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/ushaiger-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/najran-heritage-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/bisha-farm-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/haql-tour-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/oasis-tour-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/lina-village-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/olive-farm-tour</loc></url>
<url><loc>https://haramtaxiservice.com/services/industrial-valley-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/petro-rabigh-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/kharj-industrial-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/jubail-industrial-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/royal-commission-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/aramco-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/yanbu-industrial-transport</loc></url>
<url><loc>https://haramtaxiservice.com/services/sudair-industrial-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/industrial-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/business-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/staff-transport</loc></url>
<url><loc>https://haramtaxiservice.com/services/kfupm-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/kkmc-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/military-city-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/university-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/kuwait-border-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/uae-border-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/qatar-border-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/bahrain-border-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/desert-safari-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/desert-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/nafud-desert-trip</loc></url>
<url><loc>https://haramtaxiservice.com/services/empty-quarter-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/mountain-tour-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/red-sea-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/the-line-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/sindalah-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/trojena-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/half-moon-bay-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/umluj-beach-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/farasan-ferry-transfer</loc></url>
<url><loc>https://haramtaxiservice.com/services/intercity-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/long-distance-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/pilgrim-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/umrah-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/heritage-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/historical-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/hotel-to-haram-transport</loc></url>
<url><loc>https://haramtaxiservice.com/services/airport-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/date-festival-transfer</loc></url>
<url><loc>https://haramtaxiservice.com/services/date-festival-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/jazan-economic-city</loc></url>
<url><loc>https://haramtaxiservice.com/services/ghadha-park-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/raghdan-park-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/king-fahd-dam-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/waad-al-shamal-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/northern-borders-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/majmaah-train-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/kaec-train-station-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/kjo-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/services/duba-port-taxi</loc></url>
<url><loc>https://haramtaxiservice.com/blog/how-to-book-taxi-jeddah-airport-to-makkah</loc></url>
<url><loc>https://haramtaxiservice.com/blog/best-ziyarat-places-makkah-history</loc></url>
<url><loc>https://haramtaxiservice.com/blog/safety-tips-umrah-taxi-travel</loc></url>
</urlset>`;

const urls = [];
const regex = /<loc>(https:\/\/haramtaxiservice\.com[^<]*)<\/loc>/g;
let match;

while ((match = regex.exec(xml)) !== null) {
    let urlPath = match[1].replace('https://haramtaxiservice.com', '');
    if (urlPath === '') urlPath = '/';
    urls.push(urlPath);
}

const appDir = path.join(__dirname, 'app');

function checkRouteExists(routePath) {
    if (routePath === '/') {
        return fs.existsSync(path.join(appDir, 'page.tsx')) || fs.existsSync(path.join(appDir, 'page.js'));
    }

    const segments = routePath.split('/').filter(Boolean);

    // Check direct static route (e.g., /about -> app/about/page.tsx)
    const staticDirPath = path.join(appDir, ...segments);
    const hasStaticPage = fs.existsSync(path.join(staticDirPath, 'page.tsx')) ||
        fs.existsSync(path.join(staticDirPath, 'page.js'));

    if (hasStaticPage) return true;

    // We also have dynamic routes like app/fleet/[slug]/page.tsx or app/locations/[slug]/page.tsx
    // Let's do a basic check for the known dynamic folders
    if (segments.length === 2 && ['fleet', 'locations', 'routes', 'services', 'blog'].includes(segments[0])) {
        // Because next.js handles these dynamically, if the parent dynamic folder `[slug]` exists,
        // the route is technically "handled" by the app, even if the data might return 404 at runtime.
        const dynamicDirPath = path.join(appDir, segments[0], '[slug]');
        if (fs.existsSync(path.join(dynamicDirPath, 'page.tsx'))) {
            return true;
        }
    }

    // specific routing logic fix: terms-conditions is often terms
    if (routePath === '/terms-conditions' && fs.existsSync(path.join(appDir, 'terms', 'page.tsx'))) return true;
    if (routePath === '/privacy-policy' && fs.existsSync(path.join(appDir, 'privacy', 'page.tsx'))) return true;

    return false;
}

const present = [];
const missing = [];

urls.forEach(urlPath => {
    if (checkRouteExists(urlPath)) {
        present.push(urlPath);
    } else {
        missing.push(urlPath);
    }
});

console.log('--- PRESENT PAGES ---');
console.log(`Total Present: ${present.length}`);

console.log('\n--- MISSING PAGES ---');
console.log(`Total Missing: ${missing.length}`);
missing.forEach(p => console.log(p));
