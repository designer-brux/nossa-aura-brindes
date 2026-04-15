import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <h3>Nossa Aura Brindes</h3>
          <p>Personalização que Eterniza Momentos.</p>
        </div>
        <div>
          <h4 style={{ color: "var(--color-white)", marginBottom: "1rem" }}>
            Atendimento e Localização
          </h4>
          <p className={styles.seoText}>
            A <strong>Nossa Aura Brindes</strong> é referência em soluções de
            brindes personalizados, gravação a laser, adesivos DTF e sublimação.
            Sediada em <strong>Valinhos/SP</strong>, com atendimento ágil e
            especializado para toda a <strong>Região de Campinas (RMC)</strong>.
          </p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          © {new Date().getFullYear()} Nossa Aura Brindes. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
