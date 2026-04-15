"use client";

import { useState } from "react";
import Image from "next/image"; // Importação necessária para performance
import styles from "./Header.module.css";

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Substituindo o texto pelo SVG */}
        <a href="/" className={styles.logoLink}>
          <Image
            src="/images/Logo-Site.svg"
            alt="Logo Nossa Aura Brindes"
            width={140} // Ajuste proporcional ao seu arquivo
            height={56} // Ajuste proporcional ao seu arquivo
            priority // Garante que o logo carregue imediatamente
            className={styles.logo}
          />
        </a>

        <nav className={styles.nav}>
          <a href="#produtos" className={styles.navLink}>
            Produtos
          </a>
          <a href="#ocasioes" className={styles.navLink}>
            Ocasiões
          </a>
          <a href="#orcamento" className={styles.ctaButton}>
            Fazer Orçamento
          </a>
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Abrir menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}
