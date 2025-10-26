import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Arrive',
    detail: 'Sit comfortably. Allow the body to settle and the breath to find its natural rhythm.'
  },
  {
    title: 'Anchor',
    detail: 'Gently rest attention on the breath at the nostrils or belly. Let thoughts pass like clouds.'
  },
  {
    title: 'Open',
    detail: 'Widen awareness to include sounds, sensations, and mood—receiving all with kindness.'
  },
  {
    title: 'Return',
    detail: 'When the mind wanders, acknowledge it softly and return to the anchor without judgment.'
  }
];

export default function MeditationGuide() {
  return (
    <section id="guide" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-50/30 to-transparent pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800">A Gentle Practice</h2>
          <p className="mt-3 text-slate-600">A short guide to begin or refresh your meditation.</p>
        </div>

        <div className="space-y-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
              className="relative rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-sky-100/30 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative p-6 md:p-7 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-sky-600/10 border border-sky-600/20 text-sky-700 flex items-center justify-center font-semibold">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{s.title}</h3>
                  <p className="mt-1.5 text-slate-600 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 md:mt-12 rounded-2xl bg-gradient-to-r from-sky-500/10 to-sky-600/10 border border-white/40 backdrop-blur-xl p-6 text-slate-700"
        >
          <p className="text-sm md:text-base">
            Tip: If it helps, count the breath from one to ten and begin again. What matters most is the gentle return.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
