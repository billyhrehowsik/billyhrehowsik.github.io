/**
 * Billy Hrehowsik Portfolio - JavaScript
 * Handles navigation, theme switching, and interactive elements
 */

// ===================== DOM ELEMENTS =====================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-link');
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;
const backToTopBtn = document.querySelector('.back-to-top');

// ===================== NAVIGATION =====================

/**
 * Toggle mobile navigation menu
 */
function toggleNavigation() {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
}

/**
 * Close navigation menu
 */
function closeNavigation() {
    navToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('active');
}

/**
 * Handle navigation item clicks
 */
function handleNavClick(e) {
    const href = this.getAttribute('href');

    if (href.startsWith('#')) {
        e.preventDefault();
        closeNavigation();

        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            updateActiveNav(href);
        }
    }
}

/**
 * Update active navigation indicator
 */
function updateActiveNav(targetId) {
    navItems.forEach(item => item.classList.remove('active'));

    const activeItem = document.querySelector(`a[href="${targetId}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

/**
 * Update active nav based on scroll position
 */
function updateNavOnScroll() {
    let current = '';

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    if (current) {
        updateActiveNav(`#${current}`);
    }
}

// Navigation event listeners
navToggle.addEventListener('click', toggleNavigation);
navItems.forEach(item => item.addEventListener('click', handleNavClick));

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        closeNavigation();
    }
});

// ===================== THEME SWITCHING =====================

/**
 * Initialize theme from localStorage or system preference
 */
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Use system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }
}

/**
 * Set theme and update UI
 */
function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update theme toggle icon
    const icon = themeToggle.querySelector('.theme-icon');
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
}

/**
 * Toggle theme
 */
function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

themeToggle.addEventListener('click', toggleTheme);

// ===================== BACK TO TOP =====================

/**
 * Show/hide back to top button based on scroll position
 */
function updateBackToTopVisibility() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

/**
 * Scroll to top smoothly
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

backToTopBtn.addEventListener('click', scrollToTop);
window.addEventListener('scroll', updateBackToTopVisibility);

// ===================== SCROLL EVENTS =====================

/**
 * Handle scroll events for navigation and animations
 */
window.addEventListener('scroll', () => {
    updateNavOnScroll();
}, { passive: true });

// ===================== INITIALIZATION =====================

/**
 * Initialize all components on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    updateNavOnScroll();
});

// Handle system theme preference changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// ===================== ACCESSIBILITY =====================

/**
 * Handle keyboard navigation
 */
document.addEventListener('keydown', (e) => {
    // Close mobile nav on Escape
    if (e.key === 'Escape') {
        closeNavigation();
    }
});

// ===================== UTILITY FUNCTIONS =====================

/**
 * Smooth scroll polyfill for older browsers
 */
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothscroll = () => {
        const t = -window.scrollY;
        let e = 0;
        const n = () => {
            e < 1 &&
                (e += window.requestAnimationFrame(n) / 468,
                window.scrollBy(0, t * (1 - Math.sqrt(1 - e * e))));
        };
        n();
    };

    window.addEventListener('scroll', smoothscroll);
}

// ===================== LAZY LOADING =====================

/**
 * Initialize Intersection Observer for animations and lazy loading
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('section, .project-card, .skill-category').forEach(el => {
    el.style.opacity = '1';
});

// ===================== EXTERNAL LINK HANDLING =====================

/**
 * Add rel attributes to external links for security
 */
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ===================== CONSOLE MESSAGE =====================

/**
 * Friendly console message
 */
console.log(
    '%c👋 Welcome to Billy Hrehowsik\'s Portfolio!',
    'font-size: 16px; font-weight: bold; color: #00d4ff;'
);
console.log(
    '%cCheck out the source code on GitHub: https://github.com/billyhrehowsik',
    'font-size: 12px; color: #a0a0a0;'
);
