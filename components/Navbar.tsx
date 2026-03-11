"use client";

import React, { useState } from "react";

interface NavbarProps {
  active?: string;
  onNavigate?: (index: number) => void;
}

export default function Navbar({ active: externalActive, onNavigate }: NavbarProps): React.ReactElement {
  const [internalActive, setInternalActive] = useState("home");
  
  // Use external active if provided (controlled), otherwise use internal
  const active = externalActive ?? internalActive;

  const handleClick = (section: string, index: number): void => {
    if (onNavigate) {
      onNavigate(index);
    } else {
      setInternalActive(section);
    }
  };

  return (
    <div className="navbar container">
      <div className="nav-links">
        <a
          className={active === "home" ? "active" : ""}
          onClick={() => handleClick("home", 0)}
        >
          HOME
        </a>

        <a
          className={active === "work" ? "active" : ""}
          onClick={() => handleClick("work", 1)}
        >
          WORK
        </a>

        <a
          className={active === "about" ? "active" : ""}
          onClick={() => handleClick("about", 2)}
        >
          ABOUT
        </a>
      </div>
    </div>
  );
}

