import '../app.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: 'Project Name 1',
            description: 'Brief description of your project. What problem does it solve? What technologies did you use?',
            technologies: ['React', 'TypeScript', 'Node.js'],
            github: '#',
            live: '#'
        },
        {
            title: 'Project Name 2',
            description: 'Brief description of your project. What problem does it solve? What technologies did you use?',
            technologies: ['Python', 'FastAPI', 'PostgreSQL'],
            github: '#',
            live: '#'
        },
        {
            title: 'Project Name 3',
            description: 'Brief description of your project. What problem does it solve? What technologies did you use?',
            technologies: ['Next.js', 'Tailwind', 'Prisma'],
            github: '#',
            live: '#'
        },
        {
            title: 'Project Name 4',
            description: 'Brief description of your project. What problem does it solve? What technologies did you use?',
            technologies: ['Vue.js', 'Express', 'MongoDB'],
            github: '#',
            live: '#'
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
                            className="bg-black/60 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] group"
                        >
                            <CardHeader>
                                <CardTitle className="text-2xl text-blue-300 group-hover:text-blue-200 transition-colors">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="text-gray-400 mt-2">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
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
                                <div className="flex gap-3 pt-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-blue-400/50 text-blue-300 hover:bg-blue-950/50 hover:text-blue-200"
                                        onClick={() => window.open(project.github, '_blank')}
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        Code
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-blue-400/50 text-blue-300 hover:bg-blue-950/50 hover:text-blue-200"
                                        onClick={() => window.open(project.live, '_blank')}
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Live Demo
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
