"use client";
import React from 'react';
import Link from 'next/link';

interface ResourcesMenuProps {
    setOpenDropdown: (value: string | null) => void;
}

const ResourcesMenu: React.FC<ResourcesMenuProps> = ({ setOpenDropdown }) => {
    return (
        <div className="ws-dropdown-menu-section new py-6" style={{ height: "100%" }}>
            <div className="ws-dropdown-content-container w-container" style={{ height: "100%" }}>
                <div className="w-layout-grid new-ws-navbar-layout" style={{ height: "100%" }}>

                    {/* Left Grid Section */}
                    <div className="ws-nav-left resources" style={{ height: "100%", width: "100%" }}>
                        <div className="mb-6">
                            <div className="heading-xxsmall is-nav-menu-category">Mobile App Marketing Resources</div>
                        </div>

                        <div className="grid grid-cols-3 gap-y-8 gap-x-6">

                            {/* Item 1: Podcast Hub */}
                            <div className="ws-navbar-menu-item-wrapper mobile-margin-0">
                                <Link href="/podcasts" className="nav_text-wrap nav_link w-inline-block" tabIndex={0} onClick={() => setOpenDropdown(null)}>
                                    <div className="nav_button-text-wrap">
                                        <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Podcast Hub</h6>
                                    </div>
                                    <p className="nav-dropdown_sub-text !text-[12px] leading-[1.4] owners-text font-sans">Sit back, relax, and listen to insights from brilliant minds in the ecom industry</p>
                                </Link>
                            </div>

                            {/* Item 2: The Page Block (Blog) */}
                            <div className="ws-navbar-menu-item-wrapper">
                                <Link href="/blog" className="nav_text-wrap nav_link w-inline-block" tabIndex={0} onClick={() => setOpenDropdown(null)}>
                                    <div className="nav_button-text-wrap">
                                        <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">The Page Block (Blog)</h6>
                                    </div>
                                    <p className="nav-dropdown_sub-text !text-[12px] leading-[1.4] owners-text font-sans">Discover the latest in retention, customer experience, and mobile app marketing</p>
                                </Link>
                            </div>

                            {/* Item 3: Mobile App Inspiration Center */}
                            <div className="ws-navbar-menu-item-wrapper mobile-margin-0">
                                <Link href="/mobile-app-inspiration-o" className="nav_text-wrap nav_link w-inline-block" tabIndex={0} onClick={() => setOpenDropdown(null)}>
                                    <div className="nav_button-text-wrap">
                                        <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Mobile App Inspiration Center</h6>
                                    </div>
                                    <p className="nav-dropdown_sub-text !text-[12px] leading-[1.4] owners-text font-sans">Be inspired by customer experiences DTC brands are creating with Rapid Apps</p>
                                </Link>
                            </div>
                        </div>

                        {/* Divider Line */}
                        <div className="border-t border-gray-200 w-full h-px my-6"></div>

                        {/* Second Row Grid */}
                        <div className="grid grid-cols-3 gap-y-8 gap-x-6">

                            {/* Item 4: Support Center */}
                            <div className="ws-navbar-menu-item-wrapper mobile-margin-0">
                                <div className="mb-4">
                                    <div className="heading-xxsmall is-nav-menu-category">User support</div>
                                </div>
                                <Link href="https://help.tapcart.com/" target="_blank" className="nav_text-wrap nav_link w-inline-block" tabIndex={0} onClick={() => setOpenDropdown(null)}>
                                    <div className="nav_button-text-wrap">
                                        <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Support Center</h6>
                                    </div>
                                    <p className="nav-dropdown_sub-text !text-[12px] leading-[1.4] owners-text font-sans">Self-serve advice, articles, and answers from the Rapid Apps team</p>
                                </Link>
                            </div>

                            {/* Item 5: Join UnTapped */}
                            <div className="ws-navbar-menu-item-wrapper">
                                <div className="mb-4 invisible">
                                    <div className="heading-xxsmall is-nav-menu-category">Spacer</div>
                                </div>
                                <Link href="/community" className="nav_text-wrap nav_link w-inline-block" tabIndex={0} onClick={() => setOpenDropdown(null)}>
                                    <div className="nav_button-text-wrap">
                                        <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Join UnTapped</h6>
                                    </div>
                                    <p className="nav-dropdown_sub-text !text-[12px] leading-[1.4] owners-text font-sans">Exclusively for Rapid Apps customers, connect and grow with other ecom experts</p>
                                </Link>
                            </div>

                            {/* Item 6: Customer Support */}
                            <div className="ws-navbar-menu-item-wrapper align-edge">
                                <div className="mb-4">
                                    <div className="heading-xxsmall is-nav-menu-category">Talk to us</div>
                                </div>
                                <a href="mailto:help@rapidapps.co" className="nav_text-wrap nav_link w-inline-block" tabIndex={0} onClick={() => setOpenDropdown(null)}>
                                    <div className="nav_button-text-wrap">
                                        <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16 hide-tablet">Customer Support</h6>
                                    </div>
                                    <p className="nav-dropdown_sub-text display-tablet !text-[12px] leading-[1.4] owners-text font-sans">help@rapidapps.co</p>
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Right Column - Tapcart Academy - Kept as sidebar per usual layout conventions unless user asks to delete */}
                    <div id="w-node-_51b89186-8442-9f17-7bd6-120ae9bbd8a7-11f6dcc5" className="ws-nav-right with-link-at-bottom" style={{ height: "100%" }}>
                        <Link href="https://academy.tapcart.com" target="_blank" className="mobile-margin-bottom-12 w-inline-block" tabIndex={0} onClick={() => setOpenDropdown(null)}>
                            <div className="heading-xxsmall is-nav-menu-category">Rapid Apps Academy</div>
                            <div className="nav-dropdown_subhead-text">Learn how to build, launch, and manage your mobile app</div>
                        </Link>

                        <div className="flex flex-col ">
                            <Link href="https://academy.tapcart.com/course/features" target="_blank" className="nav_text-wrap w-inline-block" tabIndex={0} onClick={() => setOpenDropdown(null)}>
                                <div className="nav_button-text-wrap flex items-center">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Rapid Apps Features</h6>
                                    <div className="text-style_menu-item_badge w-fit ml-2">New</div>
                                </div>
                            </Link>

                            <Link href="https://academy.tapcart.com/all-courses#tools" target="_blank" className="nav_text-wrap nav_link w-inline-block" tabIndex={0} onClick={() => setOpenDropdown(null)}>
                                <div className="nav_button-text-wrap">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Building Your App</h6>
                                </div>
                            </Link>

                            <Link href="https://academy.tapcart.com/all-courses#launch" target="_blank" className="nav_text-wrap nav_link w-inline-block" tabIndex={0} onClick={() => setOpenDropdown(null)}>
                                <div className="nav_button-text-wrap">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Launching Your App</h6>
                                </div>
                            </Link>

                            <Link href="https://academy.tapcart.com/all-courses#acquisition-retention" target="_blank" className="nav_text-wrap nav_link w-inline-block" tabIndex={0} onClick={() => setOpenDropdown(null)}>
                                <div className="nav_button-text-wrap">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Acquisition + Retention</h6>
                                </div>
                            </Link>

                            <Link href="https://academy.tapcart.com/all-courses#app-optimization" target="_blank" className="nav_text-wrap nav_link w-inline-block" tabIndex={0} onClick={() => setOpenDropdown(null)}>
                                <div className="nav_button-text-wrap">
                                    <h6 className="heading-11 heading-12 heading-13 heading-14 heading-15 heading-16">Mobile App Optimization</h6>
                                </div>
                            </Link>

                            <Link href="https://academy.tapcart.com/" target="_blank" className="nav_text-wrap w-inline-block border-t border-gray-200 pt-2 mt-2" tabIndex={0} onClick={() => setOpenDropdown(null)}>
                                <div className="nav_button-text-wrap">
                                    <div className="nav-dropdown_read-more_link-wrapper">
                                        <div className="nav-dropdown_read-more-text">See all courses &gt;</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ResourcesMenu;
