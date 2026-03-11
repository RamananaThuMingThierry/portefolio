import React from 'react';
import { useI18n } from '../../hooks/I18nContext'

function Accueil() {
  const { t } = useI18n(); 

  return (
    <section id="accueil" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Texte */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="fw-bold">
              {t("home.developerTitle")} <br />
              <span>{t("home.fullStack")}</span>
            </h1>

            <p className="mt-3">
              {t("home.description")}
            </p>

            <div className="mt-4">
              <a href="#contact" className="btn btn-light me-3 px-4">{t("home.contactButton")}</a>
              <a href="#projets" className="btn btn-projects px-4">{t("home.projectsButton")}</a>
            </div>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <div className="hero-img-wrap">
              <img src="/images/profil.jpeg" alt="Développeur" className="img-fluid hero-img rounded-3" />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="row mt-5">
          <div className="col d-flex justify-content-center gap-3">
            <a href="https://github.com/RamananaThuMingThierry" target="_blank" className="btn btn-outline-light btn-icon" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/thierry-ramanana-thu-ming-77bb0b291/" target="_blank" className="btn btn-outline-light btn-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in text-info"></i>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=ramananathumingthierry@gmail.com" target="_blank" className="btn btn-outline-light btn-icon" aria-label="Email">
              <i className="fas fa-envelope text-danger"></i>
            </a>
            <a href="https://wa.me/261327563770" target="_blank" className="btn btn-outline-light btn-icon" aria-label="Email">
              <i className="fas fa-phone text-success"></i>
            </a>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="row mt-5">
          <div className="col text-center">
            <a href="#contact" className="scroll-down" aria-label={t("home.scrollDownLabel")}>
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accueil;