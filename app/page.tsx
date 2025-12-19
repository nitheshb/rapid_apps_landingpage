/* eslint-disable @next/next/no-img-element */

"use client";
import DesignAgencyHero from "./DesignAgencyHero";
import DesignJoyLanding from "./DesignJoyLanding";
import DesignLandingSection from "./DesignLandingSection";
import "./globals.css";
import bg from "./images/bg.svg";
import { HeroParallax } from "./connect-parallax";
import { products } from "@/lib/constant";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AppStoreBadges from "./AppStoreBadges";
import RapidAppsSection from "./RapidAppsSection";
import RapidAppsHeader from "./RapidAppsHeader";
import MobileAppMissionBox from "./MobileAppMissionBox";
import IndustryShowcase from "./IndustryShowcase";
import ReviewSection from "./ReviewSection";
import ParallaxProjectsSection from "./ParallaxProjectsSection";
import CtaSection from "./CtaSection";

export default function Home() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get the scroll position
      const rotationValue = scrollY / 5; // Adjust the divisor to control the speed of rotation
      setRotation(rotationValue); // Update the rotation state
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <RapidAppsHeader />
      {/** Header */}

      {/* Background Container */}
      <div
        className="
          w-full 
             
          mx-auto 
     
  
          overflow-hidden
        "
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundPosition: "0 0, 0 0",
          backgroundSize: "auto, auto",
          backgroundColor: "#f6f2ea",
        }}
      >
        <div className=" mx-auto px-4 sm:px-6 xl:px-0">
          
          {/* Hero Section */}
          <div className="mb-4 md:mb-6 lg:mb-8">
            <DesignAgencyHero />
          </div>

          {/* Sections Container */}
          <div className="space-y-1">
            <ParallaxProjectsSection />
            <DesignLandingSection />
            <div id="about">
              <MobileAppMissionBox />
            </div>

            <IndustryShowcase />
            <ReviewSection />
            <div id="services">
              <DesignJoyLanding />
            </div>
            <AppStoreBadges />
            <CtaSection />
            <div id="contacts">
              <RapidAppsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
