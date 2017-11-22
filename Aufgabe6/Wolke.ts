namespace aufgabe6 {
    export class Wolken extends MovingObjects {
        wolkeX: number;
        wolkeY: number;

        constructor(_x: number, _y: number) {
             super(_x, _y);

        }
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.wolkeX, this.wolkeY, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.wolkeX - 10, this.wolkeY + 10, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.wolkeX - 10, this.wolkeY - 10, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.wolkeX - 25, this.wolkeY - 15, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.wolkeX - 35, this.wolkeY + 5, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

        }
        move(): void {
            if (this.wolkeX > 810) {
                this.wolkeY = 0;
            }
            this.wolkeX += 1;
            
        }
    }

}