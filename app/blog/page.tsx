import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogData } from '@/lib/blogData';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Haram Taxi Blog | Umrah Travel Tips & Guides',
    description: 'Read our latest guides on booking taxis in Saudi Arabia, visiting historical sites, and travel tips for Umrah pilgrims.',
};

export default function BlogIndexPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-teal-600 text-white py-20 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Insights & Guides</h1>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">Expert advice for your spiritual journey in Saudi Arabia.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogData.map((post) => (
                        <Card key={post.slug} className="hover:shadow-lg transition-shadow border-gray-100 overflow-hidden group">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    {post.category}
                                </div>
                            </div>
                            <CardHeader>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-3 h-3" /> {post.author}
                                    </div>
                                </div>
                                <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2 min-h-[3.5rem]">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Link href={`/blog/${post.slug}`} className="w-full">
                                    <Button variant="outline" className="w-full hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 group">
                                        Read: {post.title.length > 30 ? post.title.slice(0, 30) + '...' : post.title} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
