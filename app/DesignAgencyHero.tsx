import Link from "next/link";
import Image from "next/image";

export default function DesignAgencyHero() {
    return (
        <section className="flex flex-col items-center justify-center text-center px-4 pt-20 pb-32 max-w-[1350px] mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full p-1 pr-4 shadow-sm border border-gray-100 mb-8">
                <span className="bg-[#101011] text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    New
                </span>
                <span className="text-sm text-gray-600">
                    <strong className="text-black">100%</strong> theme-matched, done-for-you in{" "}
                    <strong className="text-black">7 days</strong> or less
                </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-[1.1] max-w-5xl mx-auto">
                Native Mobile Apps that look EXACTLY like Your Shopify Store.
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mb-10 leading-relaxed">
                No drag-and-drop. No generic templates. <span className="text-gray-900">We take</span> your Shopify theme and <span className="text-gray-900">turn i</span>nto a lightning-fast app that feels like your website — <span className="text-gray-900">but native</span>.
            </p>

            {/* CTA Button */}
            <Link
                href="#cta"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-b from-[#5235ef] to-[#8771ff] rounded-full shadow-[0_6px_20px_0_rgba(82,53,239,0.6)] hover:shadow-lg transition-all duration-200"
            >
                <span>Book Free • 15-Min App Demo</span>
                <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <Image
                        src="https://framerusercontent.com/images/JB06e6LZsr2MhVwjLlHEhrgQ.svg"
                        alt="Arrow right"
                        width={10}
                        height={10}
                        className="w-3 h-3"
                    />
                </div>
            </Link>
        </section>
    );
}

