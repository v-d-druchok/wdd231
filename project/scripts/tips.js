const productsURL = 'https://v-d-druchok.github.io/wdd231/project/data/tips.json';

const trainingContainer = document.querySelector('.training');
const nutritionContainer = document.querySelector('.nutrition');
const recoveryContainer = document.querySelector('.recovery');

const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalCloseBtn = document.getElementById('close');

// Modal Logic
function openModal(text) {
    modalText.innerHTML = '';

    const message = document.createElement('p');
    message.textContent = text;

    modalText.appendChild(message);
    modalText.appendChild(modalCloseBtn);

    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    modalCloseBtn.focus();
}

function closeModal() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
}

modalCloseBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Create tip entry element
function createTipEntry(item) {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('tip-entry');

    entryDiv.innerHTML = `
        <h3>${item.question}</h3>
        <button class="answer-toggle" aria-expanded="false">Show Answer</button>
        <div class="tip-content hidden">
            <p><strong>Subject:</strong> ${item.subject}</p>
            <p><strong>Type:</strong> ${item.type}</p>
            <p>${item.answer}</p>
            <button class="protip-button" aria-expanded="false" aria-controls="modal-text">Pro Tip</button>
        </div>
    `;

    const answerToggleBtn = entryDiv.querySelector('.answer-toggle');
    const tipContentDiv = entryDiv.querySelector('.tip-content');
    const proTipBtn = entryDiv.querySelector('.protip-button');

    answerToggleBtn.addEventListener('click', () => {
        tipContentDiv.classList.toggle('hidden');
        const isHidden = tipContentDiv.classList.contains('hidden');
        answerToggleBtn.textContent = isHidden ? 'Show Answer' : 'Hide Answer';
        answerToggleBtn.setAttribute('aria-expanded', !isHidden);
    });

    proTipBtn.addEventListener('click', () => {
        openModal(item.proTip);
        proTipBtn.setAttribute('aria-expanded', 'true');
    });

    return entryDiv;
}

// Load and display tips
async function fetchAndDisplayTips() {
    try {
        const response = await fetch(productsURL);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        const trainingItems = data.filter(item => item.subject === 'training').slice(0, 15);
        const nutritionItems = data.filter(item => item.subject === 'nutrition').slice(0, 15);
        const recoveryItems = data.filter(item => item.subject === 'recovery').slice(0, 15);

        trainingItems.forEach(item => trainingContainer.appendChild(createTipEntry(item)));
        nutritionItems.forEach(item => nutritionContainer.appendChild(createTipEntry(item)));
        recoveryItems.forEach(item => recoveryContainer.appendChild(createTipEntry(item)));

    } catch (error) {
        console.error('Fetch error:', error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Sorry, something went wrong loading the tips.';
        errorMessage.classList.add('error-message');
        document.querySelector('main').appendChild(errorMessage);
    }
}

// Show/hide entire categories
function setupCategoryToggles() {
    document.querySelectorAll('.category-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const targetClass = button.getAttribute('data-target');
            const container = document.querySelector(`.${targetClass}`);
            if (!container) return;

            container.classList.toggle('hidden');
            const isHidden = container.classList.contains('hidden');
            button.textContent = isHidden ? `Enlighten me!` : `Hide ${capitalize(targetClass)} Tips`;
        });
    });
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Final init
document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayTips();
    setupCategoryToggles();
});
