const container = document.querySelector("div");

for (let i = 0; i < 17; i++) {
    for (let j = 0; j < 17; j++) {
        const square = document.createElement("div");
        container.appendChild(square);
    }
}
