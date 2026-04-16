"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProductGrid.module.css";

const products = [
  {
    id: 1,
    title: "Copos e Taças",
    description:
      "Elegância para casamentos, formaturas e brindes de alto impacto.",
    image:
      "https://images.unsplash.com/photo-1574015974293-817f0efebb1b?q=80&w=600&auto=format&fit=crop",
    techs: ["Laser", "DTF UV", "Sublimação"],
  },
  {
    id: 2,
    title: "Canecas Premium",
    description:
      "O clássico indispensável para kits de boas-vindas personalizados.",
    image:
      "https://images.unsplash.com/photo-1517256011271-1032dae83e60?q=80&w=600&auto=format&fit=crop",
    techs: ["Sublimação", "Laser"],
  },
  {
    id: 3,
    title: "Garrafas Térmicas",
    description:
      "Tecnologia e durabilidade para acompanhar a rotina dos seus clientes.",
    image:
      "https://images.unsplash.com/photo-1602143399827-7218ca727a82?q=80&w=600&auto=format&fit=crop",
    techs: ["Laser", "DTF UV"],
  },
  {
    id: 4,
    title: "Kits Corporativos",
    description:
      "Conjuntos executivos montados sob medida para impressionar parceiros.",
    image:
      "https://images.unsplash.com/photo-1513583151525-4519f712f51f?q=80&w=600&auto=format&fit=crop",
    techs: ["Laser", "Sublimação"],
  },
  {
    id: 5,
    title: "Taças de Gin",
    description:
      "Perfeitas para celebrações e eventos sociais com personalização vibrante.",
    image:
      "https://images.unsplash.com/photo-1563223771-5fe4038fbfc9?q=80&w=600&auto=format&fit=crop",
    techs: ["DTF UV"],
  },
];

export function ProductGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Estados para a fluidez do drag conjunto
  const [dragOffset, setDragOffset] = useState(0);

  // Estados para o Cursor Customizado
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Rastreador do Mouse global
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleDrag = (event: any, info: any) => {
    // Atualiza o offset visual de todos os cards enquanto arrasta
    setDragOffset(info.offset.x);
  };

  const handleDragEnd = (event: any, info: any) => {
    setDragOffset(0); // Reseta o offset visual ao soltar
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <section className={styles.section} id="produtos">
      {/* O Cursor Customizado "DRAG" */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className={styles.customCursor}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          >
            ARRASTE
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Produtos que Contam Histórias</h2>
          <p className={styles.subtitle}>
            Desenvolvemos soluções únicas para cada projeto. Da elegância da
            gravação a laser à versatilidade das cores vibrantes do DTF,
            garantimos um acabamento impecável em todos os nossos materiais.
          </p>
        </div>

        {/* Container que ativa o cursor customizado ao passar o mouse */}
        <div
          className={styles.carouselContainer}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className={styles.carouselTrack}>
            <AnimatePresence initial={false}>
              {products.map((product, index) => {
                const offset = index - currentIndex;
                const isCenter = offset === 0;

                let adjustedOffset = offset;
                if (offset < -2) adjustedOffset += products.length;
                if (offset > 2) adjustedOffset -= products.length;

                return (
                  <motion.div
                    key={product.id}
                    className={styles.cardWrapper}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                    whileDrag={{
                      zIndex: 50,
                      scale: 0.98, // Leve compressão simulando toque
                    }}
                    animate={{
                      // A mágica da fluidez: Soma a posição base do card com o arraste atual do mouse
                      x: `calc(${adjustedOffset * 105}% + ${dragOffset}px)`,
                      scale: isCenter ? 1 : 0.85,
                      opacity:
                        Math.abs(adjustedOffset) > 1 ? 0 : isCenter ? 1 : 0.3,
                      zIndex: isCenter ? 10 : 5 - Math.abs(adjustedOffset),
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300, // Aumentado para resposta mais rápida
                      damping: 30,
                      mass: 0.8,
                    }}
                    onClick={() => {
                      if (!isCenter) setCurrentIndex(index);
                    }}
                  >
                    <div
                      className={`${styles.card} ${isCenter ? styles.activeCard : ""}`}
                    >
                      <div className={styles.imageWrapper}>
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className={styles.image}
                          draggable={false}
                        />
                      </div>

                      <motion.div
                        className={styles.content}
                        animate={{ opacity: isCenter ? 1 : 0.3 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className={styles.productTitle}>{product.title}</h3>
                        <p className={styles.productDescription}>
                          {product.description}
                        </p>
                        <div className={styles.techList}>
                          {product.techs.map((tech) => (
                            <span key={tech} className={styles.techBadge}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Ocultei os botões de controle nativos no desktop, pois agora temos o cursor de Drag. 
              Eles ainda aparecem no mobile onde não há mouse. Ajustado no CSS. */}
          <div className={styles.controls}>
            <button
              onClick={handlePrev}
              className={styles.controlButton}
              aria-label="Produto anterior"
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
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className={styles.indicators}>
              {products.map((_, idx) => (
                <div
                  key={idx}
                  className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className={styles.controlButton}
              aria-label="Próximo produto"
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
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
