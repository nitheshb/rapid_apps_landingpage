"use client";
import React from 'react';
import Link from 'next/link';

interface PartnersMenuProps {
    setOpenDropdown: (value: string | null) => void;
}

const PartnersMenu: React.FC<PartnersMenuProps> = ({ setOpenDropdown }) => {
    return (
        <div style={{ width: "100%" }}>
            <div className="ws-dropdown-menu-section new py-2">
                <div className="ws-dropdown-content-container w-container">
                    <div className="w-layout-grid new-ws-navbar-layout h-full !gap-0">
                        {/* Left Grid Section */}
                        <div className="ws-nav-left">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                {/* Agency Partners Group */}
                                <div className="flex flex-col gap-2">
                                    <Link href="/partner-program" className="w-inline-block" onClick={() => setOpenDropdown(null)}>
                                        <div className="heading-xxsmall is-nav-menu-category mobile-margin-bottom-12">Agency Partners</div>
                                        <div className="nav-dropdown_subhead-text margin-bottom margin-large">Earn ongoing commissions while helping your clients achieve their growth goals</div>
                                    </Link>

                                    <div className="flex flex-col gap-1">
                                        <Link href="/partner-program" className="nav_text-wrap nav_link w-inline-block" onClick={() => setOpenDropdown(null)}>
                                            <div className="nav_button-text-wrap">
                                                <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Become an Agency Partner</h6>
                                            </div>
                                        </Link>

                                        <Link href="https://agencies.tapcart.com/" target="_blank" className="nav_text-wrap nav_link w-inline-block" onClick={() => setOpenDropdown(null)}>
                                            <div className="nav_button-text-wrap">
                                                <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Browse Agency Partners</h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Tech Partners Group */}
                                <div className="flex flex-col gap-2">
                                    <Link href="/integrations" className="w-inline-block" onClick={() => setOpenDropdown(null)}>
                                        <div className="heading-xxsmall is-nav-menu-category mobile-margin-bottom-12">Tech Partners</div>
                                        <div className="nav-dropdown_subhead-text margin-bottom margin-large">Unlock new paths to integration, revenue opportunities, and co-marketing benefits</div>
                                    </Link>

                                    <div className="flex flex-col gap-1">
                                        <Link href="#" className="nav_link w-inline-block" onClick={() => setOpenDropdown(null)}>
                                            <div className="w-layout-hflex nav_button-text-wrap">
                                                <h6 className="heading-16 heading-11 heading-12 heading-13 heading-14 heading-15">Become a Tech Partner</h6>
                                            </div>
                                        </Link>

                                        <Link href="/integrations" className="nav_link w-inline-block" onClick={() => setOpenDropdown(null)}>
                                            <div className="nav_button-text-wrap">
                                                <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Browse Integrations</h6>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Referral Link */}
                            <div className="mt-2">
                                <Link href="/partner-referral" className="nav_text-wrap new-nav-learn-more w-inline-block border-t border-gray-200 pt-2 mt-2" onClick={() => setOpenDropdown(null)}>
                                    <div className="nav_button-text-wrap">
                                        <div className="nav-dropdown_read-more_link-wrapper">
                                            <div className="nav-dropdown_read-more-text">Submit a Referral &gt;</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Featured Blog */}
                        <div className="ws-nav-right featured-blog hide-tablet !pl-0 !pt-0 -mt-6 -mb-6 !pr-10">
                            <div className="collection-list-wrapper-5 w-dyn-list h-full">
                                <div role="list" className="collection-list-9 w-dyn-items h-full">
                                    <div role="listitem" className="nav_blog-item w-dyn-item flex flex-col h-full cursor-pointer group">
                                        <Link href="/blog/ai-native-mobile-commerce" className="w-inline-block flex flex-col" onClick={() => setOpenDropdown(null)}>
                                            <div className="overflow-hidden relative h-44 w-full -mt-4">
                                                <img
                                                    src="https://cdn.prod.website-files.com/616f0a7a027baab453433911/6939b48428ef52fafb48e28e_Introducing%20Tapcart%20AI-Native%20Mobile%20Commerce.png"
                                                    alt="Featured Blog"
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                <div className="absolute bottom-2 left-2">
                                                    <div className="text-style_menu-item_badge margin-0 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">Featured Blog</div>
                                                </div>
                                            </div>

                                            <div className="nav-featured-blog-blurb p-3">
                                                <div className="nav_text-wrap nav_link w-inline-block mb-2">
                                                    <div className="nav_button-text-wrap">
                                                        <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16 text-lg font-semibold group-hover:text-blue-600 transition-colors">Introducing Rapid Apps AI: More Revenue, Less Busywork</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                        <div className="px-3 pb-3">
                                            <Link href="/blog-old" className="nav_text-wrap new-nav-learn-more w-inline-block border-t border-gray-200 pt-2 mt-2" onClick={() => setOpenDropdown(null)}>
                                                <div className="nav_button-text-wrap">
                                                    <div className="nav-dropdown_read-more_link-wrapper">
                                                        <div className="nav-dropdown_read-more-text">See all blogs &gt;</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="ws-dropdown-menu-section contact border-t border-gray-300 py-2 bg-gray-50">
                <div className="ws-dropdown-contact-info-wrap w-container flex justify-start gap-8 items-center max-w-7xl mx-auto px-4">
                    <div className="nav-contact_left">
                        <a href="mailto:help@rapidapps.co" className="w-inline-block text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">
                            <div>help@rapidapps.co</div>
                        </a>
                    </div>
                    <div className="nav-contact_right flex gap-6">
                        <a href="https://www.linkedin.com/company/rapidapps" target="_blank" className="w-inline-block text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">
                            <div>LinkedIn</div>
                        </a>
                        <a href="https://www.instagram.com/rapidapps" target="_blank" className="w-inline-block text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors">
                            <div>Instagram</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersMenu;
