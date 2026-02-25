import React from "react";
import utils from "../lib/utils";

const experiences = [
  {
    title: "Software Development Intern",
    company: "ThrDream",
    product: "Mapiin — Interactive Map-Based Educational Web Platform",
    period: "Dec 2025 — Present",
    description: [
      "Engineered the company website from scratch using Next.js and Tailwind CSS, achieving a Lighthouse performance score of 90+.",
      "Contributed to the Mapiin product across frontend (React.js) and backend (Node.js, Express.js) development within a collaborative team.",
      "Designed and integrated RESTful APIs, resolved debugging issues, and maintained structured Git workflows."
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-primary/30"
            >
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-1/2" />

              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.product}</p>
                </div>
                <div className="mt-1 md:mt-0">
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-muted-foreground">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
