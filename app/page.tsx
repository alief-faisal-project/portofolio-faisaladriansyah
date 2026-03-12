"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import SocialBar from "@/components/SocialBar";
import ResumeTab from "@/components/ResumeTab";
import WorkSection from "@/components/WorkSection";
import SectionNavigator from "@/components/SectionNavigator";

export default function Home() {
  const [section, setSection] = useState(0);
  const [activeNav, setActiveNav] = useState("home");
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSections = 3;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const sectionWidth = window.innerWidth;
      const newSection = Math.round(scrollLeft / sectionWidth);
      setSection(newSection);
      
      const sectionNames = ["home", "work", "about"];
      setActiveNav(sectionNames[newSection]);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    setSection(index);
    const sectionNames = ["home", "work", "about"];
    setActiveNav(sectionNames[index]);
    
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth"
      });
    }
  };

  const next = () => {
    scrollToSection((section + 1) % totalSections);
  };

  const prev = () => {
    scrollToSection((section - 1 + totalSections) % totalSections);
  };

  return (
    <>
      <Navbar active={activeNav} onNavigate={scrollToSection} />

      <div className="horizontal-scroll-container" ref={containerRef}>
        <section className="horizontal-section" id="home">
          <HeroSlider />
        </section>

        <section className="horizontal-section" id="work">
          <WorkSection />
        </section>

        <section id="about" className="about-section horizontal-section">
          <h2 className="about-title">ABOUT</h2>
          <div className="about-content">
            <p>
              Saya adalah seorang web developer yang memiliki passion dalam
              membangun website modern dan responsif. Dengan fondasi yang kuat
              pada teknologi front-end, saya berfokus menciptakan pengalaman
              digital yang mulus, cepat, dan nyaman digunakan oleh pengguna.
            </p>
          </div>
        </section>
      </div>

      <SectionNavigator
        section={section}
        setSection={scrollToSection}
        next={next}
        prev={prev}
      />

      <ResumeTab />
      <SocialBar />
    </>
  );
}

