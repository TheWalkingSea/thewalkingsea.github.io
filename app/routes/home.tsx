import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Projects from '../components/Projects';

export default function Home() {
  return (
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
  );
}
