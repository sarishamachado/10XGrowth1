import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [zohoOpen, setZohoOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Zoho",
      href: "/zoho",
      dropdown: [
        { label: "Partner", href: "/zoho/partner" },
        { label: "Pricing", href: "/zoho/pricing" },
      ]
    },
    { label: "Outsource", href: "/outsource" },
    {
      label: "More",
      dropdown: [
        { label: "Studio", href: "/studio" },
        { label: "Contact Us", href: "/contact" },
        { label: "Video Training Services", href: "/video-training" },
      ]
    },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy-900/90 backdrop-blur-xl shadow-lg py-4" : "bg-transparent py-6"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black">
          <span className="text-coral-500">10x</span>
          <span className="text-white">GROWTH</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => {
                if (link.label === "Zoho") setZohoOpen(true);
                if (link.label === "More") setMoreOpen(true);
              }}
              onMouseLeave={() => {
                if (link.label === "Zoho") setZohoOpen(false);
                if (link.label === "More") setMoreOpen(false);
              }}
            >
              {link.dropdown ? (
                <div className="flex items-center gap-1">
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="text-white text-sm font-medium hover:text-coral-500 transition-colors flex items-center gap-1"
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${(link.label === "Zoho" && zohoOpen) || (link.label === "More" && moreOpen) ? 'rotate-180' : ''}`} />
                    </Link>
                  ) : (
                    <button className="text-white text-sm font-medium hover:text-coral-500 transition-colors flex items-center gap-1">
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${(link.label === "Zoho" && zohoOpen) || (link.label === "More" && moreOpen) ? 'rotate-180' : ''}`} />
                    </button>
                  )}

                  <AnimatePresence>
                    {((link.label === "Zoho" && zohoOpen) || (link.label === "More" && moreOpen)) && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-navy-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl overflow-hidden"
                      >
                        {link.dropdown.map((sublink) => (
                          <Link
                            key={sublink.label}
                            href={sublink.href}
                            className="block px-4 py-3 text-white text-sm hover:bg-white/10 transition-colors"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={link.href!}
                  className={`text-sm font-medium transition-colors ${location === link.href ? "text-coral-500" : "text-white hover:text-coral-500"}`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-coral-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-coral-500/40 transition-shadow"
          >
            Get Started
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-900/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div className="space-y-2">
                      {link.href ? (
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-lg font-medium text-white hover:text-coral-500 transition-colors flex items-center justify-between"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <span className="text-lg font-medium text-white/60">{link.label}</span>
                      )}
                      <div className="pl-4 flex flex-col space-y-2 border-l border-white/10 ml-1">
                        {link.dropdown.map((sublink) => (
                          <Link
                            key={sublink.label}
                            href={sublink.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white/80 hover:text-coral-500 transition-colors text-base"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href!}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-medium block ${location === link.href ? "text-coral-500" : "text-white hover:text-coral-500"}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 rounded-full bg-coral-500 text-white font-bold mt-4"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

