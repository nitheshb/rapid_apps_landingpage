"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RapidAppsHeader = () => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-2">
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" fill="#6366F1" />
                <path
                  d="M8 12l2.5 2.5L16 9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-2xl font-bold text-[#6366F1]">Rapid Apps</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-gray-900">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-700 hover:text-gray-900">
              Portfolio
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </nav>


        </div>
      </div>
    </header>
  );
};

export default RapidAppsHeader;
