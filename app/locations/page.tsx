import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Taxi Service Locations in Saudi Arabia | Makkah, Madinah, Jeddah, Taif - Haram Taxi',
    description: 'Professional taxi service in Makkah, Madinah, Jeddah, and Taif. Book reliable transportation 24/7.',
    keywords: ['taxi service Saudi Arabia', 'taxi Makkah', 'taxi Madinah', 'taxi Jeddah', 'taxi Taif', 'Umrah taxi service', 'Makkah to Madinah taxi', 'Jeddah to Makkah taxi', 'Saudi private taxi'],
    openGraph: {
        title: 'Taxi Service Locations in Saudi Arabia',
        description: 'Professional taxi service in Makkah, Madinah, Jeddah, and Taif. Book now!',
        url: 'https://www.haramtaxii.com/locations',
        type: 'website',
    },
};

export default function LocationsPage() {
    const locations = [
        {
            name: 'Jeddah',
            slug: 'jeddah',
            description: 'Airport transfers, city tours, and rides to Makkah from Jeddah',
            image: '/jeddah-corniche-view.webp',
            services: ['Airport Transfer', 'City Tours', 'Jeddah to Makkah'],
            popular: true,
        },
        {
            name: 'Makkah',
            slug: 'makkah',
            description: 'Haram transfers, Ziyarat tours, and intercity travel from Makkah',
            image: '/makkah-royal-clock-tower.webp',
            services: ['Haram Transfer', 'Ziyarat Tours', 'Hotel Pickup'],
            popular: true,
        },
        {
            name: 'Madinah',
            slug: 'madinah',
            description: 'Airport transfers, Ziyarat tours, and rides to Makkah from Madinah',
            image: '/masjid-nabawi-madinah.webp',
            services: ['Airport Transfer', 'Ziyarat Tours', 'Madinah to Makkah'],
            popular: true,
        },
        {
            name: 'Taif',
            slug: 'taif',
            description: 'Mountain tours, city transfers, and rides to Makkah from Taif',
            image: '/taif-mountains-view.webp',
            services: ['Mountain Tours', 'City Transfer', 'Taif to Makkah'],
            popular: true,
        },
        {
            name: 'Riyadh',
            slug: 'riyadh',
            description: 'Capital city transfers for business and pilgrimage',
            image: '/riyadh-skyline.webp',
            services: ['Airport Transfer', 'Business Chauffeur', 'Riyadh to Makkah'],
            popular: true,
        },
        {
            name: 'Dammam',
            slug: 'dammam',
            description: 'Eastern Province hub with Bahrain Causeway transfers',
            image: '/dammam-corniche.webp',
            services: ['Airport Transfer', 'Bahrain Taxi', 'Dammam to Riyadh'],
            popular: false,
        },
        {
            name: 'Al Ula',
            slug: 'al-ula',
            description: 'Historic tours via private chauffeur',
            image: '/alula-elephant-rock.webp',
            services: ['Hegra Tour', 'Airport Transfer', 'Luxury Transport'],
            popular: false,
        },
        {
            name: 'Tabuk & NEOM',
            slug: 'tabuk',
            description: 'Gateway to NEOM, The Line, and Prince Sultan Airport',
            image: '/neom-the-line-concept.webp',
            services: ['NEOM Taxi', 'Airport Transfer', 'The Line Visit'],
            popular: false,
        },
        {
            name: 'Jazan',
            slug: 'jazan',
            description: 'Pearl of the South - Ferry & Airport Transfers',
            image: '/jazan-heritage-village.webp',
            services: ['Ferry Transfer', 'Airport Taxi', 'Jazan Economic City'],
            popular: false,
        },
        {
            name: 'Abha & Khamis',
            slug: 'abha',
            description: 'Asir high-altitude rides & Soudah tours',
            image: '/abha-green-mountain.webp',
            services: ['Airport Taxi', 'Soudah Tour', 'Rijal Almaa'],
            popular: false,
        },
        {
            name: 'Al Qassim',
            slug: 'buraidah',
            description: 'Buraidah & Unayzah central hub transport',
            image: '/qassim-dates-market.webp',
            services: ['Airport Transfer', 'Intercity Taxi', 'Date Festival'],
            popular: false,
        },
        {
            name: 'Yanbu',
            slug: 'yanbu',
            description: 'Industrial city & Red Sea transfers',
            image: '/yanbu-industrial-lake.webp',
            services: ['Airport Taxi', 'Royal Commission', 'Yanbu Port'],
            popular: false,
        },
        {
            name: 'Al Ahsa (Hofuf)',
            slug: 'al-ahsa',
            description: 'U.A.E & Qatar Border Transfers',
            image: '/al-qara-mountain.webp',
            services: ['Border Taxi', 'Airport Transfer', 'Oasis Tour'],
            popular: false,
        },
        {
            name: 'Hail',
            slug: 'hail',
            description: 'Jubbah Rock Art & North Transport',
            image: '/hail-jubbah-rock-art.webp',
            services: ['UNESCO Tour', 'Airport Taxi', 'Railway Transfer'],
            popular: false,
        },
        {
            name: 'Hafr Al Batin',
            slug: 'hafr-al-batin',
            description: 'Kuwait Border Crossing & KKMC',
            image: '/hafr-al-batin-desert.webp',
            services: ['Kuwait Border', 'Airport Taxi', 'KKMC Transfer'],
            popular: false,
        },
        {
            name: 'Arar',
            slug: 'arar',
            description: 'Iraq Border (Jadeed Arar) & Northern Borders',
            image: '/arar-northern-borders.webp',
            services: ['Iraq Border', 'Airport Taxi', 'Business Chauffeur'],
            popular: false,
        },
        {
            name: 'Najran',
            slug: 'najran',
            description: 'Yemen Border (Wuday\'ah) & Heritage Tours',
            image: '/najran-emara-palace.webp',
            services: ['Yemen Border', 'Airport Taxi', 'Al-Ukhdood Tour'],
            popular: false,
        },
        {
            name: 'Al Jouf (Sakaka)',
            slug: 'al-jouf',
            description: 'Olive Capital & Marid Castle',
            image: '/al-jouf-olive-farm.webp',
            services: ['Olive Farm Tour', 'Airport Taxi', 'Heritage Sites'],
            popular: false,
        },
        {
            name: 'Jubail',
            slug: 'jubail',
            description: 'Industrial City & Royal Commission',
            image: '/jubail-corniche.webp',
            services: ['Industrial Transport', 'Airport Taxi', 'Staff Transfer'],
            popular: false,
        },
        {
            name: 'Al Baha',
            slug: 'al-baha',
            description: 'Thee Ain Village & Mountains',
            image: '/al-baha-thee-ain.webp',
            services: ['Heritage Tour', 'Airport Taxi', 'Raghdan Park'],
            popular: false,
        },
        {
            name: 'Al Khobar',
            slug: 'khobar',
            description: 'King Fahd Causeway (Bahrain) & Corniche',
            image: '/khobar-water-tower.webp',
            services: ['Bahrain Transfer', 'Airport Taxi', 'Corniche Tour'],
            popular: false,
        },
        {
            name: 'Al Qurayyat',
            slug: 'qurayyat',
            description: 'Jordan Border (Al Haditha) & Airport',
            image: '/qurayyat-border.webp',
            services: ['Jordan Border', 'Airport Taxi', 'Business Ride'],
            popular: false,
        },
        {
            name: 'KAEC (Rabigh)',
            slug: 'kaec',
            description: 'Economic City & Haramain Train',
            image: '/kaec-canal.webp',
            services: ['Train Station', 'Petro Rabigh', 'JED Transfer'],
            popular: false,
        },
        {
            name: 'Turaif',
            slug: 'turaif',
            description: 'Phosphate Mining & Wa\'ad Al Shamal',
            image: '/turaif-mining.webp',
            services: ['Airport Taxi', 'Industrial Transfer', 'Arar Taxi'],
            popular: false,
        },
        {
            name: 'Bisha',
            slug: 'bisha',
            description: 'Date Farms & King Fahd Dam',
            image: '/bisha-palms.webp',
            services: ['Airport Taxi', 'Dam Visit', 'Asir Transfer'],
            popular: false,
        },
        {
            name: 'Wadi Ad Dawasir',
            slug: 'wadi-ad-dawasir',
            description: 'Gateway to Empty Quarter & Riyadh Route',
            image: '/wadi-desert.webp',
            services: ['Airport Taxi', 'Desert Tour', 'Long Haul'],
            popular: false,
        },
        {
            name: 'Rafha',
            slug: 'rafha',
            description: 'Lina Village Transfer & Airport',
            image: '/rafha-desert.webp',
            services: ['Airport Taxi', 'Lina Tour', 'Hafr Taxi'],
            popular: false,
        },
        {
            name: 'Sharurah',
            slug: 'sharurah',
            description: 'Yemen Border & Empty Quarter',
            image: '/sharurah-desert.webp',
            services: ['Wadeeah Border', 'Airport Taxi', 'Desert Ride'],
            popular: false,
        },
        {
            name: 'Al Majma\'ah',
            slug: 'majmaah',
            description: 'Sudair Industrial & SAR Train',
            image: '/majmaah-university.webp',
            services: ['Train Station', 'Sudair Taxi', 'University Transfer'],
            popular: false,
        },
        {
            name: 'NEOM',
            slug: 'neom',
            description: 'The Line, Trojena & Future City',
            image: '/neom-future.webp',
            services: ['Airport Taxi', 'The Line Tour', 'Trojena Ride'],
            popular: true,
        },
        {
            name: 'Umluj',
            slug: 'umluj',
            description: 'Maldives of Saudi Arabia & Red Sea',
            image: '/umluj-beach.webp',
            services: ['Beach Transfer', 'Red Sea Airport', 'Yanbu Taxi'],
            popular: true,
        },
        {
            name: 'Al Khafji',
            slug: 'khafji',
            description: 'Kuwait Border & Joint Operations',
            image: '/khafji-corniche.webp',
            services: ['Border Taxi', 'KJO Transfer', 'Dammam Ride'],
            popular: false,
        },
        {
            name: 'Duba',
            slug: 'duba',
            description: 'Red Sea Port & Neom Gateway',
            image: '/duba-port.webp',
            services: ['Port Transfer', 'Tabuk Taxi', 'Neom Ride'],
            popular: false,
        },
        {
            name: 'Al Kharj',
            slug: 'kharj',
            description: 'Industrial City & Historic Farms',
            image: '/kharj-palace.webp',
            services: ['Industrial Taxi', 'Riyadh Transfer', 'University Ride'],
            popular: false,
        },
        {
            name: 'Dawadmi',
            slug: 'dawadmi',
            description: 'Central Region Hub',
            image: '/dawadmi-desert.webp',
            services: ['Airport Taxi', 'Taif Transfer', 'Riyadh Ride'],
            popular: false,
        },
        {
            name: 'Haql',
            slug: 'haql',
            description: 'Northwest Border & Shipwreck',
            image: '/haql-shipwreck.webp',
            services: ['Shipwreck Tour', 'Jordan Border', 'Tabuk Taxi'],
            popular: false,
        },
        {
            name: 'Ras Tanura',
            slug: 'ras-tanura',
            description: 'Oil Hub & Najmah Compound',
            image: '/ras-tanura-refinery.webp',
            services: ['Aramco Taxi', 'Dammam Airport', 'Jubail Ride'],
            popular: false,
        },
        {
            name: 'Unaizah',
            slug: 'unaizah',
            description: 'Paris of Najd & Date Festival',
            image: '/unaizah-dates.webp',
            services: ['Airport Taxi', 'Ghadha Park', 'Buraidah Transfer'],
            popular: false,
        },
        {
            name: 'Al Zulfi',
            slug: 'zulfi',
            description: 'Golden Dunes & Heritage',
            image: '/zulfi-dunes.webp',
            services: ['Desert Safari', 'Riyadh Transfer', 'Qassim Ride'],
            popular: false,
        },
        {
            name: 'Al Wajh',
            slug: 'al-wajh',
            description: 'Historic Port & Airport',
            image: '/al-wajh-old-town.webp',
            services: ['Airport Taxi', 'Old Town Tour', 'Umluj Transfer'],
            popular: false,
        },
        {
            name: 'Rabigh',
            slug: 'rabigh',
            description: 'Industrial City & Petrochemicals',
            image: '/rabigh-industrial.webp',
            services: ['Petro Rabigh', 'KAEC Transfer', 'Jeddah Ride'],
            popular: false,
        },
        {
            name: 'Salwa',
            slug: 'salwa',
            description: 'Qatar Border Crossing',
            image: '/salwa-border.webp',
            services: ['Border Taxi', 'Visa Run', 'Dammam Transfer'],
            popular: false,
        },
        {
            name: 'Batha',
            slug: 'batha',
            description: 'UAE Border & Highway',
            image: '/batha-desert.webp',
            services: ['UAE Transfer', 'Riyadh Ride', 'Visa Run'],
            popular: false,
        },
        {
            name: 'Khamis Mushait',
            slug: 'khamis-mushait',
            description: 'Military City & Commerce',
            image: '/khamis-mushait-city.webp',
            services: ['Military Base', 'Abha Airport', 'Jazan Transfer'],
            popular: false,
        },
        {
            name: 'Al Haditha',
            slug: 'al-haditha',
            description: 'Jordan Border (Al Omari)',
            image: '/al-haditha-border.webp',
            services: ['Border Taxi', 'Qurayyat Transfer', 'Tabuk Ride'],
            popular: false,
        },
        {
            name: 'Halat Ammar',
            slug: 'halat-mmar',
            description: 'Pilgrim Border Crossing',
            image: '/halat-ammar-border.webp',
            services: ['Pilgrim Taxi', 'Border Transfer', 'Tabuk Airport'],
            popular: false,
        },
        {
            name: 'Al Wadeeah',
            slug: 'al-wadeeah',
            description: 'Yemen Border Crossing',
            image: '/wadeeah-border.webp',
            services: ['Yemen Transfer', 'Sharurah Ride', 'Najran Taxi'],
            popular: false,
        },
        {
            name: 'Qatif',
            slug: 'qatif',
            description: 'Eastern Province Transport',
            image: '/qatif-corniche.webp',
            services: ['Airport Taxi', 'Jubail Transfer', 'Dammam Ride'],
            popular: false,
        },
        {
            name: 'Abqaiq (Buqayq)',
            slug: 'abqaiq',
            description: 'Energy Hub & Aramco',
            image: '/abqaiq-industry.webp',
            services: ['Aramco Taxi', 'Airport Transfer', 'Hofuf Ride'],
            popular: false,
        },
        {
            name: 'Al Rass',
            slug: 'al-rass',
            description: 'Qassim Region Gateway',
            image: '/al-rass-park.webp',
            services: ['Qassim Airport', 'Medina Transfer', 'Buraidah Taxi'],
            popular: false,
        },
        {
            name: 'Al Hofuf',
            slug: 'al-hofuf',
            description: 'Al Ahsa Oasis & Heritage',
            image: '/al-hofuf-oasis.webp',
            services: ['Airport Transfer', 'Oasis Tour', 'Dammam Ride'],
            popular: false,
        },
        {
            name: 'Dhahran',
            slug: 'dhahran',
            description: 'Energy Capital & Aramco HQ',
            image: '/dhahran-ithra.webp',
            services: ['Aramco Taxi', 'Airport Transfer', 'Bahrain Ride'],
            popular: false,
        },
        {
            name: 'Shaqra',
            slug: 'shaqra',
            description: 'Heritage & University Hub',
            image: '/ushaiger-village.webp',
            services: ['Ushaiger Tour', 'Riyadh Transfer', 'University Taxi'],
            popular: false,
        },
        {
            name: 'Al Namas',
            slug: 'al-namas',
            description: 'City of Fog & Mountains',
            image: '/al-namas-fog.webp',
            services: ['Mountain Tour', 'Abha Transfer', 'Tanomah Taxi'],
            popular: false,
        },
        {
            name: 'Al Qunfudhah',
            slug: 'al-qunfudhah',
            description: 'Red Sea Coastal Pearl',
            image: '/qunfudhah-corniche.webp',
            services: ['Jeddah Transfer', 'Corniche Ride', 'Al Layth Taxi'],
            popular: false,
        },
    ];

    const popularLocations = locations.filter(loc => loc.popular);
    const otherLocations = locations.filter(loc => !loc.popular);

    const serviceAreasSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Taxi Service",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Haram Taxi Service",
            "url": "https://www.haramtaxii.com"
        },
        "areaServed": locations.map(loc => ({
            "@type": "City",
            "name": loc.name,
            "containedInPlace": {
                "@type": "Country",
                "name": "Saudi Arabia"
            }
        }))
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreasSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Breadcrumb */}
                <div className="bg-gray-50 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-teal-500">Home</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">Locations</span>
                        </div>
                    </div>
                </div>

                {/* Hero */}
                <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold">Service Locations</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Taxi Service Locations in Saudi Arabia
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto opacity-90">
                            Professional Umrah taxi service across major cities in Saudi Arabia. We serve Makkah, Madinah, Jeddah, and Taif with 24/7 availability for pilgrims and visitors.
                        </p>
                    </div>
                </section>

                {/* Popular Locations */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
                            <p className="text-xl text-gray-600">Most requested taxi service locations</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {popularLocations.map((location) => (
                                <Link key={location.slug} href={`/locations/${location.slug}`} className="group">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                                        <div className="relative h-64">
                                            <Image
                                                src={location.image}
                                                alt={`Taxi service in ${location.name}`}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="text-2xl font-bold text-white mb-2">{location.name}</h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-gray-600 mb-4">{location.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {location.services.map((service, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-teal-50 text-teal-600 text-sm rounded-full">
                                                        {service}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center text-teal-500 font-semibold group-hover:gap-2 transition-all">
                                                Taxi in {location.name}
                                                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Other Locations */}
                {otherLocations.length > 0 && (
                    <section className="py-20 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">More Locations</h2>
                                <p className="text-xl text-gray-600">Additional cities we serve</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {otherLocations.map((location) => (
                                    <Link key={location.slug} href={`/locations/${location.slug}`} className="group">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                                            <div className="relative h-48">
                                                <Image
                                                    src={location.image}
                                                    alt={`Taxi service in ${location.name}`}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                <div className="absolute bottom-4 left-4">
                                                    <h3 className="text-xl font-bold text-white">{location.name}</h3>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <p className="text-gray-600 mb-4">{location.description}</p>
                                                <div className="flex items-center text-teal-500 font-semibold group-hover:gap-2 transition-all">
                                                    Taxi in {location.name}
                                                    <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="py-20 bg-teal-500 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold mb-6">Need a Taxi in Saudi Arabia?</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Book reliable taxi service across all major cities. Available 24/7 with professional drivers.
                        </p>
                        <Link href="/booking">
                            <Button size="lg" className="bg-white text-teal-500 hover:bg-gray-100 px-8 py-6 text-lg">
                                Book Your Ride Now
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
