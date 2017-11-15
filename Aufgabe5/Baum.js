var aufgabe5;
(function (aufgabe5) {
    class Baum {
        constructor(_x, _y) {
            _x = this.baumX;
            _y = this.baumY;
        }
        drawTree() {
            //Baumkronen 
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.baumX, this.baumY, 40, 0, 2 * Math.PI);
            aufgabe5.crc2.strokeStyle = "#228B22";
            aufgabe5.crc2.stroke();
            aufgabe5.crc2.fillStyle = "#228B22";
            aufgabe5.crc2.fill();
            //Baumst�mme 
            aufgabe5.crc2.fillStyle = "#8B4513";
            aufgabe5.crc2.fillRect(this.baumX - 10, this.baumY + 39, 20, 150);
        }
    }
    aufgabe5.Baum = Baum;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=Baum.js.map