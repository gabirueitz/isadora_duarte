var menu = document.getElementById("navLinks");
var icon = document.getElementById("icon");

function ativaMenu() {
    if (menu.className === "navLinks") {
        menu.className += " responsive";
        icon.src = "./src/images/close.svg";
    } else {
        menu.className = "navLinks";
        icon.src = "./src/images/burguer.svg";
    }
}

function desativaMenu() {
    menu.className = "navLinks";
    icon.src = "./src/images/burguer.svg";
};