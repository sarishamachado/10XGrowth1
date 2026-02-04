import { Twitter, Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0b1120] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="10xGrowth" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-muted-foreground italic font-accent">
              Your partner in exponential growth.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-primary tracking-widest uppercase">Explore</h4>
            <ul className="space-y-4">
              {["Services", "Our Process", "About Us", "Case Studies", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-primary tracking-widest uppercase">Services</h4>
            <ul className="space-y-4">
              {[
                "Growth Consulting",
                "Recruitment",
                "Zoho Implementation",
                "Fund Raising",
                "Website Development",
                "App Development",
                "Digital Marketing",
                "Cloud Infrastructure"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-primary tracking-widest uppercase">Get in Touch</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="hover:text-white cursor-pointer transition-colors">hello@10xgrowth.com</p>
              <p className="hover:text-white cursor-pointer transition-colors">+1 (555) 10X-GROW</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors group">
              Schedule a Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 10xGrowth. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
