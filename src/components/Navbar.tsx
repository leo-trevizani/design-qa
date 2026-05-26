import { useState } from "react";
import { ChevronDown, Globe, Sparkles, MessageSquare, Menu, X, ArrowRight, ShieldCheck, Cpu, Layout } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  onOpenContact: () => void;
}

const navbarTranslations = {
  pt: {
    contactUs: "Fale Conosco",
    sparkText: "⚡ Desenvolvido sob Modelo Studio Design QA",
    offering: "Nossa Oferta",
    offeringDesc1: "Automação de Design QA",
    offeringSub1: "Automatize asserções de regressão visual no CI/CD",
    offeringDesc2: "Sincronização Figma-Código",
    offeringSub2: "Mantenha tokens de layout sincronizados com os estilos React",
    offeringDesc3: "Auditorias de Deformação Visual",
    offeringSub3: "Revisão profunda de alinhamento de pixel e contraste",
    about: "Sobre nós",
    aboutDesc1: "O Modelo de Estúdio",
    aboutSub1: "Como nossa equipe de design e qualidade atua junta",
    aboutDesc2: "Nossa Metodologia",
    aboutSub2: "Reduzindo o retrabalho pós-produção a zero absoluto",
    insights: "Insights",
    insightsDesc1: "Relatórios & Cases",
    insightsSub1: "Como aceleramos entregas em até 4x em grandes apps",
    careers: "Carreiras",
    investors: "Investidores"
  },
  es: {
    contactUs: "Contáctanos",
    sparkText: "⚡ Desarrollado bajo Modelo Studio Design QA",
    offering: "Nuestra Oferta",
    offeringDesc1: "Automatización de Design QA",
    offeringSub1: "Automatice aserciones de regresión visual en CI/CD",
    offeringDesc2: "Sincronización Figma-Código",
    offeringSub2: "Mantenga tokens de maquetación sincronizados con React",
    offeringDesc3: "Auditorías de Defectos Visuales",
    offeringSub3: "Revisión profunda del contraste y alineación de píxeles",
    about: "Nosotros",
    aboutDesc1: "El Modelo de Estudio",
    aboutSub1: "Cómo trabaja nuestro equipo de diseño y calidad integrado",
    aboutDesc2: "Nuestra Metodología",
    aboutSub2: "Reduciendo el retrabalho post-lanzamiento a cero absoluto",
    insights: "Insights",
    insightsDesc1: "Reportes & Casos",
    insightsSub1: "Cómo aceleramos entregas hasta 4 veces en apps enterprise",
    careers: "Carreras",
    investors: "Inversores"
  }
};

export default function Navbar({ onOpenContact }: NavbarProps) {
  const { language, setLanguage } = useLanguage();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const localT = navbarTranslations[language];

  const navItems = [
    { 
      name: localT.offering, 
      dropdownItems: [
        { title: localT.offeringDesc1, desc: localT.offeringSub1, icon: Cpu },
        { title: localT.offeringDesc2, desc: localT.offeringSub2, icon: Layout },
        { title: localT.offeringDesc3, desc: localT.offeringSub3, icon: ShieldCheck }
      ] 
    },
    { 
      name: localT.about, 
      dropdownItems: [
        { title: localT.aboutDesc1, desc: localT.aboutSub1, icon: Layout },
        { title: localT.aboutDesc2, desc: localT.aboutSub2, icon: ShieldCheck }
      ] 
    },
    { 
      name: localT.insights, 
      dropdownItems: [
        { title: localT.insightsDesc1, desc: localT.insightsSub1, icon: Cpu }
      ] 
    },
    { name: localT.careers, dropdownItems: null },
    { name: localT.investors, dropdownItems: null }
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
          {localT.contactUs}
        </button>

        {/* Custom Green spark button inspired by attachments circular toggle icon */}
        <div className="relative group/spark cursor-default">
          <div className="w-10 h-10 rounded-full border border-lime-green/40 hover:border-lime-green bg-pure-black/60 flex items-center justify-center transition-all cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-lime-green/20 text-lime-green flex items-center justify-center group-hover/spark:bg-lime-green group-hover/spark:text-black transition-colors">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            </div>
          </div>
          <div className="absolute right-0 top-12 scale-0 group-hover/spark:scale-100 bg-[#212529] border border-[#343A40] text-[10px] px-3 py-1.5 rounded-lg text-white font-medium whitespace-nowrap transition-transform origin-top-right shadow-lg">
            {localT.sparkText}
          </div>
        </div>

        {/* Language selector */}
        <div 
          className="relative"
          onMouseEnter={() => setLangDropdownOpen(true)}
          onMouseLeave={() => setLangDropdownOpen(false)}
        >
          <div className="flex items-center gap-1 text-xs text-[#FFFFFF] font-medium cursor-pointer hover:text-lime-green transition-all py-2">
            <Globe className="w-3.5 h-3.5 text-[#6C757D]" />
            <span className="uppercase">{language}</span>
            <ChevronDown className="w-3 h-3 text-[#6C757D]" />
          </div>

          <AnimatePresence>
            {langDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute right-0 top-8 bg-[#1E2225] border border-[#343A40] rounded-lg shadow-lg py-1.5 w-24 z-50 text-left"
              >
                <button 
                  onClick={() => {
                    setLanguage("pt");
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full py-1.5 px-3 text-xs font-bold font-mono text-left block hover:bg-lime-green/10 ${language === "pt" ? 'text-lime-green' : 'text-gray-300'}`}
                >
                  PT - Port
                </button>
                <button 
                  onClick={() => {
                    setLanguage("es");
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full py-1.5 px-3 text-xs font-bold font-mono text-left block hover:bg-lime-green/10 ${language === "es" ? 'text-lime-green' : 'text-gray-300'}`}
                >
                  ES - Esp
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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
              
              {/* Language Selection inside mobile drawer */}
              <div className="flex gap-4 border-b border-white/5 pb-4 mt-2">
                <button 
                  onClick={() => setLanguage("pt")}
                  className={`text-xs font-bold font-mono py-1 px-3.5 rounded-full border ${language === "pt" ? 'bg-lime-green text-black border-lime-green' : 'text-white border-white/20'}`}
                >
                  PT (PORTUGUÊS)
                </button>
                <button 
                  onClick={() => setLanguage("es")}
                  className={`text-xs font-bold font-mono py-1 px-3.5 rounded-full border ${language === "es" ? 'bg-lime-green text-black border-lime-green' : 'text-white border-white/20'}`}
                >
                  ES (ESPAÑOL)
                </button>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="bg-lime-green text-black px-6 py-2.5 rounded-full text-xs font-bold hover:bg-lime-hover transition-all w-full text-center"
                >
                  {localT.contactUs}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

