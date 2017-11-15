var aufgabe5;
(function (aufgabe5) {
    class Wolken {
        constructor(_x, _y) {
            this.wolkeX = _x;
            this.wolkeY = _y;
        }
        draw() {
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.wolkeX, this.wolkeY, 20, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "#ffffff";
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.wolkeX - 10, this.wolkeY + 10, 20, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "#ffffff";
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.wolkeX - 10, this.wolkeY - 10, 20, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "#ffffff";
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.wolkeX - 25, this.wolkeY - 15, 20, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "#ffffff";
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.wolkeX - 35, this.wolkeY + 5, 20, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "#ffffff";
            aufgabe5.crc2.fill();
        }
        move() {
            if (this.wolkeX > 800) {
                this.wolkeX = 0;
            }
            this.wolkeX += 1;
            this.draw();
        }
    }
    aufgabe5.Wolken = Wolken;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=Wolke.js.map