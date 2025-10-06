// Path to Freedom Coaching - Main JavaScript

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Active navigation highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
});

// Form Validation (for contact form)
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });

        // Email validation
        const emailField = form.querySelector('input[type="email"]');
        if (emailField && emailField.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailField.value)) {
                isValid = false;
                emailField.classList.add('error');
            }
        }

        if (isValid) {
            // Get form data
            const formData = {
                name: form.querySelector('#name').value,
                email: form.querySelector('#email').value,
                phone: form.querySelector('#phone').value || '',
                subject: form.querySelector('#subject').value,
                message: form.querySelector('#message').value
            };

            // Disable submit button and show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            try {
                // Call the HTTP Cloud Function
                const response = await fetch('/api/sendContactEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || 'Unknown error');
                }

                // Success
                alert('Thank you for your message! We have sent you a confirmation email and will respond within 24 hours.');
                form.reset();
            } catch (error) {
                console.error('Error sending message:', error);
                // Show detailed error message
                let errorMessage = 'There was an error sending your message.\n\n';
                errorMessage += 'Error: ' + (error.message || 'unknown') + '\n';
                errorMessage += '\nPlease email us directly at info@pathtofreedom.coach';
                alert(errorMessage);
            } finally {
                // Re-enable submit button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        } else {
            alert('Please fill in all required fields correctly.');
        }
    });
}

// Initialize form validation if contact form exists
if (document.getElementById('contactForm')) {
    validateForm('contactForm');
}

// Stripe Payment Integration Helper
// Note: This is a placeholder. You'll need to add your Stripe publishable key
function initializeStripe() {
    // Example Stripe integration - replace with your actual implementation
    // const stripe = Stripe('your_publishable_key');
    // const elements = stripe.elements();
    // const cardElement = elements.create('card');
    // cardElement.mount('#card-element');
}

// Recovery App Integration Helper
function initializeRecoveryApp() {
    // This would be your custom recovery app integration
    // Could include features like:
    // - Daily check-ins
    // - Progress tracking
    // - Accountability features
    // - Resource access
    console.log('Recovery App integration ready');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if Stripe elements exist on page
    if (document.getElementById('card-element')) {
        initializeStripe();
    }
    
    // Check if recovery app elements exist on page
    if (document.getElementById('recovery-app-container')) {
        initializeRecoveryApp();
    }
});

// Newsletter signup helper
function handleNewsletterSignup(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        if (email) {
            // Here you would integrate with your email service provider
            alert('Thank you for subscribing! Check your email for confirmation.');
            form.reset();
        }
    });
}

// Initialize newsletter form if it exists
if (document.getElementById('newsletterForm')) {
    handleNewsletterSignup('newsletterForm');
}
