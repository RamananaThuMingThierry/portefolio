import React, { useState } from 'react';
import { useI18n } from '../../hooks/I18nContext';  // Import du hook de traduction
import { contactApi } from '../../api/contact';

function Contact() {
  const { t } = useI18n();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);  // Nouvel état pour savoir si le formulaire est en cours de soumission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Clear errors before submitting the form
  setErrors({});
  setIsLoading(true);  // Activer l'animation de chargement avant d'envoyer la requête

  try {
    const response = await contactApi.send(formData);

      setSuccessMessage(response.data.message);
      setFormData({
        name: '',
        email: '',
        message: ''
      });

  } catch (error) {
      setErrors(error.response.data.errors); 
  } finally {
    setIsLoading(false);  // Désactiver l'animation de chargement après la réponse
  }
};

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-uppercase text-white mb-2">{t("contact.title")}</h2>
          <div className="mx-auto contact-underline"></div>
        </div>

        <p className="text-center text-white-50 mb-5">{t("contact.subtitle")}</p>

        <div className="row align-items-stretch">
          <div className="col-md-6 mb-3">
            <div className="card h-100 border-0" style={{ backgroundColor: 'var(--color-bg-tertiaire)' }}>
              <div className="card-body d-flex flex-column">

                <h4 className="text_color mb-1">{t("contact.contactMe")}</h4>
                <span className="contact-underline mb-2"></span>
                <p className="text-white-50">
                  {t("contact.contactInfo")}
                </p>

                {/* Email */}
                <div className="d-flex align-items-center mb-3">
                  <div className="contact_card_icon rounded-2 d-flex align-items-center justify-content-center me-3">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold text-white">{t("contact.emailTitle")}</h6>
                    <a href="mailto:ramananathumingthierry@gmail.com" className="text-white-50">
                      ramananathumingthierry@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-center mb-3">
                  <div className="contact_card_icon rounded-2 d-flex align-items-center justify-content-center me-3">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold text-white">{t("contact.phoneTitle")}</h6>
                    <a href="tel:+261327563770" className="text-white-50">
                      +261 32 756 3770
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="d-flex align-items-center mb-3">
                  <div className="contact_card_icon rounded-2 d-flex align-items-center justify-content-center me-3">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold text-white">{t("contact.addressTitle")}</h6>
                    <p className="text-white-50 mb-0">
                      VT 29 RAI Bis Ampahateza, Antananarivo, Madagascar
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-auto border border-danger rounded-2 p-3">
                  <h4 className="text-white">{t("contact.availabilityTitle")}</h4>
                  <p className="mb-2 text-white-50">{t("contact.availabilityText")}</p>
                  <span className="rounded-pill badge bg-success">{t("contact.available")}</span>
                </div>

              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card shadow-sm bg-light h-100">
              {successMessage && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  {successMessage}
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              )}
              <div className="card-body">
                <form onSubmit={handleSubmit}>
<div className="mb-3">
  <label htmlFor="name" className="form-label">{t("contact.nameLabel")}</label>
  <input
    type="text"
    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
  />
  {errors.name && <div className="invalid-feedback">{errors.name.join(', ')}</div>}  {/* Affichage des erreurs détaillées */}
</div>

<div className="mb-3">
  <label htmlFor="email" className="form-label">{t("contact.emailLabel")}</label>
  <input
    type="email"
    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
  />
  {errors.email && <div className="invalid-feedback">{errors.email.join(', ')}</div>}  {/* Affichage des erreurs détaillées */}
</div>

<div className="mb-3">
  <label htmlFor="message" className="form-label">{t("contact.messageLabel")}</label>
  <textarea
    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
    id="message"
    name="message"
    rows="5"
    value={formData.message}
    onChange={handleChange}
  />
  {errors.message && <div className="invalid-feedback">{errors.message.join(', ')}</div>}  {/* Affichage des erreurs détaillées */}
</div>

                  {/* Bouton Envoyer */}
                  <button type="submit" className="w-100 btn btn-sm btn-success" disabled={isLoading}>
                    {isLoading ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                      t("contact.submitButton")
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;