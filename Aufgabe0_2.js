function prompt() {
    let name = prompt("Bitte Namen eingeben:", "");
    if (name != null) {
        document.getElementById("begruessung").innerHTML = "Hi " + name;
    }
}
