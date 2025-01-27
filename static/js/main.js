console.log('This site was generated by Hugo.');

document.addEventListener('DOMContentLoaded', function() {
    // Handle navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
        },
        pagination: {
            el: '.testimonial-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });
});


document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.blog-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.blog-next',
            prevEl: '.blog-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
});






    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Check for submitted parameter on page load
        if (window.location.search.includes('submitted=true')) {
            // Show success modal
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
            
            // Clean up URL
            window.history.replaceState({}, document.title, window.location.pathname + '#contact');
            
            // Clear the form
            contactForm.reset();
        }

        // Copy email to hidden field
        const emailInput = document.getElementById('email');
        const emailCopy = document.getElementById('emailCopy');
        if (emailInput && emailCopy) {
            emailInput.addEventListener('input', function(e) {
                emailCopy.value = e.target.value;
            });
        }

        // Handle form submission
        contactForm.addEventListener('submit', function(e) {
            const submitButton = document.getElementById('submitButton');
            const buttonText = submitButton.querySelector('.button-text');
            const buttonLoader = submitButton.querySelector('.button-loader');
            
            // Show loading state
            if (submitButton && buttonText && buttonLoader) {
                submitButton.disabled = true;
                buttonText.classList.add('d-none');
                buttonLoader.classList.remove('d-none');
            }
        });
    }
