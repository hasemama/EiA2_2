var aufgabe6;
(function (aufgabe6) {
    class Ski extends aufgabe6.MovingObjects {
        draw() {
            aufgabe6.crc2.fillStyle = this.color;
            aufgabe6.crc2.fillRect(this.skiX, this.skiY, 5, -20);
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.skiX + 2.5, this.skiY - 20, 7, 0, 2 * Math.PI);
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.moveTo(this.skiX - 4, this.skiY - 4);
            aufgabe6.crc2.lineTo(this.skiX + 13, this.skiY + 7);
            aufgabe6.crc2.strokeStyle = this.color;
            aufgabe6.crc2.stroke();
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
    aufgabe6.Ski = Ski;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Ski.js.map