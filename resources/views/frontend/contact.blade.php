<section id="contact" class="contact-section py-5">
    <div class="container">
        <!-- Title -->
        <div class="text-center mb-4">
            <h2 class="fw-bold text-uppercase text-white mb-2">CONTACT</h2>
            <div class="mx-auto contact-underline"></div>
        </div>

        <!-- Subtitle -->
        <p class="text-center text-white-50 mb-5">
            Un projet en tête ? N'hésitez pas à me contacter via le formulaire ci-dessous ou par email.
        </p>

        <!-- Contact -->
        <div class="row align-items-stretch">
            <div class="col-md-6 mb-3">
                <div class="card h-100 border-0" style="background-color: var(--color-bg-tertiaire);">
                    <div class="card-body d-flex flex-column">

                        <h3 class="text-success">Contactez-moi</h3>

                        <p class="text-white">
                            Je suis à votre écoute pour toute demande de renseignement ou de collaboration.
                        </p>

                        <div class="d-flex align-items-center mb-3">
                            <div class="bg-primary rounded-2 d-flex align-items-center justify-content-center me-3"
                                style="width: 50px; height: 50px;">
                                <i class="fas fa-envelope text-white"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold text-white">Email</h6>
                                <a href="mailto:contact@antatech-solution.com" class="text-white-50">
                                    contact@antatech-solution.com
                                </a>
                            </div>
                        </div>

                        <div class="d-flex align-items-center mb-3">
                            <div class="bg-primary rounded-2 d-flex align-items-center justify-content-center me-3"
                                style="width: 50px; height: 50px;">
                                <i class="fas fa-phone text-white"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold text-white">Téléphone</h6>
                                <a href="tel:+261327563770" class="text-white-50">
                                    +261 32 756 3770
                                </a>
                            </div>
                        </div>

                        <div class="d-flex align-items-center mb-3">
                            <div class="bg-primary rounded-2 d-flex align-items-center justify-content-center me-3"
                                style="width: 50px; height: 50px;">
                                <i class="fas fa-map-marker-alt text-white"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold text-white">Adresse</h6>
                                <p class="text-white-50 mb-0">
                                    VT 29 RAI Bis Ampahateza, Antananarivo, Madagascar
                                </p>
                            </div>
                        </div>

                        <!-- pousse la disponibilité en bas -->
                        <div class="mt-auto border border-danger rounded-2 p-3">
                            <h4 class="text-white">Disponibilité</h4>
                            <p class="mb-2 text-white-50">Je suis actuellement disponible pour discuter de votre projet.</p>
                            <span class="rounded-pill badge bg-success">Disponible</span>
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-3">
                <div class="card shadow-sm bg-light h-100">
                    <div class="card-body">
                        <form method="POST" action="">
                            @csrf
                            <div class="mb-3">
                                <label for="name" class="form-label">Nom</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="w-100 btn btn-primary">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Map -->
        <div class="col-12">
            <x-maps-google
                :markers="[
                    ['lat' => -18.928512395352502, 'long' => 47.560960775006436],
                ]"
                :centerToBoundsCenter="true"
                :zoomLevel="14"
                class="rounded-1 shadow-sm"
                style="width: 100%; height: 400px;"
            ></x-maps-google>
        </div>
    </div>
</section>
