namespace Abschlussaufgabe {
    export class Car extends Super {
       
        constructor(_x: number, _y: number) {
             super(_x, _y);

        }
        draw(): void {
           //Car
        crc2.fillStyle = "blue";
        crc2.fillRect(50, 200, 40, 20);
        crc2.fillStyle = "red";
        crc2.fillRect(50 + 10, 200, 20, 20);

        }
        move(): void {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += 1;
            
        }
    }

}