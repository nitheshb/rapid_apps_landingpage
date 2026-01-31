"use client";

import React, { useEffect, useState, useRef } from "react";
import RapidAppsHeader from "../../RapidAppsHeader";
import Link from "next/link";
import Script from "next/script";

import { motion, useScroll, useTransform } from "framer-motion";

const BeisCaseStudyPage = () => {
    const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
    const [isScrolled, setIsScrolled] = React.useState(false);

    const [isOverDarkSection, setIsOverDarkSection] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;

            // Toggle compact style with hysteresis to prevent shaking
            // Buffer zone > layout shift (~100px)
            if (currentScrollY > 150) {
                setIsScrolled(true);
            } else if (currentScrollY < 10) {
                setIsScrolled(false);
            }

            // Check if over dark section (See More Case Studies + Footer)
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
                    {/* Content Container */}
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-500 ease-in-out">
                            <div className={`flex ${(isScrolled && !isOverDarkSection) ? "flex-row items-center gap-3" : "flex-col items-start gap-0"} transition-all duration-500 ease-in-out`}>
                                {/* Top Label */}
                                <Link
                                    href="/case-studies"
                                    className={`hover:opacity-80 transition-all duration-500 ease-in-out uppercase tracking-wider ${(isScrolled && !isOverDarkSection)
                                        ? "text-[14px] font-bold text-black"
                                        : "text-[16px] font-extrabold text-[#fdf9f1] -mb-3 leading-none"
                                        }`}
                                >
                                    Case Study
                                </Link>

                                {/* Arrow - Visible only when scrolled */}
                                <h5 className={`case-sduty-individual_subnav-arrow text-[18px] font-semibold transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}>
                                    →
                                </h5>

                                {/* Bottom Row */}
                                <div className={`flex items-center gap-2 transition-transform duration-500 ease-in-out origin-left ${(isScrolled && !isOverDarkSection) ? "scale-[0.78]" : "scale-100"}`}>
                                    <span className="font-extrabold leading-none text-[36px] transition-all duration-500 ease-in-out whitespace-nowrap">
                                       Cluck And Egg
                                    </span>
                                    <span className={`px-3 py-1 bg-[#F2FC54] relative bottom-2 left-2 text-black text-xs font-bold uppercase tracking-wider  ${(isScrolled && !isOverDarkSection) ? "scale-90" : "scale-100"} transition-transform`}>
                                        Food
                                    </span>
                                </div>
                            </div>

                            <div className={`flex items-center transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "gap-2" : "gap-4 md:gap-8"}`}>
                                {/* Social Link */}
                                <div className={`flex flex-col gap-1 transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "justify-center" : ""}`}>
                                    <span className={`text-[16px] font-extrabold uppercase tracking-wider transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "opacity-0 max-h-0 overflow-hidden text-black" : "text-white max-h-[24px]"
                                        }`}>
                                        Social
                                    </span>
                                    <a
                                        href="https://www.instagram.com/beis/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center ${isScrolled ? "gap-0" : "gap-2"} hover:opacity-80 transition-opacity`}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={`transition-colors duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "text-black" : "text-white"}`}
                                        >
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                        </svg>
                                        <span className={`text-sm font-medium transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "w-0 overflow-hidden opacity-0" : "text-white w-auto opacity-100"}`}>
                                           Cluck And Egg
                                        </span>
                                    </a>
                                </div>

                                {/* Website Link */}
                                <div className={`flex flex-col gap-1 transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "justify-center" : ""}`}>
                                    <span className={`text-[16px] font-extrabold uppercase tracking-wider transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "opacity-0 max-h-0 overflow-hidden text-black" : "text-white max-h-[24px]"
                                        }`}>
                                        Website
                                    </span>
                                    <a
                                        href="https://beistravel.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center ${isScrolled ? "gap-0" : "gap-2"} hover:opacity-80 transition-opacity`}
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={`transition-colors duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "text-black" : "text-white"}`}
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="2" x2="22" y1="12" y2="12" />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                        <span className={`text-sm font-medium transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "w-0 overflow-hidden opacity-0" : "text-white w-auto opacity-100"}`}>
                                           Cluck And Egg
                                        </span>
                                    </a>
                                </div>

                                {/* QR Code Section */}
                                <div className={`flex items-center gap-3 transition-all duration-500 ease-in-out ${(isScrolled && !isOverDarkSection) ? "border-black/20" : "border-[#fdf9f1]/20"
                                    }`}>
                                    {(isScrolled && !isOverDarkSection) ? (
                                        // Compact QR Icon for Scrolled State
                                        <div className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                                            <img
                                                src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/653aa9bc602c2ffe66ee1c12_qrcode-icon.png"
                                                alt="QR Icon"
                                                className="w-5 h-5 object-contain contrast-200 invert"
                                            />
                                        </div>
                                    ) : (
                                        // Full QR Section for Top State
                                        <>
                                            <div className="w-20 h-20  p-2.5">
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

                        {/* Dividing Line Aligned with Content */}
                        <div className="w-full h-px bg-white opacity-100"></div>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="bg-black text-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* Left Column: Images & 3D */}
                            <div className="relative h-[500px] w-full flex items-center justify-center perspective-[2000px] group">
                                {/* Mobile Fallback Image - Visible on small screens */}
                                <div className="md:hidden w-full h-full absolute inset-0 z-20">
                                    <img
                                        src="https://cdn.prod.website-files.com/616f0a7a027baab453433911/64ca778d1dfd564c967e170e_64beefb1d209704efe319719_atf%20(3).avif"
                                        loading="lazy"
                                        alt="Featured image"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>

                                {/* Desktop 3D Experience - Interactive */}
                                <div
                                    className="hidden md:block absolute inset-0 z-10 w-full h-full"
                                    onMouseMove={(e) => {
                                        const { currentTarget, clientX, clientY } = e;
                                        const { left, top, width, height } = currentTarget.getBoundingClientRect();
                                        const centerX = left + width / 2;
                                        const centerY = top + height / 2;

                                        // Calculate rotation based on mouse distance from center
                                        // Max rotation: +/- 30 deg X, +/- 30 deg Y
                                        const rotateX = ((clientY - centerY) / height) * 40;
                                        const rotateY = ((clientX - centerX) / width) * 60; // Increased to allow right rotation

                                        const container = currentTarget.querySelector('.phone-3d-container') as HTMLElement;
                                        if (container) {
                                            // Reduced base offset (-10deg) so positive mouse values can overcome it and rotate right
                                            container.style.transform = `translate(-50%, -50%) rotateX(${-10 - rotateX}deg) rotateY(${-10 + rotateY}deg)`;
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        const container = e.currentTarget.querySelector('.phone-3d-container') as HTMLElement;
                                        if (container) {
                                            container.style.transform = "translate(-50%, -50%) rotateX(-10deg) rotateY(-10deg)";
                                        }
                                    }}
                                >
                                    {/* Floating Phone Composition */}
                                    <div
                                        className="phone-3d-container absolute top-1/2 left-1/2 w-[260px] h-[520px] z-20 transition-transform duration-500 ease-out"
                                        style={{
                                            transform: "translate(-50%, -50%) rotateX(-10deg) rotateY(-10deg)",
                                            transformStyle: "preserve-3d",
                                            willChange: "transform"
                                        }}
                                    >
                                        {/* Push Notification 1 (Top Left) */}
                                        <div
                                            className="absolute top-[15%] -left-[25%] w-[190px] z-30 transition-all duration-300 ease-out cursor-pointer"
                                            style={{
                                                transform: hoveredItem === 'push1' ? "translateZ(120px) scale(1.1)" : (hoveredItem ? "translateZ(40px) scale(0.95)" : "translateZ(80px)"),
                                                opacity: hoveredItem && hoveredItem !== 'push1' ? 0.4 : 1,
                                                filter: hoveredItem && hoveredItem !== 'push1' ? 'blur(2px)' : 'none'
                                            }}
                                            onMouseEnter={() => setHoveredItem('push1')}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            <img
                                                src="https://cdn.prod.website-files.com/616f0a7a027baab453433911/656a54c734bf7c34888c11ed_Beis_Push1.avif"
                                                alt=""
                                                className="w-full shadow-2xl rounded-lg"
                                            />
                                        </div>

                                        {/* Phone Device (Center) */}
                                        <div
                                            className="absolute top-0 left-0 w-full h-auto z-20 transition-all duration-300 ease-out cursor-pointer"
                                            style={{
                                                transform: hoveredItem === 'phone' ? "translateZ(100px) scale(1.05)" : (hoveredItem ? "translateZ(0px) scale(0.95)" : "translateZ(40px)"),
                                                opacity: hoveredItem && hoveredItem !== 'phone' ? 0.4 : 1,
                                                filter: hoveredItem && hoveredItem !== 'phone' ? 'blur(2px)' : 'none',
                                                transformStyle: "preserve-3d"
                                            }}
                                            onMouseEnter={() => setHoveredItem('phone')}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            {/* Simulated Phone Thickness/Body */}
                                            <div
                                                className="absolute top-[2%] left-[3%] right-[3%] bottom-[2%] bg-[#1a1a1a] rounded-[2.5rem] shadow-xl"
                                                style={{ transform: "translateZ(-15px)" }}
                                            />
                                            <div
                                                className="absolute top-[2%] left-[3%] right-[3%] bottom-[2%] bg-[#2a2a2a] rounded-[2.5rem]"
                                                style={{ transform: "translateZ(-10px)" }}
                                            />
                                            <div
                                                className="absolute top-[2%] left-[3%] right-[3%] bottom-[2%] bg-[#3a3a3a] rounded-[2.5rem]"
                                                style={{ transform: "translateZ(-5px)" }}
                                            />

                                            <img
                                                src="https://cdn.prod.website-files.com/616f0a7a027baab453433911/656a54c5ed23240a8ff29a3f_Beis_Phone.avif"
                                                alt=""
                                                className="relative z-10 w-full drop-shadow-2xl"
                                                style={{ transform: "translateZ(2px)" }}
                                            />
                                        </div>

                                        {/* Push Notification 2 (Bottom Right) */}
                                        <div
                                            className="absolute bottom-[25%] -right-[15%] w-[190px] z-30 transition-all duration-300 ease-out cursor-pointer"
                                            style={{
                                                transform: hoveredItem === 'push2' ? "translateZ(140px) scale(1.1)" : (hoveredItem ? "translateZ(60px) scale(0.95)" : "translateZ(100px)"),
                                                opacity: hoveredItem && hoveredItem !== 'push2' ? 0.4 : 1,
                                                filter: hoveredItem && hoveredItem !== 'push2' ? 'blur(2px)' : 'none'
                                            }}
                                            onMouseEnter={() => setHoveredItem('push2')}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            <div className="bg-black/80 backdrop-blur-md rounded-2xl p-0 shadow-2xl overflow-hidden border border-white/10">
                                                <img
                                                    src="https://cdn.prod.website-files.com/616f0a7a027baab453433911/6595a82d4c8831c0c528a908_Beis_Push2.avif"
                                                    alt=""
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Content */}
                            <div className="space-y-8">
                                <div className="space-y-4">
<h1
  className="text-[36px] font-bold leading-tight max-w-xl"
  style={{ fontFamily: 'owner, sans-serif' }}
>
  Cluck And Egg keeps customers engaged and coming back with fresh, farm-quality products
</h1>

                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-6 border-t border-gray-800 pt-8">
                                    <div>
                                        <div
                                            className="text-[56px] font-bold mb-2 leading-none"
                                            style={{ fontFamily: 'owner, sans-serif', color: '#F2FC54' }}
                                        >
                                            67%
                                        </div>
                                        <p
                                            className="text-[18px] leading-snug"
                                            style={{ fontFamily: 'ownerstext, sans-serif', color: '#FDF9F1' }}
                                        >
                                            higher CVR on app vs. mobile website
                                        </p>
                                    </div>
                                    <div>
                                        <div
                                            className="text-[56px] font-bold mb-2 leading-none"
                                            style={{ fontFamily: 'owner, sans-serif', color: '#F2FC54' }}
                                        >
                                            100%
                                        </div>
                                        <p
                                            className="text-[18px] leading-snug"
                                            style={{ fontFamily: 'ownerstext, sans-serif', color: '#FDF9F1' }}
                                        >
                                            of total US revenue comes from app
                                        </p>
                                    </div>
                                    <div>
                                        <div
                                            className="text-[56px] font-bold mb-2 leading-none"
                                            style={{ fontFamily: 'owner, sans-serif', color: '#F2FC54' }}
                                        >
                                            19%
                                        </div>
                                        <p
                                            className="text-[18px] leading-snug"
                                            style={{ fontFamily: 'ownerstext, sans-serif', color: '#FDF9F1' }}
                                        >
                                            higher AOV on app vs. website
                                        </p>
                                    </div>
                                </div>

                                {/* CTAs removed */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Body */}
                <div className="max-w-4xl mx-auto px-4 py-16 md:py-24" id="more">
                    {/* Video Embed */}
                    <div className="w-full aspect-video rounded-xl overflow-hidden mb-16 bg-black shadow-2xl">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/D0Bfj6QaAdU"
                            title="Cluck And Egg Case Study Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none text-gray-800">
                        <div className="mb-12">
                            <h6 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">About the Brand</h6>
                           <h2 className="text-3xl font-bold mb-6">
  Cluck And Egg is known for delivering fresh, high-quality eggs and wholesome food essentials you can trust.
</h2>

<p className="mb-6">
  Meet <strong>Cluck And Egg</strong>, a farm-to-table brand focused on bringing fresh eggs and nutritious food products straight to your kitchen. Built on quality, transparency, and care, Cluck And Egg makes everyday meals healthier and more reliable for modern households.
</p>

<p className="mb-6">
  Recently, we connected with the Cluck And Egg team to understand how they are using digital platforms to improve customer experience, ensure freshness at every step, and build a loyal community that values clean and responsibly sourced food.
</p>

                            <blockquote className="border-l-4 border-gray-900 pl-6 italic my-8 text-xl text-gray-700 bg-gray-50 p-6 rounded-r-lg">
                                “We don't want our consumers to ever have to choose between form and function. And ultimately, our end goal is to get our product into your hands, keep you organized, and looking good.”
                            </blockquote>
                        </div>

                        <div className="mb-12">
                            <h6 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">The Challenge</h6>
                            <h2 className="text-3xl font-bold mb-6">
  Cluck And Egg saw digital platforms as an opportunity to scale, connect, and build long-term customer trust.
</h2>

<p className="mb-6">
  Unlike many growing food brands, Cluck And Egg didn’t turn to technology to fix a problem. There was no crisis to solve. Instead, the team recognized an <em>opportunity</em> to enhance customer experience, streamline access to fresh products, and strengthen loyalty through convenience and transparency.
</p>

                            <blockquote className="border-l-4 border-gray-900 pl-6 italic my-8 text-xl text-gray-700 bg-gray-50 p-6 rounded-r-lg">
                                “We want to be where the consumer is, but we also want to be where we think the consumer is going to be in the future… And so I thought of introducing a mobile application not just as another revenue channel for us, but also to introduce an additional way for us to have an experience for our consumers. A two-way conversation. It was kind of a no-brainer”
                                <footer className="text-base font-bold text-gray-900 mt-4 not-italic">— Julie Chalker, VP of Digital & E-Commerce</footer>
                            </blockquote>
                            <p className="mb-6">
                                The three goals that matter most to Julie and her team are:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2 font-medium">
                                <li>Driving profitable growth</li>
                                <li>Diversifying acquisition strategies</li>
                                <li>Increasing customer retention</li>
                            </ol>
                        </div>

                        <div className="mb-12">
<h6 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">
  The Solution
</h6>

<h2 className="text-3xl font-bold mb-6">
  The Cluck And Egg app is a simple, high-impact way to build trust and repeat purchases.
</h2>

<p className="mb-6">
  Designed as a seamless extension of Cluck And Egg’s online store, the mobile app was quick and easy to launch.
  It fits naturally into the brand’s existing operations while giving customers a faster, more reliable way to
  order fresh eggs and food essentials, stay informed, and feel confident about every purchase.
</p>

                            <blockquote className="border-l-4 border-gray-900 pl-6 italic my-8 text-xl text-gray-700 bg-gray-50 p-6 rounded-r-lg">
                                “Our consumers are highly engaged, very enthusiastic on social, and all they want is more content outside of our product, whether it's behind the scenes at our photo shoots or exclusive interviews with Shay… Being able to bring [the content] into our app has been a real benefit and a big draw.”
                                <footer className="text-base font-bold text-gray-900 mt-4 not-italic">— Julie Chalker, VP of Digital & E-Commerce</footer>
                            </blockquote>
                        </div>

                        <div className="mb-12">
                            <h6 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">
  The Results
</h6>

<h2 className="text-3xl font-bold mb-6">
  Customers may not shop daily, but the Cluck And Egg app keeps the brand top of mind when they do.
</h2>

<p className="mb-6">
  When the Cluck And Egg team reviewed performance metrics, the difference was clear. Conversion rates and engagement
  on the mobile app consistently outperformed the mobile website, showing that customers preferred the speed,
  convenience, and reliability of ordering fresh products through the app.
</p>

                            <blockquote className="border-l-4 border-[#fdc1f7] pl-6 italic my-8 text-xl text-gray-700 bg-[#fff5fe] p-6 rounded-r-lg">
                                “For the last couple of months, we've seen around 12% growth in terms of the revenue that's coming from those push notifications. And again, those are free, right?”
                                <footer className="text-base font-bold text-gray-900 mt-4 not-italic">— Julie Chalker, VP of Digital & E-Commerce</footer>
                            </blockquote>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="bg-black text-white rounded-2xl p-12 text-center mt-16">
<h2 className="text-2xl md:text-3xl font-bold mb-8">
  Discover how Cluck And Egg and other growing food brands are expanding their reach, building customer trust, and driving repeat purchases with RapidApps.
</h2>

                        <a
                            href="https://www.tapcart.com/demo"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors gap-2"
                        >
                            Let's chat
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* See More Case Studies */}
            <div className="bg-black text-[#fdf9f1] pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 mb-12">
                    <div className="border-b  mb-12">
                        <h2 className="text-[42px] font-extrabold mb-4 font-['owners',_sans-serif]">See More Case Studies</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <CaseStudyCard
                            href="/case-studies/midnight-hour"
                            bgColor="#464c6a"
                            imageSrc="https://cdn.prod.website-files.com/616f0a7a027baab453433911/6915f9e54ca0ae04d3589070_MidnightHour_Thumbnail%20Phone%20Mock%20Up.png"
                            iconSrc="https://cdn.prod.website-files.com/616f0a7a027baab453433911/6915f9ebecbbbfa16fdd80fe_MidnightHour_AppIcon.png"
                            title="Midnight Hour"
                            category="Fashion & Apparel"
                            description="How ATTN and Midnight Hour Drove a 95% Revenue Surge Through App-First Gamification"
                        />

                        <CaseStudyCard
                            href="/case-studies/credo-beauty"
                            bgColor="#033f55"
                            imageSrc="https://cdn.prod.website-files.com/616f0a7a027baab453433911/68ed6005bce26440606b6441_Credo%20Beauty_Thumbnail%20Phone%20Mock%20Up.png"
                            iconSrc="https://cdn.prod.website-files.com/616f0a7a027baab453433911/68ed6013e358173729b47da1_Credo%20Beauty_%20App%20Icon.png"
                            title="Credo Beauty"
                            category="Beauty & Cosmetics"
                            description="How Credo Beauty Hit a 6-Month Revenue Goal in 2 Months with a Rapid Apps Mobile App"
                        />

                        <CaseStudyCard
                            href="/case-studies/beekman1802"
                            bgColor="#97a3af"
                            imageSrc="https://cdn.prod.website-files.com/616f0a7a027baab453433911/667ad863ccc94e9ddb5999ee_BEEKMAN%201802_Thumbnail%20Phone%20Mock%20Up.avif"
                            iconSrc="https://cdn.prod.website-files.com/616f0a7a027baab453433911/667ad884356bdea02aa0c5c6_BEEKMAN%201802_%20App%20Icon.avif"
                            title="Beekman 1802"
                            category="Beauty & Cosmetics"
                            description="Beekman 1802 boosts engagement and achieves 37x ROI with push notifications"
                        />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-black text-white pt-24 pb-12 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-20">
                        {/* Logo Column */}
                        <div className="lg:col-span-2 space-y-8">
                            <Link href="/" className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                                        <path d="M2 17L12 22L22 17" />
                                        <path d="M2 12L12 17L22 12" />
                                    </svg>
                                </div>
                                <span className="text-4xl font-black tracking-tighter text-white">Cluck And Egg</span>
                            </Link>
                            <div className="flex items-center gap-2 text-[#FDF9F1] hover:text-gray-300 transition-colors">
                                <a href="mailto:help@rapidapps.co">help@cluckandegg.co</a>
                                <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/61cc794bf1bf3866eea6eab6_ic_open_in_new_24px%203.svg" alt="" className="w-4 h-4 opacity-70" />
                            </div>
                            <div className="pt-8">
                                <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">
                                    <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/61730ac097d7226c09667a6a_shopify.svg" alt="Shopify Plus Partner" className="h-12 brightness-0 invert" />
                                </a>
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div className="space-y-4">
                            <h4 className="text-base font-extrabold uppercase tracking-wider text-white mb-6">Company</h4>
                            <div className="flex flex-col gap-3">
                                {[
                                    "Home", "About", "Careers", "Become a Partner", "Find a Partner"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-2 text-[14px] text-white">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 text-white"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-base font-extrabold uppercase tracking-wider text-white mb-6">Product</h4>
                            <div className="flex flex-col gap-3">
                                {[
                                    "Features", "Pricing", "Integrations", "Status Page", "Request a Demo", "Case Studies"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-2 text-[14px] text-white">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 text-white"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-base font-extrabold uppercase tracking-wider text-white mb-6">Resources</h4>
                            <div className="flex flex-col gap-3">
                                {[
                                    "Help Center", "Blog", "Brand Assets", "RapidApps Academy", "Podcast Hub", "RapidApps Community"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-2 text-[14px] text-white">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 text-white"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-base font-extrabold uppercase tracking-wider text-white mb-6">Industries</h4>
                            <div className="flex flex-col gap-3">
                                {[
                                    "Fashion & Apparel", "Beauty & Cosmetics", "Food & Beverage", "Health & Wellness"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-2 text-[14px] text-white">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 text-white"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                        <div className="flex flex-col md:flex-row gap-8 text-sm text-white">
                            <span>© Copyright 2024 cluckandegg Inc.</span>
                            <div className="flex gap-6">
                                <Link href="#" className="text-white hover:text-gray-300 transition-colors">Terms of Use</Link>
                                <Link href="#" className="text-white hover:text-gray-300 transition-colors">Privacy Policy</Link>
                                <Link href="#" className="text-white hover:text-gray-300 transition-colors">Data Processing</Link>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/61730c9428c1166a7b4d0b3d_linkedin.svg" alt="LinkedIn" className="w-6 h-6 object-contain brightness-0 invert" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/6635358b7e0fc39d0bc16d34_X_logo.svg" alt="Twitter" className="w-6 h-6 object-contain brightness-0 invert" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/65380430151d4018fddf0a39_ins.png" alt="Instagram" className="w-6 h-6 object-contain brightness-0 invert" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};


interface CaseStudyCardProps {
    href: string;
    bgColor: string;
    imageSrc: string;
    iconSrc: string;
    title: string;
    category: string;
    description: string;
}

const CaseStudyCard = ({ href, bgColor, imageSrc, iconSrc, title, category, description }: CaseStudyCardProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [150, -50]);

    return (
        <div className="group cursor-pointer">
            <Link href={href} className="block mb-6">
                <div
                    ref={ref}
                    className="rounded-xl flex items-center justify-center pt-8 overflow-hidden h-[320px]"
                    style={{ backgroundColor: bgColor }}
                >
                    <motion.div
                        style={{ y }}
                        className="w-[180px] h-full"
                    >
                        <img
                            src={imageSrc}
                            alt={title}
                            className="w-full h-auto shadow-2xl rounded-[2.5rem] border-[4px] border-white"
                        />
                    </motion.div>
                </div>
            </Link>
            <div className="flex items-center gap-4 mb-4">
                <img src={iconSrc} alt="Icon" className="w-[60px] h-[60px] rounded-xl" />
                <div className="border-b  pb-2 w-full opacity-100">
                    <h3 className="text-xl font-extrabold text-[#fdf9f1]">{title}</h3>
                    <div className="text-sm font-semibold text-[#fdf9f1]/60 uppercase tracking-wider mt-1">
                        {category}
                    </div>
                </div>
            </div>
            <p className="leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default BeisCaseStudyPage;
