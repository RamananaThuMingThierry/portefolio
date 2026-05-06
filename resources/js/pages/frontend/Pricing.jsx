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

export default function Pricing() {
  const { t } = useI18n();
  const pricing = t("site.pricing.plans", []);

  return (
    <section id="pricing" className="section-shell py-15">
      <SectionHeading
        kicker={t("site.pricing.kicker")}
        title={t("site.pricing.title")}
        copy={t("site.pricing.copy")}
            align="center"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-4">
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
    <h3 className="flex items-center gap-4 text-2xl font-bold text-white">
      {plan.name}

      {plan.badge && (
        <span className="rounded-full bg-gold-300/14 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
          {plan.badge}
        </span>
      )}
    </h3>

    <p className="mt-3 text-sm leading-6 text-sand-100/70">
      {plan.description}
    </p>
  </div>
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
  );
}
