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
    <div className="min-h-screen w-full overflow-x-hidden">
      {/** Header */}
      

      {/* Background Container */}
      <div
        className="
          w-full 
          max-w-[97%]      
          mx-auto 
          rounded-[36px] 
  
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
          <RapidAppsHeader />
          {/* Hero Section */}
          <div className="mb-8 md:mb-12 lg:mb-16">
            <DesignAgencyHero />
          </div>

          {/* Sections Container */}
          <div className="space-y-1">
            {/* <motion.div
              transition={{ duration: 1, ease: "easeInOut" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <section className="relative">
                <div
                  style={{
                    position: "absolute",
                    top: "-55px",
                    left: "20%",
                    transform: "translateX(-50%)",
                    zIndex: 1000,
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="hero-badge-container"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      width: "fit-content",
                      willChange: "transform",
                      transform: `translate3d(0px, 0px, 0px) rotateZ(${rotation}deg)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <img
                      src="https://cdn.prod.website-files.com/5837424ae11409586f837994/65da6378a1ebd53e3cbf8aca_Vector.svg"
                      loading="lazy"
                      alt="Badge"
                      className="hero-badge"
                    />
                    <div
                      className="badge__text"
                      style={{
                        position: "fixed", // Change from absolute to fixed
                        top: "50%", // You can adjust this value as needed
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "black",
                        fontWeight: "200",
                        textAlign: "center",
                        zIndex: 1100, // Make sure it's above other elements
                      }}
                    >
                      Latest
                      <br />
                      projects
                    </div>
                  </div>
                </div>

                <HeroParallax products={products}></HeroParallax>
              </section>
            </motion.div> */}
            <DesignLandingSection />
            <MobileAppMissionBox />
            <IndustryShowcase />
            <ReviewSection />
            <div id="services">
              <DesignJoyLanding />
            </div>
            <AppStoreBadges />
            <div id="rapid-apps">
              <RapidAppsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
