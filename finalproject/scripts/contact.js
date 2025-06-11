const topicSelect = document.getElementById('topicSelect');
const form = document.querySelector('form');

const topics = [
    {
        id: "training",
        name: "training question",
        qtype: "1"     
    },

    {
        id: "nutrition",
        name: "nutrition question",
        qtype: "2"      
    },

    {   
        id: "general",
        name: "general question",
        qtype: "3"      
    },
    
];

function createTopicSelect(topics) {
    topics.forEach(item => {
        const option = document.createElement('option');

        option.value = item.id;
        option.textContent = item.name;

        topicSelect.appendChild(option);
    });
}

function updateCounter() {
    let questionCount = localStorage.getItem('questionCount') || 0;
    questionCount++
    localStorage.setItem('questionCount', questionCount);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (form.checkValidity()) {
        updateCounter();
        window.location.href = 'thanks.html';
    } else {
        console.log('Form is not valid');
    }
});

createTopicSelect(topics, topicSelect)

const extraSelect = document.getElementById('extraSelect');

const trainingSpecify = [
    {
        id: "split",
        name: "training split question",
        qtype: "1-1"     
    },

    {
        id: "volume",
        name: "training volume question",
        qtype: "1-2"      
    },

    {   
        id: "other",
        name: "other",
        qtype: "1-3"      
    },
    
];

const nutritionSpecify = [
    {
        id: "intake",
        name: "intake question",
        qtype: "2-1"     
    },

    {
        id: "macros",
        name: "macro amount question",
        qtype: "2-2"      
    },

    {   
        id: "other",
        name: "other",
        qtype: "2-3"      
    },
     
]; 

topicSelect.addEventListener('change', function() {
    extraSelect.innerHTML = "";

    if (topicSelect.value === 'training' || topicSelect.value === 'nutrition') {
        const label = document.createElement('label');
        label.setAttribute('for', 'specifySelect');
        label.textContent = "*Specify topic:";

        const specifySelect = document.createElement('select');
        specifySelect.id = 'specifySelect';
        specifySelect.name = 'specify';
        specifySelect.required = true;

        const defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.textContent = "Select a Topic...";
        specifySelect.appendChild(defaultOption);

        extraSelect.appendChild(label);
        extraSelect.appendChild(specifySelect);

        let optionsList = [];

        switch (topicSelect.value) {
            case 'training':
                optionsList = trainingSpecify;
                break;
            case 'nutrition':
                optionsList = nutritionSpecify;
                break;
            default:
                return;
        }

        optionsList.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            specifySelect.appendChild(option);
        });
    }
});