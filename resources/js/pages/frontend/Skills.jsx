import React from 'react';
import { useI18n } from '../../hooks/I18nContext';  // Import du hook de traduction

function Skills() {
  const { t } = useI18n();  // Utilisation du hook useI18n pour récupérer la fonction de traduction

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="text-white fw-bold mb-2">{t("skills.title")}</h2>
          <div className="mx-auto skills-underline"></div>
        </div>

        {/* Subtitle */}
        <p className="text-center text-white-50 mb-5">
          {t("skills.subtitle")}
        </p>

        <div className="row g-4">

          {/* Frontend */}
          <div className="col-md-6">
            <div className="skills-card h-100">
              <div className="skills-card__head">
                <div className="skills-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <div>
                  <h6 className="fw-bold skills-title mb-0">{t("skills.frontend.title")}</h6>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-top"><span>React</span><span>70%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '70%' }}></div></div>
              </div>

              <div className="skill-item">
                <div className="skill-top"><span>HTML/CSS</span><span>85%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '85%' }}></div></div>
              </div>

              <div className="skill-item">
                <div className="skill-top"><span>InertiaJS</span><span>83%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '83%' }}></div></div>
              </div>

              <div className="skill-item">
                <div className="skill-top"><span>JavaScript</span><span>67%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '67%' }}></div></div>
              </div>

              <div className="skill-item mb-0">
                <div className="skill-top"><span>Bootstrap</span><span>87%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '87%' }}></div></div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="col-md-6">
            <div className="skills-card h-100">
              <div className="skills-card__head">
                <div className="skills-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div>
                  <h6 className="fw-bold skills-title mb-0">{t("skills.backend.title")}</h6>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-top"><span>Laravel</span><span>95%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '95%' }}></div></div>
              </div>

              <div className="skill-item">
                <div className="skill-top"><span>PHP</span><span>85%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '85%' }}></div></div>
              </div>

              <div className="skill-item">
                <div className="skill-top"><span>MySQL</span><span>83%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '83%' }}></div></div>
              </div>

              <div className="skill-item mb-0">
                <div className="skill-top"><span>API Rest</span><span>67%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '67%' }}></div></div>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="col-md-6">
            <div className="skills-card h-100">
              <div className="skills-card__head">
                <div className="skills-icon">
                  <i className="fas fa-mobile-screen-button"></i>
                </div>
                <div>
                  <h6 className="fw-bold skills-title mb-0">{t("skills.mobile.title")}</h6>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-top"><span>Flutter</span><span>95%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '95%' }}></div></div>
              </div>

              <div className="skill-item">
                <div className="skill-top"><span>Dart</span><span>85%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '85%' }}></div></div>
              </div>

              <div className="skill-item mb-0">
                <div className="skill-top"><span>Firebase</span><span>83%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '83%' }}></div></div>
              </div>
            </div>
          </div>

          {/* Tools & Design */}
          <div className="col-md-6">
            <div className="skills-card h-100">
              <div className="skills-card__head">
                <div className="skills-icon">
                  <i className="fas fa-pen-nib"></i>
                </div>
                <div>
                  <h6 className="fw-bold skills-title mb-0">{t("skills.toolsDesign.title")}</h6>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-top"><span>Figma</span><span>95%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '95%' }}></div></div>
              </div>

              <div className="skill-item">
                <div className="skill-top"><span>Canvas</span><span>85%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '85%' }}></div></div>
              </div>

              <div className="skill-item">
                <div className="skill-top"><span>Git & Github</span><span>83%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '83%' }}></div></div>
              </div>

              <div className="skill-item">
                <div className="skill-top"><span>Docker</span><span>67%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '67%' }}></div></div>
              </div>

              <div className="skill-item mb-0">
                <div className="skill-top"><span>chatGPT</span><span>67%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '67%' }}></div></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;