import React from "react";
import { useI18n } from "../../hooks/I18nContext";
import SectionHeading from "./SectionHeading";

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function Projets() {
  const { t } = useI18n();
  const projects = t("site.projects.items", []);

  return (
    <section id="projects" className="section-shell py-15">
      <SectionHeading
        kicker={t("site.projects.kicker")}
        title={t("site.projects.title")}
        copy={t("site.projects.copy")}
            align="center"
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
  );
}
