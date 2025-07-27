import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: "QuickAI",
        description: "An AI-powered SaaS application built with the PERN stack featuring user authentication, subscription billing, and tools like article generation, image editing, and resume analysis.",
        image: "/Projects/Project3.png",
        tags: ["React", "Nodejs", "Express", "PostgreSQL", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/Vardaan2409/Saas_Project",
    },
    {
        id: 2,
        title: "Prescripto",
        description: "Prescripto is a full-stack healthcare web application that streamlines doctor appointments, profile management, and admin control with role-based access.",
        image: "/Projects/Project1.png",
        tags: ["React", "Nodejs", "Express", "MongoDB", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/Vardaan2409/Prescripto",
    },
    {
        id: 3,
        title: "Portfolio",
        description: "I built a responsive and modern portfolio website using React.js and Tailwind CSS to showcase my skills, projects, and developer journey.",
        image: "/Projects/Project2.png",
        tags: ["React", "TailwindCSS", "PrebuiltUI"],
        demoUrl: "https://portfolio-nine-omega-80.vercel.app/",
        githubUrl: "https://github.com/Vardaan2409/Portfolio",
    },
    {
        id: 4,
        title: "Code_Reviewer",
        description: "An AI-powered code reviewer that analyzes and suggests improvements for your code using Gemini language models.",
        image: "/Projects/Project4.png",
        tags: ["React", "Nodejs", "Express", "Gemini API", "TailwindCSS", "Axios"],
        demoUrl: "https://code-reviewer-8de6yi1aq-vardaans-projects-c351962a.vercel.app/",
        githubUrl: "https://github.com/Vardaan2409/Saas_Project",
    },
    {
        id: 5,
        title: "Realtime Device Tracker",
        description: "A real-time device tracking system using WebSockets to monitor connected devices instantly via a live dashboard.",
        image: "/Projects/Project5.png",
        tags: ["Nodejs", "Express", "Socket.IO", "EJS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/Vardaan2409/Saas_Project",
    },
    // {
    //     id: 3,
    //     title: "QuickAI",
    //     description: "An AI-powered SaaS application built with the PERN stack featuring user authentication, subscription billing, and tools like article generation, image editing, and resume analysis.",
    //     image: "/Projects/Project3.png",
    //     tags: ["React", "Nodejs", "Express", "PostgreSQL", "TailwindCSS"],
    //     demoUrl: "https://realtime-device-track-11a0.onrender.com",
    //     githubUrl: "https://github.com/Vardaan2409/Saas_Project",
    // },
]

const ProjectsSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    {" "}
                    Featured <span className='text-primary'> Projects</span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
                        >
                            <div className='h-48 overflow-hidden'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-500 group group-hover:scale-110'
                                />
                            </div>

                            <div className='p-6'>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag) => (
                                        <span className='px-2 py-1 text-xs border font-medium bg-primary/20 rounded-full bg-secondary text-secondary-foreground'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                                <p className='text-muted-foreground text-sm mb-4'>
                                    {project.description}
                                </p>

                                <div className='flex justify-between items-center'>
                                    <div className='flex space-x-3'>
                                        {/*<a
                                            href={project.demoUrl}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duartion-300'
                                        >
                                            <ExternalLink />
                                        </a>*/}
                                        <a
                                            href={project.githubUrl}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duartion-300'
                                        >
                                            <Github />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <a 
                        target='_blank'
                        className='cosmic-button w-fit flex items-center mx-auto gap-2' href='https://github.com/Vardaan2409'
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
