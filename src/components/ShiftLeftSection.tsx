import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GitPullRequest, Search, FileCode, CheckCircle2, RefreshCcw, Layers } from "lucide-react";

export default function ShiftLeftSection() {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    {
      id: 0,
      title: "1. Figma Design Handoff",
      subtitle: "Tokens Originais",
      desc: "Designers definem cores, tipografias e grids diretamente nas APIs de Figma, encapsulados em Design Tokens JSON consumíveis de forma estática.",
      icon: Layers,
    },
    {
      id: 1,
      title: "2. Storybook Sandbox",
      subtitle: "Componentes Isolados",
      desc: "Engenheiros constroem componentes de forma isolada do código-fonte legado. Isso evita bugs de herança parasitária de CSS global.",
      icon: FileCode,
    },
    {
      id: 2,
      title: "3. Checkpoint Design QA",
      subtitle: "Validação Síncrona",
      desc: "O checkpoint visual ocorre ANTES do código ingressar nos testes funcionais. Se o componente divergir 1px do token inicial, ele não avança no pipeline.",
      icon: Search,
    },
    {
      id: 3,
      title: "4. Teste Funcional Legado",
      subtitle: "Funções Unitárias",
      desc: "Uma vez que o componente físico está 100% calibrado na aparência, automatizadores criam asserções de clique, comportamento e transição lógicas.",
      icon: CheckCircle2,
    },
    {
      id: 4,
      title: "5. CI/CD Release",
      subtitle: "Segurança de Relações",
      desc: "O deploy é realizado com risco de refugo visual tendendo a zero. Sem necessidade de abrir tickets complexos ou renegociar layouts em pós-produção.",
      icon: GitPullRequest,
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-white text-[#212529] flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 overflow-hidden border-b border-[#DEE2E6]">
      {/* Grid structure */}
      <div className="absolute inset-0 bg-[radial-gradient(#80808008_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[30vw] h-[30vw] bg-lime-green/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Aspect Editorial column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-lime-green text-[10px] md:text-xs font-mono font-bold tracking-wider uppercase mb-5 w-fit"
          >
            <GitPullRequest className="w-3.5 h-3.5" />
            <span>SHIFT-LEFT METHODOLOGY • NO REWORK</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heebo text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight mb-6"
          >
            Metodologia Design QA
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 font-sans text-sm md:text-base text-gray-600 leading-relaxed"
          >
            <p>
              Reabrir chamados de bugs visuais no JIRA pós-release é caro e exaustivo. Causa desânimo nos engenheiros e atrasa em semanas o cronograma de entrega do core do negócio.
            </p>
            <p className="font-semibold text-black">
              A solução é o Shift-Left de Qualidade Visual.
            </p>
            <p>
              Em vez de revisar as telas somente no ambiente final de staging, introduzimos o status de <strong className="text-black font-semibold">Design QA</strong> como uma etapa nativa, síncrona e isolada do pipeline. Estipulamos um contrato inabalável entre Design e Engenharia usando o <strong>Storybook</strong> como ferramenta de validação.
            </p>
            <p>
              Nenhum componente sobe sem ser testado exaustivamente de maneira isolada. Se um desenvolvedor errar um espaçamento, o componente é rejeitado sutilmente logo no início.
            </p>
          </motion.div>
        </div>

        {/* Right Aspect Pipeline Simulator interactive flowchart clicker */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#F8F9FA] border border-[#DEE2E6] rounded-2xl p-6 shadow-globant-default"
          >
            <h3 className="text-sm font-black text-black mb-1 text-left">Pipeline Visual Checkpoint</h3>
            <p className="text-[10px] text-gray-400 font-mono mb-6 text-left">CLIQUE NOS PASSOS DO PIPELINE PARA ENTENDER OS PROCESSOS DE DESIGN QA</p>

            {/* Steps timeline horizontal nodes indicator on big devices */}
            <div className="relative flex flex-col md:flex-row justify-between gap-4 md:gap-2 mb-8">
              {/* Background connectors gray line for line tracking */}
              <div className="absolute top-[18px] left-[5%] right-[5%] h-[2px] bg-gray-200 z-0 hidden md:block" />

              {steps.map((s, index) => {
                const isSelected = activeStep === s.id;
                const StepIcon = s.icon;
                return (
                  <button 
                    key={s.id}
                    onClick={() => setActiveStep(s.id)}
                    className="relative z-10 flex md:flex-col items-center gap-3 md:gap-2 text-left md:text-center focus:outline-none flex-1 group cursor-pointer"
                  >
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${isSelected ? 'bg-black border-lime-green text-lime-green scale-110 shadow' : 'bg-white border-gray-300 text-gray-400 group-hover:border-black group-hover:text-black'}`}>
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <div className="md:mt-1">
                      <span className={`block text-[10px] font-bold font-mono tracking-wider ${isSelected ? 'text-black' : 'text-gray-450'}`}>{s.subtitle}</span>
                      <span className="text-[9px] text-gray-400 block md:hidden">{s.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Display detailed step context description card active cards viewport */}
            <div className="bg-white border border-[#DEE2E6] rounded-xl p-5 text-left min-h-[140px] relative flex flex-col justify-between shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: -5, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono bg-lime-green/20 text-[#5B7910] px-2 py-0.5 rounded font-extrabold uppercase">ETAPA ATIVA</span>
                    <h4 className="text-sm font-black text-black leading-none">{steps[activeStep].title}</h4>
                  </div>
                  <p className="text-xs text-gray-505 leading-relaxed">
                    {steps[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Status footer for this process flow */}
              <div className="mt-4 pt-4 border-t border-[#DEE2E6] flex items-center justify-between text-[10px] font-mono text-gray-400 font-bold">
                <span>IMPACTO COM DESIGN QA: ZERO REWORK</span>
                <span className="text-lime-active">{activeStep === 2 ? "⚠️ CRUCIAL DENTRO DO FIGMA CONTRACT" : "INTEGRATED"}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
