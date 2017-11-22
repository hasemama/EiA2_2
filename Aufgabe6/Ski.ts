namespace aufgabe6 {

    export class Ski extends MovingObjects {
        skiX: number;
        skiY: number;
        color: string;
        dx: number;
        dy: number;

       

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.skiX, this.skiY, 5, -20);
            crc2.beginPath();
            crc2.arc(this.skiX + 2.5, this.skiY - 20, 7, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.skiX - 4, this.skiY - 4);
            crc2.lineTo(this.skiX + 13, this.skiY + 7);
            crc2.strokeStyle = this.color;
            crc2.stroke();


        }
        move(): void {
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
}