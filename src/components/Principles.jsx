import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Sun, Book } from 'lucide-react';

const items = [
  {
    icon: Leaf,
    title: 'Impermanence',
    text: 'All things change. Noticing change softens clinging and opens us to ease.',
  },
  {
    icon: Heart,
    title: 'Compassion',
    text: 'Meeting our experience and others with kindness transforms the heart.',
  },
  {
    icon: Sun,
    title: 'Mindfulness',
    text: 'A steady, clear awareness that sees things as they are, moment by moment.',
  },
  {
    icon: Book,
    title: 'Right Understanding',
    text: 'Wisdom grows from seeing clearly and acting with care in daily life.',
  },
];

export default function Principles() {
  return (
    <section id="principles" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-50/40 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-800">Core Principles</h2>
          <p className="mt-3 text-slate-600">Gentle reminders to guide practice on and off the cushion.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
              className="group relative rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-sm overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/0 via-white/10 to-sky-100/30 pointer-events-none" />
              <div className="relative p-6">
                <div className="w-11 h-11 rounded-xl bg-sky-600/10 text-sky-700 flex items-center justify-center mb-4">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
