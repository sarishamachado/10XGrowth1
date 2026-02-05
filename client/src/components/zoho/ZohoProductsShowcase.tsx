'use client';

import { motion } from 'framer-motion';

export function ZohoProductsShowcase() {
    const products = [
        'Zoho CRM', 'Zoho Books', 'Zoho Projects', 'Zoho People', 'Zoho Desk',
        'Zoho Campaign', 'Zoho Creator', 'Zoho Analytics', 'Zoho Sign', 'Zoho Forms',
        'Zoho Inventory', 'Zoho Invoice', 'Zoho Expense', 'Zoho Recruit', 'Zoho Meeting',
    ];

    return (
        <section className="py-20 bg-navy-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-black text-white mb-6"
                    >
                        Zoho Products
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300"
                    >
                        Comprehensive solutions for every business need
                    </motion.p>
                </div>

                {/* Zoho One Highlight */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 mb-12 text-center"
                >
                    <h3 className="text-4xl font-black text-white mb-4">Zoho One</h3>
                    <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
                        Zoho One integration provides access to a variety of business applications from a single,
                        easy-to-use control panel. Comprehensive suite of enterprise-grade apps for Solopreneurs,
                        Start-ups, and SMBs, all customized to fit your business needs.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                        <span className="text-white font-bold">45+ Applications Included</span>
                    </div>
                </motion.div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {products.map((product, index) => (
                        <motion.div
                            key={product}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center cursor-pointer hover:bg-white/20 transition-all"
                        >
                            <p className="text-white font-semibold">{product}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-3xl font-bold text-white mb-2">& Many More!!</p>
                    <p className="text-gray-400">Explore the complete Zoho ecosystem</p>
                </motion.div>
            </div>
        </section>
    );
}
