import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, ShieldCheck, Zap, GitCommit, PlayCircle, Eye } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function AutomationSection() {
  const { t } = useLanguage();
  const [isScanning, setIsScanning] = useState(false);
  const [scanState, setScanState] = useState<"idle" | "scanning" | "diff" | "approved">("idle");

  const startVisualScan = () => {
    setIsScanning(true);
    setScanState("scanning");
    setTimeout(() => {
      setScanState("diff");
    }, 1800);
  };

  const approvePR = () => {
    setScanState("approved");
    setIsScanning(false);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#F8F9FA] text-[#212529] flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 overflow-hidden border-b border-[#DEE2E6]">
      {/* Background Decorative Tech Blurs */}
      <div className="absolute top-1/4 right-5 w-[35vw] h-[35vw] bg-[#5B7910]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-[40vw] h-[40vw] bg-lime-green/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Info */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-green/20 text-[#5B7910] text-[10px] md:text-xs font-mono font-bold tracking-wider uppercase mb-5 w-fit border border-lime-green/35"
          >
            <Cpu className="w-3.5 h-3.5 text-lime-active" />
            <span>{t.automation.tag}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heebo text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight mb-6"
          >
            {t.automation.title}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 font-sans text-sm md:text-base text-gray-600 leading-relaxed"
          >
            <p>
              {t.automation.desc1}
            </p>
            <p className="border-l-4 border-lime-green pl-4 my-4 italic text-gray-700 bg-lime-green/5 py-2">
              {t.automation.desc2}
            </p>
            <p>
              {t.automation.desc3}
            </p>
            <p>
              {t.automation.desc4}
            </p>
          </motion.div>
        </div>

        {/* Right Side Layout Simulator */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-[#DEE2E6] rounded-2xl p-6 shadow-globant-default overflow-hidden text-left"
          >
            <div className="flex border-b border-[#DEE2E6] pb-4 mb-4 justify-between items-center">
              <div>
                <h3 className="text-xs font-black text-black">{t.automation.sandboxTitle}</h3>
                <p className="text-[9px] font-mono text-gray-400">{t.automation.sandboxSub}</p>
              </div>
              <div className="flex gap-2">
                {scanState === "idle" && (
                  <button 
                    onClick={startVisualScan}
                    className="px-3 py-1.5 bg-black hover:bg-neutral-800 text-lime-green font-mono text-[10px] font-bold rounded flex items-center gap-1 cursor-pointer transition-all"
                  >
                    <PlayCircle className="w-3.5 h-3.5" /> {t.automation.btnScan}
                  </button>
                )}
                {scanState === "diff" && (
                  <button 
                    onClick={approvePR}
                    className="px-3 py-1.5 bg-lime-green text-black font-mono text-[10px] font-extrabold rounded flex items-center gap-1 cursor-pointer transition-all hover:bg-lime-hover"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" /> {t.automation.btnAccept}
                  </button>
                )}
                {scanState === "approved" && (
                  <div className="px-3 py-1.5 bg-[#F4F9F4] text-lime-active border border-lime-green/30 font-mono text-[10px] font-black rounded flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> {t.automation.mergedGreen}
                  </div>
                )}
              </div>
            </div>

            {/* Split UI Visual PR Comparator block */}
            <div className="grid grid-cols-2 gap-4 mb-5 relative min-h-[190px]">
              {/* Image Column 1: FIGMA BASELINE TARGET */}
              <div className="border border-gray-200 rounded-lg p-3 bg-gray-50 flex flex-col justify-between">
                <span className="text-[8px] font-mono text-gray-455 uppercase block border-b border-gray-200 pb-1 mb-2">{t.automation.refFigma}</span>
                {/* Simulated button clean schema */}
                <div className="my-auto space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#5B7910]/40 flex items-center justify-center text-[#5B7910] text-[10px] font-bold mx-auto">G</div>
                  <div className="h-3 bg-gray-200 w-3/4 rounded mx-auto" />
                  <div className="px-3 py-1.5 bg-[#5B7910] text-white text-[9px] text-center rounded font-semibold w-24 mx-auto">
                    {t.automation.btnLabelConnect}
                  </div>
                </div>
              </div>

              {/* Image Column 2: MERGE CANDIDATE */}
              <div className="border border-gray-200 rounded-lg p-3 bg-gray-50 flex flex-col justify-between relative">
                <span className="text-[8px] font-mono text-gray-455 uppercase block border-b border-gray-200 pb-1 mb-2">{t.automation.candPr}</span>
                
                {/* Dynamic Content overlays depending on active scan states */}
                {scanState === "scanning" && (
                  <div className="absolute inset-x-0 top-0 bottom-0 bg-white/80 z-20 flex flex-col justify-center items-center">
                    <div className="w-6 h-6 border-2 border-lime-green border-t-transparent rounded-full animate-spin mb-2" />
                    <span className="text-[9px] font-mono font-bold animate-pulse text-gray-505">{t.automation.compareProgress}</span>
                  </div>
                )}

                {/* Simulated candidate with slightly bloated font padding alignment mismatch before acceptance */}
                <div className="my-auto space-y-2 relative">
                  <div className="w-10 h-10 rounded-full bg-[#5B7910]/40 flex items-center justify-center text-[#5B7910] text-[10px] font-bold mx-auto">G</div>
                  <div className="h-3 bg-gray-200 w-3/4 rounded mx-auto" />
                  
                  {/* The button text is slightly misplaced towards bottom or too wide */}
                  {scanState === "diff" ? (
                    <div className="relative px-3 py-1.5 bg-[#FF00FF]/25 border-2 border-[#FF00FF] text-[9px] text-center rounded text-black font-semibold w-28 mx-auto animate-pulse flex items-center justify-center">
                      <span className="text-[#FF00FF] font-black mr-1">[!]</span> {t.automation.btnLabelConnect}
                      {/* Highlight absolute diff overlay indicators */}
                      <span className="absolute -top-3.5 -right-2 bg-[#FF00FF] text-white text-[7px] font-bold px-1 py-0.5 rounded shadow">{t.automation.widthOutBadge}</span>
                    </div>
                  ) : (
                    <div className={`px-3 py-1.5 text-[9px] text-center rounded font-semibold mx-auto transition-all ${scanState === "approved" ? 'bg-[#5B7910] text-white w-24' : 'bg-[#5B7910] text-white w-28'}`}>
                      {t.automation.btnLabelConnect}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Explanatory scanner bottom panel */}
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs text-gray-505">
              {scanState === "idle" && (
                <p>💡 <strong>{t.automation.howToTest}</strong> {t.automation.howToTestText}</p>
              )}
              {scanState === "scanning" && (
                <p>👁️ <strong>{t.automation.scanStatusText}</strong></p>
              )}
              {scanState === "diff" && (
                <p>🚨 <strong>{t.automation.diffStatusText}</strong></p>
              )}
              {scanState === "approved" && (
                <p>💚 <strong>{t.automation.approvedStatusText}</strong></p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

