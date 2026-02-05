import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Check, X as XIcon, TrendingUp, Users, Target, Rocket, Layers, BarChart3, Database, Shield, Zap, Globe, MessageSquare, UserPlus, Smartphone, Megaphone, Cloud, Coins, Layout } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navigation />

      <main>
        <HeroSection />
        <TrustedBySection />
        <TrustRibbon />
        <ProblemSolutionSection />
        <ServicesCarousel />
        <ProcessTimeline />
        <GrowthVisualization />
        <DeepDiveZoho />
        <DeepDiveCXO />
        <SocialProof />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

// ---------------- SECTIONS ---------------- //

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase">
            The Future of B2B Growth
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter">
            <span className="block text-white">10X</span>
            <span className="block text-white/50">YOUR</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">GROWTH.</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            We don't just advise. We execute. The strategic partnership that bridges the gap between ambition and exponential results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/25">
              Start Your Journey
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/5 hover:border-white/40 transition-all">
              View Our Work
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[600px] w-full hidden lg:block perspective-1000"
        >
          {/* Abstract 3D Representation */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Main Cube */}
            <motion.div
              animate={{ rotateY: 360, rotateX: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 border border-primary/50 bg-primary/5 backdrop-blur-sm rounded-3xl relative transform-style-3d shadow-[0_0_100px_rgba(255,107,53,0.3)]"
            >
              {/* Inner floating elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-accent/20 rounded-full blur-xl" />
              </div>
            </motion.div>

            {/* Orbiting Elements */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-full border border-white/5 rounded-full"
                style={{ width: `${120 + i * 40}%`, height: `${120 + i * 40}%` }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
              >
                <div className="w-4 h-4 bg-white rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_20px_white]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50"
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-current rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

function TrustedBySection() {
  const logos = [
    { name: "SaSarjan", path: "/logos/logo_sasarjan.png" },
    { name: "Fincare", path: "/logos/logo_fincare.png" },
    { name: "Travelpack", path: "/logos/logo_travelpack.png" },
    { name: "Tekno Point", path: "/logos/logo_teknopoint.png" },
    { name: "Global Ecovillage", path: "/logos/logo_global_ecovillage.png" },
    { name: "PathCheck", path: "/logos/logo_pathcheck.png" },
    { name: "Dun & Bradstreet", path: "/logos/logo_dunbradstreet.png" },
    { name: "Web Geo Services", path: "/logos/logo_webgeoservices.png" },
  ];

  return (
    <section className="py-20 bg-background overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground font-medium uppercase tracking-[0.2em] text-xs mb-12">
          Trusted By Industry Leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 hover:opacity-100 transition-opacity duration-500">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img src={logo.path} alt={logo.name} className="h-8 md:h-12 w-auto max-w-[140px] object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustRibbon() {
  const services = ["Growth Strategy", "Digital Transformation", "Zoho Implementation", "CXO on Demand", "Performance Marketing", "Process Automation", "Team Augmentation"];

  return (
    <div className="w-full py-8 bg-white/5 border-y border-white/5 overflow-hidden">
      <div className="flex w-max animate-scroll">
        {[...services, ...services].map((service, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="w-2 h-2 rounded-full bg-primary mr-4" />
            <span className="text-lg font-display font-bold text-white/80 uppercase tracking-widest whitespace-nowrap">
              {service}
            </span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

function ProblemSolutionSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="The Reality"
          title="The Growth Paradox"
          subtitle="Why most companies hit a ceiling despite working harder than ever."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mt-16">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group hover:border-destructive/50 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <XIcon size={120} className="text-destructive" />
            </div>
            <h3 className="text-2xl font-bold mb-8 text-white">The Struggle</h3>
            <ul className="space-y-6">
              {[
                "Disjointed tools and silos creating friction",
                "Strategy without execution capability",
                "Burned out leadership doing 'everything'",
                "Unpredictable revenue growth",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-muted-foreground group-hover:text-destructive/80 transition-colors">
                  <XIcon className="shrink-0 mt-1 text-destructive" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 relative overflow-hidden group hover:border-primary/50 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Check size={120} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-8 text-white">The 10x Solution</h3>
            <ul className="space-y-6">
              {[
                "Unified technology ecosystem",
                "Strategic partnership + Hands-on execution",
                "Fractional C-Suite leadership",
                "Data-driven, predictable scaling engines",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white/80 group-hover:text-white transition-colors">
                  <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check size={12} className="text-white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesCarousel() {
  const services = [
    {
      title: "Growth Consulting",
      description: "We begin our engagement with understanding your vision, your current team and resources, the gaps in execution, and then, we jointly create a roadmap for 10xGrowth.",
      icon: TrendingUp,
      color: "#ff6b35",
      tags: ["Strategy", "Execution", "Roadmap"]
    },
    {
      title: "Recruitment",
      description: "Discover top talent effortlessly with our recruitment services. Our team of expert recruiters ensures you find the perfect fit for your company, turning your hiring needs into a reality.",
      icon: UserPlus,
      color: "#8b5cf6",
      tags: ["HR", "Talent", "Scale"]
    },
    {
      title: "Zoho Implementation",
      description: "Maximize your business efficiency with our Zoho integration services. We seamlessly connect Zoho with third-party apps, customizing workflows to suit your needs.",
      icon: Database,
      color: "#3b82f6",
      tags: ["CRM", "Automation", "Efficiency"]
    },
    {
      title: "Fund Raising",
      description: "We'll help you connect with investors and craft an attractive pitch deck to achieve your fundraising goals. With our strong investor network, your project will stand out.",
      icon: Coins,
      color: "#10b981",
      tags: ["Investors", "Pitch Deck", "Funding"]
    },
    {
      title: "Website Development",
      description: "Achieve your online goals effortlessly with our web development services. We'll build your website, integrate hosting, and streamline customer management with CRM integration.",
      icon: Globe,
      color: "#f59e0b",
      tags: ["Web", "Hosting", "CRM"]
    },
    {
      title: "App Development",
      description: "We ensure your app is user-friendly and reliable. With our expertise, we provide a seamless experience for both you and your users throughout the app development process.",
      icon: Smartphone,
      color: "#ec4899",
      tags: ["Mobile", "UX/UI", "Reliability"]
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence with our digital marketing services. We specialize in building brands, crafting tailored strategies to engage your audience and drive conversions.",
      icon: Megaphone,
      color: "#6366f1",
      tags: ["Branding", "Strategies", "Conversions"]
    },
    {
      title: "Cloud Infrastructure",
      description: "We take care of everything from managing your IT needs to keeping your data safe and sound, so you can stay focused on growing your business.",
      icon: Cloud,
      color: "#14b8a6",
      tags: ["IT", "Security", "Management"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <SectionHeading
          eyebrow="What We Offer"
          title="Complete Growth Solutions"
          subtitle="Everything you need to scale, under one roof."
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  const steps = [
    { title: "Discover", desc: "We deep dive into your business to identify bottlenecks and opportunities.", icon: MessageSquare },
    { title: "Strategize", desc: "Developing a custom roadmap tailored to your specific growth goals.", icon: Layers },
    { title: "Execute", desc: "Hands-on implementation of technology, teams, and processes.", icon: Rocket },
    { title: "Optimize", desc: "Continuous data monitoring and refinement for maximum ROI.", icon: BarChart3 }
  ];

  return (
    <section id="process" className="py-32 relative">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Our Process" title="From Vision to Reality" />

        <div className="relative mt-20">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent -translate-y-1/2 origin-left hidden md:block"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (i * 0.2) }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-[#0f172a] border-2 border-primary relative z-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                  <step.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GrowthVisualization() {
  return (
    <section className="py-32 bg-[#0a0f1c] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="lg:w-1/2">
          <SectionHeading
            align="left"
            eyebrow="Data Driven"
            title="Visualize Your Potential"
            subtitle="See what happens when strategy meets precision execution. We don't guess—we calculate, project, and deliver."
          />
          <div className="space-y-6 mt-8">
            {[
              { label: "Revenue Growth", value: "300%", color: "bg-primary" },
              { label: "Operational Efficiency", value: "+85%", color: "bg-accent" },
              { label: "Client Retention", value: "98%", color: "bg-green-500" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 p-4 rounded-xl border border-white/10"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{stat.label}</span>
                  <span className="text-white font-bold">{stat.value}</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                    className={`h-full ${stat.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          {/* Abstract Tree/Chart Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-[500px] mx-auto"
          >
            {/* Central Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-[80px]" />

            {/* Animated Chart SVG */}
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
              <motion.path
                d="M 20 180 Q 60 180 80 140 T 140 80 T 180 20"
                fill="none"
                stroke="url(#gradientLine)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff6b35" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>

              {/* Floating data points */}
              {[
                { cx: 20, cy: 180 }, { cx: 80, cy: 140 }, { cx: 140, cy: 80 }, { cx: 180, cy: 20 }
              ].map((point, i) => (
                <motion.circle
                  key={i}
                  cx={point.cx}
                  cy={point.cy}
                  r="4"
                  fill="white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 2 + (i * 0.3) }}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DeepDiveZoho() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-[#2e1065] to-[#0f172a]">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          {/* Abstract Tech Visual */}
          <div className="relative aspect-video rounded-2xl bg-black/40 border border-white/10 overflow-hidden shadow-2xl group">
            {/* Placeholder for "Futuristic Control Room" */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Database size={64} className="text-purple-400 opacity-80" />
            </div>
            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="w-20 h-2 bg-purple-400 rounded-full mb-2" />
              <div className="w-12 h-2 bg-white/20 rounded-full" />
            </motion.div>
          </div>
        </div>

        <div className="lg:w-1/2 text-white">
          <span className="text-purple-400 font-bold tracking-widest text-sm uppercase mb-4 block">Technology Partner</span>
          <h2 className="text-5xl font-display font-bold mb-6">
            Zoho Experts <br /> At Your Service
          </h2>
          <p className="text-lg text-purple-100/80 mb-8 leading-relaxed">
            Transform your operations with fully customized Zoho implementations. From CRM to finance, HR to marketing - we integrate, optimize, and train your team for maximum ROI.
          </p>
          <ul className="space-y-4 mb-8">
            {["Complete Zoho Suite Implementation", "Custom Workflow Automation", "Team Training & Support"].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Check size={14} className="text-purple-400" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-colors">
            Transform Your Ops
          </button>
        </div>
      </div>
    </section>
  );
}

function DeepDiveCXO() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-bl from-[#7c2d12] to-[#0f172a]">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 text-white">
          <span className="text-orange-400 font-bold tracking-widest text-sm uppercase mb-4 block">Executive Leadership</span>
          <h2 className="text-5xl font-display font-bold mb-6">
            C-Level Expertise <br /> Without the Cost
          </h2>
          <p className="text-lg text-orange-100/80 mb-8 leading-relaxed">
            Access strategic executive leadership exactly when you need it. CFO, CMO, CTO, COO - our seasoned C-level experts integrate with your team to drive critical initiatives.
          </p>
          <ul className="space-y-4 mb-8">
            {["Fractional Executive Services", "Strategic Planning & Execution", "Crisis Management & Turnarounds"].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Check size={14} className="text-orange-400" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <button className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold transition-colors">
            Get Strategic Support
          </button>
        </div>

        <div className="lg:w-1/2">
          {/* Abstract Leadership Visual */}
          <div className="relative aspect-video rounded-2xl bg-black/40 border border-white/10 overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Shield size={64} className="text-orange-400 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section id="why-us" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Experts" },
            { value: "200+", label: "Clients" },
            { value: "15+", label: "Years of Experience" },
            { value: "10+", label: "Countries" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-display">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const createInquiry = useCreateInquiry();
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertInquiry) => {
    createInquiry.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-10" />
      <div className="absolute -top-[50%] -left-[20%] w-[100%] h-[100%] bg-primary/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            Ready to <span className="text-primary">10X</span> <br /> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
            Let's talk about your growth goals and create a plan that works. No sales pitch, just real strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="mailto:hello@10xgrowth.com" className="px-8 py-4 bg-white text-background rounded-xl font-bold text-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2">
              <Globe size={20} />
              Book a Consultation
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 w-full max-w-md bg-background/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-white/5 border-white/10 h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Work Email" {...field} className="bg-white/5 border-white/10 h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="How can we help?" {...field} className="bg-white/5 border-white/10 min-h-[120px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold text-lg" disabled={createInquiry.isPending}>
                {createInquiry.isPending ? "Sending..." : "Let's Grow"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
