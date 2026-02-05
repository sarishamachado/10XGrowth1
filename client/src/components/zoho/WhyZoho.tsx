'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function WhyZoho() {
    const benefits = [
        'Complete suite of integrated applications',
        'Covers every aspect of your business',
        'User-friendly interface for easy adoption',
        'Affordable and flexible pricing',
        'Robust security measures',
        'Dedicated customer support',
        'Scalable for businesses of all sizes',
        'Trusted by millions worldwide',
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-navy-900 to-purple-900 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-black text-white mb-6"
                    >
                        Why <span className="text-purple-400">Zoho</span>?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        Zoho stands out because it offers a complete suite of integrated applications that cover every aspect
                        of your business. Whether you need to manage customer relationships, handle finances, streamline HR
                        processes, or boost your marketing efforts, Zoho has a tool for you.
                    </motion.p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                                    <Check size={16} className="text-white" strokeWidth={3} />
                                </div>
                            </div>
                            <p className="text-white font-medium">{benefit}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-2xl text-white font-semibold">
                        Choosing Zoho means choosing a partner committed to helping your business{' '}
                        <span className="text-purple-400">grow and succeed</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
