"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SeoReadMoreProps {
    title: string;
    previewText: string;
    children: React.ReactNode;
}

export default function SeoReadMore({ title, previewText, children }: SeoReadMoreProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 my-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">{previewText}</p>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}`}>
                    {children}
                </div>
            </div>

            <div className="mt-6 flex justify-center">
                <Button
                    onClick={() => setIsExpanded(!isExpanded)}
                    variant="outline"
                    className="border-teal-500 text-teal-600 hover:bg-teal-50 group"
                >
                    {isExpanded ? (
                        <>Read Less <ChevronUp className="ml-2 w-4 h-4" /></>
                    ) : (
                        <>Read More About Saudi Taxi Services <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" /></>
                    )}
                </Button>
            </div>
        </div>
    );
}
