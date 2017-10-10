window.addEventListener("load", fenster);
function fenster(): void {
    let name: string = prompt("Namen eingeben", "");
    if (name != null) {
        document.getElementById("begruessung").innerHTML =
            "Hi " + name;
    }
}
