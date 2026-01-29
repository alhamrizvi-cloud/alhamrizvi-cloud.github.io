/**
 * ALHAM RIZVI PORTFOLIO - MAIN JAVASCRIPT
 * Version: 1.0
 * Author: Alham Rizvi
 */

// Theme Management
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = document.querySelector('.theme-icon');
        this.html = document.documentElement;
        this.init();
    }

    init() {
        // Check for saved theme or use system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else if (systemPrefersDark) {
            this.setTheme('dark');
        }

        // Listen for theme toggle
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    setTheme(theme) {
        this.html.setAttribute('data-theme', theme);
        if (this.themeIcon) {
            this.themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
        }
    }

    toggleTheme() {
        const currentTheme = this.html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        this.setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }
}

// Menu Management
class MenuManager {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.sideMenu = document.getElementById('sideMenu');
        this.menuOverlay = document.getElementById('menuOverlay');
        this.init();
    }

    init() {
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => this.toggleMenu());
        }

        if (this.menuOverlay) {
            this.menuOverlay.addEventListener('click', () => this.toggleMenu());
        }

        // Close menu on link click
        document.querySelectorAll('.menu-link').forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href').startsWith('#')) {
                    this.toggleMenu();
                }
            });
        });

        // Close menu on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.sideMenu.classList.contains('active')) {
                this.toggleMenu();
            }
        });
    }

    toggleMenu() {
        this.menuToggle.classList.toggle('active');
        this.sideMenu.classList.toggle('active');
        this.menuOverlay.classList.toggle('active');
        document.body.style.overflow = this.sideMenu.classList.contains('active') ? 'hidden' : '';
    }
}

// Navbar Scroll Effect
class NavbarManager {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.init();
    }

    init() {
        if (!this.navbar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        });
    }
}

// Scroll Reveal Animation
class ScrollReveal {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, this.observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    }
}

// Swipe Carousel (for About section)
class SwipeCarousel {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.slides = this.container.querySelectorAll('.about-slide');
        this.dots = this.container.parentElement.querySelectorAll('.swipe-dot');
        this.slidesContainer = this.container.querySelector('.about-slides');
        this.currentSlide = 0;
        this.init();
    }

    init() {
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });

        // Mouse drag support
        let isDragging = false;
        let startPos = 0;

        this.container.addEventListener('mousedown', (e) => {
            isDragging = true;
            startPos = e.pageX;
            this.container.style.cursor = 'grabbing';
        });

        this.container.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
        });

        this.container.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            const movedBy = e.pageX - startPos;
            this.container.style.cursor = 'grab';

            if (Math.abs(movedBy) > 50) {
                if (movedBy < 0 && this.currentSlide < this.slides.length - 1) {
                    this.goToSlide(this.currentSlide + 1);
                } else if (movedBy > 0 && this.currentSlide > 0) {
                    this.goToSlide(this.currentSlide - 1);
                }
            }
        });

        this.container.addEventListener('mouseleave', () => {
            isDragging = false;
            this.container.style.cursor = 'grab';
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' && this.currentSlide > 0) {
                this.goToSlide(this.currentSlide - 1);
            } else if (e.key === 'ArrowRight' && this.currentSlide < this.slides.length - 1) {
                this.goToSlide(this.currentSlide + 1);
            }
        });
    }

    handleSwipe(startX, endX) {
        const threshold = 50;
        if (endX < startX - threshold && this.currentSlide < this.slides.length - 1) {
            this.goToSlide(this.currentSlide + 1);
        } else if (endX > startX + threshold && this.currentSlide > 0) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    goToSlide(index) {
        this.currentSlide = index;
        if (this.slidesContainer) {
            this.slidesContainer.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        }
        
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentSlide);
        });
    }
}

// Smooth Scroll
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#' && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
}

// Search Functionality
class SearchManager {
    constructor() {
        this.searchBar = document.querySelector('.search-bar');
        this.init();
    }

    init() {
        if (!this.searchBar) return;

        this.searchBar.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            this.search(searchTerm);
        });
    }

    search(term) {
        if (term.length < 2) {
            this.clearSearch();
            return;
        }

        // Search in projects
        document.querySelectorAll('.project-card').forEach(card => {
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.project-description')?.textContent.toLowerCase() || '';
            
            if (title.includes(term) || description.includes(term)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });

        // Search in skills
        document.querySelectorAll('.skill-card').forEach(card => {
            const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = card.querySelector('p')?.textContent.toLowerCase() || '';
            
            if (title.includes(term) || description.includes(term)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    clearSearch() {
        document.querySelectorAll('.project-card, .skill-card').forEach(card => {
            card.style.display = '';
        });
    }
}

// Page Load Animation
class PageLoader {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    }
}

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    new ThemeManager();
    new MenuManager();
    new NavbarManager();
    new ScrollReveal();
    new SmoothScroll();
    new SearchManager();
    new PageLoader();
    
    // Initialize swipe carousel if it exists
    if (document.getElementById('aboutContainer')) {
        new SwipeCarousel('aboutContainer');
    }

    // Add loaded class after a short delay for animations
    setTimeout(() => {
        document.body.classList.add('animations-ready');
    }, 100);
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ThemeManager,
        MenuManager,
        NavbarManager,
        ScrollReveal,
        SwipeCarousel,
        SmoothScroll,
        SearchManager
    };
}
