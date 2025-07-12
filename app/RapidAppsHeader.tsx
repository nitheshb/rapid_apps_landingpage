"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contacts" },
];

const RapidAppsHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <span className="text-2xl font-bold">Rapid Apps</span>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 font-bold hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (right to left) */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[999] shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-xl font-bold">Rapid Apps</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Mobile Menu"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-900 text-base font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[998]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default RapidAppsHeader;
