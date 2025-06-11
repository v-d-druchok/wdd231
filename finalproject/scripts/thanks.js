const questions = document.getElementById('questions');

document.addEventListener('DOMContentLoaded', function() {
    let questionCount = localStorage.getItem('questionCount') || 0;
    questions.textContent = questionCount;
});