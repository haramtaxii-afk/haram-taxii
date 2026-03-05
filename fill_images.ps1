$desert = "public/makkah-highway-scenic-route.webp"
$city = "public/jeddah-city-night.webp"
$beach = "public/jeddah-corniche-view.webp"
$car = "public/gmc-yukon-xl-taxi.webp"
$camry = "public/toyota-camry-taxi-sedan.webp"

# Desert / Road / Borders
$desertImages = @(
    "halat-ammar-border.webp", "dawadmi-desert.webp", "hafr-al-batin-desert.webp", 
    "salwa-border.webp", "duba-port.webp", "abqaiq-industry.webp", "rafha-desert.webp", 
    "al-haditha-border.webp", "wadeeah-border.webp", "arar-northern-borders.webp", 
    "zulfi-dunes.webp", "sharurah-desert.webp", "batha-desert.webp", "qurayyat-border.webp", 
    "wadi-desert.webp", "bisha-palms.webp", "turaif-mining.webp", "ras-tanura-refinery.webp",
    "makkah-highway.webp"
)

# City / Modern / Landmarks
$cityImages = @(
    "majmaah-university.webp", "al-rass-park.webp", "neom-the-line-concept.webp", 
    "khobar-water-tower.webp", "dhahran-ithra.webp", "jeddah-corniche-road.webp", 
    "kharj-palace.webp", "riyadh-skyline.webp", "makkah-clock-tower-new.webp", 
    "madinah-umbrellas.webp", "najran-emara-palace.webp", "unaizah-dates.webp", 
    "rabigh-industrial.webp", "neom-future.webp", "khamis-mushait-city.webp", 
    "qassim-dates-market.webp", "green-dome-detail.webp"
)

# Nature / Beach / Green
$natureImages = @(
    "jazan-heritage-village.webp", "al-qara-mountain.webp", "yanbu-industrial-lake.webp", 
    "abha-green-mountain.webp", "al-jouf-olive-farm.webp", "qatif-corniche.webp", 
    "dammam-corniche.webp", "jubail-corniche.webp", "al-hofuf-oasis.webp", 
    "qunfudhah-corniche.webp", "haql-shipwreck.webp", "al-baha-thee-ain.webp", 
    "ushaiger-village.webp", "khafji-corniche.webp", "al-namas-fog.webp", 
    "al-wajh-old-town.webp", "hail-jubbah-rock-art.webp", "umluj-beach.webp", "kaec-canal.webp"
)

# Cars
$carImages = @(
    "gmc-yukon-context.webp", "hyundai-starex-context.webp", "toyota-coaster-context.webp"
)

$camryImages = @(
    "toyota-camry-context.webp"
)

foreach ($img in $desertImages) { Copy-Item $desert -Destination "public/$img" -ErrorAction SilentlyContinue }
foreach ($img in $cityImages) { Copy-Item $city -Destination "public/$img" -ErrorAction SilentlyContinue }
foreach ($img in $natureImages) { Copy-Item $beach -Destination "public/$img" -ErrorAction SilentlyContinue }
foreach ($img in $carImages) { Copy-Item $car -Destination "public/$img" -ErrorAction SilentlyContinue }
foreach ($img in $camryImages) { Copy-Item $camry -Destination "public/$img" -ErrorAction SilentlyContinue }

Write-Host "Images populated successfully."
