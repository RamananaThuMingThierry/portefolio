import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../../hooks/I18nContext";

const socialIcons = {
  GitHub: "/images/github.png",
  WhatsApp: "/images/whatsapp.png",
  LinkedIn: "/images/linkedin.png",
  Facebook: "/images/facebook.png",
};

export default function Footer() {
  const { t } = useI18n();
  const navigation = t("site.footer.navigation", []);
  const services = t("site.footer.services", []);
  const socials = t("site.footer.socials", []);

  return (
    <footer className="border-t border-white/10 py-14">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-bold text-white">{t("site.footer.brand")}</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-sand-100/70">{t("site.footer.copy")}</p>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-mint-300">
              {t("site.footer.navigationTitle")}
            </p>
            <div className="mt-4 space-y-3 text-sm text-sand-100/70">
              {navigation.map((item) => (
                <Link key={item.href} to={item.href} className="block transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-mint-300">
              {t("site.footer.servicesTitle")}
            </p>
            <div className="mt-4 space-y-3 text-sm text-sand-100/70">
              {services.map((item) => (
                <p key={item} className="block">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-mint-300">
              {t("site.footer.contactTitle")}
            </p>
            <div className="mt-4 space-y-3 text-sm text-sand-100/70">
              <a href={`mailto:${t("site.footer.email")}`} className="block transition hover:text-white">
                {t("site.footer.email")}
              </a>
              <p>{t("site.footer.location")}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  title={item.label}
                  className="group relative inline-flex"
                >
                  <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-ink-900 px-3 py-1 text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-lg transition duration-200 group-hover:-translate-y-1 group-hover:opacity-100">
                    {item.label}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] transition hover:bg-white/[0.1]">
                    <img
                      src={socialIcons[item.label]}
                      alt={item.label}
                      className="h-6 w-6 object-contain"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-sand-100/60">{t("site.footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
