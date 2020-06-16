let container = document.querySelector(".container");

let clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clear);

generateGrid(16);

function changeColor(event) {
    event.target.style.backgroundColor = "black";
}

function clear() {
    container.innerHTML = "";

    let number = 0;
    do {
        number = parseInt(prompt("How many squares per side? (upto 64)"));
    } while (number < 1 || number > 64)
    
    generateGrid(number);
}

function generateGrid(number) {
    container.style.cssText = `grid-template-rows: repeat(${number}, 1fr); grid-template-columns: repeat(${number}, 1fr);`;

    for (let i = 0; i < number * number; i++) {
        let innerDiv = document.createElement("div");
        innerDiv.className = "item";
        container.appendChild(innerDiv);
        innerDiv.addEventListener("mouseover", changeColor);
    }
}