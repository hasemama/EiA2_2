function prompt(): void {
    let name: string = prompt("Bitte Namen eingeben:", "");
    if (name != null) {
        document.getElementById("hi").innerHTML =
            "Hi " + name;
    }
}