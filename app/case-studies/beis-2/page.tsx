"use client";

import React, { useEffect, useState, useRef } from "react";
import RapidAppsHeader from "../../RapidAppsHeader";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const JewelleryCaseStudyPage = () => {
    const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isOverDarkSection, setIsOverDarkSection] = React.useState(false);

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
                                        Tanishq
                                    </span>
                                    <span className={`px-3 py-1 bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-wider  ${(isScrolled && !isOverDarkSection) ? "scale-90" : "scale-100"} transition-transform`}>
                                        Jewellery
                                    </span>
                                </div>
                            </div>

                            <div className={`flex items-center transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "gap-2" : "gap-4 md:gap-8"}`}>
                                <div className={`flex flex-col gap-1 transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "justify-center" : ""}`}>
                                    <span className={`text-[16px] font-extrabold uppercase tracking-wider transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "opacity-0 max-h-0 overflow-hidden text-black" : "text-white max-h-[24px]"
                                        }`}>
                                        Social
                                    </span>
                                    <a
                                        href="https://www.instagram.com/tanishqjewellery/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center ${isScrolled ? "gap-0" : "gap-2"} hover:opacity-80 transition-opacity`}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "text-black" : "text-white"}`}>
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                        </svg>
                                        <span className={`text-sm font-medium transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "w-0 overflow-hidden opacity-0" : "text-white w-auto opacity-100"}`}>
                                            @tanishqjewellery
                                        </span>
                                    </a>
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
                                        src="/Tanishq2.jpg"
                                        alt="Tanishq App"
                                        className="w-full h-full object-cover rounded-[3rem] shadow-2xl border-[8px] border-[#1a1a1a]"
                                    />
                                    <div className="absolute -top-10 -left-20 w-40 h-40 bg-[#D4AF37]/20 blur-3xl rounded-full" />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h1 className="text-[42px] font-bold leading-tight max-w-xl italic font-serif">
                                    Tanishq redefines luxury shopping with 25% higher repeat purchases via mobile
                                </h1>

                                <div className="grid grid-cols-3 gap-6 border-t border-gray-800 pt-8">
                                    <div>
                                        <div className="text-[56px] font-bold mb-2 leading-none text-[#D4AF37]">
                                            45%
                                        </div>
                                        <p className="text-[18px] leading-snug text-gray-300">
                                            higher conversion on app vs web
                                        </p>
                                    </div>
                                    <div>
                                        <div className="text-[56px] font-bold mb-2 leading-none text-[#D4AF37]">
                                            2.5x
                                        </div>
                                        <p className="text-[18px] leading-snug text-gray-300">
                                            increase in store appointments
                                        </p>
                                    </div>
                                    <div>
                                        <div className="text-[56px] font-bold mb-2 leading-none text-[#D4AF37]">
                                            30%
                                        </div>
                                        <p className="text-[18px] leading-snug text-gray-300">
                                            growth in loyalty sign-ups
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
                            <h2 className="text-3xl font-bold mb-6">Tanishq is the gold standard for premium, heritage-inspired jewellery.</h2>
                            <p className="mb-6">
                                Meet Tanishq, a Tata brand that has become India’s most trusted name for exquisite craftsmanship. From bridal masterpieces to contemporary daily wear, Tanishq designs are rooted in deep cultural heritage while embracing the needs of the modern woman.
                            </p>
                            <blockquote className="border-l-4 border-[#D4AF37] pl-6 italic my-8 text-xl text-gray-700 bg-[#fdf9f1] p-6 rounded-r-lg">
                                “We don&apos;t want our customers to feel like they’re just buying jewellery; we want them to feel like they’re preserving a memory. Our mission is to combine the warmth of a showroom with the speed of a smartphone.”
                            </blockquote>
                        </div>

                        <div className="mb-12">
                            <h6 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">The Challenge</h6>
                            <h2 className="text-3xl font-bold mb-6">Tanishq saw an app as the ultimate bridge between physical luxury and digital ease.</h2>
                            <p className="mb-6">
                                Jewellery has traditionally been an &apos;in-person&apos; purchase. The challenge wasn&apos;t just selling online; it was replicating the trust, detail-oriented browsing, and emotional connection of a physical store on a 6-inch screen.
                            </p>
                        </div>

                        <div className="mb-12">
                            <h6 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">The Solution</h6>
                            <h2 className="text-3xl font-bold mb-6">The Tanishq app is a virtual showroom prioritizing detail and storytelling.</h2>
                            <p className="mb-6">
                                Because RapidApps integrates directly with Tanishq&apos;s commerce backend, the transition to mobile was effortless. The app allows customers to zoom into the finest filigree work, track daily gold rates, and access exclusive &quot;App-Only&quot; launches.
                            </p>
                        </div>

                        <div className="mb-12">
                            <h6 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">The Results</h6>
                            <h2 className="text-3xl font-bold mb-6">Milestone purchases are rare, but the Tanishq app ensures lifelong loyalty.</h2>
                            <p className="mb-6">
                                The metrics showed a clear success: app users converted at a significantly higher rate than desktop users. More importantly, the app became the primary driver for store visits and high-value consultations.
                            </p>
                            <blockquote className="border-l-4 border-black pl-6 italic my-8 text-xl text-gray-700 bg-gray-50 p-6 rounded-r-lg">
                                “We’ve seen a 25% increase in repeat purchases. Push notifications for anniversary reminders and festival launches have turned our app into a personal concierge for our customers.”
                            </blockquote>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-black text-white rounded-2xl p-12 text-center mt-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 italic font-serif">
                            Elevate your jewellery brand with RapidApps.
                        </h2>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-white font-bold rounded-lg hover:bg-[#b8962f] transition-colors gap-2"
                        >
                            Start Building Now
                            <span>→</span>
                        </Link>
                    </div>
                </div>
            </div>

            <footer className="bg-black text-white py-12 border-t border-gray-800 text-center">
                <p>© 2024 RapidApps Inc. • Jewellery Showcase</p>
            </footer>
        </div>
    );
};

export default JewelleryCaseStudyPage;
