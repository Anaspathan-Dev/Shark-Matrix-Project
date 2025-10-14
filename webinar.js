// Mobile menu toggle function
function toggleMobileMenu() {
    const navItems = document.getElementById('navItems');
    navItems.classList.toggle('show');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navItems = document.getElementById('navItems');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (!navItems.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        navItems.classList.remove('show');
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', function() {
    const navItems = document.getElementById('navItems');
    if (window.innerWidth > 991) {
        navItems.classList.remove('show');
    }
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    // grabCursor: true,
    speed: 600,
    
    // Pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    
    // Navigation arrows
    navigation: {
        nextEl: ".fa-greater-than",
        prevEl: ".fa-less-than",
    },
    
    // Breakpoints for responsive behavior
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 25,
            centeredSlides: true,
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: true,
        }
    },
    
    // Effect for smooth scaling
    on: {
        init: function () {
            this.slides.forEach((slide) => {
                slide.style.transition = "transform 0.3s ease, opacity 0.3s ease";
            });
        },
        slideChange: function () {
            // Ensure active slide has proper scaling
            this.slides.forEach((slide, index) => {
                if (index === this.activeIndex) {
                    slide.style.transform = "scale(1)";
                    slide.style.opacity = "1";
                } else if (index === this.activeIndex - 1 || index === this.activeIndex + 1) {
                    slide.style.transform = "scale(0.9)";
                    slide.style.opacity = "0.8";
                } else {
                    slide.style.transform = "scale(0.85)";
                    slide.style.opacity = "0.6";
                }
            });
        }
    }
});

// Reinitialize swiper on window resize for better responsiveness
window.addEventListener('resize', function() {
    swiper.update();
});


