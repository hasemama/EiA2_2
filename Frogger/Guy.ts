namespace Abschlussaufgabe {
    export class Guy extends Super {

        constructor(_x: number, _y: number) {
            super(_x, _y);

        }
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
        }

    }

}