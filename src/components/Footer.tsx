import { Github, Linkedin, Twitter, Sparkles, Send, ShieldCheck } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
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
              We are a digitally native company that helps organizations reinvent themselves and unleash their potential. We are the place where innovation, design, and engineering meet scale.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime-green/20 hover:text-lime-green transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime-green/20 hover:text-lime-green transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-lime-green/20 hover:text-lime-green transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div>
            <span className="text-white font-bold tracking-wider text-[11px] uppercase block mb-4">Our Studios</span>
            <ul className="flex flex-col gap-2.5 text-[#8E9A9F]">
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">GUT Visual Studio</a></li>
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">Digital QA & Automation</a></li>
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">Enterprise Delivery</a></li>
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">AI-Powered Coding</a></li>
            </ul>
          </div>

          <div>
            <span className="text-white font-bold tracking-wider text-[11px] uppercase block mb-4">Metodologias</span>
            <ul className="flex flex-col gap-2.5 text-[#8E9A9F]">
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">Esteira de Engenharia</a></li>
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">Design-System Tokens</a></li>
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">Visual Regression Check</a></li>
              <li><a href="#" className="hover:text-lime-green transition-colors text-[11px]">Certificações de Qualidade</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <span className="text-white font-bold tracking-wider text-[11px] uppercase block mb-4">Inscrição de News</span>
            <p className="text-[11px] text-gray-500 mb-3 leading-relaxed">Receba os novos estudos de caso de automação e Design QA trimestrais.</p>
            <div className="flex items-center gap-1 bg-white/5 rounded-lg border border-white/10 p-1">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="bg-transparent text-white border-none py-1.5 px-2 w-full focus:outline-none text-[11px]"
              />
              <button 
                onClick={() => alert("Obrigado pelo interesse! Seu email foi adicionado à nossa lista.")}
                className="bg-lime-green text-black hover:bg-lime-hover p-1.5 rounded-md focus:outline-none transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            
            <button 
              onClick={onOpenContact}
              className="mt-6 flex items-center gap-1.5 text-lime-green hover:underline hover:text-lime-hover text-[11px] font-bold"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Agendar Auditoria de Sincronia</span>
            </button>
          </div>
        </div>

        {/* Bottom Meta Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[#6C757D]/85 text-[10px] font-mono">
          <span>© 2026 Globant Design & QA Studio. Todos os direitos reservados.</span>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Termos Gerais de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Contato Comercial</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
