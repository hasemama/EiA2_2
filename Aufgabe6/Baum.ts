namespace aufgabe6 {

    export class Baum extends MovingObjects {
        baumX: number;
        baumY: number;

       
        drawTree(): void {
            //Baumkronen 
            crc2.beginPath();
            crc2.arc(this.baumX, this.baumY, 40, 0, 2 * Math.PI);
            crc2.strokeStyle = "#228B22";
            crc2.stroke();
            crc2.fillStyle = "#228B22";
            crc2.fill();

            //Baumstämme 
            crc2.fillStyle = "#8B4513";
            crc2.fillRect(this.baumX - 10, this.baumY + 39, 20, 150);
        }
    }
}