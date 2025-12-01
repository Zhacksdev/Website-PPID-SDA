import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import PpidSidoarjoWebsiteContent from "./components/PpidSidoarjoWebsiteContent";
import VideoIntro from "./components/VideoIntro";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show intro for 5 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative size-full overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50"
          >
            <VideoIntro />
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <PpidSidoarjoWebsiteContent />
        </motion.div>
      )}
    </div>
  );
}
