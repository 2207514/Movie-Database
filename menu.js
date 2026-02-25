// App script: showSection and mobile menu toggle
function showSection(sectionId, evt) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.classList.add('active');

    if (evt && evt.target) evt.target.classList.add('active');

    // close mobile menu after navigation
    const mobileMenu = document.getElementById('mobileMenu');
    const menuToggle = document.getElementById('menuToggle');
    if (mobileMenu && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        if (menuToggle) menuToggle.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuToggle || !mobileMenu) {
        // nothing to do if elements missing
        return;
    }

    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    // close mobile menu when clicking outside (optional)
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            if (mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                menuToggle.classList.remove('active');
            }
        }
    });
});
