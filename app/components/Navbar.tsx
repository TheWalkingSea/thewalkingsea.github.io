import '../app.css';

export default function Navbar() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-blue-500/30">
            <div className="w-full flex items-center px-6 py-4">
                <h1 className="text-4xl font-bold text-amber-400 font-starwars pl-3 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                    Austin
                </h1>

                <div className="ml-auto flex gap-5">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="text-lg border border-transparent cursor-pointer hover:border-blue-400/60 hover:bg-blue-950/70 hover:text-blue-300 py-2.5 px-6 rounded-xl transition-all duration-300"
                    >
                        About Me
                    </button>
                    <button
                        onClick={() => scrollToSection('work')}
                        className="text-lg border border-transparent cursor-pointer hover:border-blue-400/60 hover:bg-blue-950/70 hover:text-blue-300 py-2.5 px-6 rounded-xl transition-all duration-300"
                    >
                        Work
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="text-lg border border-transparent cursor-pointer hover:border-blue-400/60 hover:bg-blue-950/70 hover:text-blue-300 py-2.5 px-6 rounded-xl transition-all duration-300"
                    >
                        Projects
                    </button>
                </div>
            </div>
        </nav>
    );
}