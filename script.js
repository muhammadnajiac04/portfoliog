// Accordion Logic
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        // Close other items
        const currentlyActive = document.querySelector('.accordion-item.active');
        if (currentlyActive && currentlyActive !== item) {
            currentlyActive.classList.remove('active');
        }

        // Toggle current
        item.classList.toggle('active');
    });
});

// Custom Cursor (optional simple follower)
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

/* Handle Form Submission */
const form = document.querySelector('form');
const modal = document.getElementById('success-modal');
const closeModal = document.getElementById('close-modal');

if (form) {
    form.addEventListener('submit', () => {
        // Show modal after a small delay to ensure the request is sent to the iframe
        setTimeout(() => {
            modal.style.display = 'flex';
            form.reset();
        }, 500);
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        // Reload the page to clear any history/state if needed, or just stay
        // window.location.reload(); 
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
