export interface RoutePricing {
    vehicle: string;
    price: string;
    capacity: string;
    luggage: string;
}

export interface RouteData {
    slug: string;
    title: string;
    description: string;
    h1: string;
    distance: string;
    duration: string;
    content: string;
    image?: string;
    pricing: RoutePricing[];
    faqs: { question: string; answer: string }[];
}

export const routesData: RouteData[] = [
    {
        slug: "jeddah-airport-to-makkah",
        title: "Taxi Jeddah Airport to Makkah | Fixed Price 200 SAR",
        description: "Book reliable taxi from Jeddah Airport (KAIA) to Makkah Hotel. 24/7 service, meet & greet. Camry 250 SAR, GMC 450 SAR. No hidden fees.",
        h1: "Trusted Taxi from Jeddah Airport to Makkah",
        distance: "100 km",
        duration: "1 hour 15 minutes",
        content: "Start your Umrah journey with peace of mind. Our driver will wait for you at the Jeddah Airport arrivals hall with a name sign. We service all terminals including Terminal 1, North Terminal, and Hajj Terminal. Direct transfer to your hotel in Makkah (Clock Tower, Aziziyah, etc).",
        pricing: [
            { vehicle: "Toyota Camry", price: "250 SAR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "300 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "350 SR", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "450 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "500 SR", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "How much is a taxi from Jeddah Airport to Makkah?", answer: "Prices start from 250 SAR for a Camry and 450 SAR for a GMC Yukon." },
            { question: "Do you pick up from the New Terminal 1?", answer: "Yes, we provide pickups from all Jeddah Airport terminals." }
        ]
    },
    {
        slug: "jeddah-to-madinah",
        title: "Taxi Jeddah to Madinah | 2026 Rates",
        description: "Book a taxi from Jeddah City/Airport to Madinah. Direct transfer, comfortable vehicles. Fixed prices starting from 450 SAR.",
        h1: "Jeddah to Madinah Taxi Service",
        distance: "400 km",
        duration: "4 hours",
        content: "Travel from Jeddah to Madinah comfortably. Whether you are in a Jeddah hotel or arriving at the airport, we provide direct transfers to your Madinah hotel via the fast Hijrah Highway.",
        pricing: [
            { vehicle: "Toyota Camry", price: "450 SAR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "550 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "GMC Yukon", price: "750 SR", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "makkah-to-madinah",
        title: "Makkah to Madinah Taxi Service | VIP Transport",
        description: "Comfortable private taxi from Makkah Hotel to Madinah. Stop at Badr Ziyarat included. GMC, Staria, and Camry available. Book now for a spiritual journey.",
        h1: "Makkah to Madinah Taxi Transfer",
        distance: "450 km",
        duration: "4 hours 30 minutes",
        content: "Travel between the Holy Cities via the Hijrah Highway. Our service includes optional stops at Meeqat or Badr Ziyarat upon request. Enjoy a smooth ride in our modern, air-conditioned vehicles.",
        pricing: [
            { vehicle: "Toyota Camry", price: "600 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "700 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "750 SR", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "950 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "1300 SR", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "How long is the drive from Makkah to Madinah?", answer: "It typically takes around 4.5 hours by private taxi." },
            { question: "Can we stop at Meeqat?", answer: "Yes, our drivers are happy to stop at Meeqat for Ihram." }
        ]
    },
    {
        slug: "makkah-hotel-to-jeddah-airport",
        title: "Taxi Makkah Hotel to Jeddah Airport | 24/7 Drop-off",
        description: "Reliable transfer from your Makkah hotel to King Abdulaziz Airport (Jeddah). Arrive on time for your flight. Fixed rates starting 200 SAR.",
        h1: "Makkah Hotel to Jeddah Airport Taxi",
        distance: "100 km",
        duration: "1 hour 15 minutes",
        content: "End your Umrah trip with a hassle-free ride to the airport. We pick you up from your hotel lobby in Makkah and drop you off at your departure terminal in Jeddah.",
        pricing: [
            { vehicle: "Toyota Camry", price: "200 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "250 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "300 SR", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "400 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "450 SR", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "When should I leave Makkah for my flight?", answer: "We recommend leaving at least 4-5 hours before your international flight departure." }
        ]
    },
    {
        slug: "makkah-to-jeddah-airport",
        title: "Makkah to Jeddah Airport Taxi | Departure Transfer",
        description: "Book your return taxi from Makkah to Jeddah Airport. Reliable pickup from Clock Tower, Aziziyah, and all Makkah hotels.",
        h1: "Makkah to Jeddah Airport (KAIA) Taxi",
        distance: "100 km",
        duration: "1 hour 15 minutes",
        content: "Same as our Makkah Hotel to Airport service. We ensure you reach the appropriate terminal (North, South, or Hajj Terminal) comfortably and on time.",
        pricing: [
            { vehicle: "Toyota Camry", price: "200 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "250 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "GMC Yukon", price: "400 SR", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "madinah-hotel-to-jeddah-airport",
        title: "Madinah to Jeddah Airport Taxi | Direct Transfer",
        description: "Book a direct taxi from Madinah Hotel to Jeddah Airport. Fast and comfortable via Hijrah Highway. Prices start from 450 SAR.",
        h1: "Madinah Hotel to Jeddah Airport Transfer",
        distance: "415 km",
        duration: "4 hours",
        content: "Direct transfer from your hotel in Madinah to Jeddah Airport. Avoid the hassle of buses and travel in privacy.",
        pricing: [
            { vehicle: "Toyota Camry", price: "450 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "600 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "650 SR", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "850 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "1200 SR", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "Is it a direct ride?", answer: "Yes, this is a private non-stop transfer to Jeddah Airport." }
        ]
    },
    {
        slug: "madinah-hotel-to-madinah-airport",
        title: "Madinah Hotel to Airport Taxi | Prince Mohammad Airport",
        description: "Quick transfer from your Madinah hotel to Prince Mohammad Bin Abdulaziz Airport. 24/7 Service.",
        h1: "Madinah Hotel to Madinah Airport Taxi",
        distance: "20 km",
        duration: "25 minutes",
        content: "Fast and convenient drop-off to Madinah Airport. Ensure you arrive on time for your departure.",
        pricing: [
            { vehicle: "Toyota Camry", price: "150 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "200 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "GMC Yukon", price: "250 SR", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "dammam-to-makkah",
        title: "Dammam to Makkah Taxi | Long Distance Transfer",
        description: "Private taxi from Dammam/Khobar/Dhahran to Makkah. Comfortable long-distance travel.",
        h1: "Dammam to Makkah Taxi Transfer",
        distance: "1,250 km",
        duration: "12-13 hours",
        content: "A premium long-distance service for those who prefer road travel over flying. We provide spacious vehicles like GMC Yukon for this long journey.",
        pricing: [
            { vehicle: "Toyota Camry", price: "2500 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "3500 SR", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "riyadh-to-makkah",
        title: "Riyadh to Makkah Taxi | Intercity Transfer",
        description: "Travel from Riyadh to Makkah by private taxi. Door-to-door service for individuals and families.",
        h1: "Riyadh to Makkah Taxi Service",
        distance: "870 km",
        duration: "9-10 hours",
        content: "Comfortable intercity transfer from Riyadh to Makkah. Drivers experienced in long-distance travel ensure a safe journey.",
        pricing: [
            { vehicle: "Toyota Camry", price: "1800 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "2500 SR", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },

    {
        slug: "alula-to-madinah",
        title: "AlUla to Madinah Taxi Transfer",
        description: "Scenic drive from AlUla to Madinah. Visit the Prophet's Mosque after your tour of Hegra.",
        h1: "AlUla to Madinah Taxi Service",
        distance: "330 km",
        duration: "3.5 hours",
        content: "Private transfer from AlUla's resorts to Madinah. Enjoy the desert landscapes in comfort.",
        pricing: [
            { vehicle: "Toyota Camry", price: "600 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "900 SR", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },

    {
        slug: "hafr-to-kuwait-border",
        title: "Hafr Al Batin to Kuwait Border Taxi",
        description: "Taxi from Hafr Al Batin to Al Raqi (Kuwait border).",
        h1: "Hafr Al Batin to Kuwait Border Transfer",
        distance: "100 km",
        duration: "1 hour",
        content: "Short and convenient ride to the Kuwait border crossing.",
        pricing: [
            { vehicle: "Toyota Camry", price: "300 SR", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "al-ahsa-to-uae",
        title: "Al Ahsa to UAE Border (Batha) Taxi",
        description: "Taxi from Al Ahsa / Hofuf to Al Batha border (UAE).",
        h1: "Al Ahsa to UAE Border Transfer",
        distance: "300 km",
        duration: "3 hours",
        content: "Transfer service to the UAE border at Batha.",
        pricing: [
            { vehicle: "Toyota Camry", price: "600 SR", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "hail-to-riyadh",
        title: "Hail to Riyadh Taxi Service",
        description: "Travel from Hail to Riyadh by road.",
        h1: "Hail to Riyadh Taxi Transfer",
        distance: "640 km",
        duration: "6 hours",
        content: "Long-distance taxi from Hail to Riyadh.",
        pricing: [
            { vehicle: "Toyota Camry", price: "1200 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "1800 SR", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "jazan-to-abha",
        title: "Jazan to Abha Taxi Transfer",
        description: "Scenic drive from Jazan to Abha.",
        h1: "Jazan to Abha Taxi Service",
        distance: "200 km",
        duration: "2.5 hours",
        content: "Travel from the coast of Jazan to the mountains of Abha.",
        pricing: [
            { vehicle: "Toyota Camry", price: "500 SR", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "hafr-to-riyadh",
        title: "Hafr Al Batin to Riyadh Taxi",
        description: "Taxi from Hafr Al Batin to Riyadh.",
        h1: "Hafr Al Batin to Riyadh Transfer",
        distance: "500 km",
        duration: "5 hours",
        content: "Connect from the Northern region to the capital.",
        pricing: [
            { vehicle: "Toyota Camry", price: "1000 SR", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "al-ahsa-to-qatar",
        title: "Al Ahsa to Qatar Border (Salwa) Taxi",
        description: "Taxi from Al Ahsa to Salwa border (Qatar).",
        h1: "Al Ahsa to Qatar Border Transfer",
        distance: "150 km",
        duration: "1.5 hours",
        content: "Quick transfer to the Qatar border.",
        pricing: [
            { vehicle: "Toyota Camry", price: "400 SR", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "buraidah-to-unayzah",
        title: "Buraidah to Unayzah Taxi",
        description: "Local transfer between Qassim cities.",
        h1: "Buraidah to Unayzah Transfer",
        distance: "30 km",
        duration: "30 minutes",
        content: "Local taxi service in Al Qassim.",
        pricing: [
            { vehicle: "Toyota Camry", price: "100 SR", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },
    {
        slug: "yanbu-to-madinah",
        title: "Yanbu to Madinah Taxi Service",
        description: "Transfer from Yanbu industrial city or airport to Madinah.",
        h1: "Yanbu to Madinah Taxi Transfer",
        distance: "230 km",
        duration: "2.5 hours",
        content: "Travel from the Red Sea coast to the Holy City of Madinah.",
        pricing: [
            { vehicle: "Toyota Camry", price: "500 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "700 SR", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "abha-to-khamis",
        title: "Abha to Khamis Mushait Taxi",
        description: "Local taxi between Abha and Khamis Mushait.",
        h1: "Abha to Khamis Mushait Transfer",
        distance: "30 km",
        duration: "30 minutes",
        content: "Quick local transfer.",
        pricing: [
            { vehicle: "Toyota Camry", price: "100 SR", capacity: "4 Pax", luggage: "2 Bags" },
        ],
        faqs: []
    },

    {
        slug: "qassim-to-riyadh",
        title: "Qassim to Riyadh Taxi Transfer",
        description: "Travel from Buraidah/Qassim to Riyadh.",
        h1: "Qassim to Riyadh Taxi Service",
        distance: "350 km",
        duration: "3.5 hours",
        content: "Intercity transfer from Qassim region to Riyadh.",
        pricing: [
            { vehicle: "Toyota Camry", price: "700 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "1000 SR", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "train-station-transfers-makkah",
        title: "Makkah Hotel to Haramain Train Station Taxi",
        description: "Taxi service from Makkah hotels to Haramain High Speed Railway Station. Fixed rates.",
        h1: "Makkah Hotel to Train Station Transfer",
        distance: "10-15 km",
        duration: "20 minutes",
        content: "Catch your train on time. reliable transfer from Clock Tower or Aziziyah to the Makkah Train Station.",
        pricing: [
            { vehicle: "Toyota Camry", price: "120 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "150 SR", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "train-station-transfers-madinah",
        title: "Madinah Hotel to Haramain Train Station Taxi",
        description: "Taxi service from Madinah hotels to Haramain High Speed Railway Station. Fixed rates.",
        h1: "Madinah Hotel to Train Station Transfer",
        distance: "15-20 km",
        duration: "25 minutes",
        content: "Seamless transfer to Madinah Train Station. We ensure you reach the platform relaxed and on time.",
        pricing: [
            { vehicle: "Toyota Camry", price: "120 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "150 SR", capacity: "7 Pax", luggage: "5 Bags" },
        ],
        faqs: []
    },
    {
        slug: "makkah-ziyarat-tour",
        title: "Makkah Ziyarat Taxi Tour | Historical Sites",
        description: "Visit Cave Hira, Cave Thawr, Mina, and Arafat with our guided Makkah Ziyarat taxi service.",
        h1: "Makkah Historical Places (Ziyarat) Tour",
        distance: "City Tour",
        duration: "3-4 Hours",
        content: "Explore the sacred history of Makkah. Our knowledgeable drivers will take you to Jabal Al-Nour, Jabal Thawr, Masjid Al-Jinn, and the Hajj sites (Mina, Muzdalifah, Arafat).",
        pricing: [
            { vehicle: "Toyota Camry", price: "250 SR", capacity: "4 Pax", luggage: "N/A" },
            { vehicle: "Hyundai Staria", price: "300 SR", capacity: "7 Pax", luggage: "N/A" },
            { vehicle: "GMC Yukon", price: "400 SR", capacity: "7 Pax", luggage: "N/A" },
        ],
        faqs: []
    },
    {
        slug: "madinah-ziyarat-tour",
        title: "Madinah Ziyarat Taxi Tour | Holy Sites",
        description: "Visit Masjid Quba, Mount Uhud, and Qiblatain with our Madinah Ziyarat taxi service.",
        h1: "Madinah Historical Places (Ziyarat) Tour",
        distance: "City Tour",
        duration: "3-4 Hours",
        content: "Complete your pilgrimage with a tour of Madinah's holy sites. Visit the first mosque of Islam (Quba), the site of the Battle of Uhud, and more.",
        pricing: [
            { vehicle: "Toyota Camry", price: "200 SR", capacity: "4 Pax", luggage: "N/A" },
            { vehicle: "Hyundai Staria", price: "250 SR", capacity: "7 Pax", luggage: "N/A" },
            { vehicle: "GMC Yukon", price: "300 SR", capacity: "7 Pax", luggage: "N/A" },
        ],
        faqs: []
    },
    {
        slug: "umrah-travel-agency",
        title: "Umrah Travel Agency Transport | Reliable Pilgrim Transfers",
        description: "Looking for an Umrah travel agency for transport? We provide comprehensive ground transportation for pilgrims. Groups, families, and individuals.",
        h1: "Umrah Travel Agency Transport Services",
        distance: "All Cities",
        duration: "Flexible",
        content: "If you are searching for a reliable partner for your Umrah travel agency needs, look no further. We specialize in providing seamless ground transportation for pilgrims. Whether you are a travel agent looking for a trusted local transporter or a pilgrim organizing your own group, we offer the professional service expected from a top-tier Umrah travel agency.",
        pricing: [
            { vehicle: "Toyota Camry", price: "Contact Us", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "Contact Us", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "hajj-travel-agency",
        title: "Hajj Travel Agency Transport | Hajj 2026/1447",
        description: "Expert Hajj travel agency transport services. We manage logistics for Hajj pilgrims between Mina, Arafat, and Muzdalifah.",
        h1: "Hajj Travel Agency Transport Solutions",
        distance: "Mashaer",
        duration: "Hajj Days",
        content: "Hajj requires precise logistics and timing. As a specialized Hajj travel agency transport provider, we understand the critical nature of these days. We offer dedicated transport services for Hajj groups, ensuring you move between Mina, Arafat, and Muzdalifah comfortably and on time.",
        pricing: [
            { vehicle: "GMC Yukon", price: "Seasonal", capacity: "7 Pax", luggage: "Limited" },
            { vehicle: "Luxury Bus", price: "Seasonal", capacity: "49 Pax", luggage: "Large" },
        ],
        faqs: []
    },
    {
        slug: "umrah-transport",
        title: "Umrah Transport Services | Makkah & Madinah Taxi",
        description: "Best Umrah transport service in Saudi Arabia. Reliable taxi transfers between Jeddah, Makkah, and Madinah for Umrah pilgrims.",
        h1: "Premium Umrah Transport Services",
        distance: "KSA Wide",
        duration: "24/7 Service",
        content: "Reliable Umrah transport is the key to a stress-free pilgrimage. We provide dedicated transport for Umrah, connecting you from Jeddah Airport to Makkah, and onwards to Madinah. Our drivers are trained to serve pilgrims with respect and patience.",
        pricing: [
            { vehicle: "Toyota Camry", price: "200 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "GMC Yukon", price: "400 SR", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "luxury-umrah-transport",
        title: "Luxury Umrah Transport | VIP GMC Yukon Taxi",
        description: "Experience luxury transport for Umrah. VIP GMC Yukon XL and luxury vans for discerning pilgrims. Privacy and comfort guaranteed.",
        h1: "Luxury Umrah Transport & VIP Taxi",
        distance: "VIP Service",
        duration: "Custom",
        content: "For those seeking the highest level of comfort, our luxury transport services offer late-model GMC Yukon XL and luxury vans. Enjoy privacy glass, premium leather seating, and experienced chauffeurs who understand the needs of VIP guests.",
        pricing: [
            { vehicle: "GMC Yukon XL", price: "450 SR", capacity: "7 Pax", luggage: "6 Bags" },
        ],
        faqs: []
    },
    {
        slug: "madinah-to-makkah",
        title: "Madinah to Makkah Taxi | Private Transfer 2026",
        description: "Book a private taxi from Madinah to Makkah. Comfortable ride via Hijrah Highway. Fixed prices starting from 600 SAR. Stop at Meeqat included.",
        h1: "Madinah to Makkah Taxi Service",
        distance: "450 km",
        duration: "4 hours 30 minutes",
        content: "Travel from the Prophet's City to the Holy City of Makkah. Our experienced drivers take you via the fast Hijrah Highway with an optional stop at Meeqat Dhul Hulayfah for those who wish to enter Ihram. Comfortable, air-conditioned vehicles ensure a smooth journey between the two holiest cities.",
        pricing: [
            { vehicle: "Toyota Camry", price: "600 SR", capacity: "4 Pax", luggage: "2 Bags" },
            { vehicle: "Hyundai Staria", price: "700 SR", capacity: "7 Pax", luggage: "5 Bags" },
            { vehicle: "Toyota Hiace", price: "750 SR", capacity: "11 Pax", luggage: "10 Bags" },
            { vehicle: "GMC Yukon", price: "950 SR", capacity: "7 Pax", luggage: "6 Bags" },
            { vehicle: "Toyota Coaster", price: "1300 SR", capacity: "17 Pax", luggage: "15 Bags" },
        ],
        faqs: [
            { question: "Can we stop at Meeqat on the way?", answer: "Yes, our drivers will stop at Meeqat Dhul Hulayfah for you to enter Ihram before proceeding to Makkah." },
            { question: "How long does it take from Madinah to Makkah?", answer: "The drive takes approximately 4.5 hours via the Hijrah Highway." }
        ]
    },
    {
        slug: "hotel-to-haram-transport",
        title: "Hotel to Haram Transport | Daily Shuttle Makkah",
        description: "Convenient hotel to Haram transport in Makkah. Private transfers from Aziziyah or distant hotels to the Clock Tower.",
        h1: "Hotel to Haram Transport Services",
        distance: "Local",
        duration: "15-20 min",
        content: "Staying in Aziziyah or Exotels? Our hotel to Haram transport service ensures you never miss a prayer. Booking a private daily transfer allows you to move between your hotel and the Haram with ease, avoiding the crowded public buses.",
        pricing: [
            { vehicle: "Toyota Camry", price: "50 SR", capacity: "4 Pax", luggage: "None" },
            { vehicle: "GMC Yukon", price: "150 SR", capacity: "7 Pax", luggage: "None" },
        ],
        faqs: []
    }
];
