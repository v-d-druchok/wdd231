document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggleButton');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            button.classList.toggle('open');
            const paragraph = button.closest('section').querySelector('.toggleParagraph');
            paragraph.classList.toggle('hidden');
        });
    });
});

const section = document.querySelector('.one');

section.innerHTML += `
    <p class="toggleParagraph hidden">
        The answer to that question depends highly on what your goals are and how many days a week you have available to train.
        But generally If you are a beginner, anywhere from 3 to 4 training sessions per week should be more than enough,
        with our most recommended splits for that kind of schedule being:   
        upper, lower, rest, upper, lower, rest, rest     
        or   
        Upper, rest, lower, rest, full body, rest, rest.   
        Although the standard people and the four-day people + full body are perfectly good splits for that kind of schedule.
    </p>
`;

const images = [
    {
        name: "Before",
        imageUrl: "images/before.webp"
    },
    {
        name: "After",
        imageUrl: "images/after.webp"
    },
];


function createResults(images) {
    document.querySelector(".results").innerHTML = "";
    images.forEach(image => {
        let card = document.createElement("section");
        let title = document.createElement("p")
        let img = document.createElement("img");

        title.innerHTML = `${image.name}`;

        img.setAttribute("src", image.imageUrl);
        img.setAttribute("alt", `${image.name}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(title);
        card.appendChild(img);

        document.querySelector(".results").appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => { createResults(images);});