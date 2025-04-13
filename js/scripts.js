// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
function initMobileMenu() {
    const nav = document.querySelector('nav');
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    nav.insertBefore(mobileMenuButton, nav.firstChild);

    mobileMenuButton.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    });
}

// FAQ Accordion
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');
            
            // Close all other answers
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });
            
            // Toggle current answer
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
}

// Smooth scroll to investment section
function initSmoothScroll() {
    const buttons = document.querySelectorAll('.cta-button, .primary-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const investmentSection = document.querySelector('.investment');
            if (investmentSection) {
                investmentSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initFAQAccordion();
    initSmoothScroll();
    
    // Add animation to feature cards
    const featureCards = document.querySelectorAll('.feature-block');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Add animation to FAQ cards
    const faqCards = document.querySelectorAll('.faq-card');
    faqCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Handle pricing radio buttons
    const paymentRadios = document.querySelectorAll('input[name="payment-frequency"]');
    const monthlyPrice = document.querySelector('.monthly-price');
    const annualPrice = document.querySelector('.annual-price');
    const annualDiscount = document.querySelector('.annual-discount');

    paymentRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'monthly') {
                monthlyPrice.style.display = 'block';
                annualPrice.style.display = 'none';
                annualDiscount.style.display = 'none';
            } else {
                monthlyPrice.style.display = 'none';
                annualPrice.style.display = 'block';
                annualDiscount.style.display = 'block';
            }
        });
    });

    const subscribeButton = document.getElementById('subscribe-button');
    const monthlyRadio = document.querySelector('input[value="monthly"]');
    const annualRadio = document.querySelector('input[value="annual"]');
    
    // URLs dos links de pagamento
    const monthlyUrl = 'https://buy.stripe.com/cN29DE8RYcxhbGU28b';
    const annualUrl = 'https://buy.stripe.com/3csdTUgkq2WH7qE5km';
    
    // Função para atualizar o link do botão
    function updateButtonLink() {
        if (monthlyRadio.checked) {
            subscribeButton.onclick = function() {
                window.open(monthlyUrl, '_blank');
            };
        } else {
            subscribeButton.onclick = function() {
                window.open(annualUrl, '_blank');
            };
        }
    }
    
    // Adiciona event listeners para os radio buttons
    monthlyRadio.addEventListener('change', updateButtonLink);
    annualRadio.addEventListener('change', updateButtonLink);
    
    // Inicializa o link do botão
    updateButtonLink();
});