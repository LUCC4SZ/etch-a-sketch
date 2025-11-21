const body = document.querySelector("body");

const container = document.querySelector("div");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.height = "16%";
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.style.width = "16%";
        square.addEventListener("mouseenter", () => {
            square.classList.add("green-background");
        });
        square.addEventListener("mouseleave", () => {
            square.classList.remove("green-background");
        });
        row.appendChild(square);
    }
    container.appendChild(row);
};

function randomColor() {
    const red = Math.floor((Math.random() * 255) + 1);
    const green = Math.floor((Math.random() * 255) + 1);
    const blue = Math.floor((Math.random() * 255) + 1);
    return `rgb(${red}, ${green}, ${blue})`;
}

function createGrid(sqr) {
    const perc = 600 / sqr;
    for (let i = 0; i < sqr; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.height = `${perc}%`;
    for (let j = 0; j < sqr; j++) {
        const square = document.createElement("div");
        square.style.width = `${perc}%`;
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = randomColor();
        });
        square.addEventListener("mouseleave", () => {
            /* Puede que aca tenga que hacer algo para generar el efecto de opacidad */
        });
        row.appendChild(square);
    }
    container.appendChild(row);
};
}

const btn = document.createElement("button");
btn.innerText = "Click me!";

btn.addEventListener("click", () => {
    container.replaceChildren();
    let sqr = 0;
    do {
        sqr = window.prompt("How many squares do you want per side? MAX = 100");
    } while (sqr > 100);
    createGrid(sqr);
});

body.appendChild(btn);
