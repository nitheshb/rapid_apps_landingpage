"use client";

import React, { useState, useEffect } from "react";
import RapidAppsHeader from "../RapidAppsHeader";
import RapidAppsFooter from "../RapidAppsFooter";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const [currency, setCurrency] = useState<"INR" | "USD" | "EUR" | "GBP" | null>(null);

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz.includes("Asia/Calcutta") || tz.includes("Asia/Kolkata")) {
        setCurrency("INR");
      } else if (tz.includes("Europe/London") || tz.includes("Europe/Belfast")) {
        setCurrency("GBP");
      } else if (tz.includes("Europe/")) {
        setCurrency("EUR");
      } else {
        setCurrency("USD");
      }
    } catch (e) {
      setCurrency("USD");
    }

    // Backup geo detection
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        if (data && data.currency && ["INR", "USD", "EUR", "GBP"].includes(data.currency)) {
          setCurrency(data.currency as "INR" | "USD" | "EUR" | "GBP");
        }
      })
      .catch((err) => console.log("Failed to fetch geo-currency backup", err));
  }, []);

  const pricing = {
    INR: { symbol: "₹", core: "9999", ultimate: "19999", addon: "9999", apple: "7999", google: "1999" },
    USD: { symbol: "$", core: "149", ultimate: "299", addon: "149", apple: "99", google: "25" },
    EUR: { symbol: "€", core: "139", ultimate: "279", addon: "139", apple: "99", google: "25" },
    GBP: { symbol: "£", core: "119", ultimate: "239", addon: "119", apple: "79", google: "20" },
  };

  if (!currency) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3f1efb] mb-4"></div>
        <p className="text-gray-400 font-medium">Loading pricing...</p>
      </div>
    );
  }

  const currentPricing = pricing[currency];

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      {/* 
        The prompt asked to place the header specifically. 
        It has a 'bg-black' if we don't pass any props, 
        or it takes its own sticky class. 
      */}
      <RapidAppsHeader lightOnScroll={true} />

      <div className="pt-24 lg:pt-32 pb-12 px-4 md:px-8 max-w-[1320px] mx-auto">
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h1 className="text-4xl md:text-[3.25rem] font-extrabold mb-6 tracking-tight leading-[1.1] text-white">
            Predictable pricing to grow your revenue on Shopify
          </h1>
          <p className="text-lg md:text-[1.15rem] text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your business and launch a high-performing Shopify mobile app that drives repeat purchases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-8 relative">

          {/* CORE Plan */}
          <div className="bg-[#1C1B1BB3] rounded-[24px] p-5 md:p-6 pb-10 md:pb-14 border border-gray-800 shadow-sm flex flex-col relative w-full">
            <div className="text-sm font-bold tracking-[0.15em] text-white uppercase mb-1.5">Core</div>
            <div className="flex items-baseline mb-3">
              <span suppressHydrationWarning className="text-[36px] tracking-tight text-[#FDF9F1]" style={{ fontFamily: "'Owners text', sans-serif" }}>{currentPricing.symbol}{currentPricing.core}</span>
              <span className="text-gray-400 ml-2 font-medium text-base">/month</span>
            </div>
            <div className="w-full h-px bg-gray-800 mb-3"></div>
            <p className="text-gray-400 text-base mb-5">The perfect plan for small businesses</p>
            <button className="w-full bg-[#FDF9F140] text-white font-semibold py-3.5 rounded-xl transition-colors mb-6 text-base">
              Get Started
            </button>

            <div className="space-y-2 flex-1">
              <FeatureItem text="iOS and Android app" dark />
              <FeatureItem text="Design & publish unlimited blocks" dark />
              <FeatureItem text="Unlimited standard integrations" dark />
              <FeatureItem text="Unlimited scheduled push notifications" dark />
              <FeatureItem text="App Store & Google Play deployment support" dark />
              <FeatureItem text="Product page builder & cart customization" dark />
              <FeatureItem text="Supports Shopify Functions" dark />
            </div>
          </div>

          {/* ULTIMATE Plan */}
          <div className="bg-[#1C1B1BB3] rounded-[24px] p-5 md:p-6 pb-10 md:pb-14 border border-gray-800 shadow-sm flex flex-col relative w-full">
            <div className="text-sm font-bold tracking-[0.15em] text-white uppercase mb-1.5">Ultimate</div>
            <div className="flex items-baseline mb-3">
              <span suppressHydrationWarning className="text-[36px] tracking-tight text-[#FDF9F1]" style={{ fontFamily: "'Owners text', sans-serif" }}>{currentPricing.symbol}{currentPricing.ultimate}</span>
              <span className="text-gray-400 ml-2 font-medium text-base">/month</span>
            </div>
            <div className="w-full h-px bg-gray-800 mb-3"></div>
            <p className="text-gray-400 text-base mb-5">Ideal for growth-stage companies</p>
            <button className="w-full bg-[#FDF9F140] text-white font-semibold py-3.5 rounded-xl transition-colors mb-6 text-base">
              Get Started
            </button>

            <div className="space-y-2 flex-1">
              <div className="font-medium text-base mb-2 text-white">Everything in <span className="font-bold">CORE</span>, plus:</div>
              <FeatureItem text="Dedicated Dev Manager" dark />
              <FeatureItem text="Unlimited design blocks" dark />
              <FeatureItem text="Product badging, conditional tagging, and metafields" dark />

              <div className="font-medium text-base pt-3 mb-2 text-white">Advanced Push Features</div>
              <FeatureItem text="Unlimited automated push notifications" dark />
              <FeatureItem text="New User Welcome series" dark />
              <FeatureItem text="Abandoned cart push notification flows" dark />
            </div>
          </div>

          {/* ENTERPRISE Plan Container */}
          <div className="relative w-full h-full rounded-[24px]">
            {/* Background Glow (Outside Card, centered behind top edge) */}
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-[120%] max-w-none pointer-events-none opacity-100 mix-blend-screen z-0">
              <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/675b2b074dd9be9730e3389c_Bottom-glow.avif" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" srcSet="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/675b2b074dd9be9730e3389c_Bottom-glow-p-500.avif 500w, https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/675b2b074dd9be9730e3389c_Bottom-glow-p-800.avif 800w, https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/675b2b074dd9be9730e3389c_Bottom-glow.avif 1919w" alt="" className="image-255 w-full h-auto origin-center block" />
            </div>

            {/* ENTERPRISE Card */}
            <div className="bg-[#181433] text-white rounded-[24px] p-5 md:p-6 pb-10 md:pb-14 border border-gray-800/80 shadow-[0_0_40px_rgba(63,30,251,0.25)] flex flex-col relative overflow-hidden w-full h-full z-10">
              <div className="absolute top-0 right-0 left-0">
                <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/67afb5ca50a3c3f6c3fff29d_hight-lights-line.png" alt="" className="w-full h-auto opacity-100" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-row justify-between items-center mb-1.5">
                  <div className="text-sm font-bold tracking-[0.15em] text-white uppercase">Enterprise</div>
                  <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                    Popular
                  </div>
                </div>
                <div className="flex items-baseline mb-3">
                  <span className="text-[36px] tracking-tight text-[#FDF9F1]" style={{ fontFamily: "'Owners text', sans-serif" }}>Custom</span>
                </div>
                <div className="w-full h-px bg-gray-800 mb-3 border-b border-gray-700/50"></div>
                <p className="text-gray-400 text-base mb-5">For Shopify Plus & high volume stores</p>

                <div className="flex flex-col gap-3 mb-6">
                  <button className="w-full bg-[#3F1EFB] text-white font-semibold py-3.5 rounded-xl transition-colors text-base">
                    Talk to Sales
                  </button>
                </div>

                <div className="space-y-2 flex-1 relative z-10">
                  <div className="font-semibold text-base text-white mb-2">Everything in <span className="text-[#3f1efb] brightness-150">ULTIMATE</span>, plus:</div>
                  <FeatureItem text="Dedicated account manager" dark />
                  <FeatureItem text="Unlimited Custom Blocks" dark />
                  <FeatureItem text="Collaborative app design services" dark />
                  <FeatureItem text="Unlimited premium integrations" dark />
                  <FeatureItem text="Global selling, expansion, and currency localization" dark />

                  <div className="font-semibold text-base text-white pt-3 mb-3">World Class Enterprise Support</div>
                  <FeatureItem text="Dedicated Account Manager & access to our industry-leading Enterprise Customer Success Team" dark />
                  <FeatureItem text="Results-focused, proactive support" dark />
                  <FeatureItem text="Real-time communication" dark />
                  <FeatureItem text="Access to the largest Enterprise Customer Success team" dark />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div suppressHydrationWarning className="text-center text-sm text-gray-500 mb-20 max-w-3xl mx-auto">
          *All plans require Apple Developer ({currentPricing.symbol}{currentPricing.apple}/year) and Google Play ({currentPricing.symbol}{currentPricing.google} one time fee) accounts to publish your app.
        </div>

        {/* AI Home CTA / ADD-ON Section */}
        <div className="bg-[#131316] border rounded-[32px] overflow-hidden shadow-sm border-gray-800 grid grid-cols-1 lg:grid-cols-12 w-full mx-auto mt-10 mb-20 relative">

          {/* Glow effects mapped inside the specific element areas */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[45%] h-[60%] bg-[#ff5b79] opacity-[0.15] blur-[100px] pointer-events-none rounded-full z-0" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[55%] h-[65%] bg-[#0ea5e9] opacity-[0.15] blur-[100px] pointer-events-none rounded-full z-0" />

          {/* Left Side */}
          <div className="p-8 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-800 flex flex-col justify-start relative lg:col-span-5 z-10">

            <div className="inline-block bg-[#2A2A2E] text-white font-bold tracking-widest text-[13px] px-2.5 py-1 rounded-[6px] mb-3 max-w-max">
              ADD-ON
            </div>

            <div className="mb-6 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[42px] font-bold tracking-tight text-white leading-none" style={{ fontFamily: "'Owners text', sans-serif" }}>Rapid Apps AI</span>
                <span className="bg-gradient-to-r from-[#ff7e93] to-[#8050e6] text-white text-[12px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider -translate-y-1">
                  PRO
                </span>
              </div>
              <h2 className="text-[18px] text-gray-300 font-medium leading-relaxed max-w-[90%]">
                Remove busywork and unlock growth.
              </h2>
            </div>

            <div className="flex items-baseline mb-4 mt-6">
              <span suppressHydrationWarning className="text-[40px]  tracking-tight text-white mb-0" style={{ fontFamily: "'Owners text', sans-serif" }}>{currentPricing.symbol}{currentPricing.addon}</span>
              <span className="text-gray-400 font-medium ml-2 text-[16px]">/month</span>
            </div>

            <div className="flex flex-col xl:flex-row gap-4 items-center">
              {/* Watch Video - Gradient Border */}
              <a href="#" className="w-full xl:w-auto p-[1px] rounded-[10px] bg-gradient-to-r from-[#ff7e93] to-[#8050e6] group relative inline-flex items-center justify-center transition-transform hover:scale-[1.02]">
                <div className="bg-[#18181A] rounded-[9px] w-full px-6 py-[12px] flex items-center justify-center gap-2">
                  <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/692999c51ed6d7d000767e35_play.svg" alt="Play" className="w-[14px] h-[14px] invert brightness-0" />
                  <span className="font-semibold text-white text-[15px]">Watch Video</span>
                </div>
              </a>
              {/* Get Started - Solid Gradient */}
              <a href="#" className="w-full xl:w-auto bg-gradient-to-r from-[#ff6a88] via-[#a37ce6] to-[#764ba2] px-7 py-[13px] rounded-[10px] font-semibold text-white text-[15px] text-center transition-transform hover:scale-[1.02] shadow-lg shadow-purple-500/10">
                Get Started
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-8 md:p-10 lg:p-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 lg:col-span-7 items-start relative z-10">

            <div className="flex flex-col">
              <div className="flex items-center mb-3">
                <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/6966c770fb5ee764c1198d95_notification.avif" alt="Push Notifications" className="w-8 h-8 object-contain mr-3" />
                <h5 className="font-semibold text-[17px] text-white">AI Push Notifications</h5>
              </div>
              <p className="text-[#8e8d93] text-[14.5px] leading-[1.6]">
                Recover revenue by sending thousands of personalized, behavior-based push notifications automatically. No manual work necessary.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center mb-3">
                <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/6966c7701a6b66a5f3048523_AI%20Autopilot.avif" alt="AI Autopilot" className="w-8 h-8 object-contain mr-3" />
                <h5 className="font-semibold text-[17px] text-white">AI Autopilot</h5>
              </div>
              <p className="text-[#8e8d93] text-[14.5px] leading-[1.6]">
                Say goodbye to busywork. Automatically sync content with your website, then generate blocks and push notifications immediately right in your dashboard.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center mb-3">
                <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/6984d50424a16de97566c999_AI%20Scense.svg" alt="AI Scenes" className="w-8 h-8 object-contain mr-3" />
                <h5 className="font-semibold text-[17px] text-white">AI Scenes</h5>
              </div>
              <p className="text-[#8e8d93] text-[14.5px] leading-[1.6]">
                No more photoshoots or high production budgets. Create high-quality, on-brand lifestyle and product imagery in seconds right in your dashboard.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center mb-3">
                <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/6966c7704e6d01ba5549fba8_Gen%20AI%20Video.avif" alt="Gen AI Video" className="w-8 h-8 object-contain mr-3" />
                <h5 className="font-semibold text-[17px] text-white">Gen AI Video</h5>
              </div>
              <p className="text-[#8e8d93] text-[14.5px] leading-[1.6]">
                More video in seconds. Watch conversion rates soar when you turn static images into video with one click.
              </p>
            </div>

          </div>
        </div>
      </div>

      <RapidAppsFooter />
    </div>
  );
}

function FeatureItem({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-[2px] shrink-0 flex items-center justify-center">
        <Check size={14} strokeWidth={3} className={dark ? "text-gray-100" : "text-[#3f1efb]"} />
      </div>
      <span className={`text-[13px] leading-snug font-medium ${dark ? 'text-gray-100' : 'text-gray-700'}`}>{text}</span>
    </div>
  );
}
