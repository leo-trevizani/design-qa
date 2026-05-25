import { useState } from "react";
import { ChevronDown, Globe, Sparkles, MessageSquare, Menu, X, ArrowRight, ShieldCheck, Cpu, Layout } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { 
      name: "Our Offering", 
      dropdownItems: [
        { title: "Design QA Automation", desc: "Automate visual regression checks in CI/CD pipeline", icon: Cpu },
        { title: "Figma to Code Sync", desc: "Keep layout tokens synchronized with React styles", icon: Layout },
        { title: "Visual Defect Audits", desc: "Comprehensive review of pixel alignment and layout", icon: ShieldCheck }
      ] 
    },
    { 
      name: "About", 
      dropdownItems: [
        { title: "The Studio Model", desc: "How our specialized design & QA teams work together", icon: Layout },
        { title: "Our Methodology", desc: "Reducing post-release rework to absolute zero", icon: ShieldCheck }
      ] 
    },
    { 
      name: "Insights", 
      dropdownItems: [
        { title: "Reports & Case Studies", desc: "How we accelerated delivery by 4x for top enterprise apps", icon: Cpu }
      ] 
    },
    { name: "Careers", dropdownItems: null },
    { name: "Investors", dropdownItems: null }
  ];

  return (
    <nav className="bg-pure-black h-16 w-full text-white border-b border-[#343A40] sticky top-0 z-50 px-6 md:px-10 flex items-center justify-between select-none font-system">
      {/* Brand Logo */}
      <a href="#" className="flex items-center gap-1.5 focus:outline-none group">
        <span className="font-heebo text-xl font-bold tracking-tight text-white transition-opacity group-hover:opacity-95">
          Globant
        </span>
        <span className="text-lime-green font-extrabold text-xl animate-pulse">&gt;</span>
      </a>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-6">
        {navItems.map((item) => (
          <div 
            key={item.name} 
            className="relative"
            onMouseEnter={() => item.dropdownItems && setActiveDropdown(item.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 py-5 text-xs text-silver-300 font-medium hover:text-lime-green hover:underline decoration-lime-green decoration-2 underline-offset-8 transition-all cursor-pointer">
              <span>{item.name}</span>
              {item.dropdownItems && <ChevronDown className="w-3 h-3 text-[#6C757D]" />}
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {activeDropdown === item.name && item.dropdownItems && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-14 left-0 w-80 bg-[#1E2225] border border-[#343A40] rounded-xl shadow-globant-modal p-4 z-50 text-left"
                >
                  <div className="grid gap-3">
                    {item.dropdownItems.map((sub, idx) => {
                      const Icon = sub.icon;
                      return (
                        <a 
                          key={idx} 
                          href="#" 
                          className="flex gap-3 p-2.5 rounded-lg hover:bg-lime-green/10 group transition-all"
                        >
                          <div className="w-8 h-8 rounded-lg bg-pure-black flex items-center justify-center border border-[#343A40] text-lime-green group-hover:border-lime-green/55">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-lime-green flex items-center gap-1">
                              {sub.title}
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0" />
                            </div>
                            <p className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">{sub.desc}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Right Actions */}
      <div className="hidden lg:flex items-center gap-6">
        <button 
          onClick={onOpenContact}
          className="text-xs text-[#FFFFFF] hover:text-lime-green font-medium cursor-pointer transition-all border-b border-transparent hover:border-lime-green py-1"
        >
          Contact Us
        </button>

        {/* Custom Green spark button inspired by attachments circular toggle icon */}
        <div className="relative group/spark cursor-default">
          <div className="w-10 h-10 rounded-full border border-lime-green/40 hover:border-lime-green bg-pure-black/60 flex items-center justify-center transition-all cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-lime-green/20 text-lime-green flex items-center justify-center group-hover/spark:bg-lime-green group-hover/spark:text-black transition-colors">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            </div>
          </div>
          <div className="absolute right-0 top-12 scale-0 group-hover/spark:scale-100 bg-[#212529] border border-[#343A40] text-[10px] px-3 py-1.5 rounded-lg text-white font-medium whitespace-nowrap transition-transform origin-top-right shadow-lg">
            ⚡ Engineered with Design QA Studio Model
          </div>
        </div>

        {/* Language selector */}
        <div className="flex items-center gap-1 text-xs text-[#FFFFFF] font-medium cursor-pointer hover:text-lime-green transition-all">
          <Globe className="w-3.5 h-3.5 text-[#6C757D]" />
          <span>EN</span>
          <ChevronDown className="w-3 h-3 text-[#6C757D]" />
        </div>
      </div>

      {/* Hamburger Menu (Mobile/Tablet) */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 active:bg-white/20 text-[#FFFFFF] cursor-pointer"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-pure-black border-b border-[#343A40] z-40 overflow-hidden lg:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-white/5 pb-2">
                  <div className="text-sm font-semibold tracking-wide text-[#FFFFFF] mb-1">{item.name}</div>
                  {item.dropdownItems && (
                    <div className="pl-4 flex flex-col gap-2 mt-1">
                      {item.dropdownItems.map((sub, subIdx) => (
                        <a key={subIdx} href="#" className="text-xs text-gray-400 hover:text-lime-green">
                          - {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center justify-between pt-2">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="bg-lime-green text-black px-6 py-2.5 rounded-full text-xs font-bold hover:bg-lime-hover transition-all w-full text-center"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
