import React from "react";
import { useI18n } from "../../hooks/I18nContext";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const { t } = useI18n();
  const testimonials = t("site.testimonials.items", []);

  return (
    <section className="section-shell py-15">
      <SectionHeading
        kicker={t("site.testimonials.kicker")}
        title={t("site.testimonials.title")}
            align="center"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.quote} className="glass-panel rounded-[1.8rem] p-7">
            <p className="text-base leading-8 text-sand-50/90">"{item.quote}"</p>
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
    </section>
  );
}
