import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogData } from '@/lib/blogData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, User, Calendar, Tag } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import { Suspense } from 'react';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogData.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Blog Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        alternates: {
            canonical: `https://haramtaxiservice.com/blog/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            url: `https://haramtaxiservice.com/blog/${slug}`,
        },
    };
}

export async function generateStaticParams() {
    return blogData.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogData.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <Link href="/blog" className="inline-flex items-center text-teal-600 font-semibold mb-6 hover:underline">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <article className="lg:col-span-2 bg-white rounded-2xl shadow-sm overflow-hidden">
                        <div className="relative h-64 md:h-80 w-full">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                {post.category}
                            </div>
                        </div>
                        <div className="p-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" /> {post.author}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" /> {post.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Tag className="w-4 h-4" /> {post.category}
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />

                            {/* Internal Linking CTA */}
                            {post.relatedServiceSlug && (
                                <div className="mt-12 bg-teal-50 border border-teal-100 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Looking for this service?</h3>
                                    <p className="text-gray-600 mb-4">We offer professional {post.relatedServiceSlug.replace(/-/g, ' ')} with fixed prices.</p>
                                    <Link href={`/services/${post.relatedServiceSlug}`}>
                                        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                                            Book Now <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </article>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Book Your Taxi</h3>
                            <Suspense fallback={<div className="h-[400px] flex items-center justify-center text-gray-400">Loading booking form...</div>}>
                                <BookingForm />
                            </Suspense>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                                <p className="text-gray-400 mb-6 text-sm">Call our 24/7 support line for immediate assistance.</p>
                                <a href="tel:+923080628195" className="block">
                                    <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 group font-bold">
                                        Call Now
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

