import '../app.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function Work() {
    const workExperience = [
        {
            title: 'Audio \& Software Engineer Intern',
            company: 'Ultra Technologies',
            period: 'September 2025 - Present',
            achievements: [
                'Engineered and operated live audio and network infrastructure for the University of Florida\'s football stadium, maintaining 100% uptime across 90,000-attendee events under national ESPN coverage.',
                'Remediated critical vulnerabilities in the entire university’s DANTE audio, visual, and control systems (risk level 9/10), preventing unauthorized administrative access and protecting high-profile national broadcasts.',
                'Built a React + Python audio control platform hosted on AWS to automate the stadium’s public announcement systems, reducing manual interventions by 90% and enabling real-time control for 90,000-attendee events.'
            ]
        },
        {
            title: 'Founder \& Chief Executive Officer',
            company: 'EduVision Technologies',
            period: 'March 2024 - Present',
            achievements: [
                'Modernized 2 private school\'s IT infrastructure, deploying campus-wide Ubiquiti networks supporting 100+ devices.',
                'Installed 1.5+ miles of Cat-6 cabling, 20+ 4K cameras, programmed 60+ iPads, and door access systems.',
                'Implemented a VOIP AIPhone system integrated with PBX, and reduced client landline costs by $2,424 annually.',
                'Saved $10K+ through strategic hardware and software sourcing while maintaining full system reliability.'
            ]
        }
    ];

    return (
        <section id="work" className="flex items-center py-20 bg-gradient-to-b from-black via-blue-950/10 to-black relative">
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
                                    <span className="text-amber-400 font-semibold text-right">{job.period}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-300">
                                            <span className="text-blue-400">▸</span>
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
