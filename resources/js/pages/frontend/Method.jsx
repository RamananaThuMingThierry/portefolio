import React from "react";
import { useI18n } from "../../hooks/I18nContext";
import SectionHeading from "./SectionHeading";

export default function Method() {
  const { t } = useI18n();
  const method = t("site.method.steps", []);

  return (
    <section id="method" className="section-shell py-15">
      <SectionHeading
        kicker={t("site.method.kicker")}
        title={t("site.method.title")}
        copy={t("site.method.copy")}
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
  );
}
