window.addEventListener("load", fenster);
function fenster() {
    let name = prompt("Namen eingeben", "");
    if (name != null) {
        document.getElementById("begruessung").innerHTML =
            "Hi " + name;
    }
}
//# sourceMappingURL=Aufgabe0_2.js.map