'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, Headphones } from 'lucide-react';

export function WhyChoose10xGrowth() {
    const reasons = [
        {
            icon: Shield,
            title: 'Proven Track Record',
            description: '100+ successful Zoho implementations across diverse industries with measurable results.',
        },
        {
            icon: Award,
            title: 'Industry Expertise',
            description: 'Deep knowledge across Finance, HR, Sales, Marketing, and Operations.',
        },
        {
            icon: Users,
            title: 'Top Class Services',
            description: 'White-glove implementation, training, and customization services tailored to you.',
        },
        {
            icon: Headphones,
            title: 'End-to-End Support',
            description: 'From initial consultation to ongoing optimization, we\'re with you every step.',
        },
    ];

    return (
        <section className="py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold text-navy-900 mb-6"
                    >
                        Why Choose <span className="text-purple-700">10xGrowth</span>?
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <reason.icon className="text-purple-700" size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-3">{reason.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
