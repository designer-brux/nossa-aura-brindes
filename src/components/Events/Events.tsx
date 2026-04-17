"use client";

import Image from "next/image";
import styles from "./Events.module.css";

const eventTypes = [
  // ... (Mantenha o seu array eventTypes exatamente como está)
  {
    id: "corporativo",
    title: "Corporativo",
    description:
      "Fortaleça sua marca com brindes personalizados para eventos corporativos. Ideais para feiras, ações promocionais e relacionamento com clientes. Nossos brindes corporativos unem qualidade, utilidade e design, ajudando a aumentar o reconhecimento da marca e criar conexões duradouras.",
    image: "/images/corporate.jpg", // ou a url do seu projeto
  },
  {
    id: "casamentos",
    title: "Casamentos",
    description:
      "Encante seus convidados com brindes personalizados para casamento. Nossas lembrancinhas de casamento combinam elegância, utilidade e significado, criando uma recordação especial desse momento único.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "15anos",
    title: "15 Anos e Formaturas",
    description:
      "Celebre momentos especiais com brindes personalizados para 15 anos e formaturas. Ideais para marcar conquistas e criar lembranças duradouras.",
    image:
      "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "nascimento",
    title: "Chá revelação",
    description:
      "Surpreenda seus convidados com brindes personalizados para chá revelação. Nossas lembrancinhas tornam esse momento ainda mais especial, com produtos personalizados que unem carinho, qualidade e originalidade.",
    image: "/images/revelacao1.jpg", // ou a url do seu projeto
  },
];

export function Events() {
  return (
    <section className={styles.section} id="ocasioes">
      <div className={styles.container}>
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

        <div className={styles.cardsContainer}>
          {eventTypes.map((event, index) => (
            <div
              key={event.id}
              className={styles.card}
              // A MÁGICA AQUI: Injetamos uma variável CSS, não um estilo direto.
              // Assim, o CSS decide se vai usar ou não (no caso, só no Desktop).
              style={
                {
                  "--sticky-top": `calc(140px + ${index * 16}px)`,
                } as React.CSSProperties
              }
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
