let container = document.querySelector(".container");

let gridSize = document.querySelector("#grid-size");

let clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clear);

let initialSize = 16;

generateGrid(initialSize);

function changeColor(event) {
    let randomR = Math.random() * 100 + 100;
    let randomG = Math.random() * 100 + 100;
    let randomB = Math.random() * 100 + 100;
    event.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function clear() {
    container.innerHTML = "";

    do {
        number = parseInt(prompt("How many squares per side? (upto 64)"));
    } while (number < 1 || number > 64)

    if(isNaN(number) || number === null) {
        alert("Invalid number");
        number = initialSize
    }

    generateGrid(number);
}

function generateGrid(number) {
    gridSize.textContent = `Grid size: ${number} x ${number}`;
    container.style.cssText = `grid-template-rows: repeat(${number}, 1fr); grid-template-columns: repeat(${number}, 1fr);`;

    for (let i = 0; i < number * number; i++) {
        let innerDiv = document.createElement("div");
        innerDiv.className = "item";
        container.appendChild(innerDiv);
        innerDiv.addEventListener("mouseover", changeColor);
    }
}