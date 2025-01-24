import { motion, AnimatePresence } from 'framer-motion';
import { ClockIcon } from '@heroicons/react/24/outline';
import Countdown from 'react-countdown';

const HeroSection = () => {
  const festDate = new Date(2025, 2, 1); // March 1, 2025

  const numberVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      transition: { duration: 1.5, repeat: Infinity }
    }
  };

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xl md:text-3xl lg:text-5xl font-bold">
      {/* Days */}
      <div className="flex items-center gap-1 md:gap-2">
        <motion.span
          key={days}
          variants={numberVariants}
          className="bg-white/20 p-2 md:p-4 rounded-lg text-2xl md:text-4xl"
        >
          {days}
        </motion.span>
        <motion.span variants={pulseVariants} className="text-sm md:text-xl">d</motion.span>
      </div>

      <motion.span variants={pulseVariants} className="hidden md:block">:</motion.span>

      {/* Hours */}
      <div className="flex items-center gap-1 md:gap-2">
        <motion.span
          key={hours}
          variants={numberVariants}
          className="bg-white/20 p-2 md:p-4 rounded-lg text-2xl md:text-4xl"
        >
          {hours}
        </motion.span>
        <motion.span variants={pulseVariants} className="text-sm md:text-xl">h</motion.span>
      </div>

      <motion.span variants={pulseVariants} className="hidden md:block">:</motion.span>

      {/* Minutes */}
      <div className="flex items-center gap-1 md:gap-2">
        <motion.span
          key={minutes}
          variants={numberVariants}
          className="bg-white/20 p-2 md:p-4 rounded-lg text-2xl md:text-4xl"
        >
          {minutes}
        </motion.span>
        <motion.span variants={pulseVariants} className="text-sm md:text-xl">m</motion.span>
      </div>

      <motion.span variants={pulseVariants} className="hidden md:block">:</motion.span>

      {/* Seconds */}
      <div className="flex items-center gap-1 md:gap-2">
        <motion.span
          key={seconds}
          variants={numberVariants}
          className="bg-white/20 p-2 md:p-4 rounded-lg text-2xl md:text-4xl"
        >
          {seconds}
        </motion.span>
        <motion.span variants={pulseVariants} className="text-sm md:text-xl">s</motion.span>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x">
      <div className="text-center text-white space-y-4 md:space-y-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 drop-shadow-lg px-2">
            CodeXplorers Fest 2025
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm md:text-lg">
            <ClockIcon className="w-6 h-6 md:w-8 md:h-8" />
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