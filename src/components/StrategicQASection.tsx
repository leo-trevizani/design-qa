import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, UserCheck, ShieldAlert, Sparkles, Filter, Accessibility } from "lucide-react";

export default function StrategicQASection() {
  const [selectedCore, setSelectedCore] = useState<"technician" | "strategic">("strategic");

  return (
    <section className="relative min-h-screen w-full bg-white text-[#212529] flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 overflow-hidden border-b border-[#DEE2E6]">
      {/* Decorative vector elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-[35vw] h-[35vw] bg-lime-green/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Content Column */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-lime-green text-[10px] md:text-xs font-mono font-bold tracking-wider uppercase mb-5 w-fit"
          >
            <Award className="w-3.5 h-3.5" />
            <span>THE QUALITY EVOLUTION • STRATEGIC QA</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heebo text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight mb-6"
          >
            O Engenheiro de Qualidade Estratégico
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 font-sans text-sm md:text-base text-gray-600 leading-relaxed"
          >
            <p>
              Se as ferramentas de IA passam a codificar componentes diretamente a partir de mockups do Figma, e os testes de regressão automatizados cuidam da integridade física dos pixels, <strong className="text-black font-semibold">o papel do QE se eleva drasticamente</strong>.
            </p>
            <p>
              O desafio para a guilda de qualidade de ponta deixa de ser meramente operacional. Não é mais sobre caçar botões desalinhados na mão.
            </p>
            <p className="border-l-4 border-lime-green pl-4 my-3 italic text-gray-700 bg-lime-green/5 py-2.5 pr-3 rounded-r-lg font-medium">
              "Sua missão é calibrar o olfato técnico para auditar o que as máquinas ignoram por completo: a ética, a acessibilidade e a verdadeira empatia da jornada."
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-650 pl-2">
              <li><strong className="text-black">Garantir Acessibilidade Empírica:</strong> Validar se leitores de tela funcionam com fluidez semântica sob as diretrizes reais de acessibilidade.</li>
              <li><strong className="text-black">Combater Dark Patterns:</strong> Impedir que truques visuais manipulem as taxas acumuladas de checkout ou forcem decisões enganosas dos usuários.</li>
            </ul>
          </motion.div>
        </div>

        {/* Right Side Visual Paradigm Switcher */}
        <div className="lg:col-span-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#F8F9FA] border border-[#DEE2E6] rounded-2xl p-6 shadow-globant-default overflow-hidden text-left"
          >
            <div className="flex border-b border-[#DEE2E6] pb-4 mb-6">
              <div>
                <h3 className="text-xs font-black text-black">Guild Paradigm Switcher</h3>
                <p className="text-[10px] text-gray-400 font-mono">SELECIONE O MODELO DE ENGENHARIA DE QUALIDADE</p>
              </div>
            </div>

            {/* Toggle tabs button */}
            <div className="flex bg-white border border-[#DEE2E6] rounded-xl p-1.5 mb-6">
              <button 
                onClick={() => setSelectedCore("technician")}
                className={`flex-1 py-2.5 text-center text-xs font-bold uppercase rounded-lg transition-all cursor-pointer ${selectedCore === "technician" ? 'bg-black text-[#DE3B3B]' : 'text-gray-500 hover:text-black'}`}
              >
                1. O QE Operacional (Legado)
              </button>
              <button 
                onClick={() => setSelectedCore("strategic")}
                className={`flex-1 py-2.5 text-center text-xs font-bold uppercase rounded-lg transition-all cursor-pointer ${selectedCore === "strategic" ? 'bg-black text-lime-green' : 'text-gray-500 hover:text-black'}`}
              >
                2. O QE Estratégico (Futuro)
              </button>
            </div>

            {/* Visual core state display panels with clean bullet layout */}
            <AnimatePresence mode="wait">
              {selectedCore === "technician" ? (
                <motion.div 
                  key="technician"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: -10, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4 min-h-[200px]"
                >
                  <div className="flex items-center gap-2 text-[#DE3B3B] bg-red-100/40 p-2.5 rounded-lg border border-red-200 w-fit text-[11px] font-mono font-bold uppercase">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Foco Operacional Repetitivo (Sobrevivência)</span>
                  </div>

                  <div className="space-y-3 font-sans text-xs text-gray-650">
                    <p className="border-b border-gray-200 pb-2 flex items-center gap-2">
                      <span className="text-red-500 font-bold font-mono">❌ PIXEL-COUNTING:</span> Comparar Figma de forma ocular gasta horas de trabalho improdutivo de testes manuais.
                    </p>
                    <p className="border-b border-gray-200 pb-2 flex items-center gap-2">
                      <span className="text-red-500 font-bold font-mono">❌ REATIVIDADE:</span> Erros achados apenas em Staging no fim da sprint, gerando longas horas extras e reabertura de chamados às pressas.
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-red-500 font-bold font-mono">❌ ESQUECIMENTO:</span> Sem olhar clínico para ética, acessibilidade fica restrita a validadores automáticos do DOM que ignoram a audição real do leitor de tela.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="strategic"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: -10, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4 min-h-[200px]"
                >
                  <div className="flex items-center gap-2 text-lime-active bg-lime-green/20 p-2.5 rounded-lg border border-lime-green/30 w-fit text-[11px] font-mono font-bold uppercase">
                    <UserCheck className="w-4 h-4 text-lime-active" />
                    <span>Foco Clínico-Experiencial (Advogado de Experiência)</span>
                  </div>

                  <div className="space-y-3 font-sans text-xs text-gray-650">
                    <p className="border-b border-gray-200 pb-2 flex items-center gap-2">
                      <span className="text-emerald-700 font-bold font-mono">✓ VRT AUTOMOTIVO:</span> Perceptual AI cuida dos pixels. O QE analisa métricas e refina cenários lógicos complexos.
                    </p>
                    <p className="border-b border-gray-200 pb-2 flex items-center gap-2">
                      <span className="text-emerald-700 font-bold font-mono">✓ SHIFT-LEFT:</span> Storybook protege e atesta integridade das criações logo nos primeiros commits (rework fuso zero).
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-emerald-700 font-bold font-mono">✓ ÉTICA DA JORNADA:</span> Lidera auditorias de acessibilidade WCAG 2.2 reais e combate Dark Patterns indesejados. O teste vira defesa do usuário corporativo.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tactical Guild Callout card banner */}
            <div className="mt-6 border-t border-[#DEE2E6] pt-4 flex justify-between items-center bg-white p-3 rounded-xl border border-gray-150">
              <div className="flex items-center gap-2">
                <Accessibility className="w-4 h-4 text-[#5B7910]" />
                <span className="text-[10px] font-mono font-bold text-gray-500 uppercase">ACERVO DE ACESSIBILIDADE WCAG VERIFIED</span>
              </div>
              <span className="text-[10px] font-black text-[#5B7910] uppercase flex gap-1 items-center">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> 100% Humano
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
