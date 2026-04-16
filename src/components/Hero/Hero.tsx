"use client"; // Obrigatório para usar hooks (interatividade no temporizador)

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { Reveal } from "../Reveal";

const heroSlides = [
  {
    src: "/images/garrafa-azul-sem-fundo.webp",
    alt: "Copos e taças personalizados Nossa Aura",
  },
  {
    src: "/images/garrafa-laranja-sem-fundo.webp",
    alt: "Copos e taças personalizados Nossa Aura",
  },
  {
    src: "/images/garrafa-roxo-sem-fundo.webp",
    alt: "Copos e taças personalizados Nossa Aura",
  },
];

const CAROUSEL_INTERVAL_MS = 3000; //

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lógica do temporizador automático (Carrossel Infinita)
  useEffect(() => {
    // Se não houver imagens, não faz nada
    if (heroSlides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.container}>
        {/* Coluna da Esquerda - Texto Principal (Maze-inspired) */}
        <div className={styles.textColumn}>
          <Reveal>
            <h1 className={styles.title}>
              Personalização que Eterniza Momentos.
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className={styles.subtitle}>
              Elevando o padrão de brindes corporativos e sociais em Valinhos e
              região de Campinas. Copos, taças e garrafas com tecnologia premium
              de gravação a laser, DTF e sublimação.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <div className={styles.ctaGroup}>
              <a href="#orcamento" className={styles.primaryButton}>
                Fazer Orçamento
              </a>
              <a href="#catalogo" className={styles.secondaryButton}>
                Solicitar Catálogo
              </a>
            </div>
          </Reveal>
        </div>

        {/* Coluna da Direita - Carrossel Automático (Substitui a imagem única) */}
        <div className={styles.visualColumn}>
          <Reveal>
            <div className={styles.carouselWrapper}>
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : styles.hiddenSlide}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className={styles.curatedImage}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index <= 1}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
