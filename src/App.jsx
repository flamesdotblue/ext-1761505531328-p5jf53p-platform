import React from 'react';
import Hero from './components/Hero';
import Principles from './components/Principles';
import MeditationGuide from './components/MeditationGuide';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 text-slate-800">
      <Hero />
      <main>
        <Principles />
        <MeditationGuide />
      </main>
      <Footer />
    </div>
  );
}
