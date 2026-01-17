import { useState, useEffect, useRef } from "react";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { RippleButton } from "@/components/RippleButton";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const offsetX = (e.clientX - centerX) / 50;
        const offsetY = (e.clientY - centerY) / 50;
        
        setMousePosition({ x: offsetX, y: offsetY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const handleDownloadResume = () => {
    // Replace with your resume file path in public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-end">
            <div className="space-y-1 md:space-y-2 overflow-hidden">
              <motion.h1 
                className="text-3xl md:text-5xl lg:text-6xl font-instrument leading-tight"
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                Building things that are
              </motion.h1>
              <motion.h1 
                className="text-3xl md:text-5xl lg:text-6xl font-instrument leading-tight"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                beautiful, <span className="text-primary italic">functional,</span>
              </motion.h1>
              <motion.h1 
                className="text-3xl md:text-5xl lg:text-6xl font-instrument leading-tight"
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                and meaningful.
              </motion.h1>
              
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="pt-4"
              >
                <RippleButton
                  onClick={handleDownloadResume}
                  rippleOnHover
                  className="px-6 py-3 font-medium"
                >
                  <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
                  Download Resume
                </RippleButton>
              </motion.div>
            </div>
            
            <motion.div 
              ref={containerRef}
              className="flex justify-center md:justify-end will-change-transform"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4 },
                scale: { duration: 0.6, delay: 0.4 },
                x: { type: "tween", duration: 0.1, ease: "linear" },
                y: { type: "tween", duration: 0.1, ease: "linear" },
              }}
              style={{ 
                transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
                backfaceVisibility: "hidden"
              }}
            >
              {/* Profile Image Placeholder - Replace with your image */}
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center">
                <span className="text-muted-foreground font-space text-sm text-center px-4">
                  Add your photo in<br />src/assets/profile.jpg
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
