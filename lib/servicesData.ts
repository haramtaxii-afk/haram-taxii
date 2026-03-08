import { LucideIcon, Plane, MapPin, Crown, Building2, User } from 'lucide-react';

export interface ServiceData {
    slug: string;
    title: string;
    description: string;
    icon?: any;
    content: string;
    image?: string;
    features: string[];
    pricing: { title: string; price: string }[];
    faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
    {
        slug: "jeddah-airport-transfer",
        title: "Jeddah Airport Taxi Transfer | KAIA to Makkah / Madinah",
        description: "Professional airport transfer service from King Abdulaziz International Airport (JED). Meet and greet included.",
        content: "Arriving in Jeddah for Umrah? Our specialized airport transfer service ensures a smooth transition from the terminal to your hotel in Makkah or Madinah. We monitor your flight status to handle delays and our drivers meet you at the arrivals hall with a name board/sign.",
        features: ["Meet & Greet Service", "Flight Tracking", "60 Minutes Free Waiting", "Help with Luggage"],
        pricing: [
            { title: "Makkah (Sedan)", price: "200 SAR" },
            { title: "Makkah (GMC)", price: "400 SAR" },
            { title: "Madinah (Sedan)", price: "450 SAR" },
        ],
        faqs: [
            { question: "Where will the driver meet me?", answer: "The driver will wait at the arrivals hall with a sign bearing your name." },
            { question: "What if my flight is delayed?", answer: "We track all flights and adjust pickup times accordingly." }
        ]
    },
    {
        slug: "madinah-airport-transfer",
        title: "Madinah Airport Taxi Service | Prince Mohammad Airport",
        description: "Reliable taxi transfers from Prince Mohammad Bin Abdulaziz International Airport to your Madinah hotel.",
        content: "Start your visit to the Prophet's City with ease. Our Madinah airport taxi service provides quick and comfortable transfers to all hotels near Masjid Nabawi. Avoid the hassle of haggling and enjoy a fixed-price ride.",
        features: ["24/7 Availability", "Fixed Prices", "English Speaking Drivers", "VIP Options"],
        pricing: [
            { title: "Madinah Hotel (Sedan)", price: "80 SAR" },
            { title: "Madinah Hotel (GMC)", price: "150 SAR" },
        ],
        faqs: []
    },
    {
        slug: "makkah-ziyarat",
        title: "Makkah Ziyarat Tour | Historical Sites Taxi",
        description: "Visit the holy sites of Makkah including Cave Hira, Cave Thawr, and Arafat with our guided taxi tour.",
        content: "Experience the profound history of Makkah with our Ziyarat tours. Our knowledgeable drivers will take you to Jabal Al-Nour (Cave of Hira), Jabal Thawr, Mina, Muzdalifah, Arafat, and Jannat al-Mu'alla. Take your time to pray and reflect at each location.",
        features: ["3-4 Hour Tour", "Knowledgeable Driver", "Flexible Route", "Air Conditioned"],
        pricing: [
            { title: "Sedan (4 Pax)", price: "200 SAR" },
            { title: "GMC (7 Pax)", price: "350 SAR" },
        ],
        faqs: [
            { question: "Can we climb the mountain?", answer: "Yes, but please allocate extra time. Standard tours are for visiting the base." }
        ]
    },
    {
        slug: "madinah-ziyarat",
        title: "Madinah Ziyarat Tour | Holy Places Visit",
        description: "Comprehensive Ziyarat tour in Madinah visiting Masjid Quba, Mount Uhud, and Qiblatain.",
        content: "Visit the sacred landmarks of Madinah. Our tour includes Masjid Quba (where 2 rakats equal an Umrah), Mount Uhud & Archers' Hill, Masjid Qiblatain, and the Seven Mosques. A spiritual journey for every pilgrim.",
        features: ["3-4 Hour Tour", "Guided Visit", "Door-to-door", "Family Friendly"],
        pricing: [
            { title: "Sedan (4 Pax)", price: "150 SAR" },
            { title: "GMC (7 Pax)", price: "250 SAR" },
        ],
        faqs: []
    },
    {
        slug: "riyadh-airport-transfer",
        title: "Riyadh Airport (RUH) Taxi Transfer",
        description: "Premium airport transfer service from King Khalid International Airport to Riyadh city and beyond.",
        content: "Professional chauffeur service for business and leisure travelers arriving in Riyadh. We provide meet & greet services at all terminals of KKIA.",
        features: ["Flight Monitoring", "Luxury Vehicles", "English Speaking Drivers", "Corporate Accounts"],
        pricing: [
            { title: "City Center (Sedan)", price: "150 SAR" },
            { title: "City Center (GMC)", price: "250 SAR" },
        ],
        faqs: []
    },
    {
        slug: "dammam-airport-transfer",
        title: "Dammam Airport (KFIA) Taxi Service",
        description: "Reliable taxi from King Fahd International Airport to Dammam, Khobar, and Dhahran.",
        content: "Fast and comfortable transfers from Dammam Airport. Whether you are heading to Khobar Corniche, Dhahran Aramco Camp, or Dammam city, we get you there safely.",
        features: ["Eastern Province Coverage", "24/7 Operations", "Fixed Rates", " Spacious Cars"],
        pricing: [
            { title: "Dammam (Sedan)", price: "120 SAR" },
            { title: "Khobar (Sedan)", price: "150 SAR" },
        ],
        faqs: []
    },
    {
        slug: "neom-bay-transfer",
        title: "NEOM Bay Airport Transfer & Taxi",
        description: "Private transfer service to/from NEOM Bay Airport to Trojena, The Line, and Sindalah.",
        content: "Experience the future with our NEOM transfer services. We provide authorized transport from NEOM Bay Airport to all major project sites and camps.",
        features: ["Permitted Vehicles", "Knowledgeable Drivers", "Premium Fleet", "Punctual Service"],
        pricing: [
            { title: "Transfer (Sedan)", price: "Contact Us" },
            { title: "Transfer (GMC)", price: "Contact Us" },
        ],
        faqs: []
    },
    {
        slug: "hegra-tour",
        title: "Hegra (AlUla) Historical Tour Taxi",
        description: "Guided taxi tour to the ancient Nabataean site of Hegra in AlUla.",
        content: "Visit Saudi Arabia's first UNESCO World Heritage site. Our drivers will take you to the Winter Park or directly to Hegra entrance for your booked tour.",
        features: ["Local Experts", "Scenic Route", "Flexible Timing", "Comfortable SUVs"],
        pricing: [
            { title: "Half Day Tour", price: "400 SAR" },
            { title: "Full Day Tour", price: "700 SAR" },
        ],
        faqs: []
    },
    {
        slug: "luxury-chauffeur",
        title: "Luxury Chauffeur Service | VIP Mercedes & BMW",
        description: "Premium chauffeur service featuring Mercedes S-Class, BMW 7 Series, and Cadillac Escalade for absolute elite comfort.",
        content: "Our elite chauffeur service provides the finest vehicles in the Kingdom. Choose from the legendary Mercedes S-Class, the majestic Cadillac Escalade, or the sleek BMW 7 Series. All services include professional, multilingual chauffeurs dedicated to your privacy and punctuality.",
        features: ["Mercedes S-Class & BMW 7 Series", "Cadillac Escalade & GMC Yukon", "VIP Protocol Service", "Professional Chauffeurs"],
        pricing: [{ title: "Daily Rate", price: "Starting 2000 SAR" }],
        faqs: []
    },
    {
        slug: "business-travel",
        title: "Corporate & Business VIP Transport",
        description: "Executive transport solutions for business meetings and events featuring our premium VIP fleet.",
        content: "Impress your clients and ensure your executives travel in style. Our business fleet includes the Genesis G90, Mercedes Vito (VIP Edition), and Ford Taurus (Luxury Edition). Reliable, discreet, and always on time for your high-stakes meetings.",
        features: ["Genesis G90 & Mercedes Vito", "Priority Corporate Booking", "Monthly Invoicing", "Professional Attire Drivers"],
        pricing: [{ title: "Daily Rate", price: "Contact Us" }],
        faqs: []
    },
    {
        slug: "hourly-chauffeur",
        title: "Hourly Chauffeur Service",
        description: "Rent a car with driver by the hour in Makkah, Madinah, Jeddah, and Riyadh.",
        content: "Need a car for the whole day? Our hourly chauffeur service gives you the freedom to go where you want, when you want.",
        features: ["Unlimited Stops", "Fuel Included", "Professional Driver", "Clean Vehicle"],
        pricing: [
            { title: "Per Hour (Min 4h)", price: "50 SAR/hr" },
        ],
        faqs: []
    },
    {
        slug: "tabuk-city-tour",
        title: "Tabuk City Tour",
        description: "Explore the historic Tabuk Castle and surrounding sights.",
        content: "Visit Tabuk Castle, the old Hijaz Railway station, and the vibrant souks of Tabuk.",
        features: ["Historic Sites", "Local Markets", "Family Friendly", "3 Hours"],
        pricing: [
            { title: "Tour (Sedan)", price: "250 SAR" },
        ],
        faqs: []
    },
    {
        slug: "alula-airport-transfer",
        title: "AlUla International Airport Transfer",
        description: "Transfer from ULH Airport to AlUla resorts and hotels.",
        content: "Seamless pickup from AlUla Airport to Habitas, Banyan Tree, or Shaden Resort.",
        features: ["Resort Drop-off", "Luxury SUVs", "Desert Capable", "Luggage Assist"],
        pricing: [
            { title: "Transfer", price: "200 SAR" },
        ],
        faqs: []
    },
    {
        slug: "neom-taxi",
        title: "Taxi Service in NEOM",
        description: "Transport throughout the NEOM region.",
        content: "Navigating the vast NEOM region requires reliable transport. We serve Magnag, Sharma, and Gayle.",
        features: ["Region Knowledge", "4x4 Available", "Project Site Access", "Long Distance"],
        pricing: [
            { title: "Hourly Rate", price: "Contact Us" },
        ],
        faqs: []
    },
    // Adding placeholder entries for the massive list of remaining services to ensure pages load
    {
        slug: "dammam-to-bahrain",
        title: "Dammam to Bahrain Taxi",
        description: "Causeway transfer to Bahrain.",
        content: "Cross the King Fahd Causeway comfortably.",
        features: ["Causeway Permit", "Insurance Included"],
        pricing: [{ title: "One Way", price: "400 SAR" }],
        faqs: []
    },
    {
        slug: "khobar-to-bahrain-taxi",
        title: "Khobar to Bahrain Taxi",
        description: "Direct transfer from Khobar to Bahrain.",
        content: "Quick trip across the bridge.",
        features: ["Door to Door", "Document Assist"],
        pricing: [{ title: "One Way", price: "350 SAR" }],
        faqs: []
    },
    {
        slug: "bahrain-taxi",
        title: "Taxi to Bahrain",
        description: "Travel to Bahrain from KSA.",
        content: "Reliable cross-border taxi service.",
        features: ["Cross Border", "Round Trip"],
        pricing: [{ title: "One Way", price: "400 SAR" }],
        faqs: []
    },
    // Generic generator for location-based services
    {
        slug: "jubail-taxi",
        title: "Taxi Service in Jubail",
        description: "Local and intercity taxi in Jubail.",
        content: "Leading taxi provider in Jubail Industrial City.",
        features: ["Industrial Area Access", "24/7"],
        pricing: [{ title: "City Ride", price: "30 SAR" }],
        faqs: []
    },
    {
        slug: "yanbu-taxi",
        title: "Taxi Service in Yanbu",
        description: "Taxi in Yanbu Al Sinaiyah and Al Bahr.",
        content: "Reliable transport in the Royal Commission city.",
        features: ["RC Area", "Airport Transfer"],
        pricing: [{ title: "City Ride", price: "25 SAR" }],
        faqs: []
    },
    {
        slug: "taif-taxi",
        title: "Taxi Service in Taif",
        description: "City and mountain transport in Taif.",
        content: "Visit Al Hada, Shafa, and Taif city center.",
        features: ["Mountain Safe", "Cable Car"],
        pricing: [{ title: "City Tour", price: "200 SAR" }],
        faqs: []
    },
    {
        slug: "abha-taxi",
        title: "Taxi Service in Abha",
        description: "Transport in the cloud city of Abha.",
        content: "Tour the Green Mountain and High City.",
        features: ["Cool Climate", "Scenic Drives"],
        pricing: [{ title: "Daily Rate", price: "400 SAR" }],
        faqs: []
    },
    {
        slug: "jazan-airport-taxi",
        title: "Jazan Airport Taxi",
        description: "Pickup from King Abdullah Bin Abdulaziz Airport (Jazan).",
        content: "Transfer to Jazan city, Sabya, or Abu Arish.",
        features: ["Flight Monitoring", "Punctual"],
        pricing: [{ title: "City Transfer", price: "50 SAR" }],
        faqs: []
    },
    {
        slug: "najran-airport-taxi",
        title: "Najran Airport Taxi",
        description: "Transfer from Najran Domestic Airport.",
        content: "Serving Najran city and border areas.",
        features: ["Local Drivers", "Safe"],
        pricing: [{ title: "City Transfer", price: "60 SAR" }],
        faqs: []
    },
    {
        slug: "al-ahsa-airport-taxi",
        title: "Al Ahsa Airport Taxi",
        description: "Al Ahsa International Airport transfers.",
        content: "Serving Hofuf and Mubarraz.",
        features: ["Oasis Tour", "Dates Market"],
        pricing: [{ title: "City Transfer", price: "70 SAR" }],
        faqs: []
    },
    {
        slug: "tabuk-airport-taxi",
        title: "Tabuk Airport Taxi Transfer",
        description: "Prince Sultan Bin Abdulaziz Airport taxi.",
        content: "Gate to NEOM and the North.",
        features: ["Wide Coverage", "English Support"],
        pricing: [{ title: "City Transfer", price: "50 SAR" }],
        faqs: []
    },
    {
        slug: "hail-airport-taxi",
        title: "Hail Airport Taxi",
        description: "Hail International Airport transfer.",
        content: "Gateway to the desert and rock art.",
        features: ["Rally Drivers", "Knowledgeable"],
        pricing: [{ title: "City Transfer", price: "50 SAR" }],
        faqs: []
    },
    {
        slug: "qassim-airport-taxi",
        title: "Prince Naif Airport (Qassim) Taxi",
        description: "Taxi from ELQ Airport to Buraidah and Unaizah.",
        content: "Central region airport transfers.",
        features: ["Serving all Qassim", "Fast"],
        pricing: [{ title: "Buraidah", price: "80 SAR" }],
        faqs: []
    },
    {
        slug: "arar-airport-taxi",
        title: "Arar Airport Taxi",
        description: "Arar Airport pickup and drop-off.",
        content: "Northern Borders transport.",
        features: ["Safe", "Reliable"],
        pricing: [{ title: "City Transfer", price: "40 SAR" }],
        faqs: []
    },
    {
        slug: "al-jouf-airport-taxi",
        title: "Al Jouf Airport Taxi",
        description: "Al Jouf Airport (Sakaka) taxi service.",
        content: "Serving Sakaka and Dumat al-Jandal.",
        features: ["Olive Country", "Heritage"],
        pricing: [{ title: "Sakaka", price: "50 SAR" }],
        faqs: []
    },
    {
        slug: "bisha-airport-taxi",
        title: "Bisha Airport Taxi",
        description: "Bisha Airport transfer service.",
        content: "Serving Bisha and surrounding villages.",
        features: ["Local", "Friendly"],
        pricing: [{ title: "City Transfer", price: "50 SAR" }],
        faqs: []
    },
    {
        slug: "rafha-airport-taxi",
        title: "Rafha Airport Taxi",
        description: "Rafha Airport pickup service.",
        content: "Serving Rafha city.",
        features: ["On Time", "Clean Cars"],
        pricing: [{ title: "City Transfer", price: "40 SAR" }],
        faqs: []
    },
    {
        slug: "sharurah-airport-taxi",
        title: "Sharurah Airport Taxi",
        description: "Sharurah Airport transfer.",
        content: "Serving the Empty Quarter gateway.",
        features: ["Desert Safe", "AC"],
        pricing: [{ title: "City Transfer", price: "40 SAR" }],
        faqs: []
    },
    {
        slug: "turaif-airport-taxi",
        title: "Turaif Airport Taxi",
        description: "Turaif Airport transfer service.",
        content: "Serving the mining city of Turaif.",
        features: ["Industrial", "Business"],
        pricing: [{ title: "City Transfer", price: "40 SAR" }],
        faqs: []
    },
    {
        slug: "wadi-ad-dawasir-airport-taxi",
        title: "Wadi Ad Dawasir Airport Taxi",
        description: "Airport transfer in Wadi Ad Dawasir.",
        content: "Connecting the valley.",
        features: ["Local", "Fast"],
        pricing: [{ title: "City Transfer", price: "50 SAR" }],
        faqs: []
    },
    {
        slug: "al-wajh-airport-taxi",
        title: "Al Wajh Airport Taxi",
        description: "Al Wajh Airport pickup.",
        content: "Red Sea coastal city transfer.",
        features: ["Coastal", "Historic"],
        pricing: [{ title: "City Transfer", price: "40 SAR" }],
        faqs: []
    },
    {
        slug: "yanbu-airport-taxi",
        title: "Yanbu Airport Taxi",
        description: "Prince Abdul Mohsin Bin Abdulaziz Airport taxi.",
        content: "Serving Yanbu Industrial and Yanbu Al Bahr.",
        features: ["Diving Trips", "Business"],
        pricing: [{ title: "City Transfer", price: "60 SAR" }],
        faqs: []
    },
    {
        slug: "qurayyat-airport-taxi",
        title: "Gurayat Airport Taxi",
        description: "Gurayat Airport transfer.",
        content: "Serving the northern border city.",
        features: ["Border Access", "24/7"],
        pricing: [{ title: "City Transfer", price: "50 SAR" }],
        faqs: []
    },
    {
        slug: "al-ahsa-taxi",
        title: "Taxi in Al Ahsa",
        description: "Explore the largest oasis in the world.",
        content: "Visit Al Qara Hill and the souks.",
        features: ["UNESCO Site", "Nature"],
        pricing: [{ title: "Tour", price: "200 SAR" }],
        faqs: []
    },
    {
        slug: "qassim-taxi",
        title: "Taxi in Qassim",
        description: "Transport across Al Qassim region.",
        content: "Serving Buraidah, Unaizah, and Ar Rass.",
        features: ["Dates Festival", "Business"],
        pricing: [{ title: "Intercity", price: "100 SAR" }],
        faqs: []
    },
    {
        slug: "luxury-chauffeur-elite",
        title: "Elite VIP Chauffeur Service",
        description: "Absolute luxury with Mercedes S-Class, BMW 7 Series, and Cadillac Escalade. Experience the pinnacle of Saudi VIP transport.",
        content: "For royalty-standard travel, our Elite VIP service offers the 2024 Mercedes S-Class, BMW 7 Series, and the iconic Cadillac Escalade. Perfect for state visits, high-level corporate events, and premium Ziyarat tours.",
        features: ["S-Class & BMW 7 Series", "Escalade & GMC Denali", "VVIP Protocol", "Multilingual Chauffeurs"],
        pricing: [{ title: "Full Day (8h)", price: "2500 SAR" }],
        faqs: []
    },
    {
        slug: "family-taxi",
        title: "Family Taxi Service",
        description: "Spacious vehicles for families.",
        content: "Safe and comfortable transport for ladies and children.",
        features: ["Family Privacy", "Child Seats"],
        pricing: [{ title: "Booking", price: "Standard + 20%" }],
        faqs: []
    },
    // ===== Airport Taxis =====
    {
        slug: "tabuk-airport-transfer",
        title: "Tabuk Airport Transfer Service",
        description: "Professional transfer from Prince Sultan Airport to Tabuk city, NEOM, and surrounding areas.",
        content: "Reliable airport transfer from Tabuk Airport to your hotel or destination. We serve Tabuk city center, NEOM project sites, and surrounding areas.",
        features: ["Flight Monitoring", "Meet & Greet", "Wide Coverage", "24/7"],
        pricing: [{ title: "City Transfer", price: "50 SAR" }, { title: "NEOM Transfer", price: "400 SAR" }],
        faqs: []
    },
    {
        slug: "jubail-airport-taxi",
        title: "Jubail Airport Taxi",
        description: "Taxi from Jubail Airport to industrial city and residential area.",
        content: "Quick transfer from Jubail Airport to the Royal Commission area, Industrial City, or residential neighborhoods.",
        features: ["Industrial Access", "Fast", "Clean Cars", "English Support"],
        pricing: [{ title: "City Transfer", price: "60 SAR" }],
        faqs: []
    },
    {
        slug: "dammam-airport-taxi",
        title: "Dammam Airport (KFIA) Taxi",
        description: "Taxi from King Fahd International Airport to Dammam, Khobar, and Dhahran.",
        content: "Fast airport pickup from KFIA. We cover Dammam, Khobar, Dhahran, and Jubail.",
        features: ["Eastern Province", "Flight Tracking", "Fixed Rate", "Large Fleet"],
        pricing: [{ title: "Dammam City", price: "120 SAR" }, { title: "Khobar", price: "150 SAR" }],
        faqs: []
    },
    {
        slug: "dawadmi-airport-taxi",
        title: "Dawadmi Airport Taxi",
        description: "Airport transfer in Ad Dawadmi.",
        content: "Serving Dawadmi Airport and surrounding areas in the Riyadh region.",
        features: ["Local Drivers", "Reliable", "AC", "Luggage Help"],
        pricing: [{ title: "City Transfer", price: "50 SAR" }],
        faqs: []
    },
    {
        slug: "abha-airport-taxi",
        title: "Abha Airport Taxi",
        description: "Taxi from Abha Regional Airport to city center and tourist areas.",
        content: "Transfer from Abha Airport to Green Mountain, High City, Soudah, and all Abha hotels.",
        features: ["Mountain Safe", "Tourist Areas", "Cool Climate", "Scenic"],
        pricing: [{ title: "City Transfer", price: "60 SAR" }, { title: "Soudah", price: "150 SAR" }],
        faqs: []
    },
    {
        slug: "qaisumah-airport-taxi",
        title: "Qaisumah Airport Taxi",
        description: "Airport transfer from Qaisumah Airport.",
        content: "Serving Hafr Al Batin and surrounding northern areas from Qaisumah Airport.",
        features: ["Northern Region", "Reliable", "Safe", "AC"],
        pricing: [{ title: "Hafr Al Batin", price: "80 SAR" }],
        faqs: []
    },
    {
        slug: "jeddah-airport-taxi",
        title: "Jeddah Airport (KAIA) Taxi",
        description: "Taxi from King Abdulaziz International Airport to Jeddah city, Makkah, and Madinah.",
        content: "Professional taxi service from Jeddah Airport. We serve all terminals including T1, North Terminal, and Hajj Terminal. Direct transfers to Jeddah hotels, Makkah, and Madinah.",
        features: ["All Terminals", "Meet & Greet", "24/7", "Flight Tracking"],
        pricing: [{ title: "Jeddah City", price: "80 SAR" }, { title: "Makkah", price: "250 SAR" }],
        faqs: []
    },
    {
        slug: "khobar-airport-taxi",
        title: "Khobar Airport Taxi",
        description: "Airport transfer from KFIA to Khobar city.",
        content: "Direct transfer from King Fahd International Airport to Al Khobar hotels and corniche area.",
        features: ["Direct Route", "Fixed Price", "Comfortable", "Meet & Greet"],
        pricing: [{ title: "Khobar Transfer", price: "150 SAR" }],
        faqs: []
    },
    {
        slug: "al-baha-airport-taxi",
        title: "Al Baha Airport Taxi",
        description: "Transfer from Al Baha Domestic Airport.",
        content: "Airport pickup in Al Baha. We serve Al Baha city, Baljurashi, and Thee Ain village.",
        features: ["Mountain Driving", "Tourist Spots", "Safe", "AC"],
        pricing: [{ title: "City Transfer", price: "50 SAR" }],
        faqs: []
    },
    {
        slug: "neom-airport-taxi",
        title: "NEOM Airport Taxi",
        description: "Transfer from NEOM Bay Airport to project sites.",
        content: "Authorized transport from NEOM Bay Airport to The Line, Trojena, Sindalah port, and all NEOM zones.",
        features: ["NEOM Permitted", "Premium Fleet", "Project Access", "Reliable"],
        pricing: [{ title: "Transfer", price: "Contact Us" }],
        faqs: []
    },
    {
        slug: "red-sea-airport-taxi",
        title: "Red Sea Airport Taxi",
        description: "Transfer from Red Sea International Airport to resorts.",
        content: "Premium airport transfer to Red Sea Global resort destinations. Luxury vehicles for a first-class experience.",
        features: ["Luxury Fleet", "Resort Drop-off", "VIP Service", "Luggage Assist"],
        pricing: [{ title: "Resort Transfer", price: "Contact Us" }],
        faqs: []
    },
    {
        slug: "kaec-jeddah-airport-taxi",
        title: "KAEC to Jeddah Airport Taxi",
        description: "Transfer from King Abdullah Economic City to Jeddah Airport.",
        content: "Direct transfer from KAEC to King Abdulaziz International Airport. Reliable service for residents and business travelers.",
        features: ["Direct Route", "On Time", "Business Class", "Luggage Help"],
        pricing: [{ title: "One Way", price: "250 SAR" }],
        faqs: []
    },
    // ===== City Taxis =====
    {
        slug: "tabuk-taxi",
        title: "Taxi Service in Tabuk",
        description: "Local and intercity taxi service in Tabuk region.",
        content: "Reliable taxi service covering Tabuk city, military areas, and connections to NEOM and Jordan border.",
        features: ["City Coverage", "Intercity", "Military City", "Border Runs"],
        pricing: [{ title: "City Ride", price: "25 SAR" }, { title: "Intercity", price: "From 200 SAR" }],
        faqs: []
    },
    {
        slug: "buraidah-taxi",
        title: "Taxi Service in Buraidah",
        description: "Taxi in Buraidah, capital of Al Qassim region.",
        content: "Local transport in Buraidah. We cover the dates market, Al Rajhi Mosque, King Abdullah Park, and all neighborhoods.",
        features: ["Local Knowledge", "Date Festival", "Business", "Reliable"],
        pricing: [{ title: "City Ride", price: "25 SAR" }],
        faqs: []
    },
    {
        slug: "hofuf-taxi",
        title: "Taxi Service in Hofuf",
        description: "Taxi in Hofuf and Al Mubarraz, Al Ahsa region.",
        content: "Transport within Al Ahsa's main city. Visit Al Qara caves, the traditional souks, and the famous oasis.",
        features: ["Oasis Tours", "UNESCO Site", "Local Expert", "AC"],
        pricing: [{ title: "City Ride", price: "25 SAR" }, { title: "Al Qara Tour", price: "150 SAR" }],
        faqs: []
    },
    {
        slug: "khobar-taxi",
        title: "Taxi Service in Khobar",
        description: "Premium taxi service in Al Khobar.",
        content: "Covering Khobar Corniche, Half Moon Bay, Dhahran, and King Fahd Causeway transfers to Bahrain.",
        features: ["Corniche Area", "Bahrain Bridge", "Business District", "Beach Trips"],
        pricing: [{ title: "City Ride", price: "25 SAR" }, { title: "Bahrain", price: "350 SAR" }],
        faqs: []
    },
    {
        slug: "riyadh-taxi",
        title: "Taxi Service in Riyadh",
        description: "Professional taxi service across the capital city of Riyadh.",
        content: "Reliable transport in Riyadh. Airport transfers, business district, Diriyah, Boulevard, and all major destinations.",
        features: ["Capital Coverage", "Business District", "Airport Runs", "24/7"],
        pricing: [{ title: "City Ride", price: "30 SAR" }, { title: "Airport", price: "150 SAR" }],
        faqs: []
    },
    {
        slug: "dammam-taxi",
        title: "Taxi Service in Dammam",
        description: "Taxi in Dammam, Eastern Province capital.",
        content: "Covering Dammam Corniche, King Fahd Park, Heritage Village, and all city areas. Quick connections to Khobar and Dhahran.",
        features: ["Eastern Province", "Corniche Area", "Heritage Sites", "Tri-City"],
        pricing: [{ title: "City Ride", price: "25 SAR" }],
        faqs: []
    },
    {
        slug: "najran-taxi",
        title: "Taxi Service in Najran",
        description: "Transport in Najran, southern Saudi Arabia.",
        content: "Explore Najran's rich heritage. We serve the Emara Palace, Al Ukhdood archaeological site, and the traditional souks.",
        features: ["Heritage Tours", "Border Access", "Local Guides", "AC"],
        pricing: [{ title: "City Ride", price: "25 SAR" }, { title: "Heritage Tour", price: "200 SAR" }],
        faqs: []
    },
    {
        slug: "sharurah-taxi",
        title: "Taxi Service in Sharurah",
        description: "Taxi in Sharurah, gateway to the Empty Quarter.",
        content: "Reliable transport in Sharurah and connections to Najran and the Empty Quarter desert.",
        features: ["Desert Safe", "Long Distance", "AC", "Reliable"],
        pricing: [{ title: "City Ride", price: "25 SAR" }],
        faqs: []
    },
    {
        slug: "rabigh-taxi",
        title: "Taxi Service in Rabigh",
        description: "Taxi in Rabigh industrial and residential areas.",
        content: "Serving Petro Rabigh workers, KAEC residents, and transit passengers along the Jeddah-Madinah highway.",
        features: ["Industrial Zone", "KAEC Link", "Highway Access", "24/7"],
        pricing: [{ title: "City Ride", price: "25 SAR" }, { title: "KAEC", price: "100 SAR" }],
        faqs: []
    },
    {
        slug: "medina-taxi",
        title: "Taxi Service in Madinah",
        description: "Premium taxi service in the holy city of Madinah.",
        content: "Reliable transport in Madinah. Hotel to Haram transfers, Ziyarat tours, airport pickups, and intercity connections.",
        features: ["Haram Transfers", "Ziyarat Tours", "Airport Runs", "24/7 Prayer Times"],
        pricing: [{ title: "City Ride", price: "25 SAR" }, { title: "Airport", price: "80 SAR" }],
        faqs: []
    },
    {
        slug: "qurayyat-taxi",
        title: "Taxi Service in Qurayyat",
        description: "Taxi in Gurayat, northern Saudi Arabia.",
        content: "Serving Qurayyat city and the Jordan border crossing. Ideal for travelers heading to Amman.",
        features: ["Border Runs", "Jordan Access", "Reliable", "AC"],
        pricing: [{ title: "City Ride", price: "25 SAR" }, { title: "Border", price: "200 SAR" }],
        faqs: []
    },
    {
        slug: "umluj-taxi",
        title: "Taxi Service in Umluj",
        description: "Taxi in Umluj, the Maldives of Saudi Arabia.",
        content: "Beach transfers, island boat trips, and city transport in the beautiful coastal town of Umluj.",
        features: ["Beach Access", "Island Trips", "Scenic", "Coastal"],
        pricing: [{ title: "City Ride", price: "25 SAR" }, { title: "Beach Tour", price: "150 SAR" }],
        faqs: []
    },
    {
        slug: "baljurashi-taxi",
        title: "Taxi Service in Baljurashi",
        description: "Taxi in Baljurashi, Al Baha region.",
        content: "Mountain transport in Baljurashi. Access to Raghdan Forest Park, Thee Ain Village, and scenic mountain roads.",
        features: ["Mountain Safe", "Forest Park", "Scenic Routes", "Cool Climate"],
        pricing: [{ title: "City Ride", price: "25 SAR" }],
        faqs: []
    },
    {
        slug: "tanomah-taxi",
        title: "Taxi Service in Tanomah",
        description: "Taxi in Tanomah, Asir region mountain town.",
        content: "Scenic mountain transport in Tanomah. Visit the famous fog-covered forests and Al Namas.",
        features: ["Mountain Roads", "Fog Forest", "Scenic", "Safe"],
        pricing: [{ title: "City Ride", price: "25 SAR" }],
        faqs: []
    },
    {
        slug: "city-taxi",
        title: "City Taxi Service",
        description: "Local city taxi service across Saudi Arabia.",
        content: "Professional city taxi service available in all major Saudi cities. Fixed rates, clean vehicles, and professional drivers.",
        features: ["All Cities", "Fixed Rates", "Clean Cars", "Professional"],
        pricing: [{ title: "Base Rate", price: "From 25 SAR" }],
        faqs: []
    },
    {
        slug: "local-taxi",
        title: "Local Taxi Service",
        description: "Affordable local taxi rides in your city.",
        content: "Need a ride within your city? Our local taxi service covers all neighborhoods with fair, fixed pricing.",
        features: ["Affordable", "Quick Pickup", "All Areas", "Door to Door"],
        pricing: [{ title: "Local Ride", price: "From 20 SAR" }],
        faqs: []
    },
    {
        slug: "kaec-taxi",
        title: "King Abdullah Economic City Taxi",
        description: "Taxi service in KAEC (King Abdullah Economic City).",
        content: "Serving KAEC residents, visitors, and business travelers. Connections to Jeddah, Rabigh, and the Haramain train station.",
        features: ["KAEC Coverage", "Train Station", "Jeddah Link", "Business"],
        pricing: [{ title: "City Ride", price: "30 SAR" }, { title: "Jeddah", price: "250 SAR" }],
        faqs: []
    },
    // ===== Tour Services =====
    {
        slug: "alula-city-tour",
        title: "AlUla City Tour",
        description: "Guided taxi tour of AlUla's ancient wonders and modern attractions.",
        content: "Explore AlUla's stunning landscapes, Hegra UNESCO site, Elephant Rock, and the Old Town. Our drivers know every hidden gem.",
        features: ["UNESCO Sites", "Elephant Rock", "Old Town", "Desert Landscapes"],
        pricing: [{ title: "Half Day", price: "400 SAR" }, { title: "Full Day", price: "700 SAR" }],
        faqs: []
    },
    {
        slug: "jeddah-city-tour",
        title: "Jeddah City Tour",
        description: "Explore Jeddah's historic Al Balad, Corniche, and modern landmarks.",
        content: "Discover Jeddah's blend of old and new. Visit UNESCO-listed Al Balad, the stunning Corniche, King Fahd Fountain, and the vibrant art scene.",
        features: ["Al Balad UNESCO", "Corniche Drive", "King Fahd Fountain", "Art District"],
        pricing: [{ title: "Half Day", price: "300 SAR" }, { title: "Full Day", price: "500 SAR" }],
        faqs: []
    },
    {
        slug: "yanbu-city-tour",
        title: "Yanbu City Tour",
        description: "Tour the historic port city of Yanbu Al Bahr and the modern industrial city.",
        content: "Explore Yanbu's diving spots, the old Ottoman harbor, and the Royal Commission recreational areas.",
        features: ["Historic Port", "Diving Spots", "RC Area", "Corniche"],
        pricing: [{ title: "Tour", price: "250 SAR" }],
        faqs: []
    },
    {
        slug: "old-town-tour",
        title: "Old Town Tour Taxi",
        description: "Visit historic old towns across Saudi Arabia.",
        content: "Experience the charm of traditional Saudi old towns. From Jeddah's Al Balad to AlUla's Old Town and Ushaiger village.",
        features: ["Heritage Sites", "Photography Spots", "Guided", "Cultural"],
        pricing: [{ title: "Tour", price: "250 SAR" }],
        faqs: []
    },
    {
        slug: "rijal-almaa-tour",
        title: "Rijal Almaa Village Tour",
        description: "Visit the colorful heritage village of Rijal Almaa near Abha.",
        content: "Explore the stunning UNESCO-nominated Rijal Almaa village with its colorful stone towers. Located in the Asir mountains near Abha.",
        features: ["UNESCO Nominated", "Mountain Village", "Photography", "Cultural Heritage"],
        pricing: [{ title: "Tour from Abha", price: "300 SAR" }],
        faqs: []
    },
    {
        slug: "thee-ain-tour",
        title: "Thee Ain Village Tour",
        description: "Visit the ancient marble village of Thee Ain in Al Baha.",
        content: "Discover the spectacular Thee Ain heritage village, built on a white marble hill with a waterfall. A hidden gem in Al Baha region.",
        features: ["Ancient Village", "Waterfall", "Marble Hill", "Photography"],
        pricing: [{ title: "Tour from Al Baha", price: "250 SAR" }],
        faqs: []
    },
    {
        slug: "al-qara-tour",
        title: "Al Qara Mountain Tour",
        description: "Explore Al Qara caves and mountain in Al Ahsa.",
        content: "Visit the famous Al Qara Mountain with its cool caves and stunning views over the Al Ahsa oasis. A unique geological wonder.",
        features: ["Cave Exploration", "Oasis Views", "Cool Temperature", "UNESCO Area"],
        pricing: [{ title: "Tour", price: "200 SAR" }],
        faqs: []
    },
    {
        slug: "soudah-tour",
        title: "Soudah Mountain Tour",
        description: "Tour the highest point in Saudi Arabia at Soudah Peak near Abha.",
        content: "Visit Soudah Peak at 3,000m above sea level. Enjoy cable car rides, fog forests, and breathtaking mountain views.",
        features: ["Highest Peak", "Cable Car", "Fog Forest", "Mountain Views"],
        pricing: [{ title: "Tour from Abha", price: "300 SAR" }],
        faqs: []
    },
    {
        slug: "jubbah-tour",
        title: "Jubbah Rock Art Tour",
        description: "Visit the UNESCO rock art site at Jubbah near Hail.",
        content: "Explore the ancient petroglyphs at Jubbah, a UNESCO World Heritage site. Thousands of years of human history carved in stone.",
        features: ["UNESCO Site", "Rock Art", "Desert Landscape", "Historical"],
        pricing: [{ title: "Tour from Hail", price: "300 SAR" }],
        faqs: []
    },
    {
        slug: "al-jouf-heritage-tour",
        title: "Al Jouf Heritage Tour",
        description: "Explore Dumat Al Jandal castle and Al Jouf olive farms.",
        content: "Visit the ancient Marid Castle, Mosque of Omar, and the famous olive groves of Al Jouf region.",
        features: ["Marid Castle", "Omar Mosque", "Olive Farms", "Heritage"],
        pricing: [{ title: "Tour", price: "250 SAR" }],
        faqs: []
    },
    {
        slug: "ushaiger-tour",
        title: "Ushaiger Heritage Village Tour",
        description: "Visit the traditional mud-brick village of Ushaiger near Riyadh.",
        content: "Step back in time at Ushaiger, one of the best-preserved traditional Najdi villages. Just 200km from Riyadh.",
        features: ["Mud Brick Houses", "Traditional", "Photography", "Near Riyadh"],
        pricing: [{ title: "Tour from Riyadh", price: "400 SAR" }],
        faqs: []
    },
    {
        slug: "najran-heritage-tour",
        title: "Najran Heritage Tour",
        description: "Explore Najran's Emara Palace and Al Ukhdood archaeological site.",
        content: "Discover the rich history of Najran. Visit the stunning Emara Palace, the ancient Al Ukhdood ruins mentioned in the Quran, and traditional souks.",
        features: ["Emara Palace", "Al Ukhdood", "Quranic Site", "Traditional Souks"],
        pricing: [{ title: "Tour", price: "250 SAR" }],
        faqs: []
    },
    {
        slug: "bisha-farm-tour",
        title: "Bisha Farm Tour",
        description: "Visit the famous date and pomegranate farms of Bisha.",
        content: "Explore Bisha's agricultural heritage. Tour date palm plantations and pomegranate orchards in the fertile valley.",
        features: ["Date Farms", "Pomegranate", "Agricultural", "Valley Views"],
        pricing: [{ title: "Farm Tour", price: "200 SAR" }],
        faqs: []
    },
    {
        slug: "haql-tour-taxi",
        title: "Haql Tour Taxi",
        description: "Visit the famous shipwreck beach and Red Sea coast at Haql.",
        content: "Explore Haql's stunning coastline with views of four countries. Visit the famous Georgios G shipwreck on the beach.",
        features: ["Shipwreck Beach", "Red Sea Coast", "4 Country Views", "Scenic"],
        pricing: [{ title: "Tour from Tabuk", price: "350 SAR" }],
        faqs: []
    },
    {
        slug: "oasis-tour-taxi",
        title: "Oasis Tour Taxi",
        description: "Visit the famous oases of Saudi Arabia.",
        content: "Explore Al Ahsa, the world's largest oasis, and other palm-filled oases across the Kingdom.",
        features: ["Al Ahsa Oasis", "Palm Gardens", "Springs", "UNESCO"],
        pricing: [{ title: "Tour", price: "200 SAR" }],
        faqs: []
    },
    {
        slug: "lina-village-taxi",
        title: "Lina Village Tour Taxi",
        description: "Visit the ancient ruins of Lina Village near Tabuk.",
        content: "Explore the mysterious ruins of Lina, an ancient village in the Tabuk region with archaeological significance.",
        features: ["Ancient Ruins", "Archaeological", "Desert Setting", "Photography"],
        pricing: [{ title: "Tour", price: "250 SAR" }],
        faqs: []
    },
    {
        slug: "olive-farm-tour",
        title: "Olive Farm Tour",
        description: "Visit the olive farms of Al Jouf region.",
        content: "Al Jouf is home to the largest olive farms in the Middle East. Tour the groves and taste fresh Saudi olive oil.",
        features: ["Olive Groves", "Oil Tasting", "Al Jouf", "Agricultural"],
        pricing: [{ title: "Tour", price: "200 SAR" }],
        faqs: []
    },
    // ===== Industrial & Business Services =====
    {
        slug: "industrial-valley-taxi",
        title: "Industrial Valley Taxi Service",
        description: "Transport to industrial valleys and economic zones in Saudi Arabia.",
        content: "Specialized transport for workers and visitors to industrial valleys across the Kingdom. Covering Modon zones and free trade areas.",
        features: ["Industrial Zones", "Worker Transport", "Early Morning", "Shift Times"],
        pricing: [{ title: "Transfer", price: "From 50 SAR" }],
        faqs: []
    },
    {
        slug: "petro-rabigh-taxi",
        title: "Petro Rabigh Taxi",
        description: "Transport to and from Petro Rabigh refinery complex.",
        content: "Reliable transport for Petro Rabigh employees and contractors. Gate-to-gate service with safety compliance.",
        features: ["Refinery Access", "Safety Compliant", "Shift Times", "Reliable"],
        pricing: [{ title: "Transfer", price: "From 100 SAR" }],
        faqs: []
    },
    {
        slug: "kharj-industrial-taxi",
        title: "Al Kharj Industrial Taxi",
        description: "Taxi service to Al Kharj industrial area south of Riyadh.",
        content: "Transport to Al Kharj military and industrial zones. Serving factory workers, military personnel, and business visitors.",
        features: ["Industrial Zone", "Military Base", "Riyadh Link", "Daily Runs"],
        pricing: [{ title: "From Riyadh", price: "200 SAR" }],
        faqs: []
    },
    {
        slug: "jubail-industrial-taxi",
        title: "Jubail Industrial City Taxi",
        description: "Transport within Jubail Industrial City and Royal Commission area.",
        content: "Specialized transport serving the Royal Commission of Jubail. Access to SABIC, Ma'aden, and other industrial facilities.",
        features: ["RC Access", "SABIC Area", "Industrial Pass", "Worker Transport"],
        pricing: [{ title: "Industrial Zone", price: "40 SAR" }],
        faqs: []
    },
    {
        slug: "royal-commission-taxi",
        title: "Royal Commission Area Taxi",
        description: "Taxi service in Royal Commission areas of Jubail and Yanbu.",
        content: "Serving the Royal Commission industrial cities of Jubail and Yanbu. Access to all plant sites and residential compounds.",
        features: ["RC Jubail", "RC Yanbu", "Plant Access", "Compound Service"],
        pricing: [{ title: "Transfer", price: "From 40 SAR" }],
        faqs: []
    },
    {
        slug: "aramco-taxi",
        title: "Aramco Area Taxi",
        description: "Transport to Saudi Aramco compounds and facilities.",
        content: "Reliable transport for Aramco employees and visitors. Serving Dhahran, Ras Tanura, and Abqaiq areas.",
        features: ["Compound Access", "Dhahran HQ", "Ras Tanura", "Abqaiq"],
        pricing: [{ title: "Transfer", price: "From 80 SAR" }],
        faqs: []
    },
    {
        slug: "yanbu-industrial-transport",
        title: "Yanbu Industrial Transport",
        description: "Transport within Yanbu Industrial City.",
        content: "Serving the petrochemical and refining complex of Yanbu Industrial City. Worker transport and business transfers.",
        features: ["Petrochemical Zone", "Refinery Area", "Worker Shifts", "Business"],
        pricing: [{ title: "Transfer", price: "From 40 SAR" }],
        faqs: []
    },
    {
        slug: "sudair-industrial-taxi",
        title: "Sudair Industrial City Taxi",
        description: "Transport to Sudair Industrial City north of Riyadh.",
        content: "Taxi service to the growing Sudair Industrial City, home to major manufacturing and logistics facilities.",
        features: ["Industrial Zone", "Riyadh Link", "Manufacturing", "Logistics"],
        pricing: [{ title: "From Riyadh", price: "250 SAR" }],
        faqs: []
    },
    {
        slug: "industrial-taxi",
        title: "Industrial Zone Taxi",
        description: "Transport to industrial zones across Saudi Arabia.",
        content: "Specialized transport for factory workers and business visitors to industrial zones in all major Saudi cities.",
        features: ["All Cities", "Shift Times", "Worker Transport", "Business"],
        pricing: [{ title: "Transfer", price: "From 50 SAR" }],
        faqs: []
    },
    {
        slug: "business-taxi",
        title: "Business Taxi Service",
        description: "Professional transport for business meetings and corporate events.",
        content: "Executive taxi service for business professionals. Clean, punctual, and discreet transport for meetings and events.",
        features: ["Executive Cars", "Punctual", "Corporate Accounts", "Receipt"],
        pricing: [{ title: "Hourly", price: "75 SAR/hr" }, { title: "Daily", price: "500 SAR" }],
        faqs: []
    },
    {
        slug: "staff-transport",
        title: "Staff Transport Service",
        description: "Daily staff transport solutions for businesses.",
        content: "Reliable daily transport for your workforce. We provide scheduled pickups and drop-offs for company staff across Saudi Arabia.",
        features: ["Daily Routes", "Scheduled Times", "Coaster Available", "Monthly Plans"],
        pricing: [{ title: "Monthly Contract", price: "Contact Us" }],
        faqs: []
    },
    {
        slug: "kfupm-taxi",
        title: "KFUPM Taxi Service",
        description: "Taxi service near King Fahd University of Petroleum & Minerals.",
        content: "Serving KFUPM students, faculty, and visitors. Quick rides to Dhahran, Khobar, and Dammam.",
        features: ["Campus Pickup", "Student Rates", "Dhahran Area", "Reliable"],
        pricing: [{ title: "City Ride", price: "25 SAR" }],
        faqs: []
    },
    {
        slug: "kkmc-taxi",
        title: "KKMC (King Khalid Military City) Taxi",
        description: "Taxi service in and around King Khalid Military City, Hafr Al Batin.",
        content: "Serving KKMC and Hafr Al Batin. Reliable transport for military personnel and civilian workers.",
        features: ["Military City", "Hafr Al Batin", "Reliable", "24/7"],
        pricing: [{ title: "City Ride", price: "30 SAR" }],
        faqs: []
    },
    {
        slug: "military-city-taxi",
        title: "Military City Taxi",
        description: "Transport to military cities in Saudi Arabia.",
        content: "Serving King Khalid Military City, King Abdulaziz Military City, and other defense installations.",
        features: ["Military Zones", "Worker Transport", "Reliable", "Safe"],
        pricing: [{ title: "Transfer", price: "From 50 SAR" }],
        faqs: []
    },
    {
        slug: "university-taxi",
        title: "University Taxi Service",
        description: "Taxi service near major Saudi universities.",
        content: "Serving students and faculty at KAU, KFUPM, KSU, UQU, Islamic University, and other campuses across Saudi Arabia.",
        features: ["Campus Service", "Student Rates", "Multiple Cities", "Safe"],
        pricing: [{ title: "Campus Ride", price: "From 20 SAR" }],
        faqs: []
    },
    // ===== Border Services =====
    {
        slug: "kuwait-border-taxi",
        title: "Saudi to Kuwait Border Taxi | Nuwaiseeb & Khafji",
        description: "Professional taxi transfer to Saudi-Kuwait border crossings at Al Nuwaiseeb and Al Khafji.",
        content: "Reliable and safe transport to the Kuwait border. We serve both Al Nuwaiseeb and Al Khafji crossings from Dammam, Jubail, and Hafr Al Batin. Our drivers are well-versed in border procedures.",
        features: ["Al Nuwaiseeb & Al Khafji", "Document Assistance", "24/7 Operations", "Return Trips Available"],
        pricing: [{ title: "From Dammam", price: "500 SAR" }, { title: "From Hafr Al Batin", price: "300 SAR" }],
        faqs: []
    },
    {
        slug: "uae-border-taxi",
        title: "Saudi to UAE Border Taxi | Al Batha Crossing",
        description: "Direct private taxi transfer to the Al Batha border crossing between Saudi Arabia and UAE.",
        content: "Seamless transport to the UAE border at Al Batha. Ideal for travelers from the Eastern Province heading to Abu Dhabi or Dubai. We provide comfortable SUVs like GMC Yukon for this long journey.",
        features: ["Al Batha Border", "UAE/Dubai Transit", "Long Distance SUVs", "Safety Focused"],
        pricing: [{ title: "From Al Ahsa", price: "600 SAR" }, { title: "From Dammam", price: "800 SAR" }],
        faqs: []
    },
    {
        slug: "qatar-border-taxi",
        title: "Saudi to Qatar Border Taxi | Salwa Border Crossing",
        description: "Reliable taxi transfer to the Salwa border crossing between Saudi Arabia and Qatar.",
        content: "Quick and efficient transfer to the Salwa border for travelers heading to Doha. Service available from Al Ahsa, Khobar, and Dammam with experienced cross-border drivers.",
        features: ["Salwa Border Crossing", "Qatar/Doha Access", "Prompt Pickup", "Fixed Pricing"],
        pricing: [{ title: "From Al Ahsa", price: "400 SAR" }, { title: "From Khobar", price: "500 SAR" }],
        faqs: []
    },
    {
        slug: "bahrain-border-taxi",
        title: "Saudi to Bahrain Taxi | King Fahd Causeway",
        description: "Direct taxi transfer across the King Fahd Causeway to Bahrain from Khobar and Dammam.",
        content: "Cross the bridge to Bahrain comfortably in our private vehicles. We provide door-to-door service from Al Khobar and Dammam directly to your destination in Manama or beyond.",
        features: ["King Fahd Causeway", "Door-to-Door Service", "Causeway Fees Info", "VIP Cars Available"],
        pricing: [{ title: "From Khobar", price: "350 SAR" }, { title: "From Dammam", price: "400 SAR" }],
        faqs: []
    },

    {
        slug: "customs-taxi",
        title: "Customs & Border Taxi",
        description: "Specialized border crossing transport service.",
        content: "Expert transport to authorized Saudi border crossings (UAE, Qatar, Kuwait, Bahrain). Our drivers know the procedures and best times to cross.",
        features: ["GCC Borders", "Procedure Knowledge", "Wait Service", "Return"],
        pricing: [{ title: "Transfer", price: "From 300 SAR" }],
        faqs: []
    },
    {
        slug: "visa-run-taxi",
        title: "Visa Run Taxi Service",
        description: "Quick border run for visa renewal purposes.",
        content: "Need to exit and re-enter Saudi Arabia for visa purposes? We provide efficient border run services to authorized crossings for UAE, Qatar, Kuwait, and Bahrain.",
        features: ["Fast Service", "Border Knowledge", "Wait & Return", "GCC Borders"],
        pricing: [{ title: "Visa Run", price: "From 500 SAR" }],
        faqs: []
    },

    // ===== Tourism & Special Services =====
    {
        slug: "desert-safari-taxi",
        title: "Desert Safari Taxi",
        description: "Desert safari transport and dune bashing experiences.",
        content: "Experience the Arabian desert in a 4x4. Dune bashing, sunset views, and traditional Bedouin camp visits available.",
        features: ["4x4 Vehicles", "Dune Bashing", "Sunset Tours", "Camp Visits"],
        pricing: [{ title: "Half Day Safari", price: "500 SAR" }, { title: "Full Day", price: "800 SAR" }],
        faqs: []
    },
    {
        slug: "desert-taxi",
        title: "Desert Taxi Service",
        description: "Reliable desert-ready transport across Saudi Arabia.",
        content: "Navigate the Saudi deserts safely with our desert-experienced drivers and 4x4 vehicles.",
        features: ["4x4 Fleet", "Desert Experience", "GPS Equipped", "Safety Kit"],
        pricing: [{ title: "Transfer", price: "From 200 SAR" }],
        faqs: []
    },
    {
        slug: "nafud-desert-trip",
        title: "Nafud Desert Trip Taxi",
        description: "Transport through the Great Nafud Desert.",
        content: "Explore the red sand dunes of the Great Nafud Desert. Our experienced drivers navigate the desert safely.",
        features: ["Red Sand Dunes", "4x4 Only", "Desert Guide", "Photography"],
        pricing: [{ title: "Day Trip", price: "600 SAR" }],
        faqs: []
    },
    {
        slug: "empty-quarter-taxi",
        title: "Empty Quarter (Rub al Khali) Taxi",
        description: "Transport to the edge of the Empty Quarter desert.",
        content: "Experience the vastness of Rub al Khali, the largest sand desert in the world. Based from Sharurah or Najran.",
        features: ["World Largest Desert", "4x4 Required", "Guide Included", "Adventure"],
        pricing: [{ title: "Day Trip", price: "700 SAR" }],
        faqs: []
    },
    {
        slug: "mountain-tour-taxi",
        title: "Mountain Tour Taxi",
        description: "Scenic mountain tours in Asir, Al Baha, and Taif regions.",
        content: "Experience the cool mountains of southern Saudi Arabia. From Soudah Peak to Al Baha forests and Taif roses.",
        features: ["Scenic Routes", "Cool Climate", "Multiple Regions", "Safe Driving"],
        pricing: [{ title: "Mountain Tour", price: "From 300 SAR" }],
        faqs: []
    },
    {
        slug: "red-sea-taxi",
        title: "Red Sea Coast Taxi",
        description: "Transport along the Red Sea coast from Jeddah to NEOM.",
        content: "Explore Saudi Arabia's stunning Red Sea coastline. From Jeddah to Umluj, Al Wajh, and NEOM.",
        features: ["Coastal Route", "Beach Access", "Diving Spots", "Scenic"],
        pricing: [{ title: "Transfer", price: "From 200 SAR" }],
        faqs: []
    },
    {
        slug: "the-line-taxi",
        title: "The Line (NEOM) Taxi",
        description: "Transport to The Line mega project in NEOM.",
        content: "Authorized transport service to The Line project in NEOM. Serving workers, visitors, and business travelers.",
        features: ["NEOM Access", "Authorized", "Premium Fleet", "Reliable"],
        pricing: [{ title: "Transfer", price: "Contact Us" }],
        faqs: []
    },
    {
        slug: "sindalah-taxi",
        title: "Sindalah Island Taxi",
        description: "Transport to Sindalah Island port in NEOM.",
        content: "Transfer to the luxury Sindalah Island yacht destination in NEOM. Premium vehicles for a premium experience.",
        features: ["Island Transfer", "Luxury", "NEOM Zone", "VIP"],
        pricing: [{ title: "Transfer", price: "Contact Us" }],
        faqs: []
    },
    {
        slug: "trojena-taxi",
        title: "Trojena (NEOM) Taxi",
        description: "Transport to Trojena ski resort project in NEOM.",
        content: "Transfer to Trojena, the future mountain tourism destination in NEOM. Winter sports and year-round adventures.",
        features: ["Mountain Access", "NEOM Zone", "Premium", "Authorized"],
        pricing: [{ title: "Transfer", price: "Contact Us" }],
        faqs: []
    },
    {
        slug: "half-moon-bay-taxi",
        title: "Half Moon Bay Taxi",
        description: "Transport to Half Moon Bay beach near Khobar.",
        content: "Beach day at Half Moon Bay? We provide comfortable transport from Khobar, Dammam, and Dhahran to this popular beach destination.",
        features: ["Beach Transfer", "Weekend Trips", "Family Friendly", "Return Trip"],
        pricing: [{ title: "From Khobar", price: "100 SAR" }],
        faqs: []
    },
    {
        slug: "umluj-beach-taxi",
        title: "Umluj Beach Taxi",
        description: "Transport to Umluj beaches, the Maldives of Saudi Arabia.",
        content: "Reach the crystal-clear waters of Umluj. Island boat trip coordination available.",
        features: ["Beach Access", "Island Trips", "Crystal Waters", "Photography"],
        pricing: [{ title: "Transfer", price: "From 150 SAR" }],
        faqs: []
    },
    {
        slug: "farasan-ferry-transfer",
        title: "Farasan Island Ferry Transfer",
        description: "Transport to Jazan ferry terminal for Farasan Islands.",
        content: "Transfer to the Jazan ferry port for your Farasan Islands trip. We time your pickup to match the ferry schedule.",
        features: ["Ferry Schedule", "Jazan Port", "Island Trip", "Timed Pickup"],
        pricing: [{ title: "From Jazan", price: "80 SAR" }],
        faqs: []
    },
    // ===== Service Type Categories =====
    {
        slug: "intercity-taxi",
        title: "Intercity Taxi Service",
        description: "Long-distance intercity taxi between all Saudi cities.",
        content: "Connect between any two cities in Saudi Arabia. Comfortable, air-conditioned vehicles with experienced long-distance drivers.",
        features: ["All Cities", "Long Distance", "Comfortable", "Fixed Rates"],
        pricing: [{ title: "Per KM", price: "From 2 SAR/km" }],
        faqs: []
    },
    {
        slug: "long-distance-taxi",
        title: "Long Distance Taxi Service",
        description: "Premium long-distance taxi service across Saudi Arabia.",
        content: "Specialized in journeys over 500km. Our long-distance fleet includes spacious SUVs and luxury sedans for maximum comfort.",
        features: ["500+ KM Routes", "Comfort Stops", "Fresh Driver", "AC"],
        pricing: [{ title: "Custom Quote", price: "Contact Us" }],
        faqs: []
    },
    {
        slug: "pilgrim-taxi",
        title: "Pilgrim Taxi Service",
        description: "Dedicated taxi service for Umrah and Hajj pilgrims.",
        content: "Special transport designed for pilgrims. Our drivers understand the rituals, timings, and holy sites. Patient, respectful service.",
        features: ["Pilgrim Focused", "Holy Sites", "Patient Drivers", "Prayer Stops"],
        pricing: [{ title: "Transfer", price: "From 200 SAR" }],
        faqs: []
    },
    {
        slug: "umrah-taxi",
        title: "Umrah Taxi Service",
        description: "Complete taxi service for Umrah pilgrims in Saudi Arabia.",
        content: "From airport to hotel, hotel to Haram, and Ziyarat tours. Everything a pilgrim needs in one reliable taxi service.",
        features: ["Airport Pickup", "Hotel Transfers", "Ziyarat", "24/7"],
        pricing: [{ title: "Package", price: "From 200 SAR" }],
        faqs: []
    },
    {
        slug: "heritage-taxi",
        title: "Heritage & Historical Taxi",
        description: "Transport to Saudi Arabia's heritage and historical sites.",
        content: "Visit UNESCO sites, ancient ruins, and historical landmarks across the Kingdom with our knowledgeable drivers.",
        features: ["UNESCO Sites", "Knowledgeable Drivers", "Photography Stops", "Cultural"],
        pricing: [{ title: "Tour", price: "From 250 SAR" }],
        faqs: []
    },
    {
        slug: "historical-taxi",
        title: "Historical Sites Taxi",
        description: "Taxi service to historical sites in Saudi Arabia.",
        content: "From Mada'in Saleh to Diriyah, explore Saudi Arabia's rich history with a private taxi and knowledgeable driver.",
        features: ["Historical Routes", "Guide Driver", "Flexible Timing", "All Regions"],
        pricing: [{ title: "Tour", price: "From 250 SAR" }],
        faqs: []
    },
    {
        slug: "hotel-to-haram-transport",
        title: "Hotel to Haram Transport",
        description: "Daily shuttle between your hotel and Masjid Al Haram in Makkah.",
        content: "Staying in Aziziyah or far from the Haram? Our daily shuttle gets you to the Clock Tower area and back, avoiding crowded buses.",
        features: ["Daily Service", "Prayer Times", "Aziziyah Coverage", "Private"],
        pricing: [{ title: "One Way", price: "50 SAR" }, { title: "Daily Package", price: "200 SAR" }],
        faqs: []
    },
    {
        slug: "airport-taxi",
        title: "Airport Taxi Service",
        description: "Professional airport taxi at all Saudi airports.",
        content: "Meet and greet at arrivals, flight tracking, and reliable transport from every airport in Saudi Arabia to your destination.",
        features: ["All Airports", "Meet & Greet", "Flight Tracking", "24/7"],
        pricing: [{ title: "Transfer", price: "From 50 SAR" }],
        faqs: []
    },
    {
        slug: "date-festival-transfer",
        title: "Date Festival Transfer",
        description: "Transport to the annual dates festival in Buraidah.",
        content: "Visit the world's largest dates festival in Buraidah. We provide transport from airports and hotels to the festival grounds.",
        features: ["Festival Ground", "Buraidah", "Seasonal", "Group Transport"],
        pricing: [{ title: "Transfer", price: "From 100 SAR" }],
        faqs: []
    },
    {
        slug: "date-festival-taxi",
        title: "Date Festival Taxi",
        description: "Taxi during dates festival season in Qassim.",
        content: "Reliable taxi during the busy dates festival season in Buraidah and Unayzah. Book early for guaranteed availability.",
        features: ["Festival Season", "Advance Booking", "Qassim Area", "Reliable"],
        pricing: [{ title: "Transfer", price: "From 80 SAR" }],
        faqs: []
    },
    // ===== Specific Location Services =====
    {
        slug: "jazan-economic-city",
        title: "Jazan Economic City Taxi",
        description: "Transport to Jazan Economic City (JEC).",
        content: "Taxi service to Jazan Economic City, serving workers, business visitors, and industrial staff.",
        features: ["JEC Access", "Industrial Area", "Worker Transport", "Reliable"],
        pricing: [{ title: "From Jazan", price: "100 SAR" }],
        faqs: []
    },
    {
        slug: "ghadha-park-taxi",
        title: "Ghadha Park Taxi",
        description: "Transport to Ghadha Park in Hail.",
        content: "Visit the beautiful Ghadha Park in Hail. Enjoy the natural reserve with its unique trees and desert landscape.",
        features: ["Nature Reserve", "Hail Area", "Family Trip", "Scenic"],
        pricing: [{ title: "From Hail", price: "150 SAR" }],
        faqs: []
    },
    {
        slug: "raghdan-park-taxi",
        title: "Raghdan Forest Park Taxi",
        description: "Transport to Raghdan Park in Al Baha.",
        content: "Visit the cool Raghdan Forest Park, the most famous park in Al Baha region. Cable car and forest walks await.",
        features: ["Forest Park", "Cable Car", "Cool Climate", "Al Baha"],
        pricing: [{ title: "From Al Baha", price: "80 SAR" }],
        faqs: []
    },
    {
        slug: "king-fahd-dam-taxi",
        title: "King Fahd Dam Taxi",
        description: "Transport to King Fahd Dam near Bisha.",
        content: "Visit the largest dam in Saudi Arabia. A popular picnic and sightseeing destination in Bisha.",
        features: ["Dam Visit", "Scenic Views", "Picnic Area", "Photography"],
        pricing: [{ title: "From Bisha", price: "100 SAR" }],
        faqs: []
    },
    {
        slug: "waad-al-shamal-taxi",
        title: "Waad Al Shamal Taxi",
        description: "Transport in Waad Al Shamal mining city.",
        content: "Serving the Waad Al Shamal mining and industrial area near Turaif. Worker and business transport.",
        features: ["Mining City", "Industrial", "Worker Transport", "Northern Region"],
        pricing: [{ title: "Transfer", price: "From 100 SAR" }],
        faqs: []
    },
    {
        slug: "northern-borders-taxi",
        title: "Northern Borders Region Taxi",
        description: "Taxi service across the Northern Borders region.",
        content: "Serving Arar, Rafha, and Turaif in the Northern Borders region. Specialized in intercity transfers and airport pickups.",
        features: ["Arar", "Rafha", "Turaif", "City Transfers"],
        pricing: [{ title: "Intercity", price: "From 200 SAR" }],
        faqs: []
    },
    {
        slug: "majmaah-train-taxi",
        title: "Majmaah Train Station Taxi",
        description: "Transfer to SAR train station in Majmaah.",
        content: "Connecting Majmaah to the Saudi Railway network. Transfer to the train station from Majmaah city and surrounding areas.",
        features: ["Train Connection", "SAR Station", "Timed Pickup", "Reliable"],
        pricing: [{ title: "Station Transfer", price: "50 SAR" }],
        faqs: []
    },
    {
        slug: "kaec-train-station-taxi",
        title: "KAEC Haramain Train Station Taxi",
        description: "Transfer to Haramain Railway station in KAEC.",
        content: "Connecting to the Haramain High Speed Railway at KAEC station. Transfers from Rabigh, Jeddah north, and KAEC city.",
        features: ["High Speed Rail", "KAEC Station", "Timed Service", "Business"],
        pricing: [{ title: "Transfer", price: "From 80 SAR" }],
        faqs: []
    },
    {
        slug: "kjo-taxi",
        title: "King Abdullah University (KAUST) Taxi",
        description: "Taxi service to KAUST campus near Thuwal.",
        content: "Transport to King Abdullah University of Science and Technology. Serving faculty, students, and visitors.",
        features: ["Campus Access", "Thuwal Area", "Jeddah Link", "Professional"],
        pricing: [{ title: "From Jeddah", price: "200 SAR" }],
        faqs: []
    },
    {
        slug: "duba-port-taxi",
        title: "Duba Port Taxi",
        description: "Transport to Duba commercial port on the Red Sea.",
        content: "Transfer to Duba Port for ferry connections to Egypt and port operations. Serving travelers and port workers.",
        features: ["Port Access", "Ferry Connection", "Egypt Route", "Reliable"],
        pricing: [{ title: "From Tabuk", price: "300 SAR" }],
        faqs: []
    }
];
