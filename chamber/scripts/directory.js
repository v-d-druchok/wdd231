const url = 'https://v-i-druchok.github.io/wdd231/chamber/data/members.json';

const cardsContainer = document.querySelector('#cards');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

let allMembers = [];

async function getMembers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch member data');
        }

        const members = await response.json();
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
        card.classList.add('member-card', view);
        
        const content = `
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
        `;

        card.innerHTML = view === 'grid' ? `<img width='500' height='500' src="${member.image}" alt="${member.name} Logo">${content}` : content;

        cardsContainer.appendChild(card);
    });
}

document.querySelector('.layout-select').addEventListener('click', (e) => {
    if (e.target.id === 'grid' || e.target.id === 'list') {
        displayMembers(allMembers, e.target.id);
    }
});

getMembers();