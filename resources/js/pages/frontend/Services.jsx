import React from "react";
import { useI18n } from "../../hooks/I18nContext";
import SectionHeading from "./SectionHeading";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export default function Services() {
  const { t } = useI18n();
  const services = t("site.services.items", []);

  return (
    <section id="services" className="section-shell py-15">
      <SectionHeading
        kicker={t("site.services.kicker")}
        title={t("site.services.title")}
        copy={t("site.services.copy")}
            align="center"
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
  );
}
