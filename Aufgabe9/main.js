//Aufgabe: (Aufgabe 9)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (17.12.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var L08_DOM;
(function (L08_DOM) {
    window.addEventListener("load", init);
    let currentLetter;
    //Buchstaben erstellen
    function init() {
        let buchstaben = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let anzahl = buchstaben.length;
        for (let i = 0; i < buchstaben.length; i++) {
            drawBox(buchstaben[i]);
        }
        drawBrief();
    }
    //Farbe �ndern beim Klicken und Buchstaben ausw�hlen
    function handleClick(_event) {
        let click = _event.target;
        click.style.color = "white";
        currentLetter = click.id;
        let divList = document.getElementsByClassName("letters");
        for (let i = 0; i < divList.length; i++) {
            if (currentLetter != divList[i].id) {
                divList[i].style.color = "black";
            }
        }
    }
    //divs mit Buchstaben erstellen
    function drawBox(_buchstaben) {
        let div = document.createElement("div");
        div.innerText = _buchstaben;
        div.style.backgroundColor = "red";
        div.style.width = "35px";
        div.style.height = "35px";
        div.style.marginLeft = "2px";
        div.style.marginRight = "2px";
        div.style.fontSize = "30px";
        div.style.textAlign = "center";
        div.id = _buchstaben;
        div.className = "letters";
        div.addEventListener("click", handleClick);
        document.body.appendChild(div);
    }
    //Brief zeichnen
    function drawBrief() {
        let letter = document.createElement("div");
        letter.style.backgroundColor = "lightgrey";
        letter.style.width = "800px";
        letter.style.height = "300px";
        letter.style.marginTop = "10px";
        letter.style.marginRight = "2px";
        letter.addEventListener("click", setLetters);
        document.body.appendChild(letter);
    }
    //Buchstaben in Brief einf�gen
    function setLetters(_event) {
        let box = document.createElement("div");
        box.innerText = currentLetter;
        box.style.backgroundColor = "green";
        box.style.width = "35px";
        box.style.height = "35px";
        box.style.marginLeft = "2px";
        box.style.marginRight = "2px";
        box.style.fontSize = "30px";
        box.style.textAlign = "center";
        box.style.position = "absolute";
        box.style.left = _event.pageX + "px";
        box.style.top = _event.pageY + "px";
        box.addEventListener("click", setLetters);
        document.body.appendChild(box);
    }
})(L08_DOM || (L08_DOM = {}));
//# sourceMappingURL=main.js.map