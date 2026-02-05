'use client';

import { motion } from 'framer-motion';
import { Link } from 'wouter';

export function ZohoProductsPreview() {
    return (
        <section className="py-20 bg-navy-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-black text-white mb-6"
                >
                    Explore <span className="text-purple-400">Zoho Products</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-300 mb-12"
                >
                    From Zoho One to specialized bundles, discover the perfect solution for your business.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <Link href="/zoho/partner">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl"
                        >
                            View All Products
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
