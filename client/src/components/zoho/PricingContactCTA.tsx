'use client';

import { motion } from 'framer-motion';

export function PricingContactCTA() {
    return (
        <section className="py-32 bg-navy-900">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-black text-white mb-6"
                >
                    Ready to Get Started?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl text-gray-300 mb-12"
                >
                    Get in touch today to explore our competitive rates and<br />
                    find the perfect fit for your business needs.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-coral-500 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl"
                    >
                        Contact Sales
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#1a2332' }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white px-12 py-5 rounded-full font-bold text-xl transition-all"
                    >
                        Request Quote
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
