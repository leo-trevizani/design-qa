import React, { useState } from "react";
import { motion } from "motion/react";
import { Zap, EyeOff, CheckCircle2, ShieldAlert, Award, Sun, Terminal } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function HiltonCaseSection() {
  const { t } = useLanguage();
  const [deviceEnvironment, setDeviceEnvironment] = useState<"ci" | "sunlight">("ci");

  return (
    <section className="relative min-h-screen w-full bg-[#F8F9FA] text-[#212529] flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 overflow-hidden border-b border-[#DEE2E6]">
      {/* Background Decorative Tech Blurs */}
      <div className="absolute top-1/4 left-10 w-[30vw] h-[30vw] bg-amber-200/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[35vw] h-[35vw] bg-[#5B7910]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Context Info */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 text-red-600 text-[10px] md:text-xs font-mono font-bold tracking-wider uppercase mb-5 w-fit border border-red-200"
          >
            <EyeOff className="w-3.5 h-3.5" />
            <span>{t.hilton.tag}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heebo text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight mb-6"
          >
            {t.hilton.title}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 font-sans text-sm md:text-base text-gray-600 leading-relaxed"
          >
            <p>
              {t.hilton.p1}
            </p>
            <p>
              {t.hilton.p2}
            </p>
            <p className="bg-[#1E2225] text-[#D8DEE9] p-3 rounded-lg font-mono text-[11px] border border-white/5 shadow-inner">
              <span className="text-[#A3BE8C]">✓</span> {t.hilton.ciLine2} <span className="text-gray-500">// PASSED</span>
              <br />
              <span className="text-[#A3BE8C]">✓</span> {t.hilton.ciLine3} <span className="text-gray-500">// PASSED</span>
            </p>
            <p>
              {t.hilton.testLabel}
            </p>
            <p className="border-l-4 border-[#DE3B3B] pl-4 italic text-gray-700 bg-red-500/5 py-2">
              {t.hilton.qaAbsolution}
            </p>
            <p className="font-semibold text-black">
              {t.hilton.summary}
            </p>
          </motion.div>
        </div>

        {/* Right Interactive Simulator (The core visual metaphor) */}
        <div className="lg:col-span-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-[#DEE2E6] rounded-2xl p-6 shadow-globant-default overflow-hidden relative"
          >
            <div className="flex border-b border-[#DEE2E6] pb-4 mb-6 items-center justify-between">
              <div>
                <h3 className="text-sm font-black text-black">{t.hilton.sandboxTitle}</h3>
                <p className="text-[10px] text-gray-400 font-mono">{t.hilton.sandboxSub}</p>
              </div>
            </div>
 
            {/* Toggle Environment Selectors */}
            <div className="flex gap-2 mb-6">
              <button 
                onClick={() => setDeviceEnvironment("ci")}
                className={`flex-1 py-3 px-4 rounded-xl font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 border cursor-pointer ${deviceEnvironment === "ci" ? 'bg-black text-lime-green border-black' : 'bg-gray-100 text-gray-500 border-[#DEE2E6] hover:text-black'}`}
              >
                <Terminal className="w-4 h-4" />
                <span>{t.hilton.btnCi}</span>
              </button>
              <button 
                onClick={() => setDeviceEnvironment("sunlight")}
                className={`flex-1 py-3 px-4 rounded-xl font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 border cursor-pointer ${deviceEnvironment === "sunlight" ? 'bg-amber-100 text-amber-900 border-amber-300' : 'bg-gray-100 text-gray-500 border-[#DEE2E6] hover:text-black'}`}
              >
                <Sun className="w-4 h-4 animate-spin-slow text-amber-600" />
                <span>{t.hilton.btnSunlight}</span>
              </button>
            </div>
 
            {/* Display View Screen */}
            <div className="border border-[#DEE2E6] rounded-xl overflow-hidden shadow-inner bg-gray-50 p-6 relative min-h-[220px] flex flex-col justify-between transition-all duration-500">
              {deviceEnvironment === "ci" ? (
                <>
                  {/* Console logs showing green state */}
                  <div className="w-full text-left font-mono text-[11px] text-emerald-800 space-y-1 mb-8">
                    <p className="text-gray-500">{t.hilton.ciExecuting}</p>
                    <p className="font-bold text-emerald-600">{t.hilton.ciPassed}</p>
                    <p>{t.hilton.ciLine1}</p>
                    <p>{t.hilton.ciLine2}</p>
                    <p>{t.hilton.ciLine3}</p>
                    <p className="text-gray-500">{t.hilton.ciMarkup}</p>
                  </div>
 
                  {/* Standard high contrasted mockup of button because we output plain DOM state inside a console */}
                  <div className="w-full bg-[#ECF0F1] p-3 rounded-lg border border-gray-300 flex justify-between items-center text-xs">
                    <span className="font-bold text-gray-700">{t.hilton.checkoutLabel}</span>
                    {/* The code sees raw DOM - represented schematically as perfectly clear */}
                    <span className="px-3 py-1.5 bg-[#4F5B66] text-white rounded font-bold">
                      {t.hilton.confirmReservation}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  {/* Human display perspective under strong ambient daylight */}
                  <div className="absolute inset-0 bg-[#FFFFF6]/40 flex flex-col justify-between p-6 select-none animate-pulse">
                    <div className="font-mono text-[9px] text-amber-800 flex justify-between items-center border-b border-amber-200 pb-1.5">
                      <span>{t.hilton.luminosity}</span>
                      <span className="font-extrabold text-[#DE3B3B]">{t.hilton.contrastRatio}</span>
                    </div>
 
                    {/* Faded washed-out smartphone hotel mockup */}
                    <div className="max-w-xs mx-auto w-full p-4 bg-[#FFFAFA] border-2 border-red-400 rounded-lg text-left shadow-sm mt-2">
                      <span className="text-[10px] text-gray-400 block mb-1">{t.hilton.totalPrice}</span>
                      <span className="text-base font-black text-gray-350 block mb-3">{t.hilton.priceValue}</span>
 
                      <div className="flex gap-2">
                        {/* THE WASHED BUTTON: White text over extremely light grey/silver background button - virtually zero separation */}
                        <div className="flex-grow py-3 bg-[#EAEAEA] text-[#FFFFFF] rounded text-center text-[10px] font-extrabold tracking-wider pointer-events-none transition-all border border-gray-150 relative">
                          <span className="blur-[0.5px]">{t.hilton.confirmReservation}</span>
                          <span className="absolute inset-0 bg-white/20" />
                        </div>
                      </div>
                      
                      <span className="text-[8px] text-[#DE3B3B] font-bold text-center block mt-2 animate-bounce">
                        {t.hilton.whereIsButton}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
 
            {/* Diagnostic Conclusion footer */}
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-left text-gray-500 mt-6 border-t border-gray-200 pt-4 flex gap-2 items-center">
              <ShieldAlert className="w-4 h-4 text-amber-500" />
              <span>{t.hilton.diagnostic}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

