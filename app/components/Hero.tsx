import '../app.css';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-black via-blue-950/20 to-black">
            <div className="absolute inset-0 bg-[url(/images/star-wars-backdrop2.webp)] bg-cover bg-center opacity-30"></div>

            <div className="relative z-10 container mx-auto px-6 flex items-center justify-between max-w-7xl">
                <div className="flex-1 space-y-6">
                    <h1 className="text-7xl font-bold font-starwars text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.7)] animate-fade-in">
                        Austin
                    </h1>
                    <p className="text-3xl text-blue-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.5)]">
                        Full Stack Developer
                    </p>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                        Building the future, one line of code at a time
                    </p>
                    <div className="flex gap-4 pt-4">
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 bg-blue-600/80 hover:bg-blue-500 border border-blue-400 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                        >
                            View Projects
                        </button>
                        <button
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 bg-transparent hover:bg-blue-950/50 border border-blue-400 rounded-lg text-blue-300 font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="flex-shrink-0 ml-12">
                    <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all duration-300">
                        <img
                            src="/images/personal-photo.png"
                            alt="Austin"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}