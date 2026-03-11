import React from 'react';
import { useI18n } from '../../hooks/I18nContext';  // Import du hook de traduction

function Projets() {
  const { t } = useI18n();  // Utilisation du hook useI18n pour récupérer la fonction de traduction

  return (
    <section id="projets" className="section-project py-5">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-2 titre-sections">{t("projects.title")}</h2>
          <div className="mx-auto project-underline"></div>
        </div>
        
        <p className="text-center project-description mb-5">
          {t("projects.subtitle")}
        </p>
        
        <div className="row">
          {/* Projet 1 */}
          <div className="col-md-4 mb-4">
            <a href="http://antatech-solutions.com/" target="_blank" rel="noopener" className="flip-link" title="Cliquer pour ouvrir le projet">
              <div className="flip-card">
                <div className="flip-card-inner">

                  {/* FACE AVANT */}
                  <div className="flip-card-front card shadow-sm">
                    <img src="/projets/portefolio.png" className="card-img-top" alt="Logo projet" />
                    <div className="card-body">
                      <h5 className="card-title mb-2">{t("projects.portfolioTitle")}</h5>
                      <div className="d-flex flex-wrap gap-1">
                        <span className="badge_tag_project">Laravel</span>
                        <span className="badge_tag_project">React</span>
                        <span className="badge_tag_project">Bootstrap</span>
                        <span className="badge_tag_project">MySQL</span>
                      </div>
                    </div>
                  </div>

                  {/* FACE ARRIERE */}
                  <div className="flip-card-back card shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text_color">{t("projects.portfolioTitle")}</h5>
                      <p className="card-text">
                        {t("projects.portfolioDescription1")}
                      </p>
                      <p className="card-text">
                        {t("projects.portfolioDescription2")}
                      </p>
                      <p className="card-text">
                        {t("projects.portfolioDescription3")}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </a>
          </div>

          {/* Projet 2 */}
          <div className="col-md-4 mb-4">
            <a href="https://aeutna.antatech-solutions.com/" target="_blank" rel="noopener" className="flip-link" title="Cliquer pour ouvrir le projet">
              <div className="flip-card">
                <div className="flip-card-inner">

                  {/* FACE AVANT */}
                  <div className="flip-card-front card shadow-sm">
                    <img src="/projets/aeutna.png" className="card-img-top" alt="Logo projet" />
                    <div className="card-body">
                      <h5 className="card-title mb-2">A.E.U.T.N.A</h5>
                      <div className="d-flex flex-wrap gap-1">
                        <span className="badge_tag_project">Laravel</span>
                        <span className="badge_tag_project">Bootstrap</span>
                        <span className="badge_tag_project">Ajax</span>
                        <span className="badge_tag_project">MySQL</span>
                      </div>
                    </div>
                  </div>

                  {/* FACE ARRIERE */}
                  <div className="flip-card-back card shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text_color">{t("projects.aeutnaTitle")}</h5>
                      <p>{t("projects.aeutnaSubtitle")}</p>
                      <p className="card-text">
                        {t("projects.aeutnaDescription")}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </a>
          </div>

          {/* Projet 3 */}
          <div className="col-md-4 mb-4">
            <a href="https://world-of-madagascar-tour.com/" target="_blank" rel="noopener" className="flip-link">
              <div className="flip-card">
                <div className="flip-card-inner">

                  {/* FACE AVANT */}
                  <div className="flip-card-front card shadow-sm">
                    <img src="/projets/wofmdg.png" className="card-img-top" alt="Logo projet" />
                    <div className="card-body">
                      <h5 className="card-title mb-2">World of Madagascar Tour</h5>
                      <div className="d-flex flex-wrap gap-1">
                        <span className="badge_tag_project">Laravel</span>
                        <span className="badge_tag_project">Bootstrap</span>
                        <span className="badge_tag_project">Ajax</span>
                        <span className="badge_tag_project">MySQL</span>
                      </div>
                    </div>
                  </div>

                  {/* FACE ARRIERE */}
                  <div className="flip-card-back card shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text_color">{t("projects.wofmTitle")}</h5>
                      <p className="card-text">
                        {t("projects.wofmDescription")}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </a>
          </div>

          {/* Projet 4 */}
          <div className="col-md-4 mb-4">
            <a href="https://technobar.antatech-solutions.com/" target="_blank" rel="noopener" className="flip-link">
              <div className="flip-card">
                <div className="flip-card-inner">

                  {/* FACE AVANT */}
                  <div className="flip-card-front card shadow-sm">
                    <img src="/projets/technobar.png" className="card-img-top" alt="Logo projet" />
                    <div className="card-body">
                      <h5 className="card-title mb-2">TechnoBar</h5>
                      <div className="d-flex flex-wrap gap-1">
                        <span className="badge_tag_project">Laravel</span>
                        <span className="badge_tag_project">Bootstrap</span>
                        <span className="badge_tag_project">Ajax</span>
                        <span className="badge_tag_project">MySQL</span>
                      </div>
                    </div>
                  </div>

                  {/* FACE ARRIERE */}
                  <div className="flip-card-back card shadow-sm">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text_color">{t("projects.technobarTitle")}</h5>
                      <p className="card-text">
                        {t("projects.technobarDescription")}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projets;