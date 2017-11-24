var aufgabe6;
(function (aufgabe6) {
    class Wolken extends aufgabe6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            aufgabe6.crc2.fillStyle = "#ffffff";
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x - 10, this.y + 10, 20, 0, 2 * Math.PI);
            aufgabe6.crc2.fillStyle = "#ffffff";
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x - 10, this.y - 10, 20, 0, 2 * Math.PI);
            aufgabe6.crc2.fillStyle = "#ffffff";
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x - 25, this.y - 15, 20, 0, 2 * Math.PI);
            aufgabe6.crc2.fillStyle = "#ffffff";
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x - 35, this.y + 5, 20, 0, 2 * Math.PI);
            aufgabe6.crc2.fillStyle = "#ffffff";
            aufgabe6.crc2.fill();
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += 1;
        }
    }
    aufgabe6.Wolken = Wolken;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Wolke.js.map