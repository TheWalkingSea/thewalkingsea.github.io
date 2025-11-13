import '../app.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: 'Wordle Solver',
            description: 'The Wordle Solver is a high-performance C++ application that applies principles of information theory to efficiently analyze possible letter combinations, determine the optimal guesses for the popular word puzzle game Wordle, and provide users with actionable insights to maximize their probability of winning in minimal attempts, effectively transforming a casual game into a mathematically guided strategy session.',
            technologies: ['C++', 'Information Theory'],
            github: 'https://github.com/TheWalkingSea/wordle-solver'
        },        
        {
            title: 'VibeEngine',
            description: 'VibeEngine is an AI-powered platform that makes complex codebases readable and maintainable by mapping features, visualizing dependencies, and enabling seamless feature additions via prompts, integrating with GitHub, AWS serverless architecture, MongoDB, and a React dashboard to transform indecipherable projects into manageable, extensible systems.',
            technologies: ['AWS', 'ExpressJS', 'React (Router)', "Tailwind", "TypeScript", "HTML/CSS", "MongoDB"],
            github: 'https://github.com/TheWalkingSea/aiatl-3'
        },
        {
            title: 'Kindness Operation',
            description: 'A containerized pipeline in Python, automating verification of submissions and generating Instagram posts using Pillow, reducing review time by 90% and handling up to 100+ daily messages.',
            technologies: ['Python', "Docker"],
            github: 'https://github.com/KindnessOperation/SmileProject'
        },
        {
            title: 'ThreatMarker',
            description: 'ThreatMarker is a sophisticated TypeScript project leveraging BabelJS for code transformation and Jest for testing, designed to deobfuscate web-based malware and trackers, reconstruct their execution paths, and improve named entity recognition for security analysts, offering a toolset that enhances the detection and mitigation of potentially harmful or privacy-invading code in web applications.',
            technologies: ['TypeScript', 'BabelJS', 'Jest'],
            github: 'https://github.com/TheWalkingSea/ThreatMarker'
        },
        {
            title: 'CanvList',
            description: 'CanvList is a Python-based application that automatically organized and tracks student assignments on Canvas, and creates a customized wallpaper that is automatically set on your device.',
            technologies: ['Python'],
            github: 'https://github.com/TheWalkingSea/CanvList'
        },
        {
            title: 'BuzzBoard',
            description: 'Developed a full-stack React + Spring Boot dashboard integrating real-time coursework, dining balances, campus events, emails, server status, and weather data, reducing daily task-checking time by 95%.',
            technologies: ['TypeScript', 'Java', 'Spring Boot', "React", "Vite", "HTML/CSS"],
            github: 'https://github.com/TheWalkingSea/BuzzBoard'
        },
        {
            title: 'Oscar Course Monitor',
            description: 'Oscar Course Monitor is a Python-based tool that continuously monitors university course enrollment and automatically notifies users when a spot becomes available, allowing students to efficiently register for high-demand classes without constant manual checking.',
            technologies: ['Python', "Reverse Engineering"],
            github: 'https://github.com/TheWalkingSea/oscar-course-monitor'
        },
        {
            title: 'Snake Game AI',
            description: 'Snake Game AI is a Python project that leverages Prim’s algorithm alongside an enhanced Hamiltonian cycle to autonomously play the Snake game, optimizing every move for maximum efficiency and achieving the highest possible scores through algorithmic precision.',
            technologies: ['Python'],
            github: 'https://github.com/TheWalkingSea/snake-game-ai'
        },
        {
            title: 'OpenAI Essay Fine Tuner',
            description: 'OpenAI Essay Fine Tuner is a Python application that trains a personalized AI model on your own essays to generate new writing in your unique style, producing text that closely mirrors your voice and can bypass AI detection tools, making it a powerful tool for consistent, authentic essay writing.',
            technologies: ['Python', "OpenAI"],
            github: 'https://github.com/TheWalkingSea/openai-essay-fine-tune'
        },
        {
            title: 'Focus Grade Monitor',
            description: 'Focus Grade Monitor authenticates with Focus through SAML and employs reverse engineering techniques to track grade changes in real time, sending immediate alerts to users whenever updates occur, ensuring students are always informed about their academic performance.',
            technologies: ['Python', "Reverse Engineering"],
            github: 'https://github.com/TheWalkingSea/focus-grade-monitor'
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="container mx-auto px-6 max-w-7xl">
                <h2 className="text-5xl font-bold text-center mb-16 text-amber-400 font-starwars drop-shadow-[0_0_15px_rgba(251,191,36,0.7)]">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="h-full bg-black/60 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] group"
                        >
                            <CardHeader>
                                <CardTitle className="text-2xl text-blue-300 group-hover:text-blue-200 transition-colors">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="text-gray-400 mt-2">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4 flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-blue-950/50 border border-blue-400/30 rounded text-sm text-blue-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3 mt-auto">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-blue-400/50 text-blue-300 hover:bg-blue-950/50 hover:text-blue-200"
                                        onClick={() => window.open(project.github, '_blank')}
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        Code
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
