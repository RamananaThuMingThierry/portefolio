import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import { useI18n } from "../../hooks/I18nContext";

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

function SectionHeading({ kicker, title, copy, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title mt-4">{title}</h2>
      <p className={`section-copy mt-4 ${align === "center" ? "mx-auto" : ""}`}>{copy}</p>
    </div>
  );
}

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useI18n();
  const stats = t("site.hero.stats", []);
  const aboutReasons = t("site.about.reasons", []);
  const services = t("site.services.items", []);
  const projects = t("site.projects.items", []);
  const method = t("site.method.steps", []);
  const pricing = t("site.pricing.plans", []);
  const testimonials = t("site.testimonials.items", []);
  const faq = t("site.faq.items", []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="top" className="relative overflow-x-hidden">
      <div className="soft-grid pointer-events-none absolute inset-0 opacity-30" />
      <Navbar />

      <main className="pt-28 md:pt-32">
        <section className="section-shell relative pb-24 md:pb-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-none tracking-tight text-white md:text-7xl">
                {t("site.hero.title")}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-sand-100/70 md:text-xl">
                {t("site.hero.description")}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-mint-400 px-6 py-3.5 text-sm font-bold text-ink-950 transition hover:bg-mint-300"
                >
                  {t("site.hero.primaryCta")}
                  <ArrowUpRightIcon />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  {t("site.hero.secondaryCta")}
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="glass-panel rounded-3xl p-5">
                    <p className="font-display text-3xl font-bold text-white">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-sand-100/70">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 hidden h-40 w-40 rounded-full bg-coral-300/20 blur-3xl md:block" />
              <div className="absolute -right-4 bottom-8 hidden h-52 w-52 rounded-full bg-mint-400/20 blur-3xl md:block" />

              <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 md:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,197,107,0.16),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
                <div className="relative">
                  <img
                    src="/images/profil.jpeg"
                    alt="Portrait Thierry"
                    className="h-[420px] w-full rounded-[1.5rem] object-cover object-top"
                  />

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-white/10 bg-ink-950/80 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-300">
                        {t("site.hero.panelLabel")}
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">{t("site.hero.panelTitle")}</p>
                      <p className="mt-2 text-sm leading-6 text-sand-100/70">{t("site.hero.panelCopy")}</p>
                    </div>

                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.08] p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.28em] text-mint-300">
                        {t("site.hero.stackLabel")}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {t("site.hero.stack", []).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-semibold text-sand-50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-shell py-15">
          <SectionHeading
            kicker={t("site.services.kicker")}
            title={t("site.services.title")}
            copy={t("site.services.copy")}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((item) => (
              <article key={item.title} className="glass-panel rounded-[1.8rem] p-7 transition hover:-translate-y-1">
                <div className="inline-flex rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm font-bold uppercase tracking-[0.22em] text-mint-300">
                  {item.tag}
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-sand-100/70">{item.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-sand-50">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 text-mint-300">
                        <CheckIcon />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell py-15">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="glass-panel rounded-[2rem] p-8">
              <p className="section-kicker">{t("site.about.kicker")}</p>
              <h2 className="section-title mt-4">{t("site.about.title")}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-sand-100/72">{t("site.about.descriptionOne")}</p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-sand-100/72">{t("site.about.descriptionTwo")}</p>
            </div>

            <div className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <article className="glass-panel rounded-[1.8rem] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-mint-300">
                    {t("site.about.techLabel")}
                  </p>
                  <p className="mt-4 font-display text-2xl font-bold text-white">{t("site.about.techValue")}</p>
                </article>

                <article className="glass-panel rounded-[1.8rem] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-mint-300">
                    {t("site.about.approachLabel")}
                  </p>
                  <p className="mt-4 font-display text-2xl font-bold text-white">{t("site.about.approachValue")}</p>
                </article>
              </div>

              <article className="glass-panel rounded-[1.8rem] p-6">
                <h3 className="font-display text-2xl font-bold text-white">{t("site.about.reasonsTitle")}</h3>
                <ul className="mt-6 space-y-3 text-sm text-sand-50">
                  {aboutReasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <span className="mt-0.5 text-mint-300">
                        <CheckIcon />
                      </span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell py-15">
          <SectionHeading
            kicker={t("site.projects.kicker")}
            title={t("site.projects.title")}
            copy={t("site.projects.copy")}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                title={project.title}
                className="group overflow-hidden rounded-[1.9rem] border border-white/10 bg-ink-900/80 transition duration-300 hover:-translate-y-1 hover:border-mint-300/30 hover:shadow-[0_28px_70px_rgba(8,15,26,0.45)]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="p-7">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sand-100/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-sand-100/70">{project.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-semibold text-mint-300">{project.outcome}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-white transition group-hover:text-mint-300">
                      {t("site.projects.viewCase")}
                      <ArrowUpRightIcon />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="method" className="section-shell py-15">
          <SectionHeading
            kicker={t("site.method.kicker")}
            title={t("site.method.title")}
            copy={t("site.method.copy")}
            align="center"
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {method.map((step, index) => (
              <article key={step.title} className="glass-panel rounded-[1.8rem] p-6">
                <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-coral-300">
                  0{index + 1}
                </p>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-sand-100/70">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="section-shell py-15">
          <SectionHeading
            kicker={t("site.pricing.kicker")}
            title={t("site.pricing.title")}
            copy={t("site.pricing.copy")}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[2rem] border p-7 ${
                  plan.featured
                    ? "border-mint-300/40 bg-mint-400/10 shadow-[0_30px_90px_rgba(75,212,166,0.12)]"
                    : "border-white/10 bg-white/[0.06]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-sand-100/70">{plan.description}</p>
                  </div>
                  {plan.badge ? (
                    <span className="rounded-full bg-gold-300/14 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <div className="mt-8">
                  <p className="font-display text-4xl font-bold text-white">{plan.price}</p>
                  <p className="mt-2 text-sm text-sand-100/60">{plan.timeline}</p>
                </div>

                <ul className="mt-8 space-y-3 text-sm text-sand-50">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 text-mint-300">
                        <CheckIcon />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[1.8rem] border border-gold-300/20 bg-gold-300/10 p-6">
            <p className="text-sm font-semibold leading-7 text-sand-50">{t("site.pricing.notice")}</p>
          </div>
        </section>

        <section className="section-shell py-15">
          <SectionHeading
            kicker={t("site.testimonials.kicker")}
            title={t("site.testimonials.title")}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.quote} className="glass-panel rounded-[1.8rem] p-7">
                <p className="text-base leading-8 text-sand-50/90">“{item.quote}”</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mint-400 font-display text-lg font-bold text-ink-950">
                    {item.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="mt-1 text-sm text-sand-100/65">{item.role}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-mint-300">
                      {item.tag}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border text-center border-mint-300/20 bg-mint-400/10 p-8">
            <p className="font-display text-2xl font-bold text-white">{t("site.testimonials.ctaTitle")}</p>
            <p className="mt-3 text-sm leading-7">{t("site.testimonials.ctaCopy")}</p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-mint-400 px-6 py-3 text-sm font-bold text-ink-950 transition hover:bg-mint-300"
            >
              {t("site.testimonials.ctaButton")}
              <ArrowUpRightIcon />
            </a>
          </div>
        </section>

        <Contact />

        <section className="section-shell py-15">
          <SectionHeading
            kicker={t("site.faq.kicker")}
            title={t("site.faq.title")}
            copy={t("site.faq.copy")}
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {faq.map((item) => (
              <article key={item.question} className="glass-panel rounded-[1.8rem] p-7">
                <h3 className="font-display text-xl font-bold text-white">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-sand-100/70">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Retour en haut"
        className={`fixed right-5 bottom-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-mint-400 text-ink-950 shadow-[0_20px_50px_rgba(75,212,166,0.25)] transition duration-300 hover:bg-mint-300 ${
          showScrollTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m6 15 6-6 6 6" />
        </svg>
      </button>
    </div>
  );
}
