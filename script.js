const body = document.querySelector("body");

const container = document.querySelector("div");

function createGrid(sqr) {
    const perc = (sqr * 600) / 100;
    for (let i = 0; i < sqr; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.height = `${perc}%`;
    for (let j = 0; j < sqr; j++) {
        const square = document.createElement("div");
        square.style.width = `${perc}%`;
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
}

// for (let i = 0; i < 16; i++) {
//     const row = document.createElement("div");
//     row.style.display = "flex";
//     row.style.height = "16%";
//     for (let j = 0; j < 16; j++) {
//         const square = document.createElement("div");
//         square.style.width = "16%";
//         square.addEventListener("mouseenter", () => {
//             square.classList.add("green-background");
//         });
//         square.addEventListener("mouseleave", () => {
//             square.classList.remove("green-background");
//         });
//         row.appendChild(square);
//     }
//     container.appendChild(row);
// };

const btn = document.createElement("button");

btn.innerText = "Click me!";

btn.addEventListener("click", () => {
    
    const sqr = window.prompt("How many squares do you want per side?");
    createGrid(sqr);
});

body.appendChild(btn);
