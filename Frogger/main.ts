//Aufgabe: (Aufgabe 1)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (12.10.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let img: ImageData;

    let object: MovingObjects[] = [];

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");
        let n: number = 5;
//Hintergrund
        //Gras
        crc2.fillStyle = "green";
        crc2.fillRect(0, 0, 600, 100);
        //Street
        crc2.fillStyle = "grey";
        crc2.fillRect(0, 100, 600, 400);

        //Gras
        crc2.fillStyle = "green";
        crc2.fillRect(0, 500, 600, 100);












        img = crc2.getImageData(0, 0, 800, 600);
        console.log(img);



    }
}
