var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Car extends Abschlussaufgabe.Super {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            //Car
            Abschlussaufgabe.crc2.fillStyle = "blue";
            Abschlussaufgabe.crc2.fillRect(50, 200, 40, 20);
            Abschlussaufgabe.crc2.fillStyle = "red";
            Abschlussaufgabe.crc2.fillRect(50 + 10, 200, 20, 20);
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += 1;
        }
    }
    Abschlussaufgabe.Car = Car;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Car.js.map