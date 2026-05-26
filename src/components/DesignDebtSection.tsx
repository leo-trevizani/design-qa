import React, { useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, AlertTriangle, Hammer, Sparkles, Scale, RefreshCw } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function DesignDebtSection() {
  const { t } = useLanguage();
  const [accumulatedReleases, setAccumulatedReleases] = useState(3);

  // Math simulation for design debt
  const designTokensMismatches = accumulatedReleases * 4;
  const devEffortReworkMultiplier = accumulatedReleases * 35; // hours of future rework
  const customerFrictionPercentage = Math.min(accumulatedReleases * 15, 85);

  const getDivergenceClass = (index: number) => {
    if (accumulatedReleases === 0) return "scale-100 opacity-100 rounded-lg";
    // Returns increasingly sketchy visual offsets based on debt intensity
    if (index === 1) {
      if (accumulatedReleases >= 4) return "text-[15px] tracking-widest pl-6 text-[#DE3B3B]";
      if (accumulatedReleases >= 2) return "text-[13px] pl-3 text-amber-600";
    }
    if (index === 2) {
      if (accumulatedReleases >= 5) return "bg-[#DE3B3B] text-white py-1.5 px-3 uppercase text-[9px] -translate-y-2 rounded-none transform rotate-3";
      if (accumulatedReleases >= 3) return "bg-amber-100 text-amber-800 py-2 px-4 text-xs font-semibold transform rotate-1";
    }
    if (index === 3) {
      if (accumulatedReleases >= 5) return "border-4 border-double border-red-500 rounded-none m-2";
      if (accumulatedReleases >= 2) return "border border-amber-350 m-1";
    }
    return "";
  };

  return (
    <section className="relative min-h-screen w-full bg-white text-[#212529] flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 overflow-hidden border-b border-[#DEE2E6]">
      {/* Decorative vector grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[40vw] h-[40vw] bg-yellow-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Interactive Calculator Panel */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#F8F9FA] border border-[#DEE2E6] rounded-2xl p-6 shadow-globant-default relative"
          >
            <div className="flex items-center justify-between border-b border-[#DEE2E6] pb-4 mb-5">
              <div>
                <h3 className="text-sm font-black text-black">{t.designDebt.sandboxTitle}</h3>
                <p className="text-[10px] text-gray-500 font-mono">{t.designDebt.sandboxSub}</p>
              </div>
              <button 
                onClick={() => setAccumulatedReleases(0)}
                className="p-1 px-3 text-[10px] font-mono font-bold bg-white text-black border border-[#DEE2E6] rounded hover:border-black transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" /> {t.designDebt.btnReset}
              </button>
            </div>

            {/* Release Accumulator Slider Controls */}
            <div className="mb-6">
              <label className="flex justify-between items-center text-xs font-bold text-gray-700 mb-2 font-mono">
                <span>{t.designDebt.sliderLabelPre}</span>
                <span className="text-lg text-amber-600 font-black">{accumulatedReleases} {t.designDebt.sliderLabelPost}</span>
              </label>
              <input 
                type="range" 
                min="0" 
                max="5" 
                value={accumulatedReleases}
                onChange={(e) => setAccumulatedReleases(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600 focus:outline-none"
              />
              <div className="flex justify-between text-[9px] text-gray-400 font-mono mt-1">
                <span>{t.designDebt.sliderMin}</span>
                <span>{t.designDebt.sliderMax}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase font-mono block mb-1">{t.designDebt.metricDivergences}</span>
                <span className={`text-xl font-black ${accumulatedReleases > 2 ? 'text-amber-600' : 'text-black'}`}>
                  {designTokensMismatches}
                </span>
                <span className="text-[8px] text-gray-400 block mt-0.5">{t.designDebt.metricDivergencesSub}</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase font-mono block mb-1">{t.designDebt.metricRework}</span>
                <span className={`text-xl font-black ${accumulatedReleases > 2 ? 'text-amber-600' : 'text-black'}`}>
                  {devEffortReworkMultiplier}h
                </span>
                <span className="text-[8px] text-gray-400 block mt-0.5">{t.designDebt.metricReworkSub}</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase font-mono block mb-1">{t.designDebt.metricUxDrop}</span>
                <span className={`text-xl font-black ${accumulatedReleases > 2 ? 'text-amber-600' : 'text-black'}`}>
                  {customerFrictionPercentage}%
                </span>
                <span className="text-[8px] text-gray-400 block mt-0.5">{t.designDebt.metricUxDropSub}</span>
              </div>
            </div>

            {/* Live Preview Container experiencing cumulative wonkiness */}
            <div className={`bg-white border rounded-xl p-4 transition-all duration-300 ${getDivergenceClass(3)}`}>
              <div className="flex justify-between items-center mb-3">
                <span className={`text-[10px] font-mono tracking-wider font-bold transition-all text-gray-500`}>{t.designDebt.crmTitle}</span>
                <span className={`px-2 py-0.5 text-[8px] font-bold rounded ${accumulatedReleases > 3 ? 'bg-red-500 text-white' : 'bg-lime-green/30 text-lime-active'}`}>
                  {accumulatedReleases > 3 ? t.designDebt.urgentBadge : t.designDebt.approvedBadge}
                </span>
              </div>

              {/* Input section prone to broken offset */}
              <div className="space-y-2 text-left mb-3">
                <span className={`text-[10px] font-semibold block transition-all ${getDivergenceClass(1)}`}>
                  {t.designDebt.transferLabel}
                </span>
                <div className="w-full bg-gray-100 px-3 py-2 border rounded flex justify-between items-center">
                  <span className="text-xs text-gray-400 font-mono">{t.designDebt.typingText}</span>
                  <span className="text-xs text-gray-700 font-bold font-mono">{t.designDebt.pixActive}</span>
                </div>
              </div>

              {/* Checkout Button suffering visual warp effects based on release counts */}
              <button className={`w-full py-2.5 font-bold text-xs rounded transition-all cursor-pointer ${accumulatedReleases === 0 ? 'bg-black text-white hover:bg-neutral-800' : ''} ${getDivergenceClass(2)}`}>
                {accumulatedReleases === 0 ? t.designDebt.btnConfirm : t.designDebt.btnConfirm + (accumulatedReleases > 2 ? ` ${t.designDebt.btnTruncateErr}` : "")}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Editorial Context Side */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] md:text-xs font-mono font-bold tracking-wider uppercase mb-5 w-fit border border-amber-200"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>{t.designDebt.tag}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heebo text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight mb-6"
          >
            {t.designDebt.title}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 font-sans text-sm md:text-base text-gray-600 leading-relaxed"
          >
            <p>
              {t.designDebt.p1}
            </p>
            <p>
              {t.designDebt.p2}
            </p>
            <p>
              {t.designDebt.p3}
            </p>
            <p className="border-l-4 border-amber-500 pl-4 my-4 italic text-gray-700 bg-amber-500/5 py-2 pr-3 rounded-r-lg">
              {t.designDebt.quote}
            </p>
            <p className="font-semibold text-black">
              {t.designDebt.summary}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

