import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Projects from '../components/Projects';
import OpeningAnimation from '../components/OpeningAnimation';

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  return (
    <>
      {showAnimation && <OpeningAnimation onComplete={handleAnimationComplete} />}
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Projects />

        <footer className="py-8 bg-black/80 border-t border-blue-500/30">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">
              Built with React Router, Tailwind CSS, and shadcn/ui
            </p>
            <p className="text-blue-400 mt-2">
              May the Force be with you
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
