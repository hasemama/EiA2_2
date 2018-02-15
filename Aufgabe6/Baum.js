var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Car extends Abschlussaufgabe.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            //Baumkronen 
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.strokeStyle = "#228B22";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fillStyle = "#228B22";
            Abschlussaufgabe.crc2.fill();
            //Baumst�mme 
            Abschlussaufgabe.crc2.fillStyle = "#8B4513";
            Abschlussaufgabe.crc2.fillRect(this.x - 10, this.y + 39, 20, 50);
        }
    }
    Abschlussaufgabe.Car = Car;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Baum.js.map