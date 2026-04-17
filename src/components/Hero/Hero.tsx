"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { Reveal } from "../Reveal";
import ColorBends from "../ColorBends";

export function Hero() {
  // --- Lógica do Parallax 3D com o Mouse ---
  const imageRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;

    // Pega as dimensões e a posição do container da imagem na tela
    const rect = imageRef.current.getBoundingClientRect();

    // Calcula a posição do mouse relativa ao centro da imagem (valores de -1 a 1)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Multiplicadores: definem o quão forte é o movimento (ajuste se quiser mais extremo)
    const moveX = x * 40; // Move até 20px para os lados
    const moveY = y * 40; // Move até 20px para cima/baixo

    // Rotação 3D sutil para dar profundidade física
    const rotateX = y * -15;
    const rotateY = x * 15;

    setTransformStyle(
      `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
    );
  };

  const handleMouseLeave = () => {
    // Quando o mouse sai, a imagem volta suavemente para o centro
    setTransformStyle("");
  };

  return (
    <section className={styles.hero} id="inicio">
      {/* Background animado */}
      <div className={styles.backgroundLayer}>
        <ColorBends
          rotation={90}
          speed={0.2}
          colors={["#a973bf", "#eee3f2", "#fde7c4"]}
          transparent
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1.5}
          parallax={0.5}
          noise={0}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
        />
      </div>

      <div className={styles.container}>
        {/* 1. TOPO: Título */}
        <div className={styles.topSection}>
          <Reveal>
            <h1 className={styles.title}>
              Personalização que
              <br /> Eterniza Momentos.
            </h1>
          </Reveal>
        </div>

        {/* 2. MEIO: Imagem Interativa Parallax */}
        <div className={styles.visualSection}>
          <Reveal delay={0.2} width="100%">
            <div
              className={styles.imageWrapper}
              ref={imageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              // Ativamos a perspectiva 3D na caixa para que o rotateX/Y funcione
              style={{ perspective: "1000px" }}
            >
              <Image
                src="/images/hero-img2.png"
                alt="Copos e taças personalizados Nossa Aura"
                fill
                className={styles.heroImage}
                style={{
                  transform: transformStyle || "translate3d(0,0,0) scale(1)",
                }}
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
            </div>
          </Reveal>
        </div>

        {/* 3. BASE: Subtítulo e CTA */}
        <div className={styles.bottomSection}>
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
      </div>
    </section>
  );
}
