export interface FleetVehicle {
    slug: string;
    name: string;
    category: string;
    description: string;
    longDescription: string;
    image: string;
    passengers: number;
    luggage: number;
    year: string;
    features: string[];
    idealFor: string[];
    specifications: { label: string; value: string; icon: string }[];
    seoTitle: string;
    seoDescription: string;
    keywords: string[];
}

export const fleetData: FleetVehicle[] = [
    {
        slug: 'mercedes-s-class',
        name: 'Mercedes S-Class',
        category: 'Elite Luxury Sedan',
        description: 'The pinnacle of automotive luxury and executive travel.',
        longDescription: 'The Mercedes S-Class is the worldwide standard for luxury chauffeur services. Featuring an opulent interior, whisper-quiet cabin, and cutting-edge technology, it provides an unmatched travel experience for VIPs and business executives in Saudi Arabia.',
        image: '/mercedes-s-class-vip.webp',
        passengers: 3,
        luggage: 2,
        year: '2024',
        features: [
            'Nappa Leather Reclining Seats',
            'Burmester 4D Surround Sound',
            'Individual Climate Control',
            'Panoramic Sunroof',
            'Ambient Mood Lighting',
            'Privacy Curtains',
            'Professional Multilingual Chauffeur',
            'Complimentary Refreshments & WiFi'
        ],
        idealFor: [
            'VIP Airport Transfers',
            'Royal Delegations',
            'Executive Business Meetings',
            'Luxury Wedding Transport',
            'High-Profile Events'
        ],
        specifications: [
            { label: 'Passengers', value: '3 Adults', icon: 'Users' },
            { label: 'Luggage', value: '2 Bags', icon: 'Briefcase' },
            { label: 'Class', value: 'Elite Luxury', icon: 'Crown' },
            { label: 'Type', value: 'Sedan', icon: 'Car' }
        ],
        seoTitle: 'Mercedes S-Class VIP Taxi Saudi Arabia | Luxury Chauffeur Service',
        seoDescription: 'Book a Mercedes S-Class luxury taxi in Saudi Arabia. Premium chauffeur service for VIPs in Makkah, Madinah, and Riyadh. Experience elite comfort.',
        keywords: ['Mercedes S-Class taxi', 'VIP chauffeur Saudi Arabia', 'luxury sedan rental Makkah', 'Mercedes S-Class Riyadh', 'executive transport Jeddah']
    },
    {
        slug: 'cadillac-escalade',
        name: 'Cadillac Escalade',
        category: 'Premium Luxury SUV',
        description: 'A bold statement of luxury, power, and spaciousness.',
        longDescription: 'The Cadillac Escalade represents the height of American luxury. With its commanding presence and massive interior, it offers a sophisticated environment for groups and families who refuse to compromise on style or comfort during their journey in the Kingdom.',
        image: '/cadillac-escalade-vip.webp',
        passengers: 6,
        luggage: 6,
        year: '2024',
        features: [
            'OLED Curved Display Entertainment',
            'AKG Studio Reference Sound',
            'Heated & Ventilated Massage Seats',
            'Extra Large Luggage Capacity',
            'Magnetic Ride Control',
            'VIP Security Options Available',
            'Professional Driver',
            'Onboard WiFi & Streaming'
        ],
        idealFor: [
            'Family VIP Travel',
            'Group Executive Transfers',
            'Airport Pickups with Heavy Luggage',
            'Desert Luxury Tours',
            'Diplomatic Transport'
        ],
        specifications: [
            { label: 'Passengers', value: '6 Adults', icon: 'Users' },
            { label: 'Luggage', value: '6 Bags', icon: 'Briefcase' },
            { label: 'Class', value: 'Premium SUV', icon: 'Star' },
            { label: 'Type', value: 'SUV', icon: 'Car' }
        ],
        seoTitle: 'Cadillac Escalade VIP Taxi Saudi Arabia | Luxury SUV Service',
        seoDescription: 'Premium Cadillac Escalade taxi service in Saudi Arabia. 6-seater luxury SUV for family and VIP groups in Makkah, Madinah, and Jeddah.',
        keywords: ['Cadillac Escalade taxi', 'luxury SUV Saudi Arabia', 'VIP SUV Makkah', 'Cadillac Escalade rental Jeddah', 'large luxury taxi']
    },
    {
        slug: 'bmw-7-series',
        name: 'BMW 7 Series',
        category: 'Elite Luxury Sedan',
        description: 'Where innovative technology meets supreme luxury.',
        longDescription: 'The BMW 7 Series offers a dynamic yet ultra-comfortable ride. It is the preferred choice for those who appreciate high-tech luxury and a smooth, silent journey across the long highways between Makkah and Madinah.',
        image: '/bmw-7-series-vip.webp',
        passengers: 3,
        luggage: 2,
        year: '2024',
        features: [
            'BMW Theater Screen (31.3\")',
            'Bowers & Wilkins Diamond Sound',
            'Executive Lounge Seating',
            'Sky Lounge Panoramic Roof',
            'Soft-Close Doors',
            'Advanced Climate Filtering',
            'Multilingual Professional Driver',
            'High-Speed WiFi & Tablet'
        ],
        idealFor: [
            'Tech-Savvy Executives',
            'VIP Airport Transfers',
            'Corporate Roadshows',
            'Private City Tours',
            'Luxury Intercity Travel'
        ],
        specifications: [
            { label: 'Passengers', value: '3 Adults', icon: 'Users' },
            { label: 'Luggage', value: '2 Bags', icon: 'Briefcase' },
            { label: 'Class', value: 'Elite Luxury', icon: 'Crown' },
            { label: 'Type', value: 'Sedan', icon: 'Car' }
        ],
        seoTitle: 'BMW 7 Series Luxury Taxi Saudi Arabia | VIP Chauffeur',
        seoDescription: 'Experience the future of luxury with a BMW 7 Series taxi in Saudi Arabia. Elite chauffeur service for VIPs in Riyadh, Jeddah, and Makkah.',
        keywords: ['BMW 7 Series taxi', 'BMW luxury rental Saudi', 'VIP car service Makkah', 'BMW 7 series chauffeur', 'luxury taxi Jeddah']
    },
    {
        slug: 'genesis-g90',
        name: 'Genesis G90',
        category: 'Elite Luxury Sedan',
        description: 'Refined elegance and sophisticated comfort.',
        longDescription: 'The Genesis G90 is the underdog of luxury that delivers above expectations. It provides a serene atmosphere with its sophisticated suspension and premium materials, perfect for pilgrims seeking a tranquil ride.',
        image: '/genesis-g90-vip.webp',
        passengers: 3,
        luggage: 2,
        year: '2024',
        features: [
            'Ergo-Motion Massage Seats',
            'Bang & Olufsen 3D Sound',
            'Fragrance Diffuser System',
            'Multi-Chamber Air Suspension',
            'Electric Rear Sunshades',
            'VIP Concierge Support',
            'Professional Driver',
            'Quiet Cabin Technology'
        ],
        idealFor: [
            'Relaxing Umrah Transfers',
            'Boutique Luxury Travel',
            'Executive Commutes',
            'Private Ziyarat Tours',
            'Hotel to Haram Transfers'
        ],
        specifications: [
            { label: 'Passengers', value: '3 Adults', icon: 'Users' },
            { label: 'Luggage', value: '2 Bags', icon: 'Briefcase' },
            { label: 'Class', value: 'Elite Luxury', icon: 'Crown' },
            { label: 'Type', value: 'Sedan', icon: 'Car' }
        ],
        seoTitle: 'Genesis G90 Luxury Taxi Saudi Arabia | VIP Sedan Service',
        seoDescription: 'Book a Genesis G90 luxury taxi for a serene journey in Saudi Arabia. Premium VIP sedan for Makkah and Madinah transfers.',
        keywords: ['Genesis G90 taxi', 'Genesis luxury rental Saudi', 'VIP sedan Makkah', 'Genesis G90 Madinah', 'executive car service']
    },
    {
        slug: 'ford-taurus-luxury',
        name: 'Ford Taurus (Luxury Edition)',
        category: 'Executive Sedan',
        description: 'Modern sophistication and reliable comfort.',
        longDescription: 'The new Ford Taurus Luxury Edition combines spaciousness with modern tech. It is an excellent choice for business travelers and small families looking for premium comfort at an exceptional value.',
        image: '/ford-taurus-luxury.webp',
        passengers: 4,
        luggage: 2,
        year: '2024',
        features: [
            'Dual-Panel Panoramic Roof',
            '13.2-inch Touchscreen',
            'Premium Leather Seating',
            'Adaptive Cruise Control',
            'Spacious Rear Legroom',
            'Quiet-Ride Engineering',
            'Professional Driver',
            'Reliable AC System'
        ],
        idealFor: [
            'Business Day Trips',
            'Small Family Transfers',
            'City to City Shuttles',
            'Airport Quick-Drops',
            'Corporate Staff Travel'
        ],
        specifications: [
            { label: 'Passengers', value: '4 Adults', icon: 'Users' },
            { label: 'Luggage', value: '2 Bags', icon: 'Briefcase' },
            { label: 'Class', value: 'Executive', icon: 'Star' },
            { label: 'Type', value: 'Sedan', icon: 'Car' }
        ],
        seoTitle: 'Ford Taurus Luxury Taxi Saudi Arabia | Executive Sedan',
        seoDescription: 'Reliable and comfortable Ford Taurus Luxury taxi in Saudi Arabia. Perfect for business and small families in Jeddah, Riyadh, and Makkah.',
        keywords: ['Ford Taurus taxi', 'executive sedan Saudi', 'Ford Taurus luxury rental', 'business taxi Makkah', 'comfortable sedan Jeddah']
    },
    {
        slug: 'mercedes-vito-vip',
        name: 'Mercedes Vito (VIP Edition)',
        category: 'Luxury VIP Van',
        description: 'The ultimate executive boardroom on wheels.',
        longDescription: 'Our Mercedes Vito VIP Edition is custom-built for high-end group travel. With face-to-face seating, a refrigerator, and entertainment systems, it allows you to hold meetings or relax in luxury while on the move.',
        image: '/mercedes-vito-vip.webp',
        passengers: 5,
        luggage: 5,
        year: '2024',
        features: [
            'Face-to-Face VIP Seating',
            'On-board Refrigerator & Coffee',
            'LED Galaxy Ceiling',
            'Smart TV & Sound System',
            'Folding Work Tables',
            'Electric Sliding Doors',
            'Professional Chauffeur',
            'Intercom System'
        ],
        idealFor: [
            'Executive Group Meetings',
            'Small Family VIP Tours',
            'Luxury Airport Shuttles',
            'Mobile Office Needs',
            'Private Group Ziyarat'
        ],
        specifications: [
            { label: 'Passengers', value: '5 Adults', icon: 'Users' },
            { label: 'Luggage', value: '5 Bags', icon: 'Briefcase' },
            { label: 'Class', value: 'VIP Van', icon: 'Crown' },
            { label: 'Type', value: 'Van', icon: 'Car' }
        ],
        seoTitle: 'Mercedes Vito VIP Van Taxi Saudi Arabia | Luxury Group Travel',
        seoDescription: 'Book a custom Mercedes Vito VIP van in Saudi Arabia. Luxury transport for executive groups and families in Makkah and Madinah.',
        keywords: ['Mercedes Vito VIP taxi', 'VIP van Saudi Arabia', 'luxury mini van Makkah', 'Mercedes Vito executive', 'group VIP transport']
    },
    {
        slug: 'mercedes-sprinter-vip',
        name: 'Mercedes Sprinter (VIP Executive)',
        category: 'Elite Luxury Coach',
        description: 'First-class aviation experience for larger groups.',
        longDescription: 'The Mercedes Sprinter VIP Executive is a jet on wheels. Designed for large families or corporate groups, it offers full standing height, captain chairs, and every imaginable luxury amenity.',
        image: '/mercedes-sprinter-vip.webp',
        passengers: 9,
        luggage: 12,
        year: '2024',
        features: [
            'Swivel Captain Chairs',
            'Full Standing Interior Height',
            'Private Partition (Optional)',
            'Large 4K Entertainment Screens',
            'Advanced Climate Control',
            'High-Capacity Luggage Area',
            'Dedicated Professional Driver',
            'Premium Bar & Snack Station'
        ],
        idealFor: [
            'Large VIP Families',
            'Corporate Retreat Transport',
            'Luxury Hajj Groups',
            'Intercity Group Travel',
            'Event Shuttle Service'
        ],
        specifications: [
            { label: 'Passengers', value: '9 Adults', icon: 'Users' },
            { label: 'Luggage', value: '12 Bags', icon: 'Briefcase' },
            { label: 'Class', value: 'VIP Executive', icon: 'Crown' },
            { label: 'Type', value: 'Van', icon: 'Car' }
        ],
        seoTitle: 'Mercedes Sprinter VIP Taxi Saudi Arabia | Luxury Executive Van',
        seoDescription: 'Elite Mercedes Sprinter VIP taxi for large groups in Saudi Arabia. Experience first-class travel in Makkah, Madinah, and Jeddah.',
        keywords: ['Mercedes Sprinter VIP taxi', 'luxury group van Saudi', 'VIP coach Makkah', 'Sprinter executive rental', 'large VIP group taxi']
    },
    {
        slug: 'luxurious-bus',
        name: 'Luxurious VIP Coach Bus',
        category: 'Luxury Group Transport',
        description: 'Unmatched comfort for large-scale VIP movements.',
        longDescription: 'Our Luxurious VIP Coach Bus redefines large-scale transport. Featuring 5-star amenities, professional onboard assistance, and spacious seating, it is perfect for large corporate groups, events, and premium Hajj/Umrah packages.',
        image: '/luxury-vip-bus.webp',
        passengers: 45,
        luggage: 45,
        year: '2024',
        features: [
            'Ergonomic Reclining Seats',
            'On-board Restroom',
            'Multiple Entertainment Screens',
            'Individual Power Outlets',
            'Professional Bus Captain',
            'Large Under-Bus Storage',
            'On-board Refreshments',
            'High-Performance AC'
        ],
        idealFor: [
            'Large Corporate Groups',
            'Umrah & Hajj Group Packages',
            'Event Guest Logistics',
            'Religious Organization Tours',
            'Long-Distance VIP Group Travel'
        ],
        specifications: [
            { label: 'Passengers', value: '45 Adults', icon: 'Users' },
            { label: 'Luggage', value: '45 Bags', icon: 'Briefcase' },
            { label: 'Class', value: 'VIP Coach', icon: 'Crown' },
            { label: 'Type', value: 'Bus', icon: 'Car' }
        ],
        seoTitle: 'Luxury VIP Bus Taxi Saudi Arabia | Premium Group Coach',
        seoDescription: 'High-end luxury bus rental for VIP groups in Saudi Arabia. 45-seater premium coach for Makkah, Madinah, and Riyadh events.',
        keywords: ['luxury bus Saudi Arabia', 'VIP coach rental Makkah', 'premium bus Madinah', 'group luxury transport Saudi', 'event bus rental']
    },
    {
        slug: 'gmc-yukon-xl',
        name: 'GMC Yukon XL (Denali)',
        category: 'Luxury SUV',
        description: 'Elite comfort and massive space for the ultimate road presence.',
        longDescription: 'The GMC Yukon XL Denali is a flagship in our fleet. Renowned for its massive space and premium finishes, it’s the perfect vehicle for VIP groups and families visiting Makkah and Madinah.',
        image: '/gmc-yukon-xl-taxi.webp',
        passengers: 7,
        luggage: 5,
        year: '2024',
        features: ['Luxury Interior', 'Extra Legroom', 'VIP Experience', 'Premium Sound'],
        idealFor: ['Family Travel', 'VIP Transfers', 'Airport Services'],
        specifications: [
            { label: 'Passengers', value: '7 Adults', icon: 'Users' },
            { label: 'Luggage', value: '5 Bags', icon: 'Briefcase' },
            { label: 'Class', value: 'Luxury SUV', icon: 'Star' },
            { label: 'Type', value: 'SUV', icon: 'Car' }
        ],
        seoTitle: 'GMC Yukon XL Taxi Saudi Arabia | Luxury SUV Rental',
        seoDescription: 'GMC Yukon XL luxury SUV taxi for VIP travel in Saudi Arabia. Book premium 7-seater for Makkah and Madinah.',
        keywords: ['GMC Yukon taxi', 'luxury SUV Makkah', '7 seater taxi Saudi']
    },
    {
        slug: 'toyota-camry',
        name: 'Toyota Camry',
        category: 'Economy Sedan',
        description: 'Reliable, comfortable, and efficient city transport.',
        longDescription: 'The Toyota Camry is the backbone of reliable transportation in Saudi Arabia. Perfect for business travelers and small families who need efficiency without sacrificing comfort.',
        image: '/toyota-camry-taxi-sedan.webp',
        passengers: 4,
        luggage: 2,
        year: '2024',
        features: ['Comfortable', 'Powerful AC', 'Economic', 'City Travel'],
        idealFor: ['Business Trips', 'City Shuttles', 'Airport Transfers'],
        specifications: [
            { label: 'Passengers', value: '4 Adults', icon: 'Users' },
            { label: 'Luggage', value: '2 Bags', icon: 'Briefcase' },
            { label: 'Class', value: 'Economy', icon: 'Star' },
            { label: 'Type', value: 'Sedan', icon: 'Car' }
        ],
        seoTitle: 'Toyota Camry Taxi Saudi Arabia | Reliable Sedan Rental',
        seoDescription: 'Book a Toyota Camry taxi in Saudi Arabia. Reliable and comfortable sedan for city travel in Jeddah, Makkah, and Riyadh.',
        keywords: ['Toyota Camry taxi', 'reliable sedan Saudi', 'Camry rental Makkah']
    },
    {
        slug: 'hyundai-staria',
        name: 'Hyundai Staria',
        category: 'Family Van',
        description: 'Modern, spacious, and perfect for family pilgrimages.',
        longDescription: 'The Hyundai Staria redefining family travel with its futuristic design and cavernous interior. It is the top choice for families performing Umrah who need extra space and comfort.',
        image: '/hyundai-staria-family-taxi.webp',
        passengers: 7,
        luggage: 4,
        year: '2024',
        features: ['Modern Design', 'Spacious', 'Family Friendly', 'USB Charging'],
        idealFor: ['Family Umrah Groups', 'Airport Transfers', 'City Tours'],
        specifications: [
            { label: 'Passengers', value: '7 Adults', icon: 'Users' },
            { label: 'Luggage', value: '4 Bags', icon: 'Briefcase' },
            { label: 'Class', value: 'Executive Van', icon: 'Star' },
            { label: 'Type', value: 'Van', icon: 'Car' }
        ],
        seoTitle: 'Hyundai Staria Taxi Saudi Arabia | Family Van Rental',
        seoDescription: 'Book a Hyundai Staria family van taxi in Saudi Arabia. Modern and spacious 7-seater for Umrah pilgrimage and city tours.',
        keywords: ['Hyundai Staria taxi', 'family van Saudi', '7 seater taxi Makkah']
    },
    {
        slug: 'toyota-hiace',
        name: 'Toyota Hiace',
        category: 'Group Van',
        description: 'The standard for reliable group transportation.',
        longDescription: 'The Toyota Hiace is the ultimate workhorse for group travel. Reliable, spacious, and air-conditioned, it’s perfect for medium-sized groups and long-distance tours across the Kingdom.',
        image: '/toyota-hiace-commuter-van.webp',
        passengers: 11,
        luggage: 10,
        year: '2024',
        features: ['Group Travel', 'Spacious', 'Reliable', 'Long Distance'],
        idealFor: ['Medium Groups', 'Religious Tours', 'Corporate Shuttles'],
        specifications: [
            { label: 'Passengers', value: '11 Adults', icon: 'Users' },
            { label: 'Luggage', value: '10 Bags', icon: 'Briefcase' },
            { label: 'Class', value: 'Commuter', icon: 'Star' },
            { label: 'Type', value: 'Van', icon: 'Car' }
        ],
        seoTitle: 'Toyota Hiace Taxi Saudi Arabia | Group Van Rental',
        seoDescription: 'Reliable Toyota Hiace group van taxi in Saudi Arabia. 11-seater for medium groups, religious tours, and airport transfers.',
        keywords: ['Toyota Hiace taxi', 'group van Saudi', 'HIACE rental Makkah']
    },
    {
        slug: 'toyota-coaster',
        name: 'Toyota Coaster',
        category: 'Mini Bus',
        description: 'Premium comfort for large groups and corporate events.',
        longDescription: 'The Toyota Coaster offers a superior travel experience for larger groups. With its robust build and comfortable seating, it is perfect for corporate events and long-distance religious tours.',
        image: '/toyota-coaster-minibus.webp',
        passengers: 17,
        luggage: 20,
        year: '2024',
        features: ['Large Groups', 'Tour Bus', 'Corporate', 'Long Distance'],
        idealFor: ['Large Groups', 'Corporate Events', 'Hajj/Umrah Packages'],
        specifications: [
            { label: 'Passengers', value: '17 Adults', icon: 'Users' },
            { label: 'Luggage', value: '20 Bags', icon: 'Briefcase' },
            { label: 'Class', value: 'Minibus', icon: 'Star' },
            { label: 'Type', value: 'Bus', icon: 'Car' }
        ],
        seoTitle: 'Toyota Coaster Mini Bus Taxi Saudi Arabia | Large Group Transport',
        seoDescription: 'Book a Toyota Coaster mini bus in Saudi Arabia. Comfortable 17-seater for large groups, corporate events, and tours.',
        keywords: ['Toyota Coaster taxi', 'minibus Saudi Arabia', 'large group taxi Makkah']
    },
    {
        slug: 'hyundai-starex',
        name: 'Hyundai Starex',
        category: 'Family Van',
        description: 'Reliable and comfortable for airport and city transfers.',
        longDescription: 'The Hyundai Starex remains a favorite for its combination of reliability and space. It is a cost-effective solution for families and small groups who need a dependable ride.',
        image: '/hyundai-starex-family-van.webp',
        passengers: 7,
        luggage: 6,
        year: '2023',
        features: ['Family Friendly', 'Comfortable', 'Reliable', 'Airport Transfer'],
        idealFor: ['Airport Shuttles', 'Family Trips', 'City Commutes'],
        specifications: [
            { label: 'Passengers', value: '7 Adults', icon: 'Users' },
            { label: 'Luggage', value: '6 Bags', icon: 'Briefcase' },
            { label: 'Class', value: 'Standard Van', icon: 'Star' },
            { label: 'Type', value: 'Van', icon: 'Car' }
        ],
        seoTitle: 'Hyundai Starex Taxi Saudi Arabia | Reliable Family Van',
        seoDescription: 'Reliable Hyundai Starex family van taxi in Saudi Arabia. Perfect for airport transfers and family travel in Makkah and Madinah.',
        keywords: ['Hyundai Starex taxi', 'family van Saudi', 'Starex rental Makkah']
    }
];
