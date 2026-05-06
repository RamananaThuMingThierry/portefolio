import React from "react";
import { useI18n } from "../../hooks/I18nContext";
import SectionHeading from "./SectionHeading";

export default function Faq() {
  const { t } = useI18n();
  const faq = t("site.faq.items", []);

  return (
    <section className="section-shell py-15">
      <SectionHeading
        kicker={t("site.faq.kicker")}
        title={t("site.faq.title")}
        copy={t("site.faq.copy")}
            align="center"
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
  );
}
