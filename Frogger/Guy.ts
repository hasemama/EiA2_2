//Aufgabe: (Abschlussaufgabe)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (23.02.2018)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
namespace Abschlussaufgabe {
    export class Guy extends Superklasse {

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