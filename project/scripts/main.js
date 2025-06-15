import { trackLastVisit } from './visits.js';
import { initializeUI } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    trackLastVisit();
    initializeUI();
});

