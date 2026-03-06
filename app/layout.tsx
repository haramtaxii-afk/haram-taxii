import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLdBreadcrumb from '@/components/JsonLdBreadcrumb';
import JsonLdOrganization from '@/components/JsonLdOrganization';
import JsonLdLocalBusiness from '@/components/JsonLdLocalBusiness';
import JsonLdService from '@/components/JsonLdService';

const inter = localFont({
  src: [
    { path: '../public/fonts/inter-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/inter-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/inter-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/inter-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = localFont({
  src: [
    { path: '../public/fonts/playfair-display-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/playfair-display-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/playfair-display-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/playfair-display-latin-700-normal.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/playfair-display-latin-800-normal.woff2', weight: '800', style: 'normal' },
    { path: '../public/fonts/playfair-display-latin-900-normal.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.haramtaxii.com'),
  title: {
    default: 'No 1. Private Umrah Taxi Service in Saudi Arabia | Jeddah to Makkah, Madinah',
    template: '%s | Haram Taxi Service'
  },
  description: 'Book the most reliable Umrah taxi service in Saudi Arabia. #1 Private Cab for Jeddah to Makkah, Makkah to Madinah, and Airport Transfers. 24/7 VIP Service with GMC, Camry, Staria. Instant WhatsApp Booking!',
  keywords: [
    // Primary Local SEO Keywords
    'online taxi service Saudi Arabia', 'taxi service Makkah', 'taxi service Madinah', 'taxi service Jeddah',
    'Haram Taxi Service', 'Saudi Arabia taxi booking', 'book taxi Saudi Arabia',
    'haram taxi', 'taxi haram', 'al haram taxi', 'haram transport', 'al haram cabs',

    // City-Specific & Intercity Keywords
    'Makkah taxi', 'Madinah taxi', 'Jeddah taxi', 'Taif taxi',
    'taxi in Makkah', 'taxi in Madinah', 'taxi in Jeddah',
    'makkah to madinah taxi', 'madinah to makkah taxi', 'jeddah to makkah taxi', 'jeddah to madinah taxi',
    'makkah to jeddah taxi', 'madinah to jeddah taxi', 'makkah to madina taxi', 'medina to makkah taxi',
    'taxi from madinah to makkah', 'taxi from makkah to madinah', 'taxi from jeddah to makkah',
    'taxi jeddah to makkah', 'taxi jeddah to madinah', 'taxi makkah to madinah', 'taxi madinah to makkah',
    'madinah to badar taxi fare', 'madina to badar taxi fare price', 'taxi jeddah', 'taxi makkah',
    'taxi from medina to mecca', 'taxi from mecca to medina', 'medina to mecca taxi fare',

    // Umrah & Pilgrim Specific
    'affordable private umrah taxi', 'book private taxi for umrah', 'private taxi for umrah pilgrims',
    'taxi for umrah', 'private taxi for umrah', 'umrah taxi service near me', 'best umrah taxi service',
    'private car service for umrah', 'umrah taxi service', 'private umrah taxi', 'umrah taxi service in saudi arabia',
    'umrah taxi services', 'umrah taxis', 'luxury umrah cab',

    // Fare & Pricing Keywords
    'madinah to makkah taxi fare', 'taxi fare from madinah to makkah', 'taxi fare from medina to mecca',
    'makkah to madinah taxi fare', 'taxi price from makkah to madinah', 'jeddah to makkah taxi price',
    'taxi cost from makkah to madinah', 'how much taxi from makkah to madinah', 'makkah to madinah taxi cost',

    // Airport Transfer Keywords
    'Jeddah airport taxi', 'Madinah airport taxi', 'airport transfer Jeddah',
    'Jeddah to Makkah taxi', 'Madinah to Makkah taxi', 'taxi from makkah to jeddah airport',
    'makkah to jeddah airport taxi', 'jeddah airport to madinah taxi', 'jeddah airport to haram taxi fare',

    // Service Type & Vehicle Keywords
    'online taxi booking Saudi Arabia', '24/7 taxi service', 'professional taxi drivers',
    'VIP taxi Saudi Arabia', 'GMC Yukon taxi Makkah', 'Toyota Camry taxi Saudi Arabia', 'staria taxi',
    'coaster bus for rent', 'rent coaster bus', 'bus coaster for rent', 'family taxi in makkah',
    'chauffeur service in mecca', 'cab service in makkah', 'online taxi in makkah',
    'best taxi service in makkah', 'online taxi madinah to makkah',

    // General Saudi Taxi & Service Keywords
    'taxi in saudi arabia', 'taxi services in saudi arabia', 'ksa taxi service',
    'saudi taxi', 'taxi saudi arabia', 'taxi saudi', 'taxi company', 'best taxi service in saudi arabia',
    'taxi service ksa', 'saudi taxi number', 'cab service in saudi arabia',
    'online taxi service in saudi arabia', 'taxi service', 'taxis service',
    'saudi taxi service', 'taxi service saudi arabia', 'ksa taxi', 'saudi taxi companies',
    'saudi taxi company', 'taxi companies in saudi arabia', 'taxi company in saudi arabia',
    'taxis in saudi arabia', 'taxi services', 'taxi', 'reliable taxi service',
    'private taxi service in riyadh', 'online taxi in saudi arabia', 'saudi taxi booking',
    'online taxi saudi arabia', 'saudi online taxi', 'taxi business in saudi arabia',
    'saudi airport taxi', 'saudi cab', 'cab in saudi', 'taxi in saudi', 'saudi taxis',
    'how to book taxi in saudi arabia', 'saudi cab service', 'saudi arabia taxi company',
    'taxi booking', 'private taxi', 'taxi booking in saudi arabia', 'saudi taxi car',
    'saudi arab taxi',
    'airport transfer', 'private transport', 'group transport', 'family transport',
    'VIP transport', 'luxury transport', 'hotel to haram transport', 'haram to hotel transfer',

    // Arabic Keywords
    'تاكسي السعودية', 'سيارات اجرة', 'تاكسي اجره', 'شركة أجرة تاكسي', 'سيارات تكسي',
    'أجرة تاكسي', 'تكسي السعودية', 'تكسي اجره', 'تاكسي السعوديه', 'سيارة اجرة السعودية',
    'تاكسي في السعودية', 'أسعار سيارات الأجرة في السعودية', 'تاكسي مطار جدة', 'تاكسي جدة',
    'تاكسي من مكة الى جدة', 'تاكسي من مطار جدة الى مكة', 'تكسي أجرة', 'رقم شركة أجرة جدة',
    'سيارات أجرة خاصة',

    // Historical & Sightseeing Keywords
    'top 10 beautiful places in saudi arabia', 'beautiful places in saudi arabia',
    'masjid quba', 'masjid al haram', 'quba mosque', 'quba mosque madinah',
    'masjid quba madinah', 'quba mosque medina', 'masjid quba madinah history',
    'masjid al quba history', 'masjid quba history', 'mosque of quba', 'masjid e quba history',
    'masjid al quba', 'quba medina', 'quba mosque saudi', 'mecca grand mosque',
    'grand mosque mecca', 'masjid al-haram', 'masjid al quba madinah', 'sacred mosque in mecca',
    'saudi arabia beautiful places', 'history masjid quba', 'beautiful place in saudi arabia',
    'al haram mosque', 'masjid quba saudi arabia', 'masjid e quba', 'haram saudi arabia',
    'great mosque of mecca', 'makkah grand mosque', 'first mosque in islam',
    'the great mosque of mecca', 'great mosque mecca', 'haram mecca', 'haram mosque',
    'the grand mosque mecca', 'quba mosque saudi arabia', 'first mosque of islam',
    'mosque of mecca', 'masjid al haram capacity', 'first masjid of islam',
    'al masjid al haram', 'quba mosque history', 'grand mosque saudi arabia',
    'grand mosque mecca saudi arabia', 'masjid quba first mosque', 'quba masjid history',
    'grand mosque in mecca', 'grand mosque in makkah', 'significance of masjid quba',
    'masjid al haram mecca', 'masjid quba medina', 'mecca mosque', 'mosque quba',
    'grand mosque makkah', 'masjid quba significance', 'masjid e quba madinah',
    'grand mosque at mecca', 'masjid cuba', 'al rajhi mosque', 'masjid quba saudi',
    'the quba mosque', 'first masjid in islam', 'makkah ziyarat places',
    'saudi arabia places to visit', 'grand mosque of mecca', 'places to visit in ksa',
    'saudi arabia most beautiful places', 'masjid quba location', 'mecca masjid al haram',
    'masjid al haram history', 'masjid kuba', 'masjid al-quba', 'masjid quba madina',
    '1st mosque in islam', 'vehicle service jeddah to makkah', 'why is it called masjid al haram',
    'when was masjid al haram built', 'masjid e quba saudi arabia', 'saudi arabia mosque',
    'the great mosque mecca', 'best places in saudi arabia', 'beautiful places of saudi arabia',
    'masjid al-haram history', 'masjid a quba', 'what is the haram', 'the grand mosque in mecca',
    'first mosque in medina', 'saudi beautiful places', 'the grand mosque of mecca',
    'masjid al-haram mecca', 'al-masjid al-haram', 'masjid al quba saudi arabia',
    '1st mosque of islam', 'saudi arabia masjid al haram', 'where is masjid quba',
    'masid quba', 'quba mosque medina saudi arabia', 'best places to visit in saudi arabia',
    'masjid al-haram in mecca', 'mosque in mecca', 'masjid haram',
    'most beautiful place in saudi arabia', 'mecca\'s grand mosque', 'first masjid in madina',
    'first mosque in madina', 'history of masjid e quba', 'great mosque in mecca',
    'al haram mosque mecca', 'why is masjid al haram called haram', 'why is it called masjid al-haram',
    'masjide quba', 'al haram', 'old original masjid quba', 'quba mosque location',
    'masjid al haram mecca saudi arabia', 'mesjid quba', 'saudi arabia beautiful place',
    'prophets mosque', 'meaning of masjid al haram', 'ziyarat in makkah', 'al haram mecca',
    'wadi al jinn', 'quba masjid madinah', 'first mosque built in islam', 'ziyarat makkah',
    'importance of masjid e quba', 'the holy mosque in mecca', 'al-haram mosque',
    'who built masjid al haram', 'ziyarat places in makkah', 'quba masjid',
    'makkah ziyarat places list', 'mekkah foul', 'cave hira hike time', 'quba avenue',
    'masjid al khandaq', 'masjid haram capacity', 'masjid e quba location',
    'quba walkway', 'first islamic mosque', '1st masjid of islam', 'masjid quba is also known as',
    'first mosque in makkah', 'masjid al haram in mecca', 'where is quba mosque located',
    'prophet\'s mosque', 'holy mosque in mecca', 'where is masjid e quba', 'masjid e haram history',
    'mosque mecca', 'masjid al haram arabic', 'haram masjid', 'wadi jinn in saudi arabia',
    'mecca saudi arabia mosque', 'jannat-ul baqi map', 'masjid quba in madina',
    'masjid al haram facts', 'where was first mosque built', 'islam first mosque',
    'quba madinah', 'hejaz railway museum', 'masjid al haram name meaning',

    // Additional Service & Location Specific
    'madinah airport to masjid nabawi', '7 seater taxi near me', 'saudi umrah sim packages',
    'gharameel stargazing', 'medina airport cab', 'medina airport taxi', 'madina chauffeur service',
    'private transport umrah', 'makkah to madinah coaster', 'makkah to jeddah staria', 'quba mosque saudi',
    'makkah to madinah staria', 'chauffeur service madina', 'chauffeur service in madina',
    'jeddah airport taxi booking', 'beautiful places in saudi', 'umrah car service', 'medina airport pickup',
    'umrah taxi pricing', 'airport transfers saudi arabia', 'professional airport transfers in jeddah',
    'umrah taxi jeedah', 'umrah airport transfer', 'jeddah to makkah coaster', 'makkah to jeddah coaster',
    'gmc taxi', 'taxi near me', 'umrah taxi madinah', 'ksa taxi', 'medina airport car service',
    'taxi cab companies near me', 'chauffeur from jeddah to madinah', 'jeddah chauffeur service',
    'taxi service near me', 'chauffeur service jeddah', 'umrah taxi makkah', 'taxi ksa',
    'madinah airport taxi', 'how to perform umrah', 'holy places during umrah', 'mosque quba',
    'madinah jeddah umrah transport', 'chauffeur services', 'makkah hotel to madinah hotel taxi',
    'jeddah airport to makkah taxi fare', 'madinah taxi service', 'holy places umrah',
    'chauffeur service in jeddah', 'to performed umrah', 'best shawarma in makkah',
    'taxi company near me', 'taxi in ksa', 'cheap taxi service in makkah', 'jeddah to makkah staria',
    'jeddah to makkah', 'madinah to jeddah taxi', 'vip airport transfers in mecca',
    'dammam chauffeur service', 'jeddah airport to makkah car service', 'madinah taxi',
    'chauffeur service in dammam', 'how is umrah performed', 'uber from jeddah airport to makkah',
    'jeddah airport to makkah bus', 'umrah ziarah taxi', 'performing umrah', 'hyundai starex 7 seater',
    'uber jeddah airport to makkah', 'madina taxi service', 'uber jeddah to makkah',
    'jeddah airport to makkah bus fare', 'mecca chauffeur service', 'private taxi near me',
    'taxi service dammam', 'cab service near me', 'first mosque in medina',
    'jeddah to madinah taxi cost', 'jeddah airport to mecca by bus', 'jeddah airport to mecca taxi fare',
    'chauffeur service mecca', 'how do you perform umrah', 'saptco jeddah airport to makkah',
    'taxi cab service near me', 'chauffeur service dammam', 'jeddah airport to makkah taxi',
    'madinah to jeddah airport taxi fare', 'cab service', 'jeddah airport to makkah distance',
    'riyadh to jeddah taxi', 'saudi sim for umrah', 'saptco madinah to makkah fare',
    'cab services in saudi arabia', 'taxi services near me', 'near me taxi service',
    'pick and drop jeddah', 'taxi services in jeddah', 'taxi fare jeddah airport to makkah 2025 price sar',
    'umrah taxi services in saudi arabia', 'makkah madina taxi service', 'mecca taxi service',
    'where was the first mosque built', 'taxis in jeddah', 'makkah to madinah taxi service',
    'first mosque built in islam', 'premium transportation in saudi arabia', 'online taxi booking near me',
    'makkah to jeddah taxi fare', 'taxi from jeddah airport to makkah', 'grand mosque saudi',
    'private transfer from jeddah to madinah', 'jeddah to mecca', 'hajj umrah taxi',
    'madinah to makkah taxi services', 'mekkah foul', 'makkah shawarma', 'alula taxi service',
    'alula taxi', 'taxi van', 'how do i get a ride from medina airport?', 'airport pickup for umrah pilgrims',
    'cab services near me', 'chacha taxi service', 'taxi services in riyadh', 'taxi services in makkah',
    'taxi near me now', 'uber from jeddah to makkah', 'nearest cab service', 'jeddah taxi company',
    'first mosque in makkah', 'prophet\'s mosque', 'jeddah to makkah taxi fare',
    'saudi arabia tourist dress code', 'cheap taxi service near me', 'saudi arabia dress code',
    'cheap cab service near me', 'jeddah airport to makkah taxi service', 'umrah taxi service online',
    'abha cable car tickets price', 'from jeddah to makkah', 'jeddah to makkah taxi',
    'best shawarma makkah', 'shawarma makkah latest', 'private taxi booking',
    'is uber available in madinah airport?', 'online taxi service in riyadh', 'mobily umrah package',
    'near taxi service', 'makkah radio taxi', 'top rated airport transfer services near me',
    'taxis near me', 'near me taxi', 'premium transportation services in saudi arabia',
    'makkah taxi company', 'the first mosque in islam', 'umrah cabs', 'taxi stand near me',
    'cab services', 'cab number near me', 'taxi umrah',
  ],
  authors: [{ name: 'Haram Taxi Service' }],
  creator: 'Haram Taxi Service',
  publisher: 'Haram Taxi Service',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'No 1. Private Umrah Taxi Service in Saudi Arabia | Book Now',
    description: 'Trusted by thousands. Book your Umrah taxi from Jeddah to Makkah, Madinah to Makkah. VIP & Economy cars available. 24/7 Service.',
    url: 'https://www.haramtaxii.com',
    siteName: 'Haram Taxi Service',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.haramtaxii.com/makkah-clock-tower-new.png',
        width: 1200,
        height: 630,
        alt: 'Haram Taxi Service - Online Taxi Booking in Saudi Arabia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Taxi Service in Saudi Arabia | Book Now',
    description: 'Professional taxi service in Makkah, Madinah, Jeddah. Airport transfers, city rides. Available 24/7.',
    images: ['https://www.haramtaxii.com/makkah-clock-tower-new.png'],
    creator: '@haramtaxi',
  },

  verification: {
    google: '_LhTM9CZVpRRR6sk4Fnp3m1ftXsR25x-HISXcXfFOtE',
  },
  category: 'Transportation Services',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f766e' }, // Brand Teal
    { media: '(prefers-color-scheme: dark)', color: '#0f766e' },
  ],
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4J112C1K73"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4J112C1K73');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`} suppressHydrationWarning>
        <Navbar />
        <JsonLdBreadcrumb />
        <JsonLdOrganization />
        <JsonLdLocalBusiness />
        <JsonLdService />
        {children}
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
