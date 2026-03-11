import React from 'react';
import { useI18n } from '../../hooks/I18nContext';  // Import du hook de traduction

function Services() {
  const { t } = useI18n();  // Utilisation du hook useI18n pour récupérer la fonction de traduction

  return (
    <section id="services" className="services-section py-5">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-4">
          <h6 className="fw-bold text-uppercase text-white mb-2">{t("services.title")}</h6>
          <div className="mx-auto services-underline"></div>
        </div>

        {/* Subtitle */}
        <p className="text-center mb-5">
          {t("services.subtitle")}
        </p>

        {/* Cards */}
        <div className="row g-4">

          {/* Service 1 - Développement Web */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h6 className="fw-bold mt-3">{t("services.webDevelopment.title")}</h6>
              <p className="mb-4">
                {t("services.webDevelopment.description")}
              </p>
              <div className="service-tags">
                <span className="tag">LARAVEL</span>
                <span className="tag">React</span>
                <span className="tag">Inertia.js</span>
              </div>
            </div>
          </div>

          {/* Service 2 - Développement Mobile */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h6 className="fw-bold mt-3">{t("services.mobileDevelopment.title")}</h6>
              <p className="mb-4">
                {t("services.mobileDevelopment.description")}
              </p>
              <div className="service-tags">
                <span className="tag">Flutter</span>
                <span className="tag">Dart</span>
                <span className="tag">Firebase</span>
                <span className="tag">REST API</span>
              </div>
            </div>
          </div>

          {/* Service 3 - Backend & API */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-sitemap"></i>
              </div>
              <h6 className="fw-bold mt-3">{t("services.backendAPI.title")}</h6>
              <p className="mb-4">
                {t("services.backendAPI.description")}
              </p>
              <div className="service-tags">
                <span className="tag">Laravel</span>
                <span className="tag">MySQL</span>
              </div>
            </div>
          </div>

          {/* Service 4 - UI/UX Design */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-palette"></i>
              </div>
              <h6 className="fw-bold mt-3">{t("services.uiuxDesign.title")}</h6>
              <p className="mb-0">
                {t("services.uiuxDesign.description")}
              </p>
            </div>
          </div>

          {/* Service 5 - Optimisation & Performance */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-gauge-high"></i>
              </div>
              <h6 className="fw-bold mt-3">{t("services.optimizationPerformance.title")}</h6>
              <p className="mb-0">
                {t("services.optimizationPerformance.description")}
              </p>
            </div>
          </div>

          {/* Service 6 - Conseil & Support */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h6 className="fw-bold mt-3">{t("services.consultingSupport.title")}</h6>
              <p className="mb-0">
                {t("services.consultingSupport.description")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;