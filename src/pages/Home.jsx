import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />

        {/* Footer */}
        <Footer />

    </div>;
};

export default Home;
