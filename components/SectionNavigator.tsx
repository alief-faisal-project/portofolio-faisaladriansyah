"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface SectionNavigatorProps {
  section: number;
  setSection: (index: number) => void;
  next: () => void;
  prev: () => void;
}

export default function SectionNavigator({ section, setSection, next, prev }: SectionNavigatorProps) {
  const sections = ["HOME", "WORK", "ABOUT"];

  return (
    <div className="section-navigator">
      <div className="section-nav-chevrons">
        <button className="section-nav-chevron" onClick={prev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>

      <div className="section-nav-dots">
        {sections.map((name, i) => (
          <div
            key={i}
            className={`section-nav-dot ${section === i ? "active" : ""}`}
            onClick={() => setSection(i)}
            title={name}
          >
            <span className="section-dot-label">{name}</span>
          </div>
        ))}
      </div>

      <div className="section-nav-chevrons">
        <button className="section-nav-chevron" onClick={next}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

