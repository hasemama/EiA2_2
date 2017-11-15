var aufgabe5;
(function (aufgabe5) {
    class Ski {
        constructor(_x, _y, _color, _dx, _dy) {
            this.skiX = _x;
            this.skiY = _y;
            this.color = _color;
            this.dx = _dx;
            this.dy = _dy;
        }
        draw() {
            aufgabe5.crc2.fillStyle = this.color;
            aufgabe5.crc2.fillRect(this.skiX, this.skiY, 5, -20);
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.skiX + 2.5, this.skiY - 20, 7, 0, 2 * Math.PI);
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.moveTo(this.skiX - 4, this.skiY - 4);
            aufgabe5.crc2.lineTo(this.skiX + 13, this.skiY + 7);
            aufgabe5.crc2.strokeStyle = this.color;
            aufgabe5.crc2.stroke();
        }
        move() {
            if (this.skiX > 800) {
                this.skiX = 0;
                this.skiY = 0;
            }
            if (this.skiY > 600) {
                this.skiX = 0;
                this.skiY = 0;
            }
            this.skiY += this.dy;
            this.skiX += this.dx;
            this.draw();
        }
    }
    aufgabe5.Ski = Ski;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=Ski.js.map