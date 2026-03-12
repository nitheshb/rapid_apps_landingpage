import React from "react";
import Link from "next/link";

export default function RapidAppsFooter() {
  return (
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
              <span className="text-4xl font-black tracking-tighter text-white">RapidApps</span>
            </Link>
            <div className="flex items-center gap-2 text-[#FDF9F1] hover:text-gray-300 transition-colors">
              <a href="mailto:help@rapidapps.co">help@rapidapps.co</a>
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
        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-4">
          <div className="flex flex-col md:flex-row gap-8 text-sm text-white">
            <span>© Copyright 2024 RapidApps Inc.</span>
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
  );
}
