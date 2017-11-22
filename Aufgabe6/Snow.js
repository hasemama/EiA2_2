var aufgabe6;
(function (aufgabe6) {
    class Snow extends aufgabe6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            aufgabe6.crc2.fillStyle = "#ffffff";
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            aufgabe6.crc2.fill();
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += Math.random();
        }
    }
    aufgabe6.Snow = Snow;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Snow.js.map