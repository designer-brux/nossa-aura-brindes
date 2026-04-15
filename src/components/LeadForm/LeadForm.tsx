"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./LeadForm.module.css";

export function LeadForm() {
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Função para aplicar a máscara de telefone (BR) em tempo real
  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número
    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

    // Aplica a formatação (XX) XXXXX-XXXX
    if (value.length > 2) value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    if (value.length > 7) value = value.replace(/(\d)(\d{4})$/, "$1-$2");

    setPhone(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Aqui você fará a integração com seu backend (ex: Formspree, Resend ou API Route do Next.js)
    // Simulando uma requisição de 1.5 segundos para UX
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className={styles.section} id="orcamento">
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Solicite um Orçamento Exclusivo</h2>
          <p className={styles.subtitle}>
            Deixe os detalhes do seu projeto abaixo. Nossa equipe analisará sua
            necessidade para oferecer a melhor solução em personalização em
            Valinhos e região.
          </p>
        </div>

        <div className={styles.formColumn}>
          {isSuccess ? (
            <div className={styles.successState}>
              <div className={styles.successIcon}>✓</div>
              <h3>Solicitação Recebida!</h3>
              <p>
                Agradecemos o contato. Nossa equipe analisará os detalhes do seu
                evento e retornará em breve com o orçamento.
              </p>
              <button
                className={styles.resetButton}
                onClick={() => setIsSuccess(false)}
              >
                Fazer nova solicitação
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Ex: João Silva"
                />
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    placeholder="Ex: Valinhos, Campinas..."
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">WhatsApp / Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(00) 00000-0000"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="seu@email.com.br"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="event">Tipo de Evento</label>
                  <select id="event" name="event" required defaultValue="">
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    <option value="corporativo">Corporativo</option>
                    <option value="casamento">Casamento</option>
                    <option value="15anos">15 Anos</option>
                    <option value="chadebebe">Chá de Bebê</option>
                    <option value="formatura">Formatura</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="details">Conte-nos mais</label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  required
                  placeholder="Descreva a quantidade aproximada, o tipo de produto que procura e a data do evento..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Enviando..."
                  : "Enviar Solicitação de Orçamento"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
