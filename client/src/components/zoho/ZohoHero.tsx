'use client';

import { motion } from 'framer-motion';

export function ZohoHero() {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-navy-900 to-blue-900 overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0">
                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

                {/* Glowing Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight"
                    >
                        Take Your Business to the{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                            Next Level
                        </span>{' '}
                        with Zoho
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                    >
                        Welcome to 10xGrowth, your trusted <span className="text-purple-400 font-semibold">Zoho Authorized Partner</span>.
                        We specialize in transforming businesses with tailored Zoho solutions to optimize operations,
                        enhance productivity, and drive growth.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg text-purple-200 mb-12"
                    >
                        Discover how we can empower your business to achieve new heights.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-purple-500/50 transition-shadow"
                        >
                            Explore Solutions
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#1a2332' }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
                        >
                            Schedule Consultation
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
                >
                    <motion.div
                        className="w-1.5 h-2 bg-white/60 rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
