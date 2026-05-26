import { useState } from "react";
import { Github, Linkedin, Twitter, Sparkles, Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface FooterProps {
  onOpenContact: () => void;
}

const footerTranslations = {
  pt: {
    desc: "Somos uma empresa digitalmente nativa que ajuda organizações a se reinventarem e liberarem todo o seu potencial. Somos o lugar onde inovação, design e engenharia se encontram com a escala.",
    studios: "Nossos Estúdios",
    methodology: "Metodologias",
    m1: "Esteira de Engenharia",
    m2: "Design-System Tokens",
    m3: "Visual Regression Check",
    m4: "Certificações de Qualidade",
    newsletter: "Inscrição de News",
    newsletterDesc: "Receba os novos estudos de caso de automação e Design QA trimestrais.",
    emailPlaceholder: "Seu email",
    subscribedText: "Inscrito!",
    auditBtn: "Agendar Auditoria de Sincronia",
    allRights: "© 2026 Globant Design & QA Studio. Todos os direitos reservados.",
    privacy: "Políticas de Privacidade",
    terms: "Termos Gerais de Uso",
    contactCommercial: "Contato Comercial"
  },
  es: {
    desc: "Somos una compañía digitalmente nativa que ayuda a las organizaciones a reinventarse y liberar su potencial. Somos el lugar donde la innovación, los diseños y la ingeniería se encuentran con la escala.",
    studios: "Nuestros Estudios",
    methodology: "Metodologías",
    m1: "Línea de Ingeniería",
    m2: "Design-System Tokens",
    m3: "Visual Regression Check",
    m4: "Certificaciones de Calidad",
    newsletter: "Suscripción de News",
    newsletterDesc: "Reciba los nuevos estudios de caso de automatización y Design QA trimestralmente.",
    emailPlaceholder: "Su correo",
    subscribedText: "¡Suscrito!",
    auditBtn: "Agendar Auditoría de Sincronía",
    allRights: "© 2026 Globant Design & QA Studio. Todos los derechos reservados.",
    privacy: "Políticas de Privacidad",
    terms: "Términos Generales de Uso",
    contactCommercial: "Contacto Comercial"
  }
};

export default function Footer({ onOpenContact }: FooterProps) {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const localT = footerTranslations[language];

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2000);
  };

  return (
    <footer className="bg-[#121212] text-gray-400 font-system text-xs border-t border-[#343A40] pt-16 pb-12 px-6 md:px-10 lg:px-20 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-[#343A40]">
          
          {/* Logo Brand Descriptor Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-1.5 focus:outline-none w-fit">
              <span className="font-heebo text-xl font-bold tracking-tight text-white">
                Globant
              </span>
              <span className="text-lime-green font-extrabold text-xl">&gt;</span>
            </a>
            <p className="text-[11px] text-[#8E9A9F]/90 leading-relaxed max-w-sm">
              {localT.desc}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime-green/20 hover:text-lime-green transition-all" aria-label="Linkedin">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime-green/20 hover:text-lime-green transition-all" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime-green/20 hover:text-lime-green transition-all" aria-label="Github">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div>
            <span className="text-white font-bold tracking-wider text-[11px] uppercase block mb-4">{localT.studios}</span>
            <ul className="flex flex-col gap-2.5 text-[#8E9A9F]">
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">GUT Visual Studio</a></li>
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">Digital QA & Automation</a></li>
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">Enterprise Delivery</a></li>
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">AI-Powered Coding</a></li>
            </ul>
          </div>

          <div>
            <span className="text-white font-bold tracking-wider text-[11px] uppercase block mb-4">{localT.methodology}</span>
            <ul className="flex flex-col gap-2.5 text-[#8E9A9F]">
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">{localT.m1}</a></li>
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">{localT.m2}</a></li>
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">{localT.m3}</a></li>
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">{localT.m4}</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <span className="text-white font-bold tracking-wider text-[11px] uppercase block mb-4">{localT.newsletter}</span>
            <p className="text-[11px] text-gray-500 mb-3 leading-relaxed">{localT.newsletterDesc}</p>
            
            {subscribed ? (
              <div className="flex items-center gap-1.5 bg-[#198754]/10 border border-[#198754]/30 rounded-lg p-2 text-[#198754] text-[11px] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{localT.subscribedText}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 bg-white/5 rounded-lg border border-white/10 p-1">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={localT.emailPlaceholder} 
                  className="bg-transparent text-white border-none py-1.5 px-2 w-full focus:outline-none text-[11px]"
                />
                <button 
                  onClick={handleSubscribe}
                  className="bg-lime-green text-black hover:bg-lime-hover p-1.5 rounded-md focus:outline-none transition-all cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
            
            <button 
              onClick={onOpenContact}
              className="mt-6 flex items-center gap-1.5 text-lime-green hover:underline hover:text-lime-hover text-[11px] font-bold text-left cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{localT.auditBtn}</span>
            </button>
          </div>
        </div>

        {/* Bottom Meta Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[#6C757D]/85 text-[10px] font-mono">
          <span>{localT.allRights}</span>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{localT.privacy}</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">{localT.terms}</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">{localT.contactCommercial}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

