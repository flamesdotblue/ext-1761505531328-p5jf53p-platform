import React from 'react';

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/60 bg-white/50 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Serene Path. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#principles" className="hover:text-slate-900 transition-colors">Principles</a>
          <span className="text-slate-300">•</span>
          <a href="#guide" className="hover:text-slate-900 transition-colors">Meditation</a>
        </div>
      </div>
    </footer>
  );
}
