import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vK0TK9mHEhvY3bf1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-sky-50/30 to-white" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-800"
        >
          Quiet Mind, Open Heart
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 max-w-2xl mx-auto"
        >
          A serene, modern space inspired by Buddhist wisdom—cultivating clarity, compassion, and balance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo('guide')}
            className="px-5 py-3 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 text-slate-800 shadow-sm hover:bg-white/40 transition-colors"
          >
            Begin Meditation
          </button>
          <button
            onClick={() => scrollTo('principles')}
            className="px-5 py-3 rounded-full bg-sky-600/90 text-white shadow-sm hover:bg-sky-600 transition-colors"
          >
            Learn Principles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
