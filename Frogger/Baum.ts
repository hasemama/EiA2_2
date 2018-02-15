namespace Abschlussaufgabe {

    export class Baum extends MovingObjects {
       
        constructor(_x: number, _y: number) {
            super(_x, _y);
        }
        draw(): void {
            //Baumkronen 
            crc2.beginPath();
            crc2.arc(this.x, this.y, 40, 0, 2 * Math.PI);
            crc2.strokeStyle = "#228B22";
            crc2.stroke();
            crc2.fillStyle = "#228B22";
            crc2.fill();

            //Baumstämme 
            crc2.fillStyle = "#8B4513";
            crc2.fillRect(this.x - 10, this.y + 39, 20, 50);
            
        }
    }
}