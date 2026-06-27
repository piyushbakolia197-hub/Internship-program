document.addEventListener('DOMContentLoaded', () => {
    const smoothLinks = document.querySelectorAll('a[href^="#"]');

    smoothLinks.forEach(link => {
        link.addEventListener('click', event => {
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', event => {
            const fields = [
                { id: 'fullName', label: 'Full Name' },
                { id: 'email', label: 'Email Address' },
                { id: 'phone', label: 'Phone Number' },
                { id: 'desiredRole', label: 'Desired Role' },
                { id: 'portfolio', label: 'Portfolio / LinkedIn' },
                { id: 'availability', label: 'Availability' }
            ];

            const missingFields = fields.filter(field => {
                const input = document.getElementById(field.id);
                return input && !input.value.trim();
            });

            if (missingFields.length > 0) {
                event.preventDefault();
                alert(`Please complete the following fields before submitting: ${missingFields.map(field => field.label).join(', ')}`);
            } else {
                event.preventDefault();
                alert('Application submitted successfully! Thank you for applying.');
            }
        });
    }
});
