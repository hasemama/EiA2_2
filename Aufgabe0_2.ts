function prompt(): void {
    let name: string = prompt("Bitte Namen eingeben:", "");
    if (name != null) {
        document.getElementById("begruessung").innerHTML = "Hi " + name;
    }
}