import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';

interface NearbyCity {
    name: string;
    slug: string;
    distance: string;
    description: string;
}

interface NearbyCitiesProps {
    currentCity: string;
}

export default function NearbyCities({ currentCity }: NearbyCitiesProps) {
    // Define all cities with their relationships
    const cityRelationships: Record<string, NearbyCity[]> = {
        'makkah': [
            { name: 'Jeddah', slug: 'jeddah', distance: '80km', description: 'Coastal city with international airport' },
            { name: 'Taif', slug: 'taif', distance: '90km', description: 'Mountain retreat with cool climate' },
            { name: 'Madinah', slug: 'madinah', distance: '450km', description: 'Holy city with Prophet\'s Mosque' }
        ],
        'madinah': [
            { name: 'Makkah', slug: 'makkah', distance: '450km', description: 'Holy city with Grand Mosque' },
            { name: 'Jeddah', slug: 'jeddah', distance: '420km', description: 'Gateway city with airport' },
            { name: 'Khayber Fort', slug: 'khayber-fort', distance: '95km', description: 'Historical fort and heritage site' }
        ],
        'jeddah': [
            { name: 'Makkah', slug: 'makkah', distance: '80km', description: 'Holy city, popular destination' },
            { name: 'Taif', slug: 'taif', distance: '170km', description: 'Mountain city with gardens' },
            { name: 'Madinah', slug: 'madinah', distance: '420km', description: 'Holy city of the Prophet' }
        ],
        'taif': [
            { name: 'Makkah', slug: 'makkah', distance: '90km', description: 'Holy city nearby' },
            { name: 'Jeddah', slug: 'jeddah', distance: '170km', description: 'Coastal city with airport' },
            { name: 'Madinah', slug: 'madinah', distance: '500km', description: 'Holy city of Madinah' }
        ],
        'alula': [
            { name: 'Madinah', slug: 'madinah', distance: '380km', description: 'Holy city to the south' },
            { name: 'Khayber Fort', slug: 'khayber-fort', distance: '290km', description: 'Historical site nearby' },
            { name: 'Jeddah', slug: 'jeddah', distance: '800km', description: 'Major coastal city' }
        ],
        'khayber-fort': [
            { name: 'Madinah', slug: 'madinah', distance: '95km', description: 'Holy city nearby' },
            { name: 'AlUla', slug: 'alula', distance: '290km', description: 'UNESCO heritage site' },
            { name: 'Makkah', slug: 'makkah', distance: '530km', description: 'Holy city of Makkah' }
        ],
        'riyadh': [
            { name: 'Makkah', slug: 'makkah', distance: '870km', description: 'Holy city pilgrimage transfer' },
            { name: 'Madinah', slug: 'madinah', distance: '840km', description: 'Prophet\'s Mosque transfer' },
            { name: 'Dammam', slug: 'dammam', distance: '400km', description: 'Coastal city transfer' }
        ],
        'dammam': [
            { name: 'Riyadh', slug: 'riyadh', distance: '400km', description: 'Capital city transfer' },
            { name: 'Bahrain', slug: 'dammam-to-bahrain', distance: '60km', description: 'Cross-border transfer' },
            { name: 'Jubail', slug: 'jubail', distance: '100km', description: 'Industrial city transfer' }
        ],
        'al-ula': [
            { name: 'Madinah', slug: 'madinah', distance: '380km', description: 'Nearest holy city' },
            { name: 'Tabuk', slug: 'tabuk', distance: '280km', description: 'Northern gateway' },
            { name: 'Red Sea', slug: 'red-sea-project', distance: '200km', description: 'Coastal luxury project' }
        ],
        'yanbu': [
            { name: 'Madinah', slug: 'madinah', distance: '230km', description: 'Holy city transfer' },
            { name: 'Jeddah', slug: 'jeddah', distance: '330km', description: 'Major port city' },
            { name: 'Umluj', slug: 'red-sea-project', distance: '150km', description: 'Saudi Maldives' }
        ],
        'al-ahsa': [
            { name: 'Dammam', slug: 'dammam', distance: '150km', description: 'Eastern Province Hub' },
            { name: 'Riyadh', slug: 'riyadh', distance: '300km', description: 'Capital city transfer' },
            { name: 'Qatar Border', slug: 'al-ahsa', distance: '150km', description: 'Salwa Border Crossing' }
        ],
        'hail': [
            { name: 'Qassim', slug: 'buraidah', distance: '280km', description: 'Nearby agricultural hub' },
            { name: 'AlUla', slug: 'al-ula', distance: '400km', description: 'Heritage tour route' },
            { name: 'Riyadh', slug: 'riyadh', distance: '600km', description: 'Direct highway transfer' }
        ],
        'hafr-al-batin': [
            { name: 'Kuwait Border', slug: 'hafr-al-batin', distance: '90km', description: 'Al Raqi Crossing' },
            { name: 'Riyadh', slug: 'riyadh', distance: '480km', description: 'Capital city transfer' },
            { name: 'Dammam', slug: 'dammam', distance: '450km', description: 'Eastern Province Hub' }
        ],
        'tabuk': [
            { name: 'NEOM', slug: 'neom-community', distance: '150km', description: 'The Line & Oxagon' },
            { name: 'AlUla', slug: 'al-ula', distance: '280km', description: 'Historical tour' },
            { name: 'Sharma', slug: 'sharma', distance: '160km', description: 'Coastal resort area' }
        ],
        'jazan': [
            { name: 'Abha', slug: 'abha', distance: '200km', description: 'Mountain city resort' },
            { name: 'Sabya', slug: 'sabya', distance: '40km', description: 'Historic town' },
            { name: 'Farasan', slug: 'farasan-islands', distance: '40km (Ferry)', description: 'Marine sanctuary' }
        ],
        'abha': [
            { name: 'Jazan', slug: 'jazan', distance: '200km', description: 'Coastal city' },
            { name: 'Khamis Mushait', slug: 'abha', distance: '30km', description: 'Commercial hub (Same Taxi)' },
            { name: 'Soudah', slug: 'soudah-tour', distance: '25km', description: 'Highest peak tour' }
        ],
        'buraidah': [
            { name: 'Riyadh', slug: 'riyadh', distance: '350km', description: 'Capital city transfer' },
            { name: 'Unayzah', slug: 'buraidah', distance: '30km', description: 'Twin city transfer' },
            { name: 'Madinah', slug: 'madinah', distance: '480km', description: 'Holy city transfer' }
        ],
        'arar': [
            { name: 'Sakaka', slug: 'al-jouf', distance: '150km', description: 'Nearby northern city' },
            { name: 'Iraq Border', slug: 'arar', distance: '50km', description: 'Jadeed Arar Crossing' },
            { name: 'Turaif', slug: 'turaif-taxi', distance: '240km', description: 'Phosphate mining hub' }
        ],
        'najran': [
            { name: 'Abha', slug: 'abha', distance: '250km', description: 'Asir region connection' },
            { name: 'Sharurah', slug: 'sharurah-taxi', distance: '300km', description: 'Desert quarter city' },
            { name: 'Yemen Border', slug: 'najran', distance: '350km', description: 'Wuday\'ah Crossing' }
        ],
        'al-jouf': [
            { name: 'Arar', slug: 'arar', distance: '150km', description: 'Northern borders capital' },
            { name: 'Tabuk', slug: 'tabuk', distance: '450km', description: 'Westward connection' },
            { name: 'Hail', slug: 'hail', distance: '300km', description: 'Central connection' }
        ],
        'jubail': [
            { name: 'Dammam', slug: 'dammam', distance: '85km', description: 'Capital city of Eastern Province' },
            { name: 'Khobar', slug: 'dammam', distance: '100km', description: 'Coastal city transfer' },
            { name: 'Ras Tanura', slug: 'ras-tanura-taxi', distance: '60km', description: 'Oil refinery city' }
        ],
        'al-baha': [
            { name: 'Abha', slug: 'abha', distance: '300km', description: 'Asir highlands connection' },
            { name: 'Taif', slug: 'taif', distance: '220km', description: 'Mountain city resort' },
            { name: 'Baljurashi', slug: 'al-baha', distance: '25km', description: 'Historic market town' }
        ],
        'khobar': [
            { name: 'Bahrain', slug: 'khobar', distance: '25km', description: 'King Fahd Causeway crossing' },
            { name: 'Dammam', slug: 'dammam', distance: '20km', description: 'Twin city transfer' },
            { name: 'Jubail', slug: 'jubail', distance: '100km', description: 'Industrial city connection' }
        ],
        'qurayyat': [
            { name: 'Al Haditha (Jordan)', slug: 'qurayyat', distance: '30km', description: 'Jordan border crossing' },
            { name: 'Turaif', slug: 'turaif-taxi', distance: '150km', description: 'Northern mining city' },
            { name: 'Tabuk', slug: 'tabuk', distance: '350km', description: 'Regional hub connection' }
        ],
        'kaec': [
            { name: 'Jeddah', slug: 'jeddah', distance: '100km', description: 'Nearest major airport (JED)' },
            { name: 'Rabigh', slug: 'kaec', distance: '15km', description: 'Industrial city center' },
            { name: 'Madinah', slug: 'madinah', distance: '300km', description: 'Holy city via Haramain Train' }
        ],
        'turaif': [
            { name: 'Arar', slug: 'arar', distance: '240km', description: 'Northern borders capital' },
            { name: 'Qurayyat', slug: 'qurayyat', distance: '150km', description: 'Jordan border access' },
            { name: 'Tabuk', slug: 'tabuk', distance: '400km', description: 'Northwest hub' }
        ],
        'bisha': [
            { name: 'Abha', slug: 'abha', distance: '250km', description: 'Asir mountain capital' },
            { name: 'Taif', slug: 'taif', distance: '350km', description: 'Scenic mountain route' },
            { name: 'Al Baha', slug: 'al-baha', distance: '200km', description: 'Resort city connection' }
        ],
        'wadi-ad-dawasir': [
            { name: 'Riyadh', slug: 'riyadh', distance: '600km', description: 'Capital city (long haul)' },
            { name: 'Abha', slug: 'abha', distance: '350km', description: 'Southern highlands' },
            { name: 'Najran', slug: 'najran', distance: '300km', description: 'Southern border city' }
        ],
        'rafha': [
            { name: 'Arar', slug: 'arar', distance: '280km', description: 'Provincial capital' },
            { name: 'Hafr Al Batin', slug: 'hafr-al-batin', distance: '280km', description: 'Eastern connection' },
            { name: 'Hail', slug: 'hail', distance: '300km', description: 'Regional center' }
        ],
        'sharurah': [
            { name: 'Najran', slug: 'najran', distance: '350km', description: 'Nearest major city' },
            { name: 'Wadi Ad Dawasir', slug: 'wadi-ad-dawasir', distance: '500km', description: 'Central route' },
            { name: 'Abha', slug: 'abha', distance: '600km', description: 'Asir connection' }
        ],
        'majmaah': [
            { name: 'Riyadh', slug: 'riyadh', distance: '180km', description: 'Capital city (Airport)' },
            { name: 'Buraidah', slug: 'buraidah', distance: '150km', description: 'Qassim capital' },
            { name: 'Zulfi', slug: 'zulfi', distance: '60km', description: 'Nearby desert city' }
        ],
        'neom': [
            { name: 'Tabuk', slug: 'tabuk', distance: '200km', description: 'Regional capital' },
            { name: 'Duba', slug: 'duba', distance: '100km', description: 'Port city connection' },
            { name: 'Umluj', slug: 'umluj', distance: '300km', description: 'Red Sea coast' }
        ],
        'umluj': [
            { name: 'Yanbu', slug: 'yanbu', distance: '150km', description: 'Major industrial city' },
            { name: 'Neom', slug: 'neom', distance: '300km', description: 'Future city north' },
            { name: 'Al Ula', slug: 'al-ula', distance: '300km', description: 'Heritage detour' }
        ],
        'khafji': [
            { name: 'Dammam', slug: 'dammam', distance: '300km', description: 'Eastern capital' },
            { name: 'Jubail', slug: 'jubail', distance: '180km', description: 'Industrial city' },
            { name: 'Hafr Al Batin', slug: 'hafr-al-batin', distance: '280km', description: 'Inland route' }
        ],
        'duba': [
            { name: 'Tabuk', slug: 'tabuk', distance: '180km', description: 'Regional Airport' },
            { name: 'Neom', slug: 'neom', distance: '100km', description: 'Future city project' },
            { name: 'Al Ula', slug: 'al-ula', distance: '350km', description: 'Tourist destination' }
        ],
        'kharj': [
            { name: 'Riyadh', slug: 'riyadh', distance: '80km', description: 'Capital city' },
            { name: 'Dammam', slug: 'dammam', distance: '450km', description: 'Eastern province' },
            { name: 'Wadi Ad Dawasir', slug: 'wadi-ad-dawasir', distance: '550km', description: 'Empty Quarter route' }
        ],
        'dawadmi': [
            { name: 'Riyadh', slug: 'riyadh', distance: '330km', description: 'Capital city' },
            { name: 'Taif', slug: 'taif', distance: '400km', description: 'Summer capital' },
            { name: 'Buraidah', slug: 'buraidah', distance: '280km', description: 'Qassim region' }
        ],
        'haql': [
            { name: 'Tabuk', slug: 'tabuk', distance: '230km', description: 'Regional Airport' },
            { name: 'Neom', slug: 'neom', distance: '150km', description: 'South connection' },
            { name: 'Duba', slug: 'duba', distance: '250km', description: 'Red Sea port' }
        ],
        'ras-tanura': [
            { name: 'Dammam', slug: 'dammam', distance: '60km', description: 'Major airport hub' },
            { name: 'Jubail', slug: 'jubail', distance: '60km', description: 'Industrial city' },
            { name: 'Khobar', slug: 'khobar', distance: '80km', description: 'Coastal city' }
        ],
        'unaizah': [
            { name: 'Buraidah', slug: 'buraidah', distance: '30km', description: 'Administrative capital' },
            { name: 'Riyadh', slug: 'riyadh', distance: '350km', description: 'National capital' },
            { name: 'Hail', slug: 'hail', distance: '280km', description: 'Northern route' }
        ],
        'zulfi': [
            { name: 'Buraidah', slug: 'buraidah', distance: '100km', description: 'Nearest airport' },
            { name: 'Majmaah', slug: 'majmaah', distance: '80km', description: 'Sudair region' },
            { name: 'Riyadh', slug: 'riyadh', distance: '260km', description: 'Capital city' }
        ],
        'al-wajh': [
            { name: 'Umluj', slug: 'umluj', distance: '170km', description: 'Saudi Maldives' },
            { name: 'Duba', slug: 'duba', distance: '150km', description: 'North port' },
            { name: 'Al Ula', slug: 'al-ula', distance: '250km', description: 'Ancient city' }
        ],
        'rabigh': [
            { name: 'KAEC', slug: 'kaec', distance: '40km', description: 'Economic City' },
            { name: 'Jeddah', slug: 'jeddah', distance: '150km', description: 'Commercial hub' },
            { name: 'Yanbu', slug: 'yanbu', distance: '180km', description: 'Industrial city' }
        ],
        'salwa': [
            { name: 'Al Ahsa', slug: 'al-ahsa', distance: '150km', description: 'Nearest city' },
            { name: 'Khobar', slug: 'khobar', distance: '280km', description: 'Coastal city' },
            { name: 'Dammam', slug: 'dammam', distance: '300km', description: 'Major airport' }
        ],
        'batha': [
            { name: 'Riyadh', slug: 'riyadh', distance: '500km', description: 'Capital city' },
            { name: 'Al Ahsa', slug: 'al-ahsa', distance: '280km', description: 'Oasis region' },
            { name: 'Salwa', slug: 'salwa', distance: '180km', description: 'Qatar border' }
        ],
        'khamis-mushait': [
            { name: 'Abha', slug: 'abha', distance: '30km', description: 'Tourism hub' },
            { name: 'Jazan', slug: 'jazan', distance: '200km', description: 'Port city' },
            { name: 'Najran', slug: 'najran', distance: '280km', description: 'Border city' }
        ],
        'al-haditha': [
            { name: 'Qurayyat', slug: 'qurayyat', distance: '30km', description: 'City center' },
            { name: 'Tabuk', slug: 'tabuk', distance: '300km', description: 'Regional hub' },
            { name: 'Sakaka', slug: 'al-jouf', distance: '350km', description: 'Administrative city' }
        ],
        'halat-mmar': [
            { name: 'Tabuk', slug: 'tabuk', distance: '100km', description: 'Nearest airport' },
            { name: 'Duba', slug: 'duba', distance: '200km', description: 'Red Sea port' },
            { name: 'Al Ula', slug: 'al-ula', distance: '350km', description: 'Heritage city' }
        ],
        'al-wadeeah': [
            { name: 'Sharurah', slug: 'sharurah', distance: '50km', description: 'Nearest city' },
            { name: 'Najran', slug: 'najran', distance: '350km', description: 'Regional capital' },
            { name: 'Abha', slug: 'abha', distance: '600km', description: 'Tourism hub' }
        ],
        'qatif': [
            { name: 'Dammam', slug: 'dammam', distance: '25km', description: 'Regional capital' },
            { name: 'Jubail', slug: 'jubail', distance: '70km', description: 'Industrial city' },
            { name: 'Khobar', slug: 'khobar', distance: '40km', description: 'Coastal city' }
        ],
        'abqaiq': [
            { name: 'Dammam', slug: 'dammam', distance: '70km', description: 'Regional hub' },
            { name: 'Al Ahsa', slug: 'al-ahsa', distance: '80km', description: 'Largest oasis' },
        ],
        'al-rass': [
            { name: 'Buraidah', slug: 'buraidah', distance: '80km', description: 'Regional capital' },
            { name: 'Unaizah', slug: 'unaizah', distance: '60km', description: 'Cultural hub' },
            { name: 'Medina', slug: 'madinah', distance: '400km', description: 'Holy City' }
        ],
        'al-hofuf': [
            { name: 'Dammam', slug: 'dammam', distance: '150km', description: 'Regional Capital' },
            { name: 'Riyadh', slug: 'riyadh', distance: '300km', description: 'Train Connection' },
            { name: 'Abqaiq', slug: 'abqaiq', distance: '80km', description: 'Aramco Hub' }
        ],
        'dhahran': [
            { name: 'Khobar', slug: 'khobar', distance: '10km', description: 'Coastal City' },
            { name: 'Dammam', slug: 'dammam', distance: '15km', description: 'Regional Capital' },
            { name: 'Bahrain', slug: 'khobar', distance: '40km', description: 'King Fahd Causeway' }
        ],
        'shaqra': [
            { name: 'Riyadh', slug: 'riyadh', distance: '190km', description: 'Capital City' },
            { name: 'Unaizah', slug: 'unaizah', distance: '150km', description: 'Qassim Region' },
            { name: 'Dawadmi', slug: 'dawadmi', distance: '80km', description: 'Nearby Airport' }
        ],
        'al-namas': [
            { name: 'Abha', slug: 'abha', distance: '150km', description: 'Provincial Capital' },
            { name: 'Al Baha', slug: 'al-baha', distance: '180km', description: 'Nearby Region' },
            { name: 'Tanomah', slug: 'al-namas', distance: '30km', description: 'Scenic Town' }
        ],
        'al-qunfudhah': [
            { name: 'Al Layth', slug: 'al-qunfudhah', distance: '150km', description: 'Coastal Town' },
            { name: 'Jeddah', slug: 'jeddah', distance: '350km', description: 'Major Hub' },
            { name: 'Mahayil', slug: 'abha', distance: '120km', description: 'Asir Foothills' }
        ]
    };

    const nearbyCities = cityRelationships[currentCity] || [];

    if (nearbyCities.length === 0) return null;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Nearby Cities</h2>
                    <p className="text-xl text-gray-600">We also serve these nearby destinations</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {nearbyCities.map((city) => (
                        <Link
                            key={city.slug}
                            href={`/locations/${city.slug}`}
                            className="group bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100 hover:border-brand-teal/20"
                        >
                            <div className="w-12 h-12 bg-brand-teal-pale/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-teal transition-colors duration-300">
                                <MapPin className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-2xl font-bold font-display text-gray-900 mb-2">{city.name}</h3>
                            <p className="text-brand-teal font-semibold mb-3">{city.distance} away</p>
                            <p className="text-gray-600 mb-4 font-light">{city.description}</p>
                            <div className="flex items-center text-brand-teal-dark font-bold group-hover:translate-x-2 transition-transform">
                                View Taxi Service <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
