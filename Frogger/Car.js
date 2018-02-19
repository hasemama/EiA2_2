//Aufgabe: (Abschlussaufgabe)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (23.02.2018)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Car extends Abschlussaufgabe.Superklasse {
        constructor(_x, _y, _dx) {
            super(_x, _y);
            this.dx = _dx;
        }
        draw() {
            //Car
            Abschlussaufgabe.crc2.fillStyle = "blue";
            Abschlussaufgabe.crc2.fillRect(this.x, this.y, 40, 20);
            Abschlussaufgabe.crc2.fillStyle = "red";
            Abschlussaufgabe.crc2.fillRect(this.x + 10, this.y, 20, 20);
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += this.dx;
        }
    }
    Abschlussaufgabe.Car = Car;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Car.js.map