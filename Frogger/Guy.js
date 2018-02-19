//Aufgabe: (Abschlussaufgabe)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (23.02.2018)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Guy extends Abschlussaufgabe.Superklasse {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "black";
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Guy = Guy;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Guy.js.map