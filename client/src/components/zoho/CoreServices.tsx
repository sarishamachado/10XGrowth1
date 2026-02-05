'use client';

import { motion } from 'framer-motion';
import { Rocket, GraduationCap, Wrench, Lightbulb } from 'lucide-react';

export function CoreServices() {
    const services = [
        {
            icon: Rocket,
            title: 'Zoho Setup and Implementation',
            description: 'At 10xGrowth, we ensure a smooth and efficient setup of Zoho applications tailored to your business needs. Our experts handle the technical details, so you can start benefiting from Zoho\'s powerful tools without any hassle.',
            color: '#0066ff',
        },
        {
            icon: GraduationCap,
            title: 'Training and Support',
            description: 'We provide comprehensive training sessions to ensure your team can use Zoho effectively and confidently. Our ongoing support means we\'re always here to help, offering guidance and solving any issues that arise, so you can focus on your core business.',
            color: '#7b2cbf',
        },
        {
            icon: Wrench,
            title: 'Custom Solutions',
            description: 'Every business is unique, and so are its needs. We specialize in customizing Zoho applications to fit your specific requirements. Whether it\'s a unique workflow or a specialized integration, we create solutions that perfectly match your business processes.',
            color: '#ff6b35',
        },
        {
            icon: Lightbulb,
            title: 'Expert Consulting',
            description: 'Our consulting services offer strategic advice to help you get the most out of your Zoho investment. We provide insights and best practices to optimize your workflows, enhance productivity, and achieve your business goals, ensuring long-term success with Zoho.',
            color: '#26a69a',
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-cream to-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm uppercase tracking-wider text-purple-700 mb-4"
                    >
                        What We Offer
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold text-navy-900"
                    >
                        Our Core Services
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-purple-500 hover:shadow-xl transition-all group"
                        >
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                style={{ backgroundColor: `${service.color}20` }}
                            >
                                <service.icon size={32} style={{ color: service.color }} />
                            </div>

                            <h3 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
