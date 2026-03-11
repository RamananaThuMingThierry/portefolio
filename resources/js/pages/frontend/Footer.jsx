import React from 'react';
import { useI18n } from '../../hooks/I18nContext';  // Import du hook de traduction

function Footer() {
  const { t } = useI18n();  // Utilisation du hook useI18n pour récupérer la fonction de traduction

  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          {/* First Column - About */}
          <div className="col-md-4 h-100 mb-3">
            <div className="d-flex justify-content-start align-items-center">
              <img src="/logo/logo.png" width="75" height="75" className="rounded-2" alt="Logo" />
            </div>
            <p className="text-start">
              {t("footer.description")}
            </p>
          </div>

          {/* Second Column - Useful Links */}
          <div className="col-md-4 h-100 mb-3">
            <h6>{t("footer.usefulLinksTitle")}</h6>
            <ul className="list-unstyled">
              <li><a href="#accueil" className="text-decoration-none bottom-link text-white-50">{t("footer.home")}</a></li>
              <li><a href="#apropos" className="text-decoration-none bottom-link text-white-50">{t("footer.about")}</a></li>
              <li><a href="#services" className="text-decoration-none bottom-link text-white-50">{t("footer.services")}</a></li>
              <li><a href="#competences" className="text-decoration-none bottom-link text-white-50">{t("footer.skills")}</a></li>
              <li><a href="#projets" className="text-decoration-none bottom-link text-white-50">{t("footer.projects")}</a></li>
              <li><a href="#contact" className="text-decoration-none bottom-link text-white-50">{t("footer.contact")}</a></li>
            </ul>
          </div>

          {/* Third Column - Follow Us */}
          <div className="col-md-4 h-100 mb-3">
            <h6 className="text-white text-center mb-3">{t("footer.followUs")}</h6>
            <div className="d-flex align-items-center justify-content-center gap-1">
              <a href="https://www.facebook.com/profile.php?id=61550970576526&sk=photos" title='facebook' target="_blank" className="text-white-50">
                <img style={{ width: '45px', height: '45px' }} src="/images/facebook.png" alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com/in/thierry-ramanana-thu-ming-77bb0b291/" title='linkedIn' target="_blank" className="text-white-50">
                <img style={{ width: '45px', height: '45px' }} src="/images/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://wa.me/261327563770" className="text-white-50" title='whatsApp'>
                <img style={{ width: '45px', height: '45px' }} src="/images/whatsapp.png" alt="WhatsApp" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=ramananathumingthierry@gmail.com" title='Gmail' target="_blank" className="text-white-50">
                <img style={{ width: '45px', height: '45px' }} src="/images/gmail.png" alt="Gmail" />
              </a>
              <a href="https://github.com/RamananaThuMingThierry" target="_blank" title='Github' className="btn btn-outline-light btn-icon" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <hr id="footer-divider" className="my-4" />

        <div className="text-center">
          <p className="mb-0 text-white-50">
            &copy; <span className="fw-bold text-success">{new Date().getFullYear()}</span> AntaTech Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;