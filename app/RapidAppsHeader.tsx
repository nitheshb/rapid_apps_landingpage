"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigationData = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contacts" },
];

const RapidAppsHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showAllCaseStudies, setShowAllCaseStudies] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (dropdownId: string) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  // Add font to head
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        .owners-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .heading-xxsmall {
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #000000;
          margin-bottom: 8px;
          font-family: owner, sans-serif;
        }
        
        .nav-dropdown_subhead-text {
          font-size: 14px;
          color: #686F74;
          line-height: 1.5;
          margin-bottom: 24px;
          font-family: 'Inter', sans-serif;
        }
        
        .nav-dropdown_sub-text {
          font-size: 14px;
          color: #686F74;
          line-height: 1.4;
          font-family: 'Inter', sans-serif;
        }
        
        .heading-11, .heading-12, .heading-13, .heading-14, .heading-15, .heading-16 {
          font-size: 16px;
          font-weight: 600;
          color: #000000;
          font-family: 'Inter', sans-serif;
        }
        
        .case-study-item {
          padding: 12px;
          border-radius: 8px;
          transition: background-color 0.2s ease;
        }
        
        .case-study-item:hover {
          background-color: #f8f9fa;
        }

        .case-study-item {
          padding: 12px;
          border-radius: 8px;
          transition: background-color 0.2s ease;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-left: -12px;
        }
        
        .nav_caase-study-thumbnail {
          width: 64px;
          height: 64px;
          border-radius: 6px;
          object-fit: cover;
          background-color: #f1f3f4;
          flex-shrink: 0;
        }
        
        .nav_button-text-wrap {
          padding: 8px 12px;
          border-radius: 6px;
          transition: background-color 0.2s ease;
          margin-left: -12px;
        }
        
        .nav_button-text-wrap:hover {
          background-color: #f8f9fa;
        }
        
        .new-ws-dropdown-list {
          width: 100%;
          max-width: 1520px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          margin-top: 0;
          overflow: hidden;
        }
        
        .ws-dropdown-menu-section.new {
          padding: 40px 0;
        }
        
        .ws-dropdown-content-container.w-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
          width: 100%;
        }
        
        .new-ws-navbar-layout {
          display: grid;
          grid-template-columns: 74% 28%;
          gap: 0;
        }
        
        .ws-nav-left {
          min-width: 0;
          border-right: 1px solid #e5e7eb;
          padding-right: 48px;
        }
        
        .ws-nav-right {
          min-width: 0;
          padding-left: 40px;
        }
        
        .text-style_menu-item_badge {
          font-size: 12px;
          font-weight: 600;
          padding: 2px 6px;
          background: #3b82f6;
          color: white;
          border-radius: 9999px;
          margin-left: 8px;
        }
        
        .text-style_menu-item_badge.ai {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .ai-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .nav-dropdown_read-more_link-wrapper {
          display: inline-flex;
          align-items: center;
          color: #000000;
          font-weight: 600;
          font-size: 16px;
          transition: color 0.2s ease;
        }
        
        .nav-dropdown_read-more_link-wrapper:hover {
          color: #3b82f6;
        }
        
        .nav-dropdown_read-more-icon {
          margin-left: 8px;
          width: 12px;
          height: 12px;
        }

        .new-nav-learn-more {
          border-top: 1px solid #e5e7eb;
          width: 100%;
          padding-top: 24px;
          margin-top: 24px;
          display: block;
        }
        
        /* Animation for dropdown */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .dropdown-enter {
          animation: slideDown 0.3s ease forwards;
        }
      `}</style>

      <header
        role="navigation"
        className={`new-nav-menu w-nav-menu sticky top-0 z-50 transition-all duration-300 relative ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200" : "bg-white border-b border-gray-200"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-black owners-text">
                RapidApps
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav ref={dropdownRef} className="hidden md:flex items-center space-x-16">
              {/* Why Tapcart Dropdown */}
              <div className="dropdown-item w-dropdown static" style={{ maxWidth: "1280px" }}>
                <button
                  onClick={() => handleDropdownClick("why-tapcart")}
                  className="new-ws-navbar-link w-dropdown-toggle flex items-center border-0 bg-transparent cursor-pointer owners-text"
                  id="w-dropdown-toggle-0"
                  aria-controls="w-dropdown-list-0"
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === "why-tapcart"}
                  role="button"
                  tabIndex={0}
                  style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                >
                  <div className="ws-navbar-text text-gray-700 font-medium hover:text-gray-900">Why RapidApps</div>
                  <div className="ws-navbar-icon w-embed ml-2">
                    <svg width="12" height="11" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6C1 6 6.08629 7.2 7 12C7.91371 7.2 13 6 13 6" stroke="#1B191B" strokeWidth="2"></path>
                    </svg>
                  </div>
                </button>

                {/* Dropdown Menu - Fixed dimensions */}
                <AnimatePresence>
                  {openDropdown === "why-tapcart" && (
                    <motion.nav
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="new-ws-dropdown-list w-dropdown-list absolute top-full left-0 bg-white shadow-xl z-50 overflow-hidden"
                      id="w-dropdown-list-0"
                      aria-labelledby="w-dropdown-toggle-0"
                      style={{
                        width: "100vw",
                        height: showAllCaseStudies ? "500px" : "350px",
                        borderTop: "none",
                        borderTopLeftRadius: "0",
                        borderTopRightRadius: "0",
                      }}
                    >
                      <div className="ws-dropdown-menu-section new" style={{ height: "100%" }}>
                        <div className="ws-dropdown-content-container w-container" style={{ height: "100%" }}>
                          <div className="w-layout-grid new-ws-navbar-layout" style={{ height: "100%" }}>
                            {/* Left Column */}
                            <div className="ws-nav-left" style={{ height: "100%" }}>
                              <div id="w-node-_69db2219-6491-359a-c9b5-7f81a146b488-11f6dcc5" className="ws-navbar-menu-item-wrapper feature">
                                <Link
                                  href="/case-studies"
                                  className="ws-navbar-menu-item-link w-inline-block"
                                  onClick={() => setOpenDropdown(null)}
                                  tabIndex={0}
                                >
                                  <div className="heading-xxsmall is-nav-menu-category">Case Studies</div>
                                  <div className="nav-dropdown_subhead-text">
                                    See how Shopify's fastest-growing brands boosted their bottom line with RapidApps
                                  </div>
                                </Link>
                              </div>

                              <div className="grid grid-cols-3 gap-6 mb-6">
                                <div id="w-node-_69db2219-6491-359a-c9b5-7f81a146b49e-11f6dcc5" className="ws-navbar-menu-item-wrapper mobile-margin-0">
                                  <Link
                                    href="/case-studies/beis"
                                    className="nav_text-wrap nav_link w-inline-block"
                                    onClick={() => setOpenDropdown(null)}
                                    tabIndex={0}
                                  >
                                    <div className="case-study-item">
                                      <div className="nav_caase-study-thumbnail">
                                        <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/65049ac866fad7588452d9ab_Group%205711.png" loading="lazy" alt="" className="nav_caase-study-thumbnail" />
                                      </div>
                                      <div>
                                        <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16 mb-2">BÉIS</h6>
                                        <p className="nav-dropdown_sub-text">
                                          BÉIS app sees 67% higher conversion rate
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>

                                <div id="w-node-_69db2219-6491-359a-c9b5-7f81a146b48e-11f6dcc5" className="ws-navbar-menu-item-wrapper mobile-margin-0">
                                  <Link
                                    href="/case-studies/beis-2"
                                    className="nav_text-wrap nav_link w-inline-block"
                                    onClick={() => setOpenDropdown(null)}
                                    tabIndex={0}
                                  >
                                    <div className="case-study-item">
                                      <div className="nav_caase-study-thumbnail">
                                        <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/65049ac866fad7588452d9ab_Group%205711.png" loading="lazy" alt="" className="nav_caase-study-thumbnail" />
                                      </div>
                                      <div>
                                        <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16 mb-2">BÉIS 2</h6>
                                        <p className="nav-dropdown_sub-text">
                                          BÉIS app sees 67% higher conversion rate
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>

                                <div id="w-node-_5b497bc4-df34-cb12-0cfa-f0b4e65f8129-11f6dcc5" className="ws-navbar-menu-item-wrapper mobile-margin-0">
                                  <Link
                                    href="/case-studies/cluck-and-egg"
                                    className="nav_text-wrap nav_link w-inline-block"
                                    onClick={() => setOpenDropdown(null)}
                                    tabIndex={0}
                                  >
                                    <div className="case-study-item">
                                      <div className="nav_caase-study-thumbnail">
                                        <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/65049ac866fad7588452d9ab_Group%205711.png" loading="lazy" alt="" className="nav_caase-study-thumbnail" />
                                      </div>
                                      <div>
                                        <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16 mb-2">Cluck and Egg</h6>
                                        <p className="nav-dropdown_sub-text">
                                          Cluck and Egg
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>

                                {showAllCaseStudies && (
                                  <>
                                    <div className="ws-navbar-menu-item-wrapper mobile-margin-0">
                                      <Link
                                        href="/case-studies/beis-4"
                                        className="nav_text-wrap nav_link w-inline-block"
                                        onClick={() => setOpenDropdown(null)}
                                        tabIndex={0}
                                      >
                                        <div className="case-study-item">
                                          <div className="nav_caase-study-thumbnail">
                                            <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/65049ac866fad7588452d9ab_Group%205711.png" loading="lazy" alt="" className="nav_caase-study-thumbnail" />
                                          </div>
                                          <div>
                                            <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16 mb-2">BÉIS 4</h6>
                                            <p className="nav-dropdown_sub-text">
                                              BÉIS app sees 67% higher conversion rate
                                            </p>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>

                                    <div className="ws-navbar-menu-item-wrapper mobile-margin-0">
                                      <Link
                                        href="/case-studies/beis-5"
                                        className="nav_text-wrap nav_link w-inline-block"
                                        onClick={() => setOpenDropdown(null)}
                                        tabIndex={0}
                                      >
                                        <div className="case-study-item">
                                          <div className="nav_caase-study-thumbnail">
                                            <img src="https://cdn.prod.website-files.com/616f0a7a027baaf59a43390b/65049ac866fad7588452d9ab_Group%205711.png" loading="lazy" alt="" className="nav_caase-study-thumbnail" />
                                          </div>
                                          <div>
                                            <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16 mb-2">BÉIS 5</h6>
                                            <p className="nav-dropdown_sub-text">
                                              BÉIS app sees 67% higher conversion rate
                                            </p>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  </>
                                )}
                              </div>

                              <Link
                                id="w-node-_69db2219-6491-359a-c9b5-7f81a146b4b1-11f6dcc5"
                                href="#"
                                className="nav_text-wrap new-nav-learn-more w-inline-block"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setShowAllCaseStudies(!showAllCaseStudies);
                                }}
                                tabIndex={0}
                              >
                                <div className="nav_button-text-wrap">
                                  <div className="nav-dropdown_read-more_link-wrapper">
                                    <div className="nav-dropdown_read-more-text">
                                      {showAllCaseStudies ? "View less case studies" : "View all case studies"}
                                    </div>
                                    <svg
                                      className="nav-dropdown_read-more-icon"
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{ transform: showAllCaseStudies ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
                                    >
                                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </div>
                                </div>
                              </Link>
                            </div>

                            {/* Right Column */}
                            <div id="w-node-_69db2219-6491-359a-c9b5-7f81a146b4bd-11f6dcc5" className="ws-nav-right">
                              <div className="mobile-margin-bottom-12">
                                <div className="heading-xxsmall is-nav-menu-category">By Industry</div>
                                <div className="nav-dropdown_subhead-text">
                                  See how RapidApps supports DTC brands on Shopify across industries
                                </div>
                              </div>

                              <div>
                                <div className="nav_button-text-wrap">
                                  <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Jewellary</h6>
                                </div>
                                <Link
                                  href="/industries/fashion-apparel"
                                  className="nav_text-wrap nav_link w-inline-block"
                                  onClick={() => setOpenDropdown(null)}
                                  tabIndex={0}
                                >
                                  <div className="nav_button-text-wrap">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Fashion & Apparel</h6>
                                  </div>
                                </Link>

                                <Link
                                  href="/industries/beauty-cosmetics"
                                  className="nav_text-wrap nav_link w-inline-block"
                                  onClick={() => setOpenDropdown(null)}
                                  tabIndex={0}
                                >
                                  <div className="nav_button-text-wrap">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Beauty & Cosmetics</h6>
                                  </div>
                                </Link>

                                <Link
                                  href="/industries/food-beverage"
                                  className="nav_text-wrap nav_link w-inline-block"
                                  onClick={() => setOpenDropdown(null)}
                                  tabIndex={0}
                                >
                                  <div className="nav_button-text-wrap">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Food & Beverage</h6>
                                  </div>
                                </Link>

                                <Link
                                  href="/industries/health-wellness"
                                  className="nav_text-wrap nav_link w-inline-block"
                                  onClick={() => setOpenDropdown(null)}
                                  tabIndex={0}
                                >
                                  <div className="nav_button-text-wrap">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Health & Wellness</h6>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.nav>
                  )}
                </AnimatePresence>
              </div>

              {/* Platform Dropdown */}
              <div className="dropdown-item w-dropdown static" style={{ maxWidth: "1280px" }}>
                <button
                  onClick={() => handleDropdownClick("platform")}
                  className="new-ws-navbar-link w-dropdown-toggle flex items-center border-0 bg-transparent cursor-pointer owners-text"
                  id="w-dropdown-toggle-1"
                  aria-controls="w-dropdown-list-1"
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === "platform"}
                  role="button"
                  tabIndex={0}
                  style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                >
                  <div className="ws-navbar-text text-gray-700 font-medium hover:text-gray-900">Platform</div>
                  <div className="ws-navbar-icon w-embed ml-2">
                    <svg width="12" height="11" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6C1 6 6.08629 7.2 7 12C7.91371 7.2 13 6 13 6" stroke="#1B191B" strokeWidth="2"></path>
                    </svg>
                  </div>
                </button>

                {/* Platform Dropdown Menu */}
                <AnimatePresence>
                  {openDropdown === "platform" && (
                    <motion.nav
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="new-ws-dropdown-list w-dropdown-list absolute top-full left-0 bg-white shadow-xl z-50 overflow-hidden"
                      id="w-dropdown-list-1"
                      aria-labelledby="w-dropdown-toggle-1"
                      style={{
                        width: "100vw",
                        height: "337px",
                        borderTop: "none",
                        borderTopLeftRadius: "0",
                        borderTopRightRadius: "0",
                      }}
                    >
                      <div className="ws-dropdown-menu-section new" style={{ height: "100%" }}>
                        <div className="ws-dropdown-content-container w-container" style={{ height: "100%" }}>
                          <div className="w-layout-grid new-ws-navbar-layout" style={{ height: "100%" }}>
                            {/* Left Column - Features */}
                            <div className="ws-nav-left" style={{ height: "100%" }}>
                              <div id="w-node-f0bbfd8f-a4d8-906b-eecb-e7f7b1b719ae-11f6dcc5" className="ws-navbar-menu-item-wrapper feature mb-8">
                                <Link
                                  href="/features"
                                  className="ws-navbar-menu-item-link w-inline-block"
                                  onClick={() => setOpenDropdown(null)}
                                  tabIndex={0}
                                >
                                  <div className="heading-xxsmall is-nav-menu-category">Features</div>
                                  <div className="nav-dropdown_subhead-text">
                                    From push notifications to proprietary analytics, see all that RapidApps has to offer
                                  </div>
                                </Link>
                              </div>

                              <div id="w-node-f0bbfd8f-a4d8-906b-eecb-e7f7b1b719c4-11f6dcc5" className="ws-navbar-menu-multi-item-wrap">
                                {/* Tapcart AI */}
                                <Link
                                  href="/product/tapcart-ai"
                                  className="nav_text-wrap nav_link features w-inline-block mb-4"
                                  onClick={() => setOpenDropdown(null)}
                                  tabIndex={0}
                                >
                                  <div className="nav_button-text-wrap flex items-center gap-2 mb-1">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16 ai-gradient">RapidApps AI</h6>
                                    <div className="text-style_menu-item_badge ai">New</div>
                                  </div>
                                  <p className="nav-dropdown_sub-text">
                                    Keep your app fresh, personalized, and high-converting with AI
                                  </p>
                                </Link>

                                {/* App Studio */}
                                <Link
                                  href="/product/app-studio"
                                  className="nav_text-wrap nav_link features w-inline-block mb-4"
                                  onClick={() => setOpenDropdown(null)}
                                  tabIndex={0}
                                >
                                  <div className="nav_button-text-wrap mb-1">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">App Studio</h6>
                                  </div>
                                  <p className="nav-dropdown_sub-text">
                                    Our drag-and-drop editor lets you create and manage a mobile app for your Shopify store
                                  </p>
                                </Link>

                                {/* Push Notifications */}
                                <Link
                                  href="/product/push-notifications"
                                  className="nav_text-wrap nav_link features w-inline-block"
                                  onClick={() => setOpenDropdown(null)}
                                  tabIndex={0}
                                >
                                  <div className="nav_button-text-wrap mb-1">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Push Notifications</h6>
                                  </div>
                                  <p className="nav-dropdown_sub-text">
                                    Send unlimited push notifications to engage loyal customers and drive revenue
                                  </p>
                                </Link>
                              </div>

                              <Link
                                id="w-node-f0bbfd8f-a4d8-906b-eecb-e7f7b1b719d7-11f6dcc5"
                                href="/features"
                                className="nav_text-wrap new-nav-learn-more w-inline-block mt-6"
                                onClick={() => setOpenDropdown(null)}
                                tabIndex={0}
                              >
                                <div className="nav_button-text-wrap">
                                  <div className="nav-dropdown_read-more_link-wrapper">
                                    <div className="nav-dropdown_read-more-text">See all features</div>
                                    <svg className="nav-dropdown_read-more-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                      <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </div>
                                </div>
                              </Link>
                            </div>

                            {/* Right Column - Integrations */}
                            <div id="w-node-f0bbfd8f-a4d8-906b-eecb-e7f7b1b719ed-11f6dcc5" className="ws-nav-right with-link-at-bottom" style={{ height: "100%" }}>
                              <Link
                                href="/integrations"
                                className="mobile-margin-bottom-12 w-inline-block mb-8"
                                onClick={() => setOpenDropdown(null)}
                                tabIndex={0}
                              >
                                <div className="heading-xxsmall is-nav-menu-category">Integrations</div>
                                <div className="nav-dropdown_subhead-text">
                                  Fuse your favorite Shopify apps and automations without retooling
                                </div>
                              </Link>

                              <div className="space-y-2 mb-6">
                                <Link
                                  href="https://www.tapcart.com/integrations/klaviyo"
                                  className="nav_text-wrap nav_link w-inline-block"
                                  onClick={() => setOpenDropdown(null)}
                                  tabIndex={0}
                                >
                                  <div className="nav_button-text-wrap">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Klaviyo</h6>
                                  </div>
                                </Link>

                                <Link
                                  href="https://www.tapcart.com/integrations/recharge-payments"
                                  className="nav_text-wrap nav_link w-inline-block"
                                  onClick={() => setOpenDropdown(null)}
                                  tabIndex={0}
                                >
                                  <div className="nav_button-text-wrap">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Recharge</h6>
                                  </div>
                                </Link>

                                <Link
                                  href="https://www.tapcart.com/integrations/global-e"
                                  className="nav_text-wrap nav_link w-inline-block"
                                  onClick={() => setOpenDropdown(null)}
                                  tabIndex={0}
                                >
                                  <div className="nav_button-text-wrap flex items-center gap-2">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Global-e</h6>
                                    <div className="text-style_menu-item_badge">New</div>
                                  </div>
                                </Link>
                              </div>

                              <Link
                                href="/integrations"
                                className="nav_text-wrap new-nav-learn-more w-inline-block"
                                onClick={() => setOpenDropdown(null)}
                                tabIndex={0}
                              >
                                <div className="nav_button-text-wrap">
                                  <div className="nav-dropdown_read-more_link-wrapper">
                                    <div className="nav-dropdown_read-more-text">See all integrations</div>
                                    <svg className="nav-dropdown_read-more-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                      <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.nav>
                  )}
                </AnimatePresence>
              </div>

              {/* Pricing Simple Link */}
              <Link
                href="/pricing-new"
                className="new-ws-navbar-link link-only w-nav-link text-gray-700 font-medium hover:text-gray-900 owners-text"
                style={{ maxWidth: "1280px" }}
                onClick={() => setOpenDropdown(null)}
              >
                Pricing
              </Link>

              {/* Resources Dropdown */}
              <div className="dropdown-item w-dropdown relative" style={{ maxWidth: "1280px" }}>
                <button
                  onClick={() => handleDropdownClick("resources")}
                  className="new-ws-navbar-link w-dropdown-toggle flex items-center border-0 bg-transparent cursor-pointer owners-text"
                  id="w-dropdown-toggle-2"
                  aria-controls="w-dropdown-list-2"
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === "resources"}
                  role="button"
                  tabIndex={0}
                  style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                >
                  <div className="ws-navbar-text text-gray-700 font-medium hover:text-gray-900">Resources</div>
                  <div className="ws-navbar-icon w-embed ml-2">
                    <svg width="12" height="11" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6C1 6 6.08629 7.2 7 12C7.91371 7.2 13 6 13 6" stroke="#1B191B" strokeWidth="2"></path>
                    </svg>
                  </div>
                </button>
              </div>

              {/* Partners Dropdown */}
              <div className="dropdown-item w-dropdown relative" style={{ maxWidth: "1280px" }}>
                <button
                  onClick={() => handleDropdownClick("partners")}
                  className="new-ws-navbar-link w-dropdown-toggle flex items-center border-0 bg-transparent cursor-pointer owners-text"
                  id="w-dropdown-toggle-3"
                  aria-controls="w-dropdown-list-3"
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === "partners"}
                  role="button"
                  tabIndex={0}
                  style={{ borderColor: "rgba(0, 0, 0, 0)" }}
                >
                  <div className="ws-navbar-text text-gray-700 font-medium hover:text-gray-900">Partners</div>
                  <div className="ws-navbar-icon w-embed ml-2">
                    <svg width="12" height="11" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6C1 6 6.08629 7.2 7 12C7.91371 7.2 13 6 13 6" stroke="#1B191B" strokeWidth="2"></path>
                    </svg>
                  </div>
                </button>
              </div>

              {/* Original navigation items */}
              <div className="flex items-center space-x-8">
                {navigationData.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 font-medium hover:text-gray-900 owners-text"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div >

        {/* Mobile Drawer */}
        <AnimatePresence>
          {
            mobileMenuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/30 z-[998]"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.3 }}
                  className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[999] shadow-lg"
                >
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <span className="text-xl font-bold text-gray-900 owners-text">RapidApps</span>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      aria-label="Close Mobile Menu"
                    >
                      <X size={26} />
                    </button>
                  </div>

                  <nav className="flex flex-col px-6 py-4 space-y-0 owners-text">
                    {/* Mobile navigation items */}
                    <div className="border-b border-gray-200">
                      <button className="flex items-center justify-between w-full py-3 text-gray-900 font-medium">
                        Why RapidApps
                        <svg width="12" height="11" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                          <path d="M1 6C1 6 6.08629 7.2 7 12C7.91371 7.2 13 6 13 6" stroke="#1B191B" strokeWidth="2"></path>
                        </svg>
                      </button>
                    </div>

                    <div className="border-b border-gray-200">
                      <button className="flex items-center justify-between w-full py-3 text-gray-900 font-medium">
                        Platform
                        <svg width="12" height="11" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                          <path d="M1 6C1 6 6.08629 7.2 7 12C7.91371 7.2 13 6 13 6" stroke="#1B191B" strokeWidth="2"></path>
                        </svg>
                      </button>
                    </div>

                    <div className="border-b border-gray-200">
                      <Link
                        href="/pricing-new"
                        className="block py-3 text-gray-900 font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Pricing
                      </Link>
                    </div>

                    <div className="border-b border-gray-200">
                      <button className="flex items-center justify-between w-full py-3 text-gray-900 font-medium">
                        Resources
                        <svg width="12" height="11" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                          <path d="M1 6C1 6 6.08629 7.2 7 12C7.91371 7.2 13 6 13 6" stroke="#1B191B" strokeWidth="2"></path>
                        </svg>
                      </button>
                    </div>

                    <div className="border-b border-gray-200">
                      <button className="flex items-center justify-between w-full py-3 text-gray-900 font-medium">
                        Partners
                        <svg width="12" height="11" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                          <path d="M1 6C1 6 6.08629 7.2 7 12C7.91371 7.2 13 6 13 6" stroke="#1B191B" strokeWidth="2"></path>
                        </svg>
                      </button>
                    </div>

                    {/* Original mobile navigation items */}
                    {navigationData.map((item) => (
                      <div key={item.href} className="border-b border-gray-200 last:border-b-0">
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-3 text-gray-900 font-medium"
                        >
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </nav>
                </motion.div>
              </>
            )
          }
        </AnimatePresence >
      </header >
    </>
  );
};

export default RapidAppsHeader;