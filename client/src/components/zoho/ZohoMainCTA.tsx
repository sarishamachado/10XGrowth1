'use client';

import { motion } from 'framer-motion';

export function ZohoMainCTA() {
    return (
        <section className="py-32 bg-gradient-to-br from-purple-900 via-navy-900 to-blue-900 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black text-white mb-6"
                >
                    Ready to Transform<br />Your Business?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl text-gray-300 mb-12"
                >
                    Let's discuss how Zoho can revolutionize your operations.
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
                        Schedule a Consultation
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#1a2332' }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white px-12 py-5 rounded-full font-bold text-xl transition-all"
                    >
                        View Pricing
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
