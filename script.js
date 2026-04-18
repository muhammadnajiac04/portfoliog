// ── Accordion Logic ──
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        const currentlyActive = document.querySelector('.accordion-item.active');
        if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove('active');
        }
        item.classList.toggle('active');
    });
});

// ── Custom Cursor ──
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});

// ── Navbar Scroll Effect ──
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    nav.style.boxShadow = window.scrollY > 50
        ? '0 10px 30px rgba(0,0,0,0.05)'
        : 'none';
});

// ── Mobile Menu ──
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function openMenu() {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
}

if (menuToggle) menuToggle.addEventListener('click', openMenu);
if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMenu);

// Close menu when a nav link is tapped
mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// ── Form Submission ──
const form = document.querySelector('form');
const modal = document.getElementById('success-modal');
const closeModal = document.getElementById('close-modal');

if (form) {
    form.addEventListener('submit', () => {
        setTimeout(() => {
            modal.style.display = 'flex';
            form.reset();
        }, 500);
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Close modal on backdrop click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});