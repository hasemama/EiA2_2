//Aufgabe: (Aufgabe 9)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (05.01.2018)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
namespace L09_DOM {

    window.addEventListener("load", init);
    let currentLetter: string;

    //document.addEventListener("keypressed", handleAlt);
    document.addEventListener("keydown", tastaturEingabe);

    //Buchstaben erstellen
    function init(): void {

        let buchstaben: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        let anzahl: number = buchstaben.length;

        if (anzahl == buchstaben.length) {
            for (let i: number = 0; i < buchstaben.length; i++) {
                drawBox(buchstaben[i]);
            }
        }

        drawBrief();

    }

    //Farbe �ndern beim Klicken und Buchstaben ausw�hlen
    function handleClick(_event: MouseEvent): void {

        let klicken: HTMLDivElement = <HTMLDivElement>_event.target;
        klicken.style.color = "white";

        currentLetter = klicken.id;

        let divList: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("letters");

        for (let i: number = 0; i < divList.length; i++) {
            if (currentLetter != divList[i].id) {
                divList[i].style.color = "black";
            }
        }
    }


    //divs mit Buchstaben erstellen
    function drawBox(_buchstaben: string): void {



        let div: HTMLDivElement = document.createElement("div");

        div.innerText = _buchstaben;
        div.style.backgroundColor = "lightblue";
        div.style.width = "35px";
        div.style.height = "35px";
        div.style.marginLeft = "2px";
        div.style.marginRight = "2px";
        div.style.fontSize = "30px";
        div.style.textAlign = "center";
        div.id = _buchstaben;  //ID erstellt um divs zu vergleichen
        div.className = "letters";

        div.addEventListener("click", handleClick);
        document.body.appendChild(div);

    }

    //Brief zeichnen
    function drawBrief(): void {



        let letter: HTMLDivElement = document.createElement("div");


        letter.style.backgroundColor = "lightgrey";
        letter.style.width = "800px";
        letter.style.height = "300px";
        letter.style.marginTop = "10px";
        letter.style.marginRight = "2px";


        letter.addEventListener("click", setLetters);
        document.body.appendChild(letter);

    }


    //Buchstaben in Brief einf�gen
    function setLetters(_event: MouseEvent): void {

        let box: HTMLDivElement = document.createElement("div");

        box.innerText = currentLetter;
        box.style.backgroundColor = "lightblue";
        box.style.width = "35px";
        box.style.height = "35px";
        box.style.marginLeft = "2px";
        box.style.marginRight = "2px";
        box.style.fontSize = "30px";
        box.style.textAlign = "center";
        box.style.position = "absolute";
        box.style.left = _event.pageX + "px";
        box.style.top = _event.pageY + "px";

        box.addEventListener("click", deleteLetter);
        document.body.appendChild(box);

        let clicking: HTMLDivElement = <HTMLDivElement>_event.target;
    }

    //Buchstaben mit Tastatur ausw�hlen
    function tastaturEingabe(event: KeyboardEvent): void {

        if (event.key == "a" || event.key == "A") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "b" || event.key == "B") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "c" || event.key == "C") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "d" || event.key == "D") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "e" || event.key == "E") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "f" || event.key == "F") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "g" || event.key == "G") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "h" || event.key == "H") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "i" || event.key == "I") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "j" || event.key == "J") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "k" || event.key == "K") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "l" || event.key == "L") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "m" || event.key == "M") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "n" || event.key == "N") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "o" || event.key == "O") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "p" || event.key == "P") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "q" || event.key == "Q") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "r" || event.key == "R") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "s" || event.key == "S") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "t" || event.key == "T") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "u" || event.key == "U") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "v" || event.key == "V") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "w" || event.key == "W") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "x" || event.key == "X") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "y" || event.key == "Y") {
            currentLetter = event.key;
            setLetters;
        }

        else if (event.key == "z" || event.key == "Z") {
            currentLetter = event.key;
            setLetters;
        }


        //document.addEventListener ("keydown", tastaturEingabe);


    }





    //ALt gedr�ckt halten
    function handleAlt(_event: KeyboardEvent): void {
        if (_event.keyCode == 18) {

            deleteLetter;
        }
    }

    function deleteLetter(_event: MouseEvent): void {

        let d: HTMLDivElement = <HTMLDivElement>_event.target;
        document.addEventListener("keypressed", handleAlt);
        document.body.removeChild(d);
    }


}