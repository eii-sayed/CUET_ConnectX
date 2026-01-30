// =====================================================
// CUET ConnectX - Main JavaScript File
// =====================================================

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// FAQ Toggle
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Logout Function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = 'index.html';
    }
}

// Share Profile Function
function shareProfile() {
    if (navigator.share) {
        navigator.share({
            title: 'CUET ConnectX Profile',
            text: 'Check out my profile on CUET ConnectX',
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Profile link copied to clipboard!');
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add animation to elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card, .objective-card, .job-card, .scholarship-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Check if user is logged in (for demonstration)
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    // Update navigation based on login status
    if (isLoggedIn) {
        const navActions = document.querySelector('.nav-actions');
        if (navActions && !navActions.querySelector('.user-menu')) {
            // User is logged in - could show user menu
            console.log('User logged in');
        }
    }
});

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateStudentId(studentId) {
    const re = /^[0-9]{7}$/;
    return re.test(studentId);
}

function getUserType(studentId) {
    if (!validateStudentId(studentId)) return null;
    
    const firstTwoDigits = parseInt(studentId.substring(0, 2));
    const batch = 2000 + firstTwoDigits;
    
    if (firstTwoDigits >= 20) {
        return {
            type: 'student',
            batch: batch,
            label: 'Current Student'
        };
    } else {
        return {
            type: 'alumni',
            batch: batch,
            label: 'Alumni'
        };
    }
}

// Local Storage Helper Functions
const StorageHelper = {
    setUser: (userData) => {
        localStorage.setItem('currentUser', JSON.stringify(userData));
        localStorage.setItem('isLoggedIn', 'true');
    },
    
    getUser: () => {
        const userData = localStorage.getItem('currentUser');
        return userData ? JSON.parse(userData) : null;
    },
    
    clearUser: () => {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedIn');
    },
    
    isLoggedIn: () => {
        return localStorage.getItem('isLoggedIn') === 'true';
    }
};

// Theme Toggle Functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Load theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        validateStudentId,
        getUserType,
        StorageHelper,
        toggleTheme
    };
}
