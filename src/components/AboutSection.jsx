import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
    return (
        <section id='about' className='py-24 px-4 relative'>
            {" "}
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    About <span className='text-primary'> Me</span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-semibold'>Passionate Web Developer</h3>

                        <p className='text-muted-foreground'>
                            I specialize in building intelligent, scalable, and user-focused
                            web solutions using the MERN stack, Next.js, and modern frontend
                            frameworks. With a strong foundation in both frontend and backend
                            technologies, I enjoy translating complex problems into clean,
                            efficient code that delivers real value.
                        </p>

                        <p className='text-muted-foreground'>
                            My work spans domains like healthcare, finance, and AI, where I have
                            built projects such as a role-based healthcare management system and
                            an AI-powered finance tracker with OCR capabilities. I'm constantly
                            exploring new technologies and tools to push the boundaries of what
                            I can create — always aiming to craft seamless digital experiences
                            that blend performance with purpose.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                            <a href='#contact' className='cosmic-button'>
                                {" "}
                                Get In Touch
                            </a>

                            <a 
                                href='/Vardaan_Madhisiya_CV.pdf' 
                                download
                                className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'
                            >
                                {" "}
                                Download Cv
                            </a>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-6'>

                        <div className='gradient-border p-6 card-hover cursor-pointer'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <User className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>AI-Powered Features</h4>
                                    <p className='text-muted-foreground'>
                                        Integrating intelligent features like OCR, smart categorization, 
                                        and document parsing using modern AI tools.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='gradient-border p-6 card-hover cursor-pointer'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Briefcase className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Backend & API Development</h4>
                                    <p className='text-muted-foreground'>
                                        Building secure, scalable REST APIs with Express.js, MongoDB, 
                                        and third-party services integration.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='gradient-border p-6 card-hover cursor-pointer'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Code className='h-6 w-6 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Full-Stack Engineering</h4>
                                    <p className='text-muted-foreground'>
                                        Handling both frontend and backend tasks efficiently — 
                                        from UI components to database modeling.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
