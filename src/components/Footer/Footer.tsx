import Image from "next/image";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Grid de 4 Colunas */}
        <div className={styles.grid}>
          {/* Coluna 1: Texto SEO */}
          <div className={styles.column}>
            <p className={styles.text}>
              Elevando o padrão de brindes corporativos e sociais com gravação a
              laser e tecnologia DTF premium. Atendimento ágil, focado em
              qualidade e design para Valinhos e Região Metropolitana de
              Campinas.
            </p>
          </div>

          {/* Coluna 2: Endereço e Horário */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Atendimento</h4>
            <p className={styles.text}>
              Valinhos, SP
              <br />
              Região Metropolitana de Campinas
              <br />
              <br />
              Segunda a Sexta
              <br />
              09:00 às 18:00
            </p>
          </div>

          {/* Coluna 3: Contatos e Redes */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contato</h4>
            <p className={styles.text}>
              (19) 99999-9999
              <br />
              contato@nossaaura.com.br
            </p>

            <div className={styles.socialGrid}>
              {/* Instagram - INSIRA SEU LINK NO HREF */}
              <a
                href="https://instagram.com/sua_conta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles.socialIcon}
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* TikTok - INSIRA SEU LINK NO HREF */}
              <a
                href="https://tiktok.com/@sua_conta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className={styles.socialIcon}
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
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
              {/* LinkedIn - INSIRA SEU LINK NO HREF */}
              <a
                href="https://linkedin.com/company/sua_empresa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialIcon}
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 4: Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navegação</h4>
            <nav className={styles.navLinks}>
              <a href="#produtos">Produtos</a>
              <a href="#ocasioes">Eventos</a>
              <a href="#orcamento">Fazer Orçamento</a>
            </nav>
          </div>
        </div>

        {/* Logo Ocupando 100% da Largura */}
        <div className={styles.hugeLogoContainer}>
          <Image
            src="/images/footer-logo.svg"
            alt="Nossa Aura Brindes"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.hugeLogoImage}
          />
        </div>

        {/* Rodapé de Copyright */}
        <div className={styles.bottomBar}>
          <p>© 2026 Nossa Aura Brindes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
