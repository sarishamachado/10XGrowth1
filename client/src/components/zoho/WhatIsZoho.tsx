'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, Users, TrendingUp, Lock } from 'lucide-react';

export function WhatIsZoho() {
    const features = [
        { icon: LayoutGrid, label: 'Integrated Suite' },
        { icon: Users, label: 'Collaboration Tools' },
        { icon: TrendingUp, label: 'Business Growth' },
        { icon: Lock, label: 'Secure Platform' },
    ];

    return (
        <section className="py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6">
                            What is <span className="text-purple-700">Zoho</span>?
                        </h2>

                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
                            <p>
                                Zoho is a <strong>comprehensive suite of online productivity tools and SaaS applications</strong> designed
                                to help businesses manage their operations smoothly and efficiently.
                            </p>
                            <p>
                                From CRM and project management to invoicing, HR, and marketing automation, Zoho offers a wide range
                                of software solutions that integrate seamlessly to streamline workflows, improve collaboration, and
                                enhance productivity.
                            </p>
                            <p>
                                Trusted by <strong>millions of users worldwide</strong>, Zoho empowers businesses to operate smarter,
                                faster, and more effectively.
                            </p>
                        </div>

                        {/* Feature Icons */}
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                        <feature.icon className="text-purple-700" size={24} />
                                    </div>
                                    <span className="text-navy-900 font-medium">{feature.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px]"
                    >
                        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl backdrop-blur-sm border border-purple-200 flex items-center justify-center p-8">
                            <div className="text-center">
                                <div className="text-9xl mb-4">🔧</div>
                                <p className="text-2xl font-bold text-navy-900">Zoho Ecosystem</p>
                                <p className="text-gray-600 mt-2">45+ Integrated Applications</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
