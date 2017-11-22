namespace aufgabe6 {

    export class Snow {
        snowX: number;
        snowY: number;

        constructor(_x: number, _y: number) {
            this.snowX = _x;
            this.snowY = _y;

        }
        draw(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.snowX, this.snowY, 5, 0, 2 * Math.PI);
            crc2.fill();
        }
        move(): void {
            if (this.snowY > 600) {
                this.snowY = 0;
            }
            this.snowY += Math.random();
            this.draw();
        }
    }
}