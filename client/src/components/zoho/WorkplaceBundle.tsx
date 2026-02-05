'use client';

import { motion } from 'framer-motion';
import { Check, Briefcase } from 'lucide-react';

export function WorkplaceBundle() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Briefcase size={64} className="mb-6" />
                            <h3 className="text-4xl font-black mb-4">Zoho Workplace</h3>
                            <p className="text-white/90 text-lg leading-relaxed">
                                The Workplace plan provides a complete suite of productivity and office applications
                                for your teams. As all these applications are built in Zoho, they are tightly integrated
                                providing your users a smooth experience rather than hopping across applications from
                                different software vendors.
                            </p>
                        </div>

                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                            <h4 className="text-2xl font-bold mb-4">Includes:</h4>
                            <ul className="space-y-3">
                                {['Mail', 'Writer', 'Sheet', 'Show', 'Meeting', 'Cliq', 'WorkDrive', 'Connect'].map((app) => (
                                    <li key={app} className="flex items-center gap-3">
                                        <Check size={20} strokeWidth={3} />
                                        <span className="font-medium">{app}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
