const url = 'https://v-d-druchok.github.io/wdd231/chamber/data/members.json';

const cardsContainer = document.querySelector('#bis-cards');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

let allMembers = [];

async function getMembers() {
    try {
        const responce = await fetch(url);

        if (!responce.ok) {
            throw new Error('Failed to fetch member data');
        }

        const members = await responce.json();
        allMembers = members;

        displayMembers(allMembers, 'grid');

        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}   

function displayMembers(members, view = 'grid') {
    cardsContainer.innerHTML = '';
    cardsContainer.className = view;

    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-sec-card', view);
        
        const content = `
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
        `;

        card.innerHTML = view === 'grid' ? `<img width='400' height='400' src="${member.image}" alt="${member.name} Logo">${content}` : content;

        cardsContainer.appendChild(card);
    });
}

document.querySelector('.select-layout').addEventListener('click', (e) => {
    if (e.target.id === 'grid' || e.target.id === 'list') {
        displayMembers(allMembers, e.target.id);
    }
});

getMembers();