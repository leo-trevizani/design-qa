import React, { useState } from "react";
import { motion } from "motion/react";
import { Brain, ShieldAlert, Sparkles, AlertCircle, CheckCircle, Flame } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface WYSIATISectionProps {
  onOpenContact: () => void;
}

export default function WYSIATISection({ onOpenContact }: WYSIATISectionProps) {
  const { t } = useLanguage();
  const [hasBugs, setHasBugs] = useState(true);

  return (
    <section className="relative min-h-screen w-full bg-[#F8F9FA] text-[#212529] flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 overflow-hidden border-b border-[#DEE2E6]">
      {/* Background Decorative Tech Blurs */}
      <div className="absolute top-1/4 right-10 w-[35vw] h-[35vw] bg-lime-green/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[30vh] h-[30vh] bg-red-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Editorial Context */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-lime-green text-[10px] md:text-xs font-mono font-bold tracking-wider uppercase mb-5 w-fit"
          >
            <Brain className="w-3.5 h-3.5 text-lime-green" />
            <span>{t.wysiati.tag}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heebo text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight mb-6"
          >
            {t.wysiati.title}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 font-sans text-sm md:text-base text-gray-600 leading-relaxed"
          >
            <p>
              {t.wysiati.p1}
            </p>
            <p className="border-l-4 border-lime-green pl-4 my-4 italic text-gray-700 bg-lime-green/5 py-2 pr-3 rounded-r-lg">
              {t.wysiati.quote}
            </p>
            <p>
              {t.wysiati.p2}
              <br />
              <strong className="text-red-600 font-bold">{t.wysiati.dangerText}</strong>
            </p>
            <p className="font-semibold text-black">
              {t.wysiati.summary}
            </p>
          </motion.div>


        </div>

        {/* Right Side: Interactive Subconscious Cognitive trust simulator */}
        <div className="lg:col-span-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#DEE2E6] rounded-2xl shadow-globant-default overflow-hidden p-6 relative"
          >
            {/* Header Tabs Simulating App State */}
            <div className="flex items-center justify-between border-b border-[#DEE2E6] pb-4 mb-6">
              <div>
                <h3 className="text-sm font-black text-black">{t.wysiati.sandboxTitle}</h3>
                <p className="text-[10px] text-gray-400 font-mono">{t.wysiati.sandboxSub}</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setHasBugs(true)}
                  className={`px-3 py-1 text-[10px] font-mono font-bold uppercase rounded-md transition-all cursor-pointer ${hasBugs ? 'bg-[#DE3B3B]/10 text-[#DE3B3B] border border-[#DE3B3B]' : 'bg-gray-100 text-gray-500 hover:text-black'}`}
                >
                  {t.wysiati.btnBugs}
                </button>
                <button 
                  onClick={() => setHasBugs(false)}
                  className={`px-3 py-1 text-[10px] font-mono font-bold uppercase rounded-md transition-all cursor-pointer ${!hasBugs ? 'bg-lime-green/20 text-[#5B7910] border border-lime-green/50' : 'bg-gray-100 text-gray-500 hover:text-black'}`}
                >
                  {t.wysiati.btnHealthy}
                </button>
              </div>
            </div>

            {/* Simulated Mobile Card Checkout */}
            <div className="max-w-sm mx-auto border border-[#DEE2E6] rounded-xl overflow-hidden shadow-inner bg-[#F8F9FA] p-4 transition-all duration-300">
              <div className="flex items-center justify-between mb-4 border-b border-[#DEE2E6] pb-2">
                <span className="text-[9px] font-mono text-gray-400">{t.wysiati.checkoutTitle}</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-green"></span>
                </span>
              </div>

              {/* Bad Layout state */}
              {hasBugs ? (
                <div className="space-y-4">
                  {/* Hotel visual banner with breaking badge */}
                  <div className="relative h-28 bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
                    <span className="bg-red-600 text-white font-mono text-[8px] absolute top-1 right-1 px-1 py-0.5 transform rotate-3 z-10">{t.wysiati.brokenBadge}</span>
                    <div className="w-full h-full bg-gradient-to-r from-red-200 to-amber-200 opacity-60 flex items-center justify-center text-red-700 font-bold text-xs animate-pulse">
                      {t.wysiati.imgLoading}
                    </div>
                  </div>

                  {/* Breaking Pricing Row */}
                  <div className="bg-red-50 border border-dashed border-red-300 rounded p-2 text-left relative">
                    <span className="absolute -top-2 right-2 bg-red-600 text-white text-[7px] font-extrabold px-1 rounded">{t.wysiati.overlapBadge}</span>
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-xs font-bold text-red-600">{t.wysiati.presidentialSuite}</h4>
                      {/* Overlapping price text */}
                      <span className="text-lg font-black text-black select-none pointer-events-none translate-x-[-15px] line-through text-opacity-40">R$ 4.200</span>
                      <span className="text-xl font-black text-red-600 absolute right-4 bottom-2 bg-white/70 px-1 border border-red-500">R$ 2.450!</span>
                    </div>
                  </div>

                  {/* Shaky security badge */}
                  <div className="text-[10px] text-gray-500 flex items-center gap-2 mt-2">
                    <ShieldAlert className="w-4 h-4 text-red-500 animate-pulse" />
                    <span className="text-red-700 font-semibold underline">{t.wysiati.insecureText}</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Clean Visual representation */}
                  <div className="relative h-28 bg-[#E9ECEF] rounded-lg overflow-hidden flex items-center justify-center border border-lime-green/35">
                    <span className="bg-[#5B7910] text-white font-mono text-[8px] absolute top-1 right-1 px-1.5 py-0.5 rounded tracking-wide z-10">{t.wysiati.correctBadge}</span>
                    <div className="w-full h-full bg-gradient-to-r from-[#e3f0d3] to-[#c7e5a8] flex flex-col items-center justify-center text-[#2d3a1f] p-3 text-center">
                      <Sparkles className="w-4 h-4 text-[#5B7910] mb-1" />
                      <span className="font-bold text-xs">{t.wysiati.copacabanaPalace}</span>
                      <span className="text-[9px] text-gray-500">{t.wysiati.luxurySuite}</span>
                    </div>
                  </div>

                  {/* Correct pricing layout row */}
                  <div className="bg-lime-green/5 border border-lime-green/30 rounded-lg p-3 text-left">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xs font-bold text-gray-800">{t.wysiati.presidentialSuiteClean}</h4>
                        <span className="text-[9px] text-gray-400 uppercase font-mono">{t.wysiati.taxesLabel}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] line-through text-gray-400 block">R$ 4.200</span>
                        <span className="text-sm font-black text-[#5B7910] block">R$ 2.450 {t.wysiati.perNight}</span>
                      </div>
                    </div>
                  </div>

                  {/* Safe context */}
                  <div className="text-[10px] text-gray-500 flex items-center gap-2 mt-2 bg-white p-2 rounded border border-gray-150">
                    <CheckCircle className="w-4 h-4 text-lime-active" />
                    <span className="text-gray-600 font-medium">{t.wysiati.safeBadge}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Subconscious Trust Gauge Output */}
            <div className="mt-8 pt-6 border-t border-[#DEE2E6]">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-3 text-left">
                {t.wysiati.fearGauge}
              </h4>
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden relative mb-2">
                <motion.div 
                  initial={{ width: "92%" }}
                  animate={{ width: hasBugs ? "92%" : "8%" }}
                  transition={{ type: "spring", stiffness: 80 }}
                  className={`h-full rounded-full transition-all ${hasBugs ? 'bg-[#DE3B3B]' : 'bg-lime-green'}`}
                />
              </div>
              <div className="flex justify-between items-center text-[11px] font-mono font-bold">
                <span className={hasBugs ? 'text-[#DE3B3B]' : 'text-gray-400'}>
                  {hasBugs ? t.wysiati.criticalFear : t.wysiati.excellentSafe}
                </span>
                <span className={!hasBugs ? 'text-[#5B7910]' : 'text-gray-400'}>
                  {!hasBugs ? t.wysiati.safeGaugeText : t.wysiati.highGaugeText}
                </span>
              </div>
              <p className="text-[11px] text-gray-505 text-left leading-relaxed mt-4 bg-gray-50 p-3 rounded-lg border border-gray-150">
                <strong>{t.wysiati.analysisTitle}</strong> {hasBugs 
                  ? t.wysiati.analysisBugs
                  : t.wysiati.analysisHealthy
                }
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

