"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import { Reveal } from "../Reveal";
import ColorBends from "../ColorBends";

export function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      {/* O BackgroundLayer agora é o motor visual de toda a seção */}
      <div className={styles.backgroundLayer}>
        <ColorBends
          rotation={90}
          speed={0.2}
          colors={["#a973bf", "#eee3f2", "#f49908"]}
          transparent
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={1.2}
          noise={0}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
        />
      </div>

      <div className={styles.container}>
        {/* Coluna da Esquerda - Texto (40%) */}
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
            </div>
          </Reveal>
        </div>

        {/* Coluna da Direita - Imagem Transbordando (60%) */}
        <div className={styles.visualColumn}>
          <Reveal delay={0.2} width="100%">
            <div className={styles.imageOverflowContainer}>
              <Image
                src="/images/hero-img.png"
                alt="Copos e taças personalizados Nossa Aura"
                fill
                className={styles.heroImage}
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
