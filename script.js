document.addEventListener('DOMContentLoaded', () => {

    // LÓGICA PARA O MENU HAMBÚRGUER (MOBILE)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // LÓGICA PARA ANIMAÇÃO AO ROLAR A PÁGINA (SCROLL)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // --- NOVA LÓGICA PARA O MODAL DE IMAGEM (LIGHTBOX) ---
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');
    const carImages = document.querySelectorAll('.car-image');

    carImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('show');
            modalImg.src = img.src;
        });
    });

    const hideModal = () => {
        modal.classList.remove('show');
    };

    if(closeModal) {
        closeModal.addEventListener('click', hideModal);
    }

    if(modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal();
            }
        });
    }
});
