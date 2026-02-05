'use client';

import { motion } from 'framer-motion';
import { Award, Settings, Users, TrendingUp } from 'lucide-react';

export function PartnershipSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 bg-purple-100 px-6 py-3 rounded-full mb-6"
                    >
                        <Award className="text-purple-700" size={24} />
                        <span className="text-purple-900 font-bold">Zoho Authorized Partner</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold text-navy-900 mb-6"
                    >
                        10xGrowth - Your Consulting and<br />
                        <span className="text-purple-700">Implementation Partner</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                    >
                        As your Zoho Authorized partner, 10xGrowth is committed to excellence. We seamlessly deploy Zoho
                        products across <strong>Finance, HR, Sales</strong>, and other critical areas, ensuring they align
                        perfectly with your unique business automation requirements.
                    </motion.p>
                </div>

                {/* Key Points */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl"
                    >
                        <Settings className="text-purple-700 mx-auto mb-4" size={48} />
                        <h3 className="text-xl font-bold text-navy-900 mb-3">Seamless Deployment</h3>
                        <p className="text-gray-600">
                            We deploy Zoho across all critical business areas with precision and efficiency.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl"
                    >
                        <Users className="text-purple-700 mx-auto mb-4" size={48} />
                        <h3 className="text-xl font-bold text-navy-900 mb-3">Custom Solutions</h3>
                        <p className="text-gray-600">
                            Tailored to your unique business automation requirements and workflows.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl"
                    >
                        <TrendingUp className="text-purple-700 mx-auto mb-4" size={48} />
                        <h3 className="text-xl font-bold text-navy-900 mb-3">Latest Features</h3>
                        <p className="text-gray-600">
                            Access and customize Zoho's latest features to match your business goals.
                        </p>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-2xl text-navy-900 font-semibold mb-6">Ready to explore?</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl"
                    >
                        Discover Our Services
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
