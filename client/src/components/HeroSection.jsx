import { motion, AnimatePresence } from 'framer-motion';
import { ClockIcon } from '@heroicons/react/24/outline';
import Countdown from 'react-countdown';

const HeroSection = () => {
  const festDate = new Date(2025, 2, 1); // March 1, 2025

  // Animation variants for countdown numbers
  const numberVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  };

  // Animation for separator pulses
  const pulseVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      transition: { duration: 1.5, repeat: Infinity }
    }
  };

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="flex items-center gap-4 text-3xl md:text-5xl font-bold">
      <div className="flex items-center gap-2">
        <motion.span
          key={days}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={numberVariants}
          className="bg-white/20 p-4 rounded-lg"
        >
          {days}
        </motion.span>
        <motion.span variants={pulseVariants} animate="pulse">d</motion.span>
      </div>

      <motion.span variants={pulseVariants} animate="pulse">:</motion.span>

      <div className="flex items-center gap-2">
        <motion.span
          key={hours}
          variants={numberVariants}
          initial="initial"
          animate="animate"
          className="bg-white/20 p-4 rounded-lg"
        >
          {hours}
        </motion.span>
        <motion.span variants={pulseVariants} animate="pulse">h</motion.span>
      </div>

      <motion.span variants={pulseVariants} animate="pulse">:</motion.span>

      <div className="flex items-center gap-2">
        <motion.span
          key={minutes}
          variants={numberVariants}
          initial="initial"
          animate="animate"
          className="bg-white/20 p-4 rounded-lg"
        >
          {minutes}
        </motion.span>
        <motion.span variants={pulseVariants} animate="pulse">m</motion.span>
      </div>

      <motion.span variants={pulseVariants} animate="pulse">:</motion.span>

      <div className="flex items-center gap-2">
        <motion.span
          key={seconds}
          variants={numberVariants}
          initial="initial"
          animate="animate"
          className="bg-white/20 p-4 rounded-lg"
        >
          {seconds}
        </motion.span>
        <motion.span variants={pulseVariants} animate="pulse">s</motion.span>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x">
      <div className="text-center text-white space-y-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            CodeXplorers Fest 2025
          </h1>
          <div className="flex items-center justify-center gap-4 text-lg md:text-xl">
            <ClockIcon className="w-8 h-8 md:w-12 md:h-12" />
            <AnimatePresence mode="wait">
              <Countdown 
                date={festDate}
                renderer={renderer}
                zeroPadTime={2}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;