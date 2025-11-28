import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Logo() {
  const [showDots, setShowDots] = useState(false);

  useEffect(() => {
    // delay dots appearing
    const timer = setTimeout(() => setShowDots(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex items-center text-[#d3e97a] font-bold"
      >
        <motion.span
          initial={{ x: 0 }}
          animate={{ x: showDots ? -5 : 0 }}
          transition={{ duration: 0.4 }}
          className="text-5xl md:text-7xl"
        >
          A
        </motion.span>

        <motion.span
          initial={{ x: 0 }}
          animate={{ x: showDots ? -5 : 0 }}
          transition={{ duration: 0.4 }}
          className="text-5xl md:text-7xl"
        >
          T
        </motion.span>

        {showDots && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex gap-1 ml-1"
          >
            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              •
            </motion.span>
            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.25 }}
            >
              •
            </motion.span>
            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 1, delay: 0.5 }}
            >
              •
            </motion.span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
