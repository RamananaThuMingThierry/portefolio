import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../../hooks/I18nContext";
import { getSectionPath } from "../../utils/sectionNavigation";

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function Accueil() {
  const { t } = useI18n();
  const stats = t("site.hero.stats", []);

  return (
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
            <Link
              to={getSectionPath("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-mint-400 px-6 py-3.5 text-sm font-bold text-ink-950 transition hover:bg-mint-300"
            >
              {t("site.hero.primaryCta")}
              <ArrowUpRightIcon />
            </Link>
            <Link
              to={getSectionPath("projects")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              {t("site.hero.secondaryCta")}
            </Link>
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
  );
}
