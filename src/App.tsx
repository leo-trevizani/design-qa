import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import InteractiveHero from "./components/InteractiveHero";
import WYSIATISection from "./components/WYSIATISection";
import DesignDebtSection from "./components/DesignDebtSection";
import HiltonCaseSection from "./components/HiltonCaseSection";
import ShiftLeftSection from "./components/ShiftLeftSection";
import AutomationSection from "./components/AutomationSection";
import StrategicQASection from "./components/StrategicQASection";
import ContactModal from "./components/ContactModal";
import { useLanguage } from "./context/LanguageContext";
import { Globe } from "lucide-react";

export default function App() {
  const { language, setLanguage, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = down/next, -1 = up/prev
  const [isContactOpen, setIsContactOpen] = useState(false);
  const lastTimeRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);

  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  // Slide list metadata for progress indicators (8 sections total) - translated
  const slides = t.slides;


  // Debounced wheel listener to prevent multiple accidental skips
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Allow scroll inside the active container if it has internal scroll and is not at bounds
      const activeElement = document.getElementById(`slide-container-${currentSlide}`);
      if (activeElement) {
        const isScrollable = activeElement.scrollHeight > activeElement.clientHeight;
        if (isScrollable) {
          const isScrollingDown = e.deltaY > 0;
          const isAtBottom = Math.abs(activeElement.scrollHeight - activeElement.clientHeight - activeElement.scrollTop) < 2;
          const isAtTop = activeElement.scrollTop === 0;

          if (isScrollingDown && !isAtBottom) {
            // Let the internal container scroll down naturally
            return;
          }
          if (!isScrollingDown && !isAtTop) {
            // Let the internal container scroll up naturally
            return;
          }
        }
      }

      // Transition slides
      const now = Date.now();
      if (now - lastTimeRef.current < 900) return;

      if (e.deltaY > 20) {
        if (currentSlide < slides.length - 1) {
          e.preventDefault();
          setDirection(1);
          setCurrentSlide((prev) => prev + 1);
          lastTimeRef.current = now;
        }
      } else if (e.deltaY < -20) {
        if (currentSlide > 0) {
          e.preventDefault();
          setDirection(-1);
          setCurrentSlide((prev) => prev - 1);
          lastTimeRef.current = now;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSlide, slides.length]);

  // Touch Swipe navigation support for mobile/tablets
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartYRef.current - touchEndY;
    const now = Date.now();
    if (now - lastTimeRef.current < 900) return;

    const activeElement = document.getElementById(`slide-container-${currentSlide}`);
    if (activeElement) {
      const isScrollable = activeElement.scrollHeight > activeElement.clientHeight;
      if (isScrollable) {
        const isScrollingDown = diffY > 0;
        const isAtBottom = Math.abs(activeElement.scrollHeight - activeElement.clientHeight - activeElement.scrollTop) < 5;
        const isAtTop = activeElement.scrollTop === 0;

        if (isScrollingDown && !isAtBottom) return;
        if (!isScrollingDown && !isAtTop) return;
      }
    }

    if (diffY > 40) {
      // Swipe up -> Next slide
      if (currentSlide < slides.length - 1) {
        setDirection(1);
        setCurrentSlide((prev) => prev + 1);
        lastTimeRef.current = now;
      }
    } else if (diffY < -40) {
      // Swipe down -> Prev slide
      if (currentSlide > 0) {
        setDirection(-1);
        setCurrentSlide((prev) => prev - 1);
        lastTimeRef.current = now;
      }
    }
  };

  // Keyboard navigation support (Arrow Left, Arrow Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const now = Date.now();
      if (now - lastTimeRef.current < 700) return;

      if (e.key === "ArrowRight") {
        if (currentSlide < slides.length - 1) {
          e.preventDefault();
          setDirection(1);
          setCurrentSlide((prev) => prev + 1);
          lastTimeRef.current = now;
        }
      } else if (e.key === "ArrowLeft") {
        if (currentSlide > 0) {
          e.preventDefault();
          setDirection(-1);
          setCurrentSlide((prev) => prev - 1);
          lastTimeRef.current = now;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, slides.length]);

  // Framer motion vertical slide slide transition variant animation definition
  const transitionVariants = {
    initial: (dir: number) => ({
      y: dir > 0 ? "100%" : dir < 0 ? "-100%" : "0%",
      opacity: 0,
    }),
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 100, damping: 20 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (dir: number) => ({
      y: dir > 0 ? "-100%" : dir < 0 ? "100%" : "0%",
      opacity: 0,
      transition: {
        y: { type: "spring", stiffness: 100, damping: 20 },
        opacity: { duration: 0.4 }
      }
    }),
  };

  return (
    <div 
      className="relative w-screen h-screen bg-[#F8F9FA] text-[#212529] font-sans antialiased overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main Slide Carousel Area */}
      <div className="w-full h-full relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full flex flex-col justify-between"
          >
            {/* Scroll wrapper to keep the content inside the slide fully scrollable if it exceeds page height on small devices */}
            <div 
              id={`slide-container-${currentSlide}`}
              className="w-full h-full overflow-y-auto scroll-smooth flex flex-col"
            >
              <div className="flex-grow w-full min-h-full">
                {currentSlide === 0 && (
                  <div className="min-h-screen flex flex-col justify-between bg-white">
                    <InteractiveHero onCtaclick={openContactModal} />
                  </div>
                )}
                
                {currentSlide === 1 && (
                  <div className="min-h-screen flex flex-col justify-center bg-[#F8F9FA]">
                    <WYSIATISection onOpenContact={openContactModal} />
                  </div>
                )}
                
                {currentSlide === 2 && (
                  <div className="min-h-screen flex flex-col justify-center bg-white">
                    <DesignDebtSection />
                  </div>
                )}

                {currentSlide === 3 && (
                  <div className="min-h-screen flex flex-col justify-center bg-[#F8F9FA]">
                    <HiltonCaseSection />
                  </div>
                )}

                {currentSlide === 4 && (
                  <div className="min-h-screen flex flex-col justify-center bg-white">
                    <ShiftLeftSection />
                  </div>
                )}

                {currentSlide === 5 && (
                  <div className="min-h-screen flex flex-col justify-center bg-[#F8F9FA]">
                    <AutomationSection />
                  </div>
                )}

                {currentSlide === 6 && (
                  <div className="min-h-screen flex flex-col justify-center bg-white">
                    <StrategicQASection />
                  </div>
                )}

                {currentSlide === 7 && (
                  <div className="min-h-screen bg-[#111111] flex flex-col justify-center items-center relative overflow-hidden">
                    {/* Decorative elegant cosmic glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-lime-green/5 rounded-full blur-[140px] pointer-events-none" />
                    
                    {/* Visual Call To Action Block */}
                    <div className="max-w-4xl mx-auto text-center px-6 py-12 md:py-16 z-10 flex flex-col justify-center items-center">
                      <span className="text-xs font-bold uppercase tracking-widest text-lime-green bg-lime-green/10 px-4 py-1.5 rounded-full border border-lime-green/20 mb-6">
                        {t.ctaSection.tag}
                      </span>
                      <h2 className="font-heebo text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6 flex flex-col gap-2">
                        <span>{t.ctaSection.titleLine1}</span>
                        <span>{t.ctaSection.titleLine2}</span>
                      </h2>
                      <p className="font-heebo text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                        {t.ctaSection.desc}
                      </p>
                      
                      <button 
                        onClick={openContactModal}
                        className="px-10 py-4 bg-lime-green hover:bg-lime-hover text-black font-extrabold text-xs tracking-wider uppercase rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-center cursor-pointer"
                      >
                        {t.ctaSection.button}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Language Selector in Top Right */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-1 bg-white/95 backdrop-blur-md border border-[#DEE2E6] py-1 px-1.5 rounded-full shadow-globant-default">
        <Globe className="w-3.5 h-3.5 text-gray-400 ml-1.5" />
        <button 
          onClick={() => setLanguage("pt")}
          className={`px-2.5 py-1 text-[10px] font-black tracking-wider rounded-full transition-all cursor-pointer ${language === "pt" ? 'bg-black text-white shadow-sm' : 'text-gray-400 hover:text-black'}`}
        >
          PT
        </button>
        <button 
          onClick={() => setLanguage("es")}
          className={`px-2.5 py-1 text-[10px] font-black tracking-wider rounded-full transition-all cursor-pointer ${language === "es" ? 'bg-black text-white shadow-sm' : 'text-gray-400 hover:text-black'}`}
        >
          ES
        </button>
      </div>

      {/* Persistent horizontal progress bar at the very bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-200 z-40">
        <div 
          className="h-full bg-lime-green transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Complete Contact Modal Dialog Backdrop Forms Overlay CRM */}
      <ContactModal isOpen={isContactOpen} onClose={closeContactModal} />
    </div>
  );
}
