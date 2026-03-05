import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Script from 'next/script';
import Image from 'next/image';
import { Plane, MapPin, Building2, Shield, Clock, Award, CheckCircle2, Users, User, Crown, Star, ArrowRight, DollarSign, Headphones, Car, Phone, Mail, Navigation, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import { getPrayerTimes } from '@/lib/prayer-times';
import PrayerTimesWidget from '@/components/PrayerTimes';
import SeoReadMore from '@/components/SeoReadMore';
import PricingPreview from '@/components/PricingPreview';
import HowItWorks from '@/components/HowItWorks';
import BlogTeaser from '@/components/BlogTeaser';
import DistanceTable from '@/components/DistanceTable';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonials from '@/components/Testimonials';
import FounderNote from '@/components/FounderNote';


export const metadata: Metadata = {
  alternates: {
    canonical: 'http://www.haramtaxii.com',
  },
};

export default async function Home() {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Haram Taxi Service - Premium Transportation",
    "url": "http://www.haramtaxii.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "http://www.haramtaxii.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const initialPrayerTimes = await getPrayerTimes('Makkah');

  const heroImages = [
    '/makkah-clock-tower.webp?v=4',
    '/madinah-prophets-mosque.webp?v=4',
    '/gmc-yukon.webp?v=4',
  ];

  const services = [
    {
      title: "Airport Transfers",
      description: "Seamless private transport from King Abdulaziz (Jeddah) & Prince Mohammad (Madinah) Airports. We offer group transport and family transport options directly to your hotel.",
      icon: Plane,
      link: "/locations/jeddah",
      image: "/jeddah-airport-taxi-service.webp",
      imageAlt: "Airport taxi transfer from Jeddah Airport to Makkah and Madinah"
    },
    {
      title: "Intercity Travel",
      description: "Comfortable, private rides between Makkah, Madinah, and Jeddah. Ideal for performing Umrah and Hajj trips with experienced drivers.",
      icon: Navigation,
      link: "/locations/makkah",
      image: "/makkah-city-taxi-transfer.webp",
      imageAlt: "City to city taxi transfer between Makkah Madinah and Jeddah"
    },
    {
      title: "Hotel to Haram Transport",
      description: "Convenient hotel to haram transfer service. Reliable haram to hotel transfer for all prayers. No waiting, no hassle.",
      icon: Building2,
      link: "/locations/madinah",
      image: "/madinah-hotel-transfer-service.webp",
      imageAlt: "Hotel to hotel transfer service in Madinah and Makkah"
    },
    {
      title: "VIP & Luxury Transport",
      description: "Exclusive VIP transport for Ziyarat tours and business. Luxury transport with GMC Yukon & Staria for premium travel experiences.",
      icon: Crown,
      link: "/fleet/gmc-yukon",
      image: "/private-vip-taxi-driver.webp",
      imageAlt: "Private VIP taxi driver service in Saudi Arabia"
    }
  ];

  const fleet = [
    {
      name: "GMC Yukon XL / Chevrolet Suburban",
      image: "/gmc-yukon-xl-taxi.webp",
      passengers: 7,
      luggage: 5,
      features: ["VIP Luxury", "Soundproof", "Privacy Glass", "2023/24 Models"],
      link: "/fleet/gmc-yukon",
      imageAlt: "GMC Yukon XL luxury taxi interior and exterior for VIPs"
    },
    {
      name: "Toyota Camry / Ford Taurus",
      image: "/toyota-camry-taxi-sedan.webp",
      passengers: 4,
      luggage: 2,
      features: ["Economic", "Comfortable", "City Travel", "New Model"],
      link: "/fleet/toyota-camry",
      imageAlt: "Toyota Camry economic taxi sedan for city travel in Jeddah"
    },
    {
      name: "Hyundai Staria / H1",
      image: "/hyundai-staria-family-taxi.webp",
      passengers: 7,
      luggage: 5,
      features: ["Family Van", "Spacious", "Dual AC", "Best for Groups"],
      link: "/fleet/hyundai-staria",
      imageAlt: "Hyundai Staria family van taxi for Umrah groups"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Round the clock service, day or night. We never sleep so you can travel."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Licensed by Transport General Authority (Naql). Fully insured vehicles."
    },
    {
      icon: DollarSign,
      title: "Best Rates",
      description: "Competitive, fixed pricing. No surge pricing, no hidden fees."
    },
    {
      icon: Headphones,
      title: "Online Support",
      description: "Instant WhatsApp support. We track your flight for delays."
    }
  ];

  const faqs = [
    {
      question: "How do I book a taxi from Jeddah Airport to Makkah?",
      answer: "You can book online through our website or contact us directly via WhatsApp. Our driver will meet you at the arrival hall with a name board for easy identification, ensuring a smooth transition from flight to car."
    },
    {
      question: "What are your rates for Makkah to Madinah taxi?",
      answer: "Our rates are competitive and fixed. The price depends on the vehicle type (Camry, Yukon, Staria). This rate includes fuel, driver, toll gates, and all applicable charges. Contact us on WhatsApp for an instant custom quote."
    },
    {
      question: "Is Haram Taxi Service available 24/7?",
      answer: "Yes, we operate 24 hours a day, 7 days a week. Whether your flight lands at 3 AM or you need an early morning ride to the Haram, our drivers are always available."
    },
    {
      question: "Do you offer Ziyarat tours in Makkah and Madinah?",
      answer: "Absolutely! We provide comprehensive Ziyarat tours visiting historical sites like Jabal al-Nour (Hira Cave), Mount Uhud, Quba Mosque, and more. Our drivers are knowledgeable about these sacred locations."
    },
    {
      question: "Can I pay with credit card?",
      answer: "Yes, we accept cash and major credit cards. Please mention your preferred payment method when booking."
    },
    {
      question: "Do you offer short distance trips within the city?",
      answer: "No, we specialize in long-distance intercity transfers between Makkah, Madinah, Jeddah, and Taif, including Makkah to Madinah taxi services and airport transfers. We do not provide short local taxi rides within the city."
    },
    {
      question: "What is the detailed taxi fare from Madinah to Badar?",
      answer: "Often pilgrims ask about the Madina to Badar taxi fare or the Madina to Badar taxi fare price. This typically depends on the vehicle you choose. We offer competitive rates for this specific Ziyarat trip. Please contact us on WhatsApp for the most up-to-date pricing."
    },
    {
      question: "Can I book an affordable private Umrah taxi online?",
      answer: "Yes, we are known as an affordable private Umrah taxi provider. You can book private taxi for Umrah pilgrims directly through our website or WhatsApp. We offer transparent pricing for all our private taxi for Umrah services."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <JsonLdFAQ faqs={faqs} />

      {/* Hero Section - Modern Clean Design */}
      <Hero images={heroImages} />

      {/* Quick Stats Bar - Glassmorphism & Gradient (Premium Feel) */}
      <section className="bg-gradient-to-r from-brand-teal-dark to-brand-teal py-12 relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

        {/* Abstract Shapes/Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-amber/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-brand-amber group-hover:scale-110 transition-transform duration-300">15k+</div>
              <div className="text-sm md:text-base font-medium opacity-90 tracking-wide uppercase text-brand-teal-pale">Happy Pilgrims</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-brand-amber group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm md:text-base font-medium opacity-90 tracking-wide uppercase text-brand-teal-pale">Service Available</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-brand-amber group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-sm md:text-base font-medium opacity-90 tracking-wide uppercase text-brand-teal-pale">Professional Drivers</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-brand-amber group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm md:text-base font-medium opacity-90 tracking-wide uppercase text-brand-teal-pale">Reliability Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes Links - SEO Strategy */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-fluid-h2 font-display font-bold text-gray-900">Most Popular Taxi Routes</h2>
            <p className="text-lg text-gray-600 mt-3 font-light">Direct & Private transfers with fixed prices. Click to book instantly.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Jeddah Airport to Makkah Taxi", link: "/services/jeddah-airport-transfer" },
              { name: "Makkah to Madinah Taxi", link: "/routes/makkah-to-madinah" },
              { name: "Madinah to Makkah Taxi", link: "/routes/madinah-to-makkah" },
              { name: "Makkah to Jeddah Airport", link: "/routes/makkah-to-jeddah-airport" },
              { name: "Jeddah Airport to Madinah", link: "/services/madinah-airport-transfer" },
              { name: "Madinah Airport to Hotel", link: "/services/madinah-airport-transfer" },
              { name: "Makkah Ziyarat Tour", link: "/services/makkah-ziyarat" },
              { name: "Madinah Ziyarat Tour", link: "/services/madinah-ziyarat" },
              { name: "Jeddah to Madinah Taxi", link: "/routes/jeddah-to-madinah" },
            ].map((route, idx) => (
              <Link key={idx} href={route.link} className="flex items-center justify-between p-5 bg-gray-50 rounded-xl hover:bg-brand-teal-pale/50 hover:border-brand-teal-light border border-transparent transition-all duration-300 group shadow-sm hover:shadow-md">
                <span className="font-semibold text-gray-700 group-hover:text-brand-teal">{route.name}</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-teal transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Service Locations - Silo Link */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-fluid-h2 font-display font-bold text-gray-900">Our Service Locations</h2>
            <p className="text-lg text-gray-600 mt-3 font-light">Professional taxi service available across major cities in Saudi Arabia.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Makkah", image: "/makkah-royal-clock-tower.webp", link: "/locations/makkah" },
              { name: "Madinah", image: "/masjid-nabawi-madinah.webp", link: "/locations/madinah" },
              { name: "Jeddah", image: "/jeddah-corniche-view.webp", link: "/locations/jeddah" },
              { name: "Taif", image: "/taif-mountains-view.webp", link: "/locations/taif" },
            ].map((city, idx) => (
              <Link key={idx} href={city.link} className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <Image
                  src={city.image}
                  alt={`${city.name} Taxi Service`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-display font-bold text-white mb-1">{city.name}</h3>
                  <div className="flex items-center text-brand-amber font-semibold text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    View Services <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/locations">
              <Button variant="outline" size="lg" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white transition-colors">
                View All Cities <MapPin className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Transparent Pricing Preview */}
      <PricingPreview />

      {/* NEW: Distance Table for SEO Snippets */}
      <DistanceTable />

      {/* NEW: How It Works */}
      <HowItWorks />

      {/* Content Block 1: Intro & Welcome - Local SEO Optimized */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">
            Top-Rated Private Umrah Taxi Service in <span className="text-brand-teal">Jeddah, Makkah & Madinah</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 font-light">
            Arriving at <strong>King Abdulaziz International Airport (JED)</strong> can be overwhelming. Long taxi queues, heat, and unreliable drivers are the last things you need after a long flight.
            <strong>Haram Taxi Service</strong> eliminates the stress. We provide premium, pre-booked transfers directly to your hotel in Makkah (near the <strong>Grand Mosque</strong> and <strong>Clock Tower</strong>) or Madinah (steps from <strong>Masjid an-Nabawi</strong>).
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 font-light">
            Whether you need a quick <strong>Jeddah to Makkah taxi</strong>, a comfortable ride for <strong>Ziyarat</strong> tours, or a VIP <strong>GMC Yukon</strong> for your family, our professional drivers ensure a safe, spiritual journey. Don&apos;t gamble with your comfort—book the #1 rated private car service in Saudi Arabia today.
          </p>
          <div>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white px-8 py-6 text-lg rounded-xl transition-all shadow-sm hover:shadow-md">
                Read More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Card Grid Layout */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Professional taxi services tailored for your spiritual journey
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 auto-rows-fr">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className={`group relative flex flex-col h-full ${index === 0 ? 'col-span-2 lg:col-span-2' :
                  index === 3 ? 'col-span-2 lg:col-span-2 md:col-start-1 lg:col-start-2' : 'col-span-1'
                  }`}
              >
                <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 flex flex-col">
                  <div className="relative h-40 sm:h-64 md:h-72 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes={index === 0 || index === 3 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6">
                      <div className="flex items-center gap-2 md:gap-4 mb-1 md:mb-3">
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-brand-teal group-hover:border-brand-teal transition-all duration-300">
                          <service.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                        </div>
                        <h3 className="text-sm md:text-2xl font-display font-bold text-white leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:p-8 flex flex-col flex-grow bg-white relative z-10">
                    <p className={`text-gray-600 text-xs md:text-base leading-relaxed mb-3 md:mb-6 flex-grow ${index !== 0 && index !== 3 ? 'hidden sm:block' : ''}`}>{service.description}</p>
                    <div className="flex items-center text-brand-teal font-bold text-xs md:text-sm tracking-wide uppercase group-hover:translate-x-2 transition-transform mt-auto">
                      Explore <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-brand-teal hover:bg-brand-teal-dark text-white px-8">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature: Why Choose Us - Asymmetrical Grid Layout */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content - Sticky */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal-pale/50 rounded-full w-fit">
                <Star className="w-4 h-4 text-brand-teal fill-current" />
                <span className="text-brand-teal-dark text-sm font-bold tracking-wide uppercase">Premium Experience</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-[1.1]">
                Why Choose <br />
                <span className="text-brand-teal">Haram Taxi?</span>
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-lg">
                We re-define religious tourism transport. No surge pricing, no delays, just pure peace of mind for your Umrah journey.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/about">
                  <Button size="lg" className="bg-brand-teal hover:bg-brand-teal-dark text-white px-8 h-14 text-lg">
                    More About Us <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <div className="flex -space-x-4 items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center relative overflow-hidden ring-2 ring-white z-0">
                      <User className="w-6 h-6 text-gray-400" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-brand-amber flex items-center justify-center text-white font-bold text-sm relative z-10 shadow-lg">
                    4.9★
                  </div>
                </div>
              </div>
            </div>

            {/* Right Grid - Bento-style Features */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`
                      p-8 rounded-3xl transition-all duration-300 group
                      ${index === 0 ? 'bg-brand-teal text-white md:col-span-2' : 'bg-gray-50 hover:bg-white hover:shadow-xl border border-gray-100 hover:border-gray-200'}
                    `}
                  >
                    <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110
                      ${index === 0 ? 'bg-white/20 text-white' : 'bg-brand-teal-pale text-brand-teal'}
                    `}>
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className={`text-2xl font-display font-bold mb-3 ${index === 0 ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                    <p className={`text-lg leading-relaxed ${index === 0 ? 'text-brand-teal-pale' : 'text-gray-600'}`}>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Chart Section - E-E-A-T */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us vs. Regular Taxis?</h2>
            <p className="text-xl text-gray-600">See the difference in quality and service</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* Fleet Showcase - Horizontal Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-fluid-h1 font-bold text-gray-900 mb-4">Our Fleet</h2>
            <p className="text-xl text-gray-600">Choose from our range of premium vehicles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleet.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-brand-teal text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Best Value
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{vehicle.name}</h3>

                  <div className="flex justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-brand-teal" />
                      <span>{vehicle.passengers} Passengers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-brand-teal" />
                      <span>{vehicle.luggage} Bags</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.features.map((feature, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-brand-teal-pale/50 text-brand-teal-dark rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button asChild className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white h-12 text-lg">
                    <Link href={vehicle.link}>
                      Book This Vehicle
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/fleet">
              <Button variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal-pale px-8 py-6 text-lg">
                View All Vehicles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Prayer Times Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-brand-teal-pale text-brand-teal-dark rounded-full text-sm font-semibold mb-6">
                Islamic Prayer Schedule
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Prayer Times for <span className="text-brand-teal">Pilgrims</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stay punctual with your prayers during your spiritual journey. Check accurate daily prayer times for Makkah, Madinah, and Jeddah. Our drivers ensure strict adherence to prayer schedules, pausing journeys for Salah when needed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/locations/makkah">
                  <Button size="lg" className="bg-brand-teal hover:bg-brand-teal-dark h-14 px-8 text-lg">
                    Ride to Makkah Haram
                  </Button>
                </Link>
                <Link href="/locations/madinah">
                  <Button size="lg" variant="outline" className="border-brand-teal/30 text-brand-teal-dark hover:bg-brand-teal-pale h-14 px-8 text-lg">
                    Ride to Masjid Nabawi
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-teal/5 rounded-[2rem] transform rotate-2"></div>
              <PrayerTimesWidget initialData={initialPrayerTimes} />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block - Detailed Description for Ranking (Collabsible) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SeoReadMore
          title="Comprehensive Guide to Taxi Services in Saudi Arabia"
          previewText="Traveling for Umrah or Hajj requires reliable transportation. Haram Taxi Service provides a premium experience for pilgrims traveling between Jeddah, Makkah, and Madinah. We understand the unique needs of visitors to the Holy Lands, offering punctual, clean, and comfortable rides."
        >
          <div className="space-y-8 mt-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Jeddah Airport to Makkah: Complete Travel Guide</h3>
              <p>
                The most common route for Umrah pilgrims is from <strong>King Abdulaziz International Airport (Jeddah) to Makkah</strong>.
                The distance is approximately 100 kilometers (62 miles), and the journey typically takes 60 to 90 minutes.
                We service all terminals:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Terminal 1 (New Airport):</strong> Used by Saudiudia, Flynas, and major international carriers. Our drivers wait at the designated pickup zone.</li>
                <li><strong>North Terminal:</strong> Used by some international airlines.</li>
                <li><strong>Hajj Terminal:</strong> Dedicated to Hajj and Umrah charter flights.</li>
              </ul>
              <p className="mt-2">
                <strong>Taxi Fare Jeddah to Makkah:</strong> Prices vary by vehicle. A standard sedan (Camry) typically costs between 200-250 SAR, while a luxury GMC Yukon XL starts from 350-400 SAR.
                Haram Taxi Service offers fixed rates so you never have to haggle.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Makkah to Madinah Taxi Services</h3>
              <p>
                The spiritual journey often continues from Makkah to Madinah. This route via the Hijrah Highway covers about 450 km (280 miles) and takes 4 to 5 hours.
                Traveling by private taxi allows you to stop at the <strong>Meeqat</strong> if you are traveling in reverse (Madinah to Makkah) to assume Ihram.
                Our vehicles are equipped with dual AC systems to handle the desert heat, ensuring a comfortable ride for children and the elderly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Historical Ziyarat Locations We Cover</h3>
              <p>
                Our drivers are also local guides. We can take you to all significant historical sites:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-2">
                <div>
                  <strong className="block text-brand-teal-dark">In Makkah:</strong>
                  <ul className="list-disc pl-5 text-sm">
                    <li><strong>Jabal al-Nour (Cave of Hira):</strong> The place of the first revelation.</li>
                    <li><strong>Jabal Thawr:</strong> The cave where the Prophet (PBUH) hid during migration.</li>
                    <li><strong>Mina, Muzdalifah, Arafat:</strong> The Hajj sites.</li>
                    <li><strong>Masjid Jinn & Ma&apos;la Graveyard.</strong></li>
                  </ul>
                </div>
                <div>
                  <strong className="block text-brand-teal-dark">In Madinah:</strong>
                  <ul className="list-disc pl-5 text-sm">
                    <li><strong>Masjid Quba:</strong> The first mosque in Islam.</li>
                    <li><strong>Masjid Qiblatain:</strong> The mosque of the two Qiblas.</li>
                    <li><strong>Mount Uhud:</strong> Site of the famous battle and the archers&apos; hill.</li>
                    <li><strong>The Seven Mosques (Khandaq).</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Regulations (Naql & TGA)</h3>
              <p>
                All our vehicles are registered with the <strong>Transport General Authority (TGA)</strong> in Saudi Arabia.
                We utilize the &quot;Wasl&quot; platform for tracking to ensure passenger safety. Avoid illegal &quot;Kedana&quot; (private freelance drivers)
                as they may not have insurance or proper authorization. Choosing Haram Taxi Service guarantees a legal, insured, and safe trip.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why We Are Rated #1 for Families</h3>
              <p>
                Traveling with family requires extra care. We provide child seats upon request (please book in advance).
                Our GMC Yukon XL and Hyundai Staria vans have ample luggage space for strollers and wheelchairs.
                We also offer a &quot;Ladies Only&quot; coordination service where possible for female solo travelers requesting extra privacy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Umrah & Hajj Travel Agency Services</h3>
              <p>
                While we specialize in <strong>taxi services</strong>, we operate with the efficiency of a top-tier <strong>Umrah travel agency</strong>.
                If you are looking for <strong>Umrah tours and travels</strong> or need a reliable <strong>Hajj travel agency near me</strong>, our transport solutions are the backbone of a successful pilgrimage.
                We facilitate <strong>Umrah trips</strong>, <strong>Hajj tours</strong>, and complete <strong>Umrah and Ziyarat packages</strong> by handling all your ground transportation needs.
                Whether you need <strong>transport for Ziyarat</strong> or a <strong>luxury transport</strong> experience for your <strong>VIP transport</strong> requirements, we are your trusted partner for <strong>Islamic travel</strong> and <strong>Muslim travel</strong> logistics in Saudi Arabia.
              </p>
            </div>
          </div>
        </SeoReadMore>
      </section>

      {/* Testimonials — Social Proof (Psychology Principle #2) */}
      <Testimonials />

      {/* Google Map Embed - Local SEO Signal */}
      <section className="py-0 relative h-[400px] w-full bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14849.563914856096!2d39.172778!3d21.543333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737bfe2bc!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1709228492000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Haram Taxi Service Location"
          className="absolute inset-0"
        ></iframe>
        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-sm hidden md:block">
          <h3 className="font-bold text-gray-900">Haram Taxi Service</h3>
          <p className="text-sm text-gray-600">Serving Jeddah, Makkah, and Madinah</p>
          <div className="mt-2 flex items-center text-brand-teal text-sm font-semibold">
            <MapPin className="w-4 h-4 mr-1" /> Available 24/7 across Saudi Arabia
          </div>
        </div>
      </section>

      {/* NEW: Founder's Note - Human Connection & Trust */}
      <FounderNote />

      {/* NEW: Blog / News Teaser for Google News Ranking */}
      <BlogTeaser />

      {/* FAQ Section - Clean Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 px-6 rounded-xl border-0"
              >
                <AccordionTrigger className="text-lg font-semibold text-gray-900 py-6 hover:text-brand-teal text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section - Modern Split Design */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Book Your Ride?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience professional taxi service in Saudi Arabia. Book now and travel with comfort and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-brand-teal hover:bg-brand-teal-dark text-white px-8 py-6 text-lg">
                  Book Now
                </Button>
              </Link>
              <a
                href="https://wa.me/923132222436?text=Hello%20Haram%20Taxi%20Service%2C%20I%20would%20like%20to%20book%20a%20ride."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-brand-teal hover:bg-gray-100 hover:text-brand-teal-dark px-8 py-6 text-lg border-2 border-white">
                  <MessageCircle className="w-5 h-5 mr-2 inline-block" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
