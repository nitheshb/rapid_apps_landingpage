"use client";

import { useState } from "react";
import Head from "next/head";
import { Menu, X } from "lucide-react";

import Button from "./Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Generate dot grid pattern
  const DotGrid = () => (
    <div className="absolute inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 0)
        `,
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );

  // Geometric shape component
  const GeometricShape = ({
    position,
    color,
  }: {
    position: "left" | "right";
    color: "red" | "blue";
  }) => {
    const baseClasses = "absolute w-64 h-64";
    const positionClasses =
      position === "left"
        ? "left-4 lg:left-20 top-40"
        : "right-4 lg:right-20 bottom-20";
    const shapeColor = color === "red" ? "rgb(239 68 68)" : "rgb(59 130 246)";

    return (
      <div className={`${baseClasses} ${positionClasses}`}>
        {/* Solid shape */}
        <div
          className="absolute inset-0 rounded-full opacity-20"
          style={{ backgroundColor: shapeColor }}
        />
        {/* Border shape */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1.5px solid ${shapeColor}`,
            opacity: 0.3,
            transform: `rotate(${position === "left" ? "-45deg" : "45deg"})`,
          }}
        />
        {/* Additional geometric patterns */}
        {position === "left" && (
          <div className="absolute -top-8 -left-8">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-black/20 rounded-full"
                style={{
                  transform: `rotate(${i * 30}deg) translateY(-12px)`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>C&C™ | Design Agency with a Twist</title>
        <meta
          name="description"
          content="Design subscriptions for everyone. Pause or cancel anytime."
        />
      </Head>

      <main className="min-h-screen  relative overflow-hidden">
        {/* Background dot pattern */}
        <DotGrid />

        {/* Logo */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <circle cx="12" cy="12" r="12" className="fill-black" />
            </svg>
            <span className="font-medium text-sm">C&C™</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative pt-32 pb-40 px-6">
          {/* Geometric shapes */}
          <GeometricShape position="left" color="red" />
          <GeometricShape position="right" color="blue" />

          {/* Portfolio Grid Examples */}
          {/* <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              '/api/placeholder/600/450',
              '/api/placeholder/600/450',
              '/api/placeholder/600/450',
            ].map((src, index) => (
              <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={src}
                  alt={`Design example ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div> */}

          {/* Hero Content */}
          <div className="max-w-screen-xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-medium mb-6 tracking-tight">
              A design agency
              <br />
              with a twist
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Design subscriptions for everyone. Pause or cancel anytime.
            </p>
            <Button className="bg-black text-white rounded-full px-8 py-4 font-medium text-sm hover:bg-gray-800 transition-colors">
              See plans
            </Button>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
          <nav className="bg-black/90 backdrop-blur-lg rounded-full">
            <div className="relative px-4 py-3">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-center gap-8">
                <NavLink href="#how">How it works</NavLink>
                <NavLink href="#benefits">Benefits</NavLink>
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#pricing">Pricing</NavLink>
                <NavLink href="#faqs">FAQs</NavLink>
                <button className="text-sm text-black bg-white px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
                  Login
                </button>
              </div>

              {/* Mobile Navigation Button */}
              <div className="md:hidden flex items-center justify-between">
                <button
                  className="text-white p-2"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className="flex items-center gap-4">
                  <span className="text-white text-sm">Menu</span>
                  <button className="text-sm text-black bg-white px-4 py-2 rounded-full">
                    Login
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="absolute bottom-full left-0 right-0 mb-4 bg-black/90 backdrop-blur-lg rounded-2xl p-4 min-w-[280px]">
                <div className="flex flex-col space-y-4">
                  <MobileNavLink href="#how">How it works</MobileNavLink>
                  <MobileNavLink href="#benefits">Benefits</MobileNavLink>
                  <MobileNavLink href="#services">Services</MobileNavLink>
                  <MobileNavLink href="#pricing">Pricing</MobileNavLink>
                  <MobileNavLink href="#faqs">FAQs</MobileNavLink>
                </div>
              </div>
            )}
          </nav>
        </div>
      </main>
    </>
  );
}

// Navigation Link Components
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-sm text-white/90 hover:text-white transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-sm text-white/90 hover:text-white transition-colors block px-2 py-1"
  >
    {children}
  </a>
);
