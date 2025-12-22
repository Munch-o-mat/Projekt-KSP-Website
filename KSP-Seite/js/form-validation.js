// Form Validation Script
// External JavaScript file for form validation

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
    const successMessage = document.getElementById('success-message');

    // Validation functions
    function validateName(name) {
        if (!name || name.trim().length === 0) {
            return 'Bitte geben Sie Ihren Namen ein.';
        }
        if (name.trim().length < 2) {
            return 'Der Name muss mindestens 2 Zeichen lang sein.';
        }
        if (name.trim().length > 100) {
            return 'Der Name darf maximal 100 Zeichen lang sein.';
        }
        // Check for valid characters (letters, spaces, hyphens, apostrophes)
        const namePattern = /^[a-zA-ZäöüÄÖÜß\s\-']+$/;
        if (!namePattern.test(name.trim())) {
            return 'Der Name darf nur Buchstaben, Leerzeichen, Bindestriche und Apostrophe enthalten.';
        }
        return '';
    }

    function validateEmail(email) {
        if (!email || email.trim().length === 0) {
            return 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
        }
        // Standard email validation pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.trim())) {
            return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        }
        if (email.trim().length > 255) {
            return 'Die E-Mail-Adresse darf maximal 255 Zeichen lang sein.';
        }
        return '';
    }

    function validateSubject(subject) {
        // Subject is optional, but if provided, should be valid
        if (subject && subject.trim().length > 200) {
            return 'Der Betreff darf maximal 200 Zeichen lang sein.';
        }
        return '';
    }

    function validateMessage(message) {
        if (!message || message.trim().length === 0) {
            return 'Bitte geben Sie eine Nachricht ein.';
        }
        if (message.trim().length < 10) {
            return 'Die Nachricht muss mindestens 10 Zeichen lang sein.';
        }
        if (message.trim().length > 2000) {
            return 'Die Nachricht darf maximal 2000 Zeichen lang sein.';
        }
        return '';
    }

    // Display error function
    function showError(inputElement, errorElement, errorMessage) {
        errorElement.textContent = errorMessage;
        errorElement.classList.remove('hidden');
        inputElement.classList.add('border-red-500');
        inputElement.classList.remove('border-white/10');
    }

    // Clear error function
    function clearError(inputElement, errorElement) {
        errorElement.classList.add('hidden');
        errorElement.textContent = '';
        inputElement.classList.remove('border-red-500');
        inputElement.classList.add('border-white/10');
    }

    // Real-time validation on input
    nameInput.addEventListener('blur', () => {
        const error = validateName(nameInput.value);
        if (error) {
            showError(nameInput, nameError, error);
        } else {
            clearError(nameInput, nameError);
        }
    });

    emailInput.addEventListener('blur', () => {
        const error = validateEmail(emailInput.value);
        if (error) {
            showError(emailInput, emailError, error);
        } else {
            clearError(emailInput, emailError);
        }
    });

    subjectInput.addEventListener('blur', () => {
        const error = validateSubject(subjectInput.value);
        if (error) {
            showError(subjectInput, subjectError, error);
        } else {
            clearError(subjectInput, subjectError);
        }
    });

    messageInput.addEventListener('blur', () => {
        const error = validateMessage(messageInput.value);
        if (error) {
            showError(messageInput, messageError, error);
        } else {
            clearError(messageInput, messageError);
        }
    });

    // Form submission handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Hide success message if visible
        successMessage.classList.add('hidden');

        // Validate all fields
        const nameErrorMsg = validateName(nameInput.value);
        const emailErrorMsg = validateEmail(emailInput.value);
        const subjectErrorMsg = validateSubject(subjectInput.value);
        const messageErrorMsg = validateMessage(messageInput.value);

        let hasErrors = false;

        // Display errors
        if (nameErrorMsg) {
            showError(nameInput, nameError, nameErrorMsg);
            hasErrors = true;
        } else {
            clearError(nameInput, nameError);
        }

        if (emailErrorMsg) {
            showError(emailInput, emailError, emailErrorMsg);
            hasErrors = true;
        } else {
            clearError(emailInput, emailError);
        }

        if (subjectErrorMsg) {
            showError(subjectInput, subjectError, subjectErrorMsg);
            hasErrors = true;
        } else {
            clearError(subjectInput, subjectError);
        }

        if (messageErrorMsg) {
            showError(messageInput, messageError, messageErrorMsg);
            hasErrors = true;
        } else {
            clearError(messageInput, messageError);
        }

        // If no errors, show success message
        if (!hasErrors) {
            successMessage.classList.remove('hidden');
            form.reset();
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
        } else {
            // Scroll to first error
            const firstErrorElement = [nameInput, emailInput, subjectInput, messageInput].find(input => {
                const inputId = input.id;
                const errorElement = document.getElementById(inputId + '-error');
                return !errorElement.classList.contains('hidden');
            });
            
            if (firstErrorElement) {
                firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstErrorElement.focus();
            }
        }
    });
});

