"use client";

import { useEffect } from "react";

export default function ScrollToContacts() {
  useEffect(() => {
    if (window.location.hash !== "#contacts") return;

    function scroll() {
      document.getElementById("contacts")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (document.readyState === "complete") {
      scroll();
    } else {
      window.addEventListener("load", scroll, { once: true });
    }

    const fallback = setTimeout(scroll, 700);
    return () => {
      window.removeEventListener("load", scroll);
      clearTimeout(fallback);
    };
  }, []);

  return null;
}
