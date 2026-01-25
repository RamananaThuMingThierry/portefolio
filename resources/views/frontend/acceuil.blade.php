<nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">

        <!-- Logo -->
        <a class="navbar-brand fw-bold" href="#">
           <img src="{{ asset('logo/logo.png') }}" alt="Logo AntaTech Solution" width="50" height="50">
        </a>

        <!-- Burger menu -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Liens -->
        <div class="collapse navbar-collapse" id="mainNavbar">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                <li class="nav-item">
                    <a class="nav-link active" href="#accueil">Accueil</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#apropos">À propos</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#services">Services</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#competences">Compétences</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#projets">Projets</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">

                        <!-- Icône langue -->
                        🌐 <span class="ms-2">Langue</span>
                    </a>

                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="?lang=fr">
                                🇫🇷 <span class="ms-2">Français</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item d-flex align-items-center" href="?lang=en">
                                🇬🇧 <span class="ms-2">English</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="{{ route('cv.download') }}">
                        <i class="fas fa-file-download me-1"></i> Télécharger CV
                    </a>
                </li>
            
            </ul>
        </div>
    </div>
</nav>

<section id="accueil" class="hero d-flex align-items-center">
    <div class="container">
        <div class="row align-items-center">

            <!-- Texte -->
            <div class="col-md-6 text-center text-md-start mb-4 mb-md-0">
                <h1 class="fw-bold">
                    DÉVELOPPEUR WEB & MOBILE<br>
                    <span>FULL STACK</span>
                </h1>

                <p class="mt-3">
                    Passionné par la création d'applications web modernes et performantes.
                    Spécialisé en React, Laravel et développement mobile avec Flutter.
                </p>

                <div class="mt-4">
                    <a href="#contact" class="btn btn-light me-3 px-4">Me contacter</a>
                    <a href="#projets" class="btn btn-projects px-4">Mes projets</a>
                </div>
            </div>

            <!-- Image -->
            <div class="col-md-6 text-center">
                <div class="hero-img-wrap">
                    <img src="{{ asset('images/profil.jpg') }}" alt="Développeur"
                        class="img-fluid hero-img">
                </div>
            </div>


        </div>
        <div class="row mt-5">
            <div class="col d-flex justify-content-center gap-3">

                <!-- GitHub -->
                <a href="https://github.com/RamananaThuMingThierry" target="_blank" class="btn btn-outline-light btn-icon"
                    aria-label="GitHub">
                    <i class="fab fa-github"></i>
                </a>

                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/in/thierry-ramanana-thu-ming-77bb0b291/" target="_blank" class="btn btn-outline-light btn-icon"
                    aria-label="LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
                </a>

                <!-- Email -->
                <a href="https://mail.google.com/mail/?view=cm&to=ramananathumingthierry@gmail.com"
                    target="_blank"
                    class="btn btn-outline-light btn-icon"
                    aria-label="Email">
                    <i class="fas fa-envelope"></i>
                </a>
             

            </div>
        </div>
        <div class="row mt-5">
            <div class="col text-center">
                <a href="#contact" class="scroll-down" aria-label="Descendre">
                    <i class="fas fa-chevron-down"></i>
                </a>
            </div>
        </div>
    </div>
</section>
