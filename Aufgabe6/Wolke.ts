namespace aufgabe6 {
    export class Wolken extends MovingObjects {
       
        constructor(_x: number, _y: number) {
             super(_x, _y);

        }
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 10, this.y + 10, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 10, this.y - 10, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 25, this.y - 15, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 35, this.y + 5, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

        }
        move(): void {
            if (this.x > 810) {
                this.y = 0;
            }
            this.x += 1;
            
        }
    }

}