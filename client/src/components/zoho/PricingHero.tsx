'use client';

import { motion } from 'framer-motion';

export function PricingHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-navy-900 to-purple-900 overflow-hidden pt-20">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-7xl font-black text-white mb-6"
                >
                    Choose the Right <span className="text-purple-400">Package</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                >
                    Discover our all-inclusive service packages, carefully crafted to fit your budget and
                    requirements. From implementation to training and support, we offer transparent pricing
                    and flexible options to support your Zoho journey.
                </motion.p>
            </div>
        </section>
    );
}
