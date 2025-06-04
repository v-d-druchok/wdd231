document.addEventListener('DOMContentLoaded', () => {
    const timestampInput = document.getElementById('timestamp');

    if (timestampInput) {
        timestampInput.value = new Date().toLocaleString();
    }

    const urlParams = new URLSearchParams(window.location.search);
    
    const displayFields = [
        { id: 'firstName', key: 'firstName' },
        { id: 'firstNameTitle', key: 'firstName' },
        { id: 'lastName', key: 'lastName' },
        { id: 'email', key: 'email' },
        { id: 'phone', key: 'phone' },
        { id: 'organization', key: 'organization' },
        { id: 'timestamp', key: 'timestamp' }
    ];

    displayFields.forEach(field => {
        const element = document.getElementById(field.id);
        const value = urlParams.get(field.key);

        if (element && value) {
            let prettyValue = value;

            if (field.key === 'firstName' || field.key === 'lastName') {
                prettyValue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
            }
    
            element.textContent = prettyValue;
        }
    });
});

function closeDialog(id) {
    document.getElementById(id).close();
}