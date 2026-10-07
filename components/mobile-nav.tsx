"use client";

import { useState } from "react";
import { siteNavigation } from "@/lib/portfolio-content";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}>
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-links"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      {open && (
        <nav id="mobile-nav-links" aria-label="Navegação móvel">
          {siteNavigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
