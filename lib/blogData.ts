export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    category: string;
    image: string;
    relatedServiceSlug?: string; // Links to service silo
}

export const blogData: BlogPost[] = [
    {
        slug: "how-to-book-taxi-jeddah-airport-to-makkah",
        title: "How to Book a Taxi from Jeddah Airport to Makkah (Step-by-Step Guide)",
        excerpt: "Avoid airport scams and long queues. Learn the safest and most affordable way to travel from KAIA to your hotel in Makkah.",
        content: `
            <h2>Getting from Jeddah Airport to Makkah for Umrah</h2>
            <p>Arriving at King Abdulaziz International Airport (JED) can be overwhelming, especially for first-time pilgrims. This guide breaks down exactly how to secure reliable transport to Makkah.</p>

            <h3>1. Pre-Book Your Ride</h3>
            <p>The best way to ensure a tough-free start to your Umrah is to book a private taxi in advance. Services like <strong>Haram Taxi</strong> offer fixed rates, so you don't have to haggle with drivers at the curb.</p>

            <h3>2. Meet & Greet Service</h3>
            <p>Unlike standard taxis, pre-booked services will have a driver waiting for you in the arrivals hall with a name board. This eliminates confusion and saves time.</p>

            <h3>3. Choose the Right Vehicle</h3>
            <ul>
                <li><strong>Solo/Couple:</strong> A standard sedan (Camry) is cost-effective.</li>
                <li><strong>Family (4-7 Pax):</strong> Opt for a GMC Yukon or Hyundai Staria for ample luggage space.</li>
            </ul>

            <h3>Frequently Asked Questions</h3>
            <div class="faq-block">
                <strong>Q: How much does a taxi cost?</strong>
                <p>A: Prices start around 200 SAR for a sedan and go up to 400 SAR for a GMC, depending on the season.</p>
                
                <strong>Q: How long is the drive?</strong>
                <p>A: The journey typically takes 60 to 90 minutes via the Haramain Highway.</p>
            </div>

            <div class="cta-box">
                <p>Need a reliable ride? <a href="/services/jeddah-airport-transfer">Book your Jeddah Airport Transfer now</a>.</p>
            </div>
        `,
        date: "2026-02-10",
        author: "Haram Taxi Team",
        category: "Travel Guides",
        image: "/jeddah-airport-taxi-service.webp",
        relatedServiceSlug: "jeddah-airport-transfer"
    },
    {
        slug: "best-ziyarat-places-makkah-history",
        title: "Top 5 Historical Ziyarat Places in Makkah You Must Visit",
        excerpt: "Discover the spiritual history of Makkah. A guide to Cave Hira, Mount Thawr, and other sacred sites effectively.",
        content: `
            <h2>Exploring the Sacred History of Makkah</h2>
            <p>Your Umrah is not extensive without visiting the historical sites (Ziyarat) where significant events in Islamic history took place.</p>

            <h3>1. Jabal al-Nour (Cave of Hira)</h3>
            <p>The site of the first revelation. It's a steep climb, so plan for early morning or late evening.</p>

            <h3>2. Jabal Thawr</h3>
            <p>The cave where Prophet Muhammad (PBUH) and Abu Bakr (RA) hid during the migration to Madinah.</p>

            <h3>3. Jannat al-Mu'alla</h3>
            <p>The cemetery where many of the Prophet's family, including his wife Khadijah (RA), are buried.</p>

            <h3>How to Visit These Sites?</h3>
            <p>The easiest way is to hire a dedicated taxi for a 3-4 hour tour. Drivers know the locations and the history.</p>

            <div class="cta-box">
                <p>Book a guided tour today: <a href="/services/makkah-ziyarat">Makkah Ziyarat Taxi Service</a>.</p>
            </div>
        `,
        date: "2026-02-12",
        author: "Haram Taxi Team",
        category: "Ziyarat",
        image: "/makkah-city-taxi-transfer.webp",
        relatedServiceSlug: "makkah-ziyarat"
    },
    {
        slug: "safety-tips-umrah-taxi-travel",
        title: "Safety Tips for Taxi Travel During Umrah",
        excerpt: "Stay safe and comfortable on your journey. Tips on choosing licensed drivers, tracking your ride, and avoiding illegal taxis.",
        content: `
            <h2>Staying Safe on Saudi Roads</h2>
            <p>While Saudi Arabia is very safe, it's important to choose reliable transportation.</p>

            <h3>Verify the Driver</h3>
            <p>Ensure your driver works for a licensed company. Avoid undocumented "Kedana" drivers who illegal offer rides at airports.</p>

            <h3>Check the Vehicle</h3>
            <p>Look for clean, well-maintained cars with functioning AC. In the desert heat, AC is a safety necessity, not just a luxury.</p>

            <h3>Share Your Ride</h3>
            <p>Services like Haram Taxi allow you to share your trip details with family for peace of mind.</p>
        `,
        date: "2026-02-05",
        author: "Haram Taxi Team",
        category: "Travel Tips",
        image: "/gmc-yukon-xl-taxi.webp",
        relatedServiceSlug: "luxury-umrah-transport"
    }
];
