function random() {
    return Math.floor(Math.random() * 5);
}
const colorName = {
    0: "red",
    1: "green",
    2: "blue",
    3: "yellow",
    4: "aqua"
}
function generate() {
    document.querySelectorAll(".box").forEach((e) => {
        e.style.backgroundColor = colorName[random()]
    })
}
setInterval(generate, 1000); 