<script src="{{ asset('vendor/bootstrap/js/bootstrap.min.js') }}" defer></script>
<script>
    document.addEventListener("DOMContentLoaded", function() {
        const navbar = document.querySelector(".navbar");
        window.addEventListener("scroll", function() {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    });
</script>
