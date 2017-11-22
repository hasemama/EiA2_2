var aufgabe6;
(function (aufgabe6) {
    class Snow {
        constructor(_x, _y) {
            this.snowX = _x;
            this.snowY = _y;
        }
        draw() {
            aufgabe6.crc2.fillStyle = "#ffffff";
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.snowX, this.snowY, 5, 0, 2 * Math.PI);
            aufgabe6.crc2.fill();
        }
        move() {
            if (this.snowY > 600) {
                this.snowY = 0;
            }
            this.snowY += Math.random();
            this.draw();
        }
    }
    aufgabe6.Snow = Snow;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Snow.js.map