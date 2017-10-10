function prompt() {
    let name = prompt("Bitte Namen eingeben:", "");
    if (name != null) {
        document.getElementById("hi").innerHTML =
            "Hi " + name;
    }
}
