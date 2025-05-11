const year = document.getElementById('cyear');
year.innerHTML = new Date().getFullYear();

document.getElementById('lastModified').innerHTML = `Last Modification: ${new Date(document.lastModified).toLocaleDateString(
    'en-GB', { 
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
}).replace(',', '')}`;

document.addEventListener('DOMContentLoaded', function() {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
});