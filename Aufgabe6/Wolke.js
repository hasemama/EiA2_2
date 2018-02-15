var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Wolken extends Abschlussaufgabe.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#ffffff";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x - 10, this.y + 10, 20, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#ffffff";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x - 10, this.y - 10, 20, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#ffffff";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x - 25, this.y - 15, 20, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#ffffff";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x - 35, this.y + 5, 20, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#ffffff";
            Abschlussaufgabe.crc2.fill();
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += 1;
        }
    }
    Abschlussaufgabe.Wolken = Wolken;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Wolke.js.map