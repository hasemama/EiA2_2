var aufgabe6;
(function (aufgabe6) {
    class Wolken extends aufgabe6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.wolkeX, this.wolkeY, 20, 0, 2 * Math.PI);
            aufgabe6.crc2.fillStyle = "#ffffff";
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.wolkeX - 10, this.wolkeY + 10, 20, 0, 2 * Math.PI);
            aufgabe6.crc2.fillStyle = "#ffffff";
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.wolkeX - 10, this.wolkeY - 10, 20, 0, 2 * Math.PI);
            aufgabe6.crc2.fillStyle = "#ffffff";
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.wolkeX - 25, this.wolkeY - 15, 20, 0, 2 * Math.PI);
            aufgabe6.crc2.fillStyle = "#ffffff";
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.wolkeX - 35, this.wolkeY + 5, 20, 0, 2 * Math.PI);
            aufgabe6.crc2.fillStyle = "#ffffff";
            aufgabe6.crc2.fill();
        }
        move() {
            if (this.wolkeX > 810) {
                this.wolkeY = 0;
            }
            this.wolkeX += 1;
        }
    }
    aufgabe6.Wolken = Wolken;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Wolke.js.map