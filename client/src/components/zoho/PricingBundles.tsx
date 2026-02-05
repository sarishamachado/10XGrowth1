'use client';

import { motion } from 'framer-motion';
import { Users, ShoppingCart, DollarSign, Check } from 'lucide-react';

export function PricingBundles() {
    const bundles = [
        {
            icon: Users,
            name: 'Zoho People Plus',
            tagline: 'Complete HR Management',
            description: 'Deliver exceptional digital HR experiences to your employees while managing the entire employee life cycle on a single integrated platform. From building great teams to empowering them and keeping them engaged, we\'ve got it covered.',
            features: [
                'Recruitment & Onboarding',
                'Performance Management',
                'Time & Attendance',
                'Employee Self-Service',
                'HR Analytics & Reports',
                'Learning Management System',
            ],
            color: '#0066ff',
        },
        {
            icon: ShoppingCart,
            name: 'Zoho CRM Plus',
            tagline: 'Unified Customer Experience',
            description: 'Unify your sales, marketing, customer service, and every other customer-facing team on one platform so you can deliver exceptional customer experiences. Unify business data, customer engagements, and ROI.',
            features: [
                'Sales CRM',
                'Marketing Automation',
                'Customer Support',
                'Analytics & BI',
                'Social Media Management',
                'Unified Customer View',
            ],
            color: '#7b2cbf',
        },
        {
            icon: DollarSign,
            name: 'Zoho Finance Plus',
            tagline: 'End-to-End Finance Suite',
            description: 'From invoicing to order management to accounting, our integrated finance suite has all bases covered for your back office operations. GST-compliant features ensure your business stays compliant effortlessly.',
            features: [
                'Accounting & Invoicing',
                'Expense Management',
                'Inventory Management',
                'Order Management',
                'GST Compliance',
                'Financial Analytics',
            ],
            color: '#26a69a',
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-cream to-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold text-navy-900 mb-4"
                    >
                        Find The Perfect Bundle
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600"
                    >
                        Comprehensive packages tailored for different business needs
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {bundles.map((bundle, index) => (
                        <motion.div
                            key={bundle.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 hover:border-purple-500 transition-all group"
                        >
                            {/* Header */}
                            <div
                                className="p-8 text-white"
                                style={{ background: `linear-gradient(135deg, ${bundle.color}, ${bundle.color}dd)` }}
                            >
                                <bundle.icon size={48} className="mb-4" />
                                <h3 className="text-3xl font-black mb-2">{bundle.name}</h3>
                                <p className="text-white/90 text-lg">{bundle.tagline}</p>
                            </div>

                            {/* Description */}
                            <div className="p-8">
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {bundle.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {bundle.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="w-5 h-5 rounded-full flex items-center justify-center"
                                                    style={{ backgroundColor: `${bundle.color}20` }}
                                                >
                                                    <Check size={14} style={{ color: bundle.color }} strokeWidth={3} />
                                                </div>
                                            </div>
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-4 rounded-full font-bold text-white transition-all"
                                    style={{ background: bundle.color }}
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
