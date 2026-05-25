import { useState, FormEvent } from "react";
import { X, Send, CheckCircle2, Layout, Sliders, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "games",
    defectType: "misalignment",
    notes: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Simulate scheduling pipeline audit
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pure-black/75 backdrop-blur-sm">
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white text-[#212529] border border-[#DEE2E6] shadow-globant-modal rounded-[20px] max-w-lg w-full p-8 md:p-10 relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-[10px] font-bold text-lime-active uppercase tracking-wider block mb-1">
                Alinhamento entre Guildas
              </span>
              <h3 className="font-heebo text-xl md:text-2xl font-black text-black tracking-tight">
                Iniciar Discussão com o Designer
              </h3>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-black flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-system text-xs">
              <p className="text-[#6C757D] text-[11px] leading-relaxed mb-1">
                Envie suas considerações para planejarmos uma sessão prática ou workshop focado em sanar os atritos entre Design, Engenharia e Qualidade.
              </p>

              {/* Grid 2 Columns */}
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-bold text-[#212529] uppercase mb-1.5">Seu Nome *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Leonard Silva"
                    className="w-full h-11 px-3 bg-[#FFFFFF] text-black border border-[#BDBDBD] focus:border-[#0D6EFD] focus:ring-4 focus:ring-[#0D6EFD]/25 rounded-[5px] text-[12px] placeholder:text-gray-400 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#212529] uppercase mb-1.5">E-mail corporativo *</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ex: nome@squad.com"
                    className="w-full h-11 px-3 bg-[#FFFFFF] text-[#212529] border border-[#BDBDBD] focus:border-[#0D6EFD] focus:ring-4 focus:ring-[#0D6EFD]/25 rounded-[5px] text-[12px] placeholder:text-gray-400 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#212529] uppercase mb-1.5">Sua Squad, Time ou Empresa</label>
                <input 
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Ex: Squad de Relacionamento / Globant S/A"
                  className="w-full h-11 px-3 bg-[#FFFFFF] text-[#212529] border border-[#BDBDBD] focus:border-[#0D6EFD] focus:ring-4 focus:ring-[#0D6EFD]/25 rounded-[5px] text-[12px] placeholder:text-gray-400 outline-none transition-all"
                />
              </div>

              {/* Grid selectors */}
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-bold text-[#212529] uppercase mb-1.5">Contexto / Produto</label>
                  <select 
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full h-11 px-2.5 bg-[#FFFFFF] text-black border border-[#BDBDBD] focus:border-[#0D6EFD] rounded-[5px] text-[12px] outline-none cursor-pointer"
                  >
                    <option value="airlines">Airlines & Travel</option>
                    <option value="games">Entertainment & Games</option>
                    <option value="automotive">Automotive & IoT</option>
                    <option value="energy">Energy & Enterprise</option>
                    <option value="fintech">Fintech & Banking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#212529] uppercase mb-1.5">Maior Atrito de Design</label>
                  <select 
                    value={formData.defectType}
                    onChange={(e) => setFormData({ ...formData, defectType: e.target.value })}
                    className="w-full h-11 px-2.5 bg-[#FFFFFF] text-[#212529] border border-[#BDBDBD] focus:border-[#0D6EFD] rounded-[5px] text-[12px] outline-none cursor-pointer"
                  >
                    <option value="misalignment">Divergência Visual de Layout</option>
                    <option value="slow-handoff">Handoff de Design Lento</option>
                    <option value="broken-tokens">CSS / Design Tokens desalinhados</option>
                    <option value="manual-qa">Excesso de Testes Visuais Manuais</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#212529] uppercase mb-1.5">Temas ou Dúvidas para o Bate-papo</label>
                <textarea 
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ex: Como lidar com Storybook e tokens no Git? Qual a melhor ferramenta de VRT para o nosso stack?"
                  className="w-full p-3 bg-[#FFFFFF] text-black border border-[#BDBDBD] focus:border-[#0D6EFD] focus:ring-4 focus:ring-[#0D6EFD]/25 rounded-[5px] text-[12px] placeholder:text-gray-400 outline-none transition-all"
                />
              </div>

              <button 
                type="submit"
                className="mt-2 w-full h-12 bg-[#212529] hover:bg-[#343A40] active:bg-black text-white font-extrabold text-[12px] tracking-wider uppercase rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Levar Discussão para a Guilda</span>
                <Send className="w-3.5 h-3.5 text-lime-green" />
              </button>

              <div className="mt-2 text-center text-[10px] text-gray-400">
                🔒 Espaço colaborativo de troca de conhecimento técnico e de processos de produto.
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 px-4"
            >
              {/* Success Badge */}
              <div className="inline-flex px-3.5 py-1.5 bg-[#198754]/15 border border-[#198754]/30 text-[#198754] font-bold text-xs uppercase tracking-wider rounded-full gap-2 items-center mb-6">
                <CheckCircle2 className="w-4 h-4 text-[#198754]" />
                <span>Bate-papo sugerido com sucesso!</span>
              </div>

              <h4 className="font-heebo text-xl font-bold text-black tracking-tight mb-2">
                Excelente, {formData.name}!
              </h4>
              <p className="font-system text-xs text-gray-500 max-w-sm mx-auto leading-relaxed mb-6">
                Adicionei nossa discussão à pauta. Vamos organizar uma abordagem focada em produtos de <strong className="text-black uppercase text-[10px]">{formData.industry}</strong> e debater como sanar e automatizar o Design QA com foco em erradicar conflitos de <strong>{formData.defectType}</strong>.
              </p>

              <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-100 flex flex-col gap-2.5 text-left text-[11px] mb-8">
                <div className="flex justify-between border-b pb-1.5 text-gray-400 font-mono">
                  <span>Pauta Recomendada:</span>
                  <span className="text-[#5B7910] font-bold">Unificar Processos</span>
                </div>
                <div className="flex gap-2 items-center text-gray-700">
                  <Layout className="w-4 h-4 text-lime-active" />
                  <span>Workshop de Storybook e Handshake de Tokens.</span>
                </div>
                <div className="flex gap-2 items-center text-gray-700">
                  <Sliders className="w-4 h-4 text-lime-active" />
                  <span>Configurações práticas de Perceptual Regression AI (Percy/Chromatic).</span>
                </div>
              </div>

              <button 
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-[#212529] hover:bg-[#343A40] text-white font-bold text-xs rounded-full transition-all cursor-pointer"
              >
                Voltar à Apresentação
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
