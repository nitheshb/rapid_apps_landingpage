"use client";

import React, { useEffect, useState } from "react";
import RapidAppsHeader from "../../RapidAppsHeader";
import Link from "next/link";
import { motion } from "framer-motion";

const FoodBeverageCaseStudyPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOverDarkSection, setIsOverDarkSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;

            if (currentScrollY > 150) {
                setIsScrolled(true);
            } else if (currentScrollY < 10) {
                setIsScrolled(false);
            }

            if (docHeight - currentScrollY - winHeight < 1200) {
                setIsOverDarkSection(true);
            } else {
                setIsOverDarkSection(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            <RapidAppsHeader />

            <div className="relative">
                {/* Subnav Section - Sticky & Dynamic */}
                <div
                    className={`sticky top-[0px] md:top-[63px] z-40 transition-all duration-500 ease-in-out border-b ${(isScrolled && !isOverDarkSection)
                        ? "bg-[#fdf9f1] text-black border-black/10 py-4"
                        : "bg-black text-[#fdf9f1] pt-24 pb-6 border-transparent"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-500 ease-in-out">
                            <div className={`flex ${(isScrolled && !isOverDarkSection) ? "flex-row items-center gap-3" : "flex-col items-start gap-0"} transition-all duration-500 ease-in-out`}>
                                <Link
                                    href="/"
                                    className={`hover:opacity-80 transition-all duration-500 ease-in-out uppercase tracking-wider ${(isScrolled && !isOverDarkSection)
                                        ? "text-[14px] font-bold text-black"
                                        : "text-[16px] font-extrabold text-[#fdf9f1] -mb-3 leading-none"
                                        }`}
                                >
                                    Case Study
                                </Link>

                                <h5 className={`text-[18px] font-semibold transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}>
                                    →
                                </h5>

                                <div className={`flex items-center gap-2 transition-transform duration-500 ease-in-out origin-left ${(isScrolled && !isOverDarkSection) ? "scale-[0.78]" : "scale-100"}`}>
                                    <span className="font-extrabold leading-none text-[36px] transition-all duration-500 ease-in-out whitespace-nowrap uppercase">
                                        Cluck & Egg
                                    </span>
                                    <span className={`px-3 py-1 bg-green-600 text-white text-xs font-bold uppercase tracking-wider  ${(isScrolled && !isOverDarkSection) ? "scale-90" : "scale-100"} transition-transform`}>
                                        Food & Beverage
                                    </span>
                                </div>
                            </div>

                            <div className={`flex items-center transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "gap-2" : "gap-4 md:gap-8"}`}>
                                <div className={`flex flex-col gap-1 transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "justify-center" : ""}`}>
                                    <span className={`text-[16px] font-extrabold uppercase tracking-wider transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "opacity-0 max-h-0 overflow-hidden text-black" : "text-white max-h-[24px]"
                                        }`}>
                                        Social
                                    </span>
                                    <div className={`flex items-center ${isScrolled ? "gap-0" : "gap-2"}`}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "text-black" : "text-white"}`}>
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                        </svg>
                                        <span className={`text-sm font-medium transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "w-0 overflow-hidden opacity-0" : "text-white w-auto opacity-100"}`}>
                                            @cluckandegg
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 transition-all duration-500 ease-in-out">
                                    {(isScrolled && !isOverDarkSection) ? (
                                        <div className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                                            <img
                                                src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/653aa9bc602c2ffe66ee1c12_qrcode-icon.png"
                                                alt="QR Icon"
                                                className="w-5 h-5 object-contain contrast-200 invert"
                                            />
                                        </div>
                                    ) : (
                                        <>
                                            <div className="w-20 h-20 bg-white p-2.5 rounded-lg">
                                                <img
                                                    src="https://cdn.prod.website-files.com/616f0a7a027baab453433911/64ca77fd3a32d0e019472dd6_64beefab086f679cba91621c_qr%20(2).avif"
                                                    alt="QR Code"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="text-[16px] font-extrabold leading-tight tracking-wider text-[#fdf9f1]">
                                                CHECK <br />
                                                OUT THE <br />
                                                APP
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-px bg-white/20 mt-6"></div>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="bg-black text-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[500px] w-full flex items-center justify-center perspective-[2000px] group">
                                <div className="phone-3d-container relative w-[260px] h-[520px]" style={{ transformStyle: "preserve-3d" }}>
                                    <img
                                        src="/Food1.jpg"
                                        alt="Cluck & Egg App"
                                        className="w-full h-full object-cover rounded-[3rem] shadow-2xl border-[8px] border-[#1a1a1a]"
                                    />
                                    <div className="absolute -top-10 -left-20 w-40 h-40 bg-green-500/20 blur-3xl rounded-full" />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h1 className="text-[42px] font-bold leading-tight max-w-xl italic font-serif">
                                    Cluck & Egg drives 35% more morning orders with its proprietary delivery app
                                </h1>

                                <div className="grid grid-cols-3 gap-6 border-t border-gray-800 pt-8">
                                    <div>
                                        <div className="text-[56px] font-bold mb-2 leading-none text-green-500">
                                            55%
                                        </div>
                                        <p className="text-[18px] leading-snug text-gray-300">
                                            increase in breakfast retention
                                        </p>
                                    </div>
                                    <div>
                                        <div className="text-[56px] font-bold mb-2 leading-none text-green-500">
                                            3x
                                        </div>
                                        <p className="text-[18px] leading-snug text-gray-300">
                                            faster checkout than mobile web
                                        </p>
                                    </div>
                                    <div>
                                        <div className="text-[56px] font-bold mb-2 leading-none text-green-500">
                                            $0
                                        </div>
                                        <p className="text-[18px] leading-snug text-gray-300">
                                            ad cost for push re-engagement
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
                    <div className="prose prose-lg max-w-none text-gray-800">
                        <div className="mb-12">
                            <h6 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">About the Brand</h6>
                            <h2 className="text-3xl font-bold mb-6">Cluck & Egg is the go-to for farm-fresh, sustainable breakfast on the move.</h2>
                            <p className="mb-6">
                                Cluck & Egg started with a simple mission: better breakfast. By sourcing locally and focusing on high-quality ingredients, they&apos;ve built a cult following of health-conscious morning commuters who don&apos;t want to sacrifice quality for speed.
                            </p>
                            <blockquote className="border-l-4 border-green-600 pl-6 italic my-8 text-xl text-gray-700 bg-green-50 p-6 rounded-r-lg">
                                “Our customers are in a hurry, but they care about where their food comes from. The app is our way of respecting their time while maintaining that personal farm-to-table connection.”
                            </blockquote>
                        </div>

                        <div className="mb-12">
                            <h6 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">The Challenge</h6>
                            <h2 className="text-3xl font-bold mb-6">Cluck & Egg needed to beat the &quot;morning rush&quot; friction that killed web conversions.</h2>
                            <p className="mb-6">
                                Browsing a menu on a slow mobile website while standing in line or sitting on a train is a bad experience. Cluck & Egg needed a native environment where a customer could order their usual in under 10 seconds.
                            </p>
                        </div>

                        <div className="mb-12">
                            <h6 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">The Solution</h6>
                            <h2 className="text-3xl font-bold mb-6">A high-speed, retention-focused app built on RapidApps.</h2>
                            <p className="mb-6">
                                With RapidApps, Cluck & Egg launched an app that remembers order history, offers one-tap &quot;re-order my usual&quot;, and uses geo-fenced push notifications to remind customers to order when they are near a pick-up point.
                            </p>
                        </div>

                        <div className="mb-12">
                            <h6 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">The Results</h6>
                            <h2 className="text-3xl font-bold mb-6">Subscription-like loyalty without the subscription fees.</h2>
                            <p className="mb-6">
                                The app has turned occasional visitors into daily regulars. With a 55% increase in retention and checkout speeds that blow the old website out of the water, Cluck & Egg has secured its spot as a leader in digital F&B.
                            </p>
                            <blockquote className="border-l-4 border-black pl-6 italic my-8 text-xl text-gray-700 bg-gray-50 p-6 rounded-r-lg">
                                “We&apos;ve seen 35% growth in morning revenue since launching the app. Our push notifications have a higher open rate than any email we&apos;ve ever sent.”
                            </blockquote>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-black text-white rounded-2xl p-12 text-center mt-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 italic font-serif">
                            Grow your F&B brand with RapidApps.
                        </h2>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors gap-2"
                        >
                            Get Started
                            <span>→</span>
                        </Link>
                    </div>
                </div>
            </div>

            <footer className="bg-black text-white py-12 border-t border-gray-800 text-center">
                <p>© 2024 RapidApps Inc. • Food & Beverage Showcase</p>
            </footer>
        </div>
    );
};

export default FoodBeverageCaseStudyPage;
