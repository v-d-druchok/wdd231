document.addEventListener('DOMContentLoaded', () => {
    const timestampInput = document.getElementById('timestamp');

    const urlParams = new URLSearchParams(window.location.search);

    const displayFields = [
        { id: 'firstName', key: 'firstName' },
        { id: 'question', key: 'question' },
        { id: 'email', key: 'email' },
    ];

    displayFields.forEach(field => {
        const element = document.getElementById(field.id);
        const value = urlParams.get(field.key);

        if (element && value) {
            let prettyValue = value;

            if (field.key === 'firstName') {
                prettyValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
            }

            element.textContent = prettyValue;
        }
    });

    // Set current timestamp directly (not from URL)
    if (timestampInput) {
        const now = new Date();
        const formatted = now.toLocaleString('en-GB', {
            day: '2-digit', month: 'long', year: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false
        });
        timestampInput.textContent = formatted;
    }
});

