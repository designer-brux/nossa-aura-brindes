import styles from "./Events.module.css";

const eventTypes = [
  {
    id: "corporativo",
    title: "Corporativo",
    description:
      "Brindes para final de ano, feiras, onboarding e fidelização de clientes.",
    // Ícone de Maleta
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    id: "casamentos",
    title: "Casamentos",
    description:
      "Taças e lembranças intimistas que eternizam o grande dia para seus convidados.",
    // Ícone de Corações/Aliança
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
  },
  {
    id: "15anos",
    title: "15 Anos e Formaturas",
    description:
      "Copos personalizados com a identidade visual exata da sua festa.",
    // Ícone de Estrela/Celebração
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  },
  {
    id: "nascimento",
    title: "Chá de Bebê",
    description:
      "Mimos delicados e duradouros para celebrar a chegada de novas vidas.",
    // Ícone de Sorriso/Cuidado
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    ),
  },
];

export function Events() {
  return (
    <section className={styles.section} id="ocasioes">
      <div className={styles.container}>
        {/* Cabeçalho focado em SEO Local */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Brindes Personalizados em Valinhos e Região de Campinas
          </h2>
          <p className={styles.subtitle}>
            Seja para fidelizar clientes em um grande evento corporativo, ou
            para encantar os convidados de um casamento intimista, a Nossa Aura
            entrega sofisticação e pontualidade. Atendemos festas de 15 anos,
            chás de bebê, formaturas e ações empresariais em Valinhos e toda a
            Região Metropolitana de Campinas.
          </p>
        </div>

        {/* Grid de Ícones */}
        <div className={styles.grid}>
          {eventTypes.map((event) => (
            <div key={event.id} className={styles.card}>
              <div className={styles.iconWrapper}>{event.icon}</div>
              <h3 className={styles.cardTitle}>{event.title}</h3>
              <p className={styles.cardDescription}>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
