namespace aufgabe6 {

    export class Ski extends MovingObjects {
        
        color: string;
        dx: number;
        dy: number;

        constructor(_x: number, _y: number, _color: string, _dx: number, _dy: number) {
            super(_x, _y);
            this.color = _color;
            this.dx = _dx;
            this.dy = _dy;
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y, 5, -20);
            crc2.beginPath();
            crc2.arc(this.x + 2.5, this.y - 20, 7, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x - 4, this.y - 4);
            crc2.lineTo(this.x + 13, this.y + 7);
            crc2.strokeStyle = this.color;
            crc2.stroke();


        }
        move(): void {
            if (this.x > 800) {
                this.x= 0;
                this.y = 0;
            }
            if (this.y > 600) {
                this.x = 0;
                this.y = 0;
            }


            this.y += this.dy;
            this.x += this.dx;



        }

    }
}