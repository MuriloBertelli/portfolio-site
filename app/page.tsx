import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ExternalLink,
  Github,
  Mail,
} from "lucide-react";
import Reveal from "@/components/reveal";
import MobileNav from "@/components/mobile-nav";
import LaptopSequence from "@/components/sections/laptop-sequence";
import Contact from "@/components/sections/contact";
import {
  portfolioIntro,
  timelineIntro,
  timelineChapters,
  cyberIntro,
  projectsIntro,
  featuredProjects,
  skillGroups,
  siteNavigation,
} from "@/lib/portfolio-content";

export default function Home() {
  return (
    <main id="inicio" className="site-shell">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <a
            className="brand"
            href="#inicio"
            aria-label="Murilo Bertelli, início"
          >
            <span className="brand__mark">
              MB<span>.</span>
            </span>
            <span className="brand__descriptor">
              Engenharia / Software / Segurança
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {siteNavigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="header-contact" href="mailto:mrlbertelli@gmail.com">
            Vamos conversar <ArrowDownRight size={16} aria-hidden="true" />
          </a>
          <MobileNav />
        </div>
      </header>

      <div id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__visual" aria-hidden="true">
            <Image
              src="/img/story/pista_sae.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 760px) 100vw, 58vw"
            />
          </div>
          <div className="hero__shade" aria-hidden="true" />
          <div className="hero__inner content-width">
            <div className="hero__copy">
              <p className="eyebrow eyebrow--light">
                <span className="eyebrow__line" />
                {portfolioIntro.eyebrow}
              </p>
              <h1 id="hero-title">{portfolioIntro.title}</h1>
              <p className="hero__lead">{portfolioIntro.lead}</p>
              <div className="hero__actions">
                <a className="button button--light" href="#projetos">
                  {portfolioIntro.projectsLink}
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="text-link text-link--light" href="#contato">
                  {portfolioIntro.contactLink}
                  <ArrowDownRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="hero__footer">
              <a href="#trajetoria" className="scroll-cue">
                <span className="scroll-cue__icon">↓</span>
                {portfolioIntro.scrollCue}
              </a>
              <span className="hero__index">
                01 / 04 &nbsp;•&nbsp; Curitiba, Brasil
              </span>
            </div>
          </div>
        </section>

        <section
          id="trajetoria"
          className="timeline-section"
          aria-labelledby="timeline-title"
        >
          <div className="content-width section-heading">
            <Reveal>
              <p className="eyebrow">
                <span className="eyebrow__line" />
                {timelineIntro.eyebrow}
              </p>
              <h2 id="timeline-title">{timelineIntro.title}</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="section-heading__lead">{timelineIntro.lead}</p>
            </Reveal>
          </div>
          <div className="timeline-list content-width">
            {timelineChapters.map((chapter, index) => (
              <article
                className={`timeline-chapter ${index % 2 ? "timeline-chapter--reverse" : ""}`}
                key={chapter.id}
              >
                <div className="timeline-chapter__marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-chapter__body">
                  <Reveal>
                    <div className="timeline-chapter__topline">
                      <span>{chapter.eyebrow}</span>
                      <span>{chapter.period}</span>
                    </div>
                    <h3>{chapter.title}</h3>
                    <p className="timeline-chapter__lead">{chapter.lead}</p>
                    <p className="timeline-chapter__detail">{chapter.detail}</p>
                  </Reveal>
                </div>
                <Reveal className="timeline-chapter__media" delay={100}>
                  {chapter.image ? (
                    <Image
                      src={chapter.image}
                      alt={chapter.imageAlt || ""}
                      fill
                      sizes="(max-width: 760px) 100vw, 44vw"
                    />
                  ) : (
                    <div
                      className={`timeline-chapter__graphic timeline-chapter__graphic--${chapter.id}`}
                      aria-hidden="true"
                    >
                      <span className="timeline-chapter__graphic-index">
                        0{index + 1}
                      </span>
                      <span className="timeline-chapter__graphic-label">
                        {chapter.eyebrow.split("/")[1]?.trim()}
                      </span>
                    </div>
                  )}
                </Reveal>
              </article>
            ))}
          </div>
        </section>

        <section
          id="cyber"
          className="cyber-intro"
          aria-labelledby="cyber-title"
        >
          <div className="cyber-intro__image" aria-hidden="true">
            <Image
              src="/img/story/puc_biblioteca_lendo_kalilinux.webp"
              alt=""
              fill
              sizes="(max-width: 760px) 100vw, 42vw"
            />
          </div>
          <div className="cyber-intro__inner content-width">
            <Reveal className="cyber-intro__copy">
              <p className="eyebrow eyebrow--light">
                <span className="eyebrow__line" />
                {cyberIntro.eyebrow}
              </p>
              <h2 id="cyber-title">{cyberIntro.title}</h2>
              <p>{cyberIntro.lead}</p>
              <span className="cyber-intro__cue">
                <ArrowDownRight size={18} aria-hidden="true" />
                <span className="cyber-intro__cue-motion">
                  {cyberIntro.interactionHint}
                </span>
                <span className="cyber-intro__cue-static">
                  {cyberIntro.reducedMotionHint}
                </span>
              </span>
            </Reveal>
          </div>
        </section>

        <LaptopSequence />

        <section
          id="projetos"
          className="projects-section"
          aria-labelledby="projects-title"
        >
          <div className="content-width">
            <div className="section-heading section-heading--projects">
              <Reveal>
                <p className="eyebrow">
                  <span className="eyebrow__line" />
                  {projectsIntro.eyebrow}
                </p>
                <h2 id="projects-title">{projectsIntro.title}</h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="section-heading__lead">{projectsIntro.lead}</p>
              </Reveal>
            </div>
            <div className="project-grid">
              {featuredProjects.map((project, index) => (
                <Reveal
                  className={`project-card ${index === 0 ? "project-card--featured" : ""}`}
                  key={project.id}
                  delay={index % 2 ? 80 : 0}
                >
                  <article>
                    <div
                      className={`project-card__visual project-card__visual--${project.id}`}
                    >
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.imageAlt || ""}
                          fill
                          sizes={
                            index === 0
                              ? "(max-width: 760px) 100vw, 55vw"
                              : "(max-width: 760px) 100vw, 40vw"
                          }
                        />
                      ) : (
                        <span aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      )}
                    </div>
                    <div className="project-card__content">
                      <div className="project-card__number">
                        <span>{project.category}</span>
                        <span>0{index + 1}</span>
                      </div>
                      <h3>{project.title}</h3>
                      <p className="project-card__summary">{project.summary}</p>
                      <p className="project-card__detail">{project.detail}</p>
                      <div className="project-card__footer">
                        <div className="project-card__tags">
                          {project.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                        {project.href && (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.hrefLabel || "Ver projeto"}
                            <ExternalLink size={15} aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="skills-strip" aria-labelledby="skills-title">
              <Reveal>
                <div className="skills-strip__intro">
                  <p className="eyebrow">
                    <span className="eyebrow__line" />
                    Repertório
                  </p>
                  <h2 id="skills-title">Ferramentas a serviço do problema.</h2>
                </div>
              </Reveal>
              <div className="skills-strip__grid">
                {skillGroups.map((group, index) => (
                  <Reveal key={group.title} delay={index * 50}>
                    <div className="skill-group">
                      <span className="skill-group__index">0{index + 1}</span>
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                      <div>
                        {group.items.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </div>

      <footer className="site-footer">
        <div className="content-width site-footer__inner">
          <span>© {new Date().getFullYear()} Murilo Bertelli</span>
          <a
            href="https://github.com/MuriloBertelli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} aria-hidden="true" /> GitHub
          </a>
          <a href="mailto:mrlbertelli@gmail.com">
            <Mail size={16} aria-hidden="true" /> E-mail
          </a>
          <a href="#inicio">Voltar ao início ↑</a>
        </div>
      </footer>
    </main>
  );
}
