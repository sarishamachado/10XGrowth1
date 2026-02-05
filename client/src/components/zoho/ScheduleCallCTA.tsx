'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function ScheduleCallCTA() {
    return (
        <section className="py-32 bg-gradient-to-br from-purple-900 to-navy-900">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Calendar className="text-purple-400 mx-auto mb-6" size={80} />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-black text-white mb-6"
                >
                    Schedule a Call Now to<br />
                    <span className="text-purple-400">Boost Your Business</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-300 mb-12"
                >
                    Get expert guidance on how Zoho can transform your operations.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-coral-500 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-coral-600 transition-colors"
                >
                    Schedule Your Free Consultation
                </motion.button>
            </div>
        </section>
    );
}
