var aufgabe6;
(function (aufgabe6) {
    class Baum {
        constructor(_x, _y) {
            this.baumX = _x;
            this.baumY = _y;
        }
        drawTree() {
            //Baumkronen 
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.baumX, this.baumY, 40, 0, 2 * Math.PI);
            aufgabe6.crc2.strokeStyle = "#228B22";
            aufgabe6.crc2.stroke();
            aufgabe6.crc2.fillStyle = "#228B22";
            aufgabe6.crc2.fill();
            //Baumst�mme 
            aufgabe6.crc2.fillStyle = "#8B4513";
            aufgabe6.crc2.fillRect(this.baumX - 10, this.baumY + 39, 20, 150);
        }
    }
    aufgabe6.Baum = Baum;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Baum.js.map