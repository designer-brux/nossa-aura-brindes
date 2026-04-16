"use client";

import Image from "next/image";
import styles from "./Events.module.css";

const eventTypes = [
  {
    id: "corporativo",
    title: "Corporativo",
    description:
      "Brindes para final de ano, feiras, onboarding e fidelização de clientes.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "casamentos",
    title: "Casamentos",
    description:
      "Taças e lembranças intimistas que eternizam o grande dia para seus convidados.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "15anos",
    title: "15 Anos e Formaturas",
    description:
      "Copos personalizados com a identidade visual exata da sua festa e design sofisticado.",
    image:
      "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "nascimento",
    title: "Chá de Bebê",
    description:
      "Mimos delicados, seguros e duradouros para celebrar a chegada de novas vidas.",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
  },
];

export function Events() {
  return (
    <section className={styles.section} id="ocasioes">
      <div className={styles.container}>
        {/* Cabeçalho Livre (Acima dos cards) */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Brindes Personalizados em Valinhos e Região
          </h2>
          <p className={styles.subtitle}>
            Seja para fidelizar clientes em um grande evento corporativo, ou
            para encantar os convidados de um casamento intimista, a Nossa Aura
            entrega sofisticação e pontualidade.
          </p>
        </div>

        {/* Container dos Cards Empilháveis */}
        <div className={styles.cardsContainer}>
          {eventTypes.map((event, index) => (
            <div
              key={event.id}
              className={styles.card}
              // Alterado de 100px para 140px para garantir o respiro exato do Header global
              style={{ top: `calc(140px + ${index * 16}px)` }}
            >
              <div className={styles.cardImageWrapper}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className={styles.cardImage}
                />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.textContent}>
                  <h3 className={styles.cardTitle}>{event.title}</h3>
                  <p className={styles.cardDescription}>{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
