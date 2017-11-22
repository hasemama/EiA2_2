var aufgabe6;
(function (aufgabe6) {
    class Ski extends aufgabe6.MovingObjects {
        constructor(_x, _y, _color, _dx, _dy) {
            super(_x, _y);
            this.color = _color;
            this.dx = _dx;
            this.dy = _dy;
        }
        draw() {
            aufgabe6.crc2.fillStyle = this.color;
            aufgabe6.crc2.fillRect(this.x, this.y, 5, -20);
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x + 2.5, this.y - 20, 7, 0, 2 * Math.PI);
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.moveTo(this.x - 4, this.y - 4);
            aufgabe6.crc2.lineTo(this.x + 13, this.y + 7);
            aufgabe6.crc2.strokeStyle = this.color;
            aufgabe6.crc2.stroke();
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
                this.y = 0;
            }
            if (this.y > 600) {
                this.x = 0;
                this.y = 0;
            }
            this.y += this.dy;
            this.x += this.dx;
        }
    }
    aufgabe6.Ski = Ski;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Ski.js.map