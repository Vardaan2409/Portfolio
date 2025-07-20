import { Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import React, { useRef, useState } from 'react';
import utils from '../lib/utils';
import { toast } from 'react-toastify';

const ContactSection = () => {
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(formRef.current);
        formData.append("access_key", "9d851d08-35ba-4e40-a18e-ca1284054459");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            toast.success("Message sent! Thank you for reaching out.");
            formRef.current.reset();
        } else {
            toast.error("Something went wrong. Please try again.");
        }

        setIsSubmitting(false);
    };

    return (
        <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'>Touch</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Have a project in mind or want to collaborate? Feel free to reach out.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* Contact Info */}
                    <div className='space-y-8'>
                        {/* Email */}
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'><Mail className='h-6 w-6 text-primary' /></div>
                            <div>
                                <h4 className='font-medium'>Email</h4>
                                <a href='mailto:madhisiya.vardaan2409@gmail.com' className='text-muted-foreground hover:text-primary'>madhisiya.vardaan2409@gmail.com</a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'><Phone className='h-6 w-6 text-primary' /></div>
                            <div>
                                <h4 className='font-medium'>Phone</h4>
                                <a href='tel:+918400070154' className='text-muted-foreground hover:text-primary'>+91-8400070154</a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'><MapPin className='h-6 w-6 text-primary' /></div>
                            <div>
                                <h4 className='font-medium'>Location</h4>
                                <p className='text-muted-foreground'>Lucknow, UP, India</p>
                            </div>
                        </div>

                        {/* Social */}
                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect With Me</h4>
                            <div className='flex space-x-4'>
                                <a href='https://www.linkedin.com/in/vardaan-madhisiya-052103173/' target='_blank'><Linkedin /></a>
                                <a href='https://x.com/VMadhisiya' target='_blank'><Twitter /></a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
                        <form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium mb-2'>Your Name</label>
                                <input type='text' id='name' name='name' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary' placeholder='Vardaan Madhisiya...' />
                            </div>
                            <div>
                                <label htmlFor='email' className='block text-sm font-medium mb-2'>Your Email</label>
                                <input type='email' id='email' name='email' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary' placeholder='Vardaan@gmail.com' />
                            </div>
                            <div>
                                <label htmlFor='message' className='block text-sm font-medium mb-2'>Your Message</label>
                                <textarea id='message' name='message' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary resize-none' placeholder="Hello, I'd like to talk about..." />
                            </div>
                            <button type='submit' disabled={isSubmitting} className={utils("cosmic-button w-full flex items-center justify-center gap-2")}>
                                {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
