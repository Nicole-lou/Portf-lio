// Menu Mobile Collapse - Responsivo para todas as telas
document.addEventListener('DOMContentLoaded', function() {
    const btnMenu = document.getElementById('btnMenu');
    const navbarCollapse = document.getElementById('navbar-collapse-toggle');
    const navLinks = navbarCollapse.querySelectorAll('.nav-link');

    // Toggle menu ao clicar no botão
    btnMenu.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
        btnMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarCollapse.classList.remove('show');
            btnMenu.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar-collapse') && !event.target.closest('.btn-menu')) {
            navbarCollapse.classList.remove('show');
            btnMenu.classList.remove('active');
        }
    });
});
