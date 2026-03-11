"use client";

import { useEffect } from "react";

export default function HydrationFix() {
  useEffect(() => {
    // Remove data-lt-installed attribute added by browser extensions
    // This prevents hydration mismatch warnings
    if (document.documentElement.hasAttribute("data-lt-installed")) {
      document.documentElement.removeAttribute("data-lt-installed");
    }
  }, []);

  return null;
}

