import '../app.css';
import { Card } from './ui/card';

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-5xl font-bold text-center mb-16 text-amber-400 font-starwars drop-shadow-[0_0_15px_rgba(251,191,36,0.7)]">
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <Card className="p-8 bg-black/40 border-blue-500/30 backdrop-blur-sm">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                [Your bio paragraph goes here. Talk about your journey as a developer, your passions,
                                what drives you to code, and what makes you unique. Share your story and let your
                                personality shine through.]
                            </p>
                        </Card>

                        <Card className="p-8 bg-black/40 border-blue-500/30 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-blue-300 mb-4">Skills & Technologies</h3>
                            <div className="flex flex-wrap gap-3">
                                {['React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'PostgreSQL'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-blue-950/50 border border-blue-400/50 rounded-lg text-blue-200 hover:bg-blue-900/50 transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-lg overflow-hidden border-2 border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                            <img
                                src="/images/flamethrower.jpg"
                                alt="Picture of me holding a homemade flamethrower"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
