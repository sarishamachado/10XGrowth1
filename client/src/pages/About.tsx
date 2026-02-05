import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function About() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navigation />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center bg-[#0b1120]">
                    {/* Abstract Backgrounds similar to Contact page */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
                    </div>

                    <div className="container relative z-10 mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">
                                Welcome to 10xGrowth
                            </span>
                            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter leading-tight max-w-4xl mx-auto">
                                Discover Why We Are Passionate About Helping Businesses Grow.
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                                At 10xGrowth, we are driven by a singular vision to empower businesses with innovative solutions that unlock their true potential. Established with a passion for problem-solving and a commitment to excellence, we have been serving businesses of all sizes, industries, and aspirations for over a decade.
                            </p>

                            <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                                <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                                <p className="text-muted-foreground">
                                    Our mission is simple yet profound—to be the trusted partner that propels your business forward. We strive to understand the unique challenges and opportunities that your organization faces and craft tailored solutions that not only address immediate needs but also lay the groundwork for sustained growth.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-white/5 border-y border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <StatCard number="50+" label="Experts" delay={0.1} />
                            <StatCard number="200+" label="Clients" delay={0.2} />
                            <StatCard number="15+" label="Years of Experience" delay={0.3} />
                            <StatCard number="10+" label="Countries" delay={0.4} />
                        </div>
                    </div>
                </section>

                {/* CEO Section */}
                <section className="py-24 bg-background relative overflow-hidden">
                    {/* Clean background with whitespace */}
                    <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative mb-8 group"
                        >
                            {/* Blue circular background with glow */}
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl transform scale-110 group-hover:scale-125 transition-transform duration-500" />

                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-900/10 border-4 border-blue-500/10 p-2 relative">
                                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden relative z-10">
                                    <img src="/images/ceo.png" alt="Ajay Sanghani - CEO" className="w-full h-full object-cover" />
                                </div>

                                {/* Decorative Dots */}
                                <div className="absolute top-6 right-6 w-4 h-4 bg-primary rounded-full z-20 shadow-lg shadow-primary/50" />
                                <div className="absolute bottom-6 left-6 w-4 h-4 bg-orange-500 rounded-full z-20 shadow-lg shadow-orange-500/50" />
                            </div>
                        </motion.div>

                        <div className="text-center space-y-2">
                            <h2 className="text-3xl font-display font-bold text-white tracking-wide">AJAY SANGHANI</h2>
                            <p className="text-orange-500 font-bold tracking-widest uppercase">CEO</p>
                        </div>
                    </div>
                </section>

                {/* Career Section */}
                <section className="py-24 bg-white text-background">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-[#0b1120]">
                                Explore Exciting And Rewarding<br />Career Opportunities
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                To be the part of our team just click on this link
                            </p>
                            <Link href="/careers">
                                <a className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:underline group">
                                    View Open Positions <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function StatCard({ number, label, delay }: { number: string, label: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
        >
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{number}</h3>
            <p className="text-muted-foreground font-medium">{label}</p>
        </motion.div>
    );
}
