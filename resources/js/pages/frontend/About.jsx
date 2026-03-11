import React from 'react';
import { useI18n } from '../../hooks/I18nContext'; // Import du hook de traduction

function About() {
  const { t } = useI18n();  // Utilisation du hook useI18n pour récupérer la fonction de traduction

  return (
    <section id="apropos" className="py-5 bg-white">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h6 className="text-uppercase mb-2 titre-sections">{t("about.title")}</h6>
          <div className="mx-auto about_underline"></div>
        </div>

        {/* Content */}
        <div className="row align-items-center g-4 mb-5">
          {/* Left block (image / illustration) */}
          <div className="col-lg-6">
            <div className="about-visual d-flex align-items-center justify-content-center">
              <i className="fas fa-code fa-5x text_color"></i>
            </div>
          </div>

          {/* Right block (text) */}
          <div className="col-lg-6">
            <h5 className="fw-bold mb-3 text_color">{t("about.developerTitle")}</h5>

            <p className="text-muted mb-3">
              {t("about.description1")}
            </p>

            <p className="text-muted mb-3">
              {t("about.description2")}
            </p>

            <p className="text-muted mb-0">
              {t("about.description3")}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="about-card">
              <div className="about-card__icon"><i className="fas fa-code"></i></div>
              <h6 className="fw-bold mb-2">{t("about.cleanCodeTitle")}</h6>
              <p className="mb-0">
                {t("about.cleanCodeDescription")}
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-card">
              <div className="about-card__icon"><i className="fas fa-layer-group"></i></div>
              <h6 className="fw-bold mb-2">{t("about.architectureTitle")}</h6>
              <p className="mb-0">
                {t("about.architectureDescription")}
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-card">
              <div className="about-card__icon"><i className="fas fa-bolt"></i></div>
              <h6 className="fw-bold mb-2">{t("about.performanceTitle")}</h6>
              <p className="mb-0">
                {t("about.performanceDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;