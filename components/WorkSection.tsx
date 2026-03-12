"use client";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Hospital Finder",
    image: "/work1.jpg",
    desc: "Website pencarian rumah sakit.",
  },
  {
    title: "Portfolio UI",
    image: "/work2.jpg",
    desc: "Portfolio modern dengan animasi.",
  },
  {
    title: "Chat Application",
    image: "/work3.jpg",
    desc: "Realtime chat app.",
  },
  {
    title: "E-Commerce UI",
    image: "/work4.jpg",
    desc: "UI toko online modern.",
  },
  {
    title: "Task Manager",
    image: "/work5.jpg",
    desc: "Aplikasi manajemen tugas.",
  },
];

export default function WorkSection() {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto hover effect for mobile
  // (logic tetap dipertahankan tetapi auto slide dinonaktifkan)
  useEffect(() => {
    if (!isMobile) return;

    const triggerHover = () => {
      setIsHovering(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsHovering(false);

        // Auto slide dinonaktifkan
        // setTimeout(() => {
        //   setIndex((prev) => (prev + 1) % projects.length);
        // }, 300);
      }, 2000);
    };

    const initialTimeout = setTimeout(triggerHover, 1000);

    const interval = setInterval(() => {
      if (!isHovering) {
        triggerHover();
      }
    }, 4000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isMobile, index]);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="work-section container" id="work">
      <h2 className="work-title">WORK</h2>

      <div className="work-carousel">
        <button className="work-arrow left" onClick={prev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="work-viewport">
          <div
            className="work-track"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {projects.map((p, i) => (
              <div
                className={`work-card ${
                  isMobile && isHovering && i === index ? "hovered" : ""
                }`}
                key={i}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="work-image">
                  <img src={p.image} alt={p.title} />

                  <div
                    className={`work-overlay ${
                      isMobile && i === index
                        ? isHovering
                          ? "visible"
                          : ""
                        : ""
                    }`}
                  >
                    <p>{p.desc}</p>
                  </div>
                </div>

                <div className="work-info">
                  <h3>{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="work-arrow right" onClick={next}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="work-dots">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </section>
  );
}
