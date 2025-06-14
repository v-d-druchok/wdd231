const year = document.getElementById('cyear');
year.innerHTML = new Date().getFullYear();

document.getElementById('lastModified').innerHTML = `Last Modification: ${new Date(document.lastModified).toLocaleDateString(
    'en-GB', { 
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false 
}).replace(',', '')}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#animated-nav');
const navLinks = document.querySelectorAll('.navigation a');

hamButton.setAttribute('aria-expanded', navigation.classList.contains('open'));

hamButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    hamButton.setAttribute('aria-expanded', isOpen);
});

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});