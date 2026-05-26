import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

interface InteractiveHeroProps {
  onCtaclick: () => void;
}

export default function InteractiveHero({ onCtaclick }: InteractiveHeroProps) {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage (0 - 100)
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="hero-section" className="relative min-h-screen w-full bg-[#F8F9FA] text-[#212529] flex flex-col justify-between overflow-hidden select-none px-4 py-12 md:py-16 md:px-10 lg:px-20 border-b border-[#DEE2E6]">
      {/* Background Decorative Tech Blurs - optimized for light background */}
      <div className="absolute top-10 left-10 w-[30vw] h-[30vw] bg-lime-green/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[40vw] h-[40vw] bg-cyan-400/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Copy (Centered precisely per request) */}
      <div className="max-w-4xl mx-auto text-center z-10 pt-8 md:pt-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-green/15 border border-lime-green/30 mb-5 text-[10px] md:text-xs text-lime-active tracking-wider font-bold uppercase"
        >
          <Zap className="w-3.5 h-3.5 text-lime-active" />
          <span>{t.hero.agenda}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heebo text-5xl sm:text-6xl lg:text-8xl font-black text-black tracking-tight mb-6 leading-tight"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heebo text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          {t.hero.desc}
        </motion.p>


      </div>

      {/* Interactive Feature Panel (The Interactive Handoff Simulator) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-5xl w-full mx-auto bg-white border border-[#DEE2E6] rounded-2xl shadow-globant-default overflow-hidden mt-12 mb-4 z-10"
      >
        <div className="p-4 md:p-6 text-center">


          <div 
            ref={containerRef}
            className="relative aspect-video w-full h-[300px] md:h-[360px] bg-gray-150 rounded-xl overflow-hidden border border-[#DEE2E6] select-none touch-none cursor-ew-resize group shadow-inner"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Left View: SEM DESIGN QA */}
            <div className="absolute inset-0 bg-[#FFF5F5] select-none">
              <div className="p-6 md:p-10 h-full flex flex-col justify-between">
                {/* Mock Visual Error Element */}
                <div className="flex items-center gap-2 text-[#DE3B3B] bg-[#DE3B3B]/10 border border-[#DE3B3B]/30 px-3 py-1.5 rounded-lg w-fit text-[10px] font-bold">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{t.hero.leftTag}</span>
                </div>

                {/* UI with bugs */}
                <div className="max-w-md bg-white border-2 border-dashed border-[#DE3B3B]/40 rounded-xl p-5 mx-auto w-full my-auto opacity-95 text-left scale-[0.93] skew-y-1 relative shadow-sm">
                  <span className="absolute -top-2.5 -right-2 bg-[#DE3B3B] text-white text-[8px] font-bold px-1.5 py-0.5 rounded">{t.hero.leftBugTitle}</span>
                  <div className="w-12 h-12 rounded-lg bg-gray-200 mb-3 animate-pulse" />
                  <div className="h-4 bg-gray-300 w-3/4 rounded mb-2" />
                  <div className="h-3 bg-gray-200 w-5/6 rounded mb-5" />
                  <div className="flex justify-between items-center">
                    <div className="w-18 h-7 bg-[#DE3B3B]/15 border border-[#DE3B3B]/40 rounded-md text-center text-[9px] pt-1.5 text-[#DE3B3B] font-bold">{t.hero.leftTextOver}</div>
                    <div className="w-24 h-6 bg-gray-200 rounded" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-gray-500 font-mono text-[9px] border-t border-gray-200 pt-2">
                  <span>{t.hero.leftStatus}</span>
                  <span className="text-[#DE3B3B] font-bold">{t.hero.leftLostHours}</span>
                </div>
              </div>
            </div>

            {/* Right View: COM DESIGN QA (Slices based on slider position) */}
            <div 
              className="absolute inset-0 bg-[#F4F9F4] select-none border-l-2 border-lime-green/80"
              style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
            >
              <div className="p-6 md:p-10 h-full flex flex-col justify-between">
                {/* Mock Perfect QA Tag */}
                <div className="flex items-center gap-2 text-[#5B7910] bg-lime-green/20 border border-lime-green/45 px-3 py-1.5 rounded-lg w-fit text-[10px] font-bold ml-auto">
                  <CheckCircle2 className="w-3.5 h-3.5 text-lime-active" />
                  <span>{t.hero.rightTag}</span>
                </div>

                {/* Perfect UI aligned */}
                <div className="max-w-md bg-white border border-lime-green/40 rounded-xl p-5 mx-auto w-full my-auto text-left relative shadow-globant-default">
                  <span className="absolute -top-2.5 -right-2 bg-lime-green text-black text-[8px] font-bold px-1.5 py-0.5 rounded">{t.hero.rightPixelPerfect}</span>
                  <div className="w-12 h-12 rounded-lg bg-lime-green/15 flex items-center justify-center text-lime-active mb-3 border border-lime-green/25">
                    <Zap className="w-5 h-5 text-lime-active" />
                  </div>
                  <div className="h-4 bg-lime-green/10 border-l-2 border-lime-green w-3/4 rounded-sm mb-2 px-2 text-[10px] text-black flex items-center font-extrabold font-system">{t.hero.rightMatch}</div>
                  <p className="text-[10px] text-gray-500 mb-5 leading-relaxed font-system">{t.hero.rightHandoff}</p>
                  <div className="flex justify-between items-center">
                    <div className="px-3 py-1 bg-lime-green text-black rounded-full text-[9px] font-extrabold">{t.hero.rightApproved}</div>
                    <div className="w-24 h-6 bg-lime-green/10 rounded border border-lime-green/20" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-gray-500 font-mono text-[9px] border-t border-gray-250 pt-2">
                  <span className="text-lime-active font-bold">{t.hero.rightPipeline}</span>
                  <span className="text-gray-500">{t.hero.rightAutoMatch}</span>
                </div>
              </div>
            </div>

            {/* Slider Grabber Line and Button Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-lime-green cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-lime-green text-black flex items-center justify-center shadow-md pointer-events-auto cursor-ew-resize translate-y-[-50%] absolute top-[50%] hover:scale-110 active:scale-95 transition-transform">
                <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trust Signatures footer of primary fold */}
      <div className="border-t border-[#DEE2E6] pt-5 mt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 font-mono text-[10px] z-10 font-bold">
        <div className="flex items-center gap-1">
          <span className="text-gray-500">{t.hero.footerLeft}</span>
        </div>
        <div className="mt-2 md:mt-0 flex gap-4 text-gray-400">
          <span>{t.hero.footerRight1}</span>
          <span>•</span>
          <span>{t.hero.footerRight2}</span>
        </div>
      </div>
    </section>
  );
}

