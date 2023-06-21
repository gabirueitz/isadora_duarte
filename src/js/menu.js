function ativaMenu() {
    var menu = document.getElementById("navLinks");
    var icon = document.getElementById("icon");
    if (menu.className === "navLinks") {
        menu.className += " responsive";
        icon.src = "./src/images/close.svg";
    } else {
        menu.className = "navLinks";
        icon.src = "./src/images/burguer.svg";
    }
}