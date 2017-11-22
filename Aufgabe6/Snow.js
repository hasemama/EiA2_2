var aufgabe5;
(function (aufgabe5) {
    class Snow {
        constructor(_x, _y) {
            this.snowX = _x;
            this.snowY = _y;
        }
        draw() {
            aufgabe5.crc2.fillStyle = "#ffffff";
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.snowX, this.snowY, 5, 0, 2 * Math.PI);
            aufgabe5.crc2.fill();
        }
        move() {
            if (this.snowY > 600) {
                this.snowY = 0;
            }
            this.snowY += Math.random();
            this.draw();
        }
    }
    aufgabe5.Snow = Snow;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=Snow.js.map