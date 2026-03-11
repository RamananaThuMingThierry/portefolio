import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../hooks/I18nContext';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);  // Suivi de l'état du défilement
  const navbarRef = useRef(null);  // Référence à la barre de navigation
  const { lang, setLang, t } = useI18n(); // Utilisation du hook pour récupérer la langue et la fonction de traduction

  // Fonction pour changer la langue
  const handleLangChange = (newLang) => {
    console.log(t("nav.language"));
    console.log(`Changing language to ${newLang} et ${lang}`);
    setLang(newLang);  // Met à jour la langue dans le contexte
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);  // Ajoute la classe scrolled
      } else {
        setIsScrolled(false);  // Retire la classe scrolled
      }
    };

    // Ajout de l'écouteur de défilement
    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef} // Attache la référence à la navbar
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#">
          <img src="/logo/logo.png" alt="Logo AntaTech Solutions" width="50" height="50" />
        </a>

        {/* Burger menu */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#accueil">{t("nav.home")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#apropos">{t("nav.about")}</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#services">{t("nav.services", "Services")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#competences">{t("nav.skills", "Compétences")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projets">{t("nav.projects", "Projets")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">{t("nav.contact", "Contact")}</a>
            </li>

            {/* Dropdown pour changer la langue */}
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle d-flex align-items-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                🌐 <span className="ms-2">{t("nav.language", "Langue")}</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item d-flex align-items-center" onClick={() => handleLangChange("fr")}>
                    🇫🇷 <span className="ms-2">Français</span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item d-flex align-items-center" onClick={() => handleLangChange("en")}>
                    🇬🇧 <span className="ms-2">English</span>
                  </button>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/cv/telecharger">
                <i className="fas fa-file-download me-1"></i> {t("nav.downloadCV", "Télécharger CV")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
