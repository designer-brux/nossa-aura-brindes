import Image from "next/image";
import styles from "./ProductGrid.module.css";

const products = [
  {
    id: 1,
    title: "Copos e Taças",
    description:
      "Elegância para casamentos, formaturas e brindes corporativos de alto impacto.",
    image:
      "https://images.unsplash.com/photo-1574015974293-817f0efebb1b?q=80&w=600&auto=format&fit=crop",
    techs: ["Laser", "DTF UV", "Sublimação"],
  },
  {
    id: 2,
    title: "Canecas Premium",
    description:
      "O clássico indispensável para kits de boas-vindas e lembranças personalizadas.",
    image:
      "https://images.unsplash.com/photo-1517256011271-1032dae83e60?q=80&w=600&auto=format&fit=crop",
    techs: ["Sublimação", "Laser"],
  },
  {
    id: 3,
    title: "Garrafas Térmicas",
    description:
      "Tecnologia e durabilidade para acompanhar a rotina dos seus clientes e colaboradores.",
    image:
      "https://images.unsplash.com/photo-1602143399827-7218ca727a82?q=80&w=600&auto=format&fit=crop",
    techs: ["Laser", "DTF UV"],
  },
];

export function ProductGrid() {
  return (
    <section className={styles.section} id="produtos">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Produtos que Contam Histórias</h2>
          <p className={styles.subtitle}>
            Desenvolvemos soluções visuais únicas para cada projeto. Da
            elegância da gravação a laser à versatilidade das cores vibrantes do
            DTF, garantimos um acabamento impecável em todos os nossos
            materiais. Trabalhamos com materiais premium e as melhores
            tecnologias de gravação para garantir um acabamento impecável.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
