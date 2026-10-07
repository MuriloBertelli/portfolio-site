"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { contactIntro } from "@/lib/portfolio-content";
import Reveal from "@/components/reveal";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  function resetFeedback() {
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    setStatus("sending");
    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Contato: ${response.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contato"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="content-width contact-section__grid">
        <Reveal className="contact-section__intro">
          <p className="eyebrow eyebrow--light">
            <span className="eyebrow__line" />
            {contactIntro.eyebrow}
          </p>
          <h2 id="contact-title">{contactIntro.title}</h2>
          <p>{contactIntro.lead}</p>
          <div className="contact-section__links">
            <a href="mailto:mrlbertelli@gmail.com">
              <Mail size={19} aria-hidden="true" />
              mrlbertelli@gmail.com
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/murilo-bertelli-7a6249248/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={19} aria-hidden="true" />
              LinkedIn
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/MuriloBertelli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={19} aria-hidden="true" />
              GitHub
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <span>
              <MapPin size={19} aria-hidden="true" />
              Curitiba, Brasil
            </span>
          </div>
        </Reveal>

        <Reveal className="contact-form-panel" delay={90}>
          <div className="contact-form-panel__head">
            <span>Tem um projeto em mente?</span>
            <span>04 / 04</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="contact-form-panel__honeypot" aria-hidden="true">
              <label htmlFor="company">Empresa</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <label htmlFor="contact-name">Nome</label>
            <input
              id="contact-name"
              name="name"
              required
              autoComplete="name"
              placeholder="Seu nome"
              onChange={resetFeedback}
            />
            <label htmlFor="contact-email">E-mail</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="voce@email.com"
              onChange={resetFeedback}
            />
            <label htmlFor="contact-message">Mensagem</label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="Conte um pouco sobre o que você está construindo..."
              onChange={resetFeedback}
            />
            <button type="submit" disabled={status === "sending"}>
              {status === "sending"
                ? contactIntro.sendingLabel
                : contactIntro.submitLabel}
              <ArrowUpRight size={18} aria-hidden="true" />
            </button>
            <p
              className="contact-form-panel__feedback"
              role="status"
              aria-live="polite"
            >
              {status === "success"
                ? contactIntro.successMessage
                : status === "error"
                  ? contactIntro.errorMessage
                  : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
