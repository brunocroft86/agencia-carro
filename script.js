document.addEventListener('DOMContentLoaded', () => {

    // LÓGICA PARA O MENU HAMBÚRGUER (MOBILE)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Muda o ícone de barras para 'X' e vice-versa
        const icon = hamburger.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fecha o menu ao clicar em um link (útil em one-page sites)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // LÓGICA PARA ANIMAÇÃO AO ROLAR A PÁGINA (SCROLL)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // O elemento é considerado 'visível' quando 10% dele está na tela
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento está visível
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Para a observação depois que a animação acontece uma vez
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos que devem ser animados e os observa
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

});
