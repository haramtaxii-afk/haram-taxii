"use client";

import { useMemo } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function DistanceTable() {
    const routes = useMemo(() => [
        { route: "Jeddah Airport -> Makkah", km: "100 km", time: "1 hr 15 min", road: "Haramain Hwy" },
        { route: "Makkah -> Madinah", km: "450 km", time: "4 hr 30 min", road: "Hijrah Hwy" },
        { route: "Madinah -> Jeddah Airport", km: "415 km", time: "4 hr 10 min", road: "Hijrah Hwy" },
        { route: "Jeddah -> Yanbu", km: "330 km", time: "3 hr 20 min", road: "Costal Hwy" },
        { route: "Makkah -> Taif", km: "90 km", time: "1 hr 10 min", road: "Al Hada Mtn" },
    ], []);

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Distance & Duration Guide 2026</h2>
                    <p className="text-gray-500 font-light text-lg">Plan your trip accurately with our updated route data</p>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg shadow-gray-200/50">
                    <Table>
                        <TableHeader className="bg-gray-50/80 backdrop-blur-sm">
                            <TableRow className="border-b border-gray-200 hover:bg-transparent">
                                <TableHead className="w-[40%] font-bold text-gray-900 py-5 pl-6">Route</TableHead>
                                <TableHead className="font-bold text-gray-900 py-5">Distance</TableHead>
                                <TableHead className="font-bold text-gray-900 py-5">Avg Time</TableHead>
                                <TableHead className="hidden sm:table-cell font-bold text-gray-900 py-5">Highway</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {routes.map((r, i) => (
                                <TableRow key={i} className="hover:bg-brand-teal-pale/10 transition-colors border-b border-gray-100 last:border-0">
                                    <TableCell className="font-medium text-gray-700 py-4 pl-6">{r.route}</TableCell>
                                    <TableCell className="py-4 text-gray-600">{r.km}</TableCell>
                                    <TableCell className="py-4">
                                        <Badge variant="outline" className="bg-brand-teal-pale/20 text-brand-teal-dark border-brand-teal-pale/50 font-medium whitespace-nowrap">
                                            {r.time}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell text-gray-500 py-4 font-light">{r.road}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </section>
    );
}
