import { motion } from "framer-motion";
import { Mail, Phone, Calendar, Send, RotateCcw } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Contact() {
    const createInquiry = useCreateInquiry();
    const form = useForm<InsertInquiry>({
        resolver: zodResolver(insertInquirySchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            companyName: "",
            message: ""
        }
    });

    const onSubmit = (data: InsertInquiry) => {
        createInquiry.mutate(data, {
            onSuccess: () => form.reset()
        });
    };

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navigation />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center">
                    {/* Abstract Backgrounds */}
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
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
                                Contact <span className="text-primary">Us</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                Whether you have a query, need more information, or are ready to kickstart your project, we are just a message away.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Cards Section */}
                <section className="py-16 -mt-12 relative z-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ContactCard
                                icon={<Mail className="w-8 h-8 text-primary" />}
                                title="info@10xgrowth.com"
                                description="Have a project in mind? Reach out to us and let's discuss."
                                delay={0.1}
                            />
                            <ContactCard
                                icon={<Phone className="w-8 h-8 text-primary" />}
                                title="982 002 0753"
                                description="Ready to team up? Excited to explore opportunities together."
                                delay={0.2}
                            />
                            <ContactCard
                                icon={<Calendar className="w-8 h-8 text-primary" />}
                                title="Schedule a Call"
                                description={
                                    <>
                                        Click <a href="#" className="text-primary hover:underline font-bold">here</a> to book your slot now according to your convenience!
                                    </>
                                }
                                delay={0.3}
                            />
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Side Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Get In Touch</span>
                                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                                    Need Professional Help? <br /> We've Got You Covered!
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                                    Fill out the contact form to send us a direct message. Please provide some details about your organization and the services you are interested in. Our team will get back to you within 24 hours.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Side Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl"
                        >
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-white/80 font-medium">Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Your Name" {...field} className="bg-white/5 border-white/10 h-12 focus:ring-primary/50" />
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
                                                    <FormLabel className="text-white/80 font-medium">Email</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Work Email" {...field} className="bg-white/5 border-white/10 h-12 focus:ring-primary/50" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-white/80 font-medium">Phone</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Your Phone" {...field} className="bg-white/5 border-white/10 h-12 focus:ring-primary/50" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="companyName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-white/80 font-medium">Company Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Organization" {...field} className="bg-white/5 border-white/10 h-12 focus:ring-primary/50" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-white/80 font-medium">Message</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="How can we help?" {...field} className="bg-white/5 border-white/10 min-h-[150px] focus:ring-primary/50" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <Button type="submit" className="flex-1 h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/25 group" disabled={createInquiry.isPending}>
                                            {createInquiry.isPending ? "Sending..." : (
                                                <span className="flex items-center justify-center gap-2">
                                                    Submit <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </span>
                                            )}
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => form.reset()}
                                            className="h-14 border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-white/40 rounded-xl font-bold flex items-center justify-center gap-2"
                                        >
                                            <RotateCcw size={20} /> Reset
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function ContactCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: React.ReactNode, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            whileHover={{ y: -10 }}
            className="p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl flex flex-col items-center text-center space-y-6 hover:border-primary/50 transition-all duration-300"
        >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-2 shadow-inner group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-2xl font-display font-bold text-white">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </motion.div>
    );
}
