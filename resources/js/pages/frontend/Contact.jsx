import React, { useState } from "react";
import { useI18n } from "../../hooks/I18nContext";
import { contactApi } from "../../api/contact";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const { t } = useI18n();
  const [formData, setFormData] = useState(initialForm);
  const [successMessage, setSuccessMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const channels = t("site.contact.channels", []);

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = [t("site.contact.validation.nameRequired")];
    }

    if (!formData.email.trim()) {
      nextErrors.email = [t("site.contact.validation.emailRequired")];
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = [t("site.contact.validation.emailInvalid")];
    }

    if (!formData.message.trim()) {
      nextErrors.message = [t("site.contact.validation.messageRequired")];
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    setSuccessMessage("");
    setFeedbackMessage("");

    const clientErrors = validateForm();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setFeedbackMessage(t("site.contact.validation.formIncomplete"));
      return;
    }

    setIsLoading(true);

    try {
      const response = await contactApi.send({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });
      setSuccessMessage(response.data.message ?? t("site.contact.successMessage"));
      setFormData(initialForm);
    } catch (error) {
      setErrors(error.response?.data?.errors ?? {});
      setFeedbackMessage(
        error.response?.data?.message ?? t("site.contact.validation.sendFailed")
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-shell py-24">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="glass-panel rounded-[2rem] p-8">
          <p className="section-kicker">{t("site.contact.kicker")}</p>
          <h2 className="section-title mt-4">{t("site.contact.title")}</h2>
          <p className="section-copy mt-4">{t("site.contact.copy")}</p>

          <div className="mt-8 space-y-4">
            {channels.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.06] px-5 py-4 transition hover:bg-white/10"
              >
                <div>
                  <p className="text-sm text-sand-100/60">{item.label}</p>
                  <p className="mt-1 font-semibold text-white">{item.value}</p>
                </div>
                <span className="text-mint-300">+</span>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-[1.6rem] border border-mint-300/20 bg-mint-400/10 p-5">
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-mint-300">
              {t("site.contact.availabilityLabel")}
            </p>
            <p className="mt-3 text-lg font-semibold text-white">{t("site.contact.availabilityTitle")}</p>
            <p className="mt-2 text-sm leading-6 text-sand-100/70">{t("site.contact.availabilityCopy")}</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-sand-50 p-8 text-ink-950 shadow-[0_24px_80px_rgba(3,8,18,0.35)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.28em] text-ink-800">
                {t("site.contact.formKicker")}
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold text-ink-950">
                {t("site.contact.formTitle")}
              </h3>
            </div>
            <div className="rounded-full bg-ink-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-sand-50">
              {t("site.contact.replyTime")}
            </div>
          </div>

          {successMessage ? (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              {successMessage}
            </div>
          ) : null}

          {feedbackMessage ? (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {feedbackMessage}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink-900">
                {t("site.contact.nameLabel")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("site.contact.namePlaceholder")}
                className={`w-full rounded-2xl border bg-white px-4 py-3.5 text-sm outline-none transition ${
                  errors.name
                    ? "border-red-400 ring-2 ring-red-100"
                    : "border-slate-200 focus:border-mint-400"
                }`}
              />
              {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name.join(", ")}</p> : null}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink-900">
                {t("site.contact.emailLabel")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("site.contact.emailPlaceholder")}
                className={`w-full rounded-2xl border bg-white px-4 py-3.5 text-sm outline-none transition ${
                  errors.email
                    ? "border-red-400 ring-2 ring-red-100"
                    : "border-slate-200 focus:border-mint-400"
                }`}
              />
              {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email.join(", ")}</p> : null}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink-900">
                {t("site.contact.messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("site.contact.messagePlaceholder")}
                className={`w-full rounded-2xl border bg-white px-4 py-3.5 text-sm outline-none transition ${
                  errors.message
                    ? "border-red-400 ring-2 ring-red-100"
                    : "border-slate-200 focus:border-mint-400"
                }`}
              />
              {errors.message ? (
                <p className="mt-2 text-sm text-red-600">{errors.message.join(", ")}</p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex w-full items-center justify-center rounded-full bg-ink-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-ink-900 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? t("site.contact.sending") : t("site.contact.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
