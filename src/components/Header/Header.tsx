"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import styles from "./Header.module.css";

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  // Monitora a rolagem para esconder/mostrar o Header
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Passou de 150px e rolou para baixo = esconde
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      // Rolou para cima = mostra
      setIsHidden(false);
    }
  });

  return (
    <motion.header
      className={styles.header}
      variants={{
        visible: { y: 0 },
        // -150% garante que ele suba o suficiente para compensar o espaço vazio do topo
        hidden: { y: "-150%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className={styles.container}>
        <a href="/" className={styles.logoLink}>
          <Image
            src="/images/Logo-Site.svg"
            alt="Logo Nossa Aura Brindes"
            width={120}
            height={40}
            priority
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
    </motion.header>
  );
}
