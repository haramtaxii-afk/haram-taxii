import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { blogData } from "@/lib/blogData";

export default function BlogTeaser() {
    // Get the latest 3 posts
    const posts = blogData.slice(0, 3).map(post => ({
        title: post.title,
        excerpt: post.excerpt,
        image: post.image,
        date: new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        link: `/blog/${post.slug}`
    }));

    return (
        <section className="py-20 bg-gray-50" aria-label="Latest Blog Posts">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-3">Travel Insights</h2>
                        <p className="text-xl text-gray-600 font-light">Latest news, guides, and updates for your spiritual journey</p>
                    </div>
                    <Link href="/blog" className="hidden md:flex items-center text-brand-teal font-semibold hover:text-brand-amber transition-colors group">
                        View All Articles <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <div key={idx} className="group flex flex-col h-full">
                            <Link href={post.link} className="flex-grow block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ring-1 ring-gray-900/5">
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-brand-teal shadow-md">
                                        {post.date}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-brand-teal transition-colors line-clamp-2 leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                                        {post.excerpt || "Read the full guide for tips on Ziyarat, best times to visit, and essential travel advice."}
                                    </p>
                                    <span className="inline-flex items-center text-brand-teal font-semibold text-sm group-hover:text-brand-amber transition-colors">
                                        Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center md:hidden">
                    <Link href="/blog" className="inline-flex items-center text-brand-teal font-bold hover:text-brand-amber transition-colors">
                        View All Articles <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
