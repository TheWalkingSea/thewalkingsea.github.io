import '../app.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function Work() {
    const workExperience = [
        {
            title: 'Senior Software Engineer',
            company: 'Company Name',
            period: '2023 - Present',
            description: 'Add your job description here. Highlight key achievements, technologies used, and impact.',
            achievements: [
                'Achievement or responsibility #1',
                'Achievement or responsibility #2',
                'Achievement or responsibility #3'
            ]
        },
        {
            title: 'Software Engineer',
            company: 'Previous Company',
            period: '2021 - 2023',
            description: 'Add your job description here. Highlight key achievements, technologies used, and impact.',
            achievements: [
                'Achievement or responsibility #1',
                'Achievement or responsibility #2',
                'Achievement or responsibility #3'
            ]
        },
        {
            title: 'Junior Developer',
            company: 'First Company',
            period: '2019 - 2021',
            description: 'Add your job description here. Highlight key achievements, technologies used, and impact.',
            achievements: [
                'Achievement or responsibility #1',
                'Achievement or responsibility #2',
                'Achievement or responsibility #3'
            ]
        }
    ];

    return (
        <section id="work" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-black via-blue-950/10 to-black relative">
            <div className="absolute inset-0 bg-[url(/images/star-wars-backdrop.jpg)] bg-cover bg-center opacity-5"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <h2 className="text-5xl font-bold text-center mb-16 text-amber-400 font-starwars drop-shadow-[0_0_15px_rgba(251,191,36,0.7)]">
                    Work Experience
                </h2>

                <div className="space-y-8">
                    {workExperience.map((job, index) => (
                        <Card
                            key={index}
                            className="bg-black/60 border-blue-500/30 backdrop-blur-sm hover:border-blue-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                        >
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-2xl text-blue-300">
                                            {job.title}
                                        </CardTitle>
                                        <CardDescription className="text-lg text-gray-400 mt-1">
                                            {job.company}
                                        </CardDescription>
                                    </div>
                                    <span className="text-amber-400 font-semibold">{job.period}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-300">{job.description}</p>
                                <ul className="space-y-2">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-300">
                                            <span className="text-blue-400 mt-1">▸</span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
