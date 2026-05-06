import React from "react";
import { useI18n } from "../../hooks/I18nContext";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export default function About() {
  const { t } = useI18n();
  const aboutReasons = t("site.about.reasons", []);

  return (
    <section className="section-shell py-15">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-8">
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
  );
}
