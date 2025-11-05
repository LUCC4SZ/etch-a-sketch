const container = document.querySelector("div");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.style.width = "16%";
        square.style.height = "38.78px";
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
