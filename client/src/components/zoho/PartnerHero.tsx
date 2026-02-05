'use client';

import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

export function PartnerHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-purple-900 to-navy-900 overflow-hidden pt-20">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 bg-yellow-500/20 px-4 py-2 rounded-full mb-6">
                            <Award className="text-yellow-400" size={24} />
                            <span className="text-yellow-300 font-bold">Certified Zoho Partner</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
                            Your Trusted<br />
                            <span className="text-purple-400">Zoho Partner</span>
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            As an authorized Zoho partner, we bring certified expertise, proven implementation
                            methodologies, and dedicated support to help you maximize your Zoho investment.
                        </p>

                        <div className="flex gap-8">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                    <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                    <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                    <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                    <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                </div>
                                <p className="text-gray-400 text-sm">5-Star Certified Partner</p>
                            </div>

                            <div>
                                <p className="text-3xl font-black text-white">100+</p>
                                <p className="text-gray-400 text-sm">Successful Implementations</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="w-full aspect-square bg-white/10 backdrop-blur-xl rounded-3xl border-2 border-purple-500 flex items-center justify-center p-12">
                            <div className="text-center">
                                <Award className="text-purple-400 mx-auto mb-6" size={120} strokeWidth={1.5} />
                                <p className="text-3xl font-black text-white mb-2">Zoho Authorized</p>
                                <p className="text-xl text-purple-300">Implementation Partner</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
