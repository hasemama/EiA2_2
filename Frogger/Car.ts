namespace Abschlussaufgabe {
    export class Car extends Super {
        dx: number;


        constructor(_x: number, _y: number, _dx: number) {
            super(_x, _y);
            this.dx = _dx;

        }
        draw(): void {
            //Car
            crc2.fillStyle = "blue";
            crc2.fillRect(this.x, this.y, 40, 20);
            crc2.fillStyle = "red";
            crc2.fillRect(this.x + 10, this.y, 20, 20);

        }
        move(): void {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += this.dx;

        }
    }

}