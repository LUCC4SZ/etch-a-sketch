const container = document.querySelector("div");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.style.width = "100px";
        square.style.height = "100px";
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "green";
        });
        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = "white";
        });
        row.appendChild(square);
    }
    container.appendChild(row);
};
