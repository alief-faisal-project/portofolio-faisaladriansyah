"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSlider() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="hero-wrapper container" id="home">
      {/* BACKGROUND DESIGN - BIGGER AND MORE TO THE RIGHT */}
      <div className="hero-background">
        <Image
          src={isMobile ? "/bgdesign-mobile.PNG" : "/bgdesign.png"}
          alt="background"
          width={2000}
          height={2000}
          priority
          style={{ objectFit: "contain" }}
          className="hero-bg-image"
        />
      </div>

      {/* HERO CONTENT */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>WEB</h1>
          <h2>DEV</h2>
        </div>
      </div>
    </section>
  );
}

