import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "../hooks/I18nContext";
import { getSectionPath, scrollToSection } from "../utils/sectionNavigation";

const navKeys = [
  { sectionId: "services", label: "nav.services" },
  { sectionId: "projects", label: "nav.projects" },
  { sectionId: "method", label: "nav.method" },
  { sectionId: "pricing", label: "nav.pricing" },
  { sectionId: "contact", label: "nav.contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useI18n();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [lang]);

  const handleSectionClick = (sectionId) => (event) => {
    const targetPath = getSectionPath(sectionId);

    if (location.pathname === targetPath) {
      event.preventDefault();
      setOpen(false);
      window.setTimeout(() => {
        scrollToSection(sectionId);
      }, 0);
      return;
    }

    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`section-shell transition duration-300 ${
          scrolled ? "translate-y-0" : "translate-y-1"
        }`}
      >
        <nav
          className={`glass-panel rounded-2xl px-4 py-3 transition duration-300 md:rounded-full md:px-6 ${
            scrolled ? "bg-ink-900/82" : "bg-ink-900/82 md:bg-ink-900/65"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link to={getSectionPath("top")} className="flex items-center gap-3">
              <img
                src="/logo/logo.png"
                alt="AntaTech Solutions"
                className="h-11 w-11 rounded-2xl object-cover ring-1 ring-white/10"
              />
              <div>
                <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-white">
                  AntaTech
                </p>
                <p className="text-xs text-sand-100/60">SOLUTIONS</p>
              </div>
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white md:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={t("nav.toggleMenu")}
              aria-expanded={open}
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>

            <div className="hidden items-center gap-7 md:flex">
              {navKeys.map((item) => (
                <Link
                  key={item.sectionId}
                  to={getSectionPath(item.sectionId)}
                  className="text-sm font-semibold text-sand-100/70 transition hover:text-white"
                  onClick={handleSectionClick(item.sectionId)}
                >
                  {t(item.label)}
                </Link>
              ))}

              <div className="flex rounded-full border border-white/10 bg-white/[0.06] p-1">
                {["fr", "en"].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setLang(value)}
                    className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] transition ${
                      lang === value
                        ? "bg-mint-400 text-ink-950"
                        : "text-sand-100/70 hover:text-white"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>

              <Link
                to={getSectionPath("contact")}
                className="rounded-full bg-mint-400 px-5 py-3 text-sm font-bold text-ink-950 transition hover:bg-mint-300"
                onClick={handleSectionClick("contact")}
              >
                {t("nav.cta")}
              </Link>
            </div>
          </div>

          {open ? (
            <div className="mt-4 space-y-3 rounded-3xl border border-white/10 bg-ink-950/60 p-4 md:hidden">
              {navKeys.map((item) => (
                <Link
                  key={item.sectionId}
                  to={getSectionPath(item.sectionId)}
                  className="block rounded-2xl px-3 py-2 text-sm font-semibold text-sand-100/70 transition hover:bg-white/[0.06] hover:text-white"
                  onClick={handleSectionClick(item.sectionId)}
                >
                  {t(item.label)}
                </Link>
              ))}

              <div className="pt-2">
                <div className="flex rounded-full border border-white/10 bg-white/[0.06] p-1">
                  {["fr", "en"].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setLang(value)}
                      className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] transition ${
                        lang === value
                          ? "bg-mint-400 text-ink-950"
                          : "text-sand-100/70"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>

                <Link
                  to={getSectionPath("contact")}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-mint-400 px-4 py-2 text-sm font-bold text-ink-950"
                  onClick={handleSectionClick("contact")}
                >
                  {t("nav.cta")}
                </Link>
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
