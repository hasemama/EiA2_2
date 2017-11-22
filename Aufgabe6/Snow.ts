namespace aufgabe6 {

    export class Snow extends MovingObjects {
       

        constructor(_x: number, _y: number) {
             super(_x, _y);

        }
        draw(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            crc2.fill();
        }
        move(): void {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += Math.random();
            
        }
    }
}