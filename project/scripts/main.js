import { fetchAndDisplayTips, setupCategoryToggles } from './tips.js';

document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayTips();
    setupCategoryToggles();
});
