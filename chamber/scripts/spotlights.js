const URL = 'https://v-d-druchok.github.io/wdd231/chamber/data/members.json';

const spotlightCont = document.querySelector('.spotlight-cont');

async function loadSpotlights() {
    try {
        const response = await fetch(URL);
        const members = await response.json();

        const petentialSpotlight = members.filter(member =>
            member.membership_level === 2 || member.membership_level === 3
        );

        const randomized = petentialSpotlight.sort(() => 0.5 - Math.random());
        const select = randomized.slice(0, Math.floor(Math.random() * 2) + 2);

        select.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('spotlight');

            card.innerHTML = `
                <img width='300' height='300' src="${member.image}" alt="${member.name} Logo">
                <div class="company-info">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><strong>Level:</strong> ${membershipName(member.membership_level)}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                </div>
            `;

            spotlightCont.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading spotlights:', error);
    }
}

function membershipName(level) {
    switch(level) {
        case 3: return 'Gold';
        case 2: return 'Silver';
        default: return 'Standard';
    }
}

loadSpotlights();