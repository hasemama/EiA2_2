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
        crc2.fillRect(0, 0, 800, 100);
        //Street
        crc2.fillStyle = "grey";
        crc2.fillRect(0, 100, 800, 50);

        crc2.fillStyle = "white";
        crc2.fillRect(100, 120, 50, 10);

        crc2.fillStyle = "white";
        crc2.fillRect(300, 120, 50, 10);

        crc2.fillStyle = "white";
        crc2.fillRect(500, 120, 50, 10);

        crc2.fillStyle = "white";
        crc2.fillRect(700, 120, 50, 10);

        crc2.fillStyle = "#B43104";
        crc2.fillRect(0, 150, 800, 50);

        crc2.fillStyle = "grey";
        crc2.fillRect(0, 200, 800, 50);

        crc2.fillStyle = "white";
        crc2.fillRect(50, 220, 50, 10);

        crc2.fillStyle = "white";
        crc2.fillRect(250, 220, 50, 10);

        crc2.fillStyle = "white";
        crc2.fillRect(450, 220, 50, 10);

        crc2.fillStyle = "white";
        crc2.fillRect(650, 220, 50, 10);


        crc2.fillStyle = "#B43104";
        crc2.fillRect(0, 250, 800, 50);

        crc2.fillStyle = "grey";
        crc2.fillRect(0, 300, 800, 50);

        crc2.fillStyle = "white";
        crc2.fillRect(100, 320, 50, 10);

        crc2.fillStyle = "white";
        crc2.fillRect(300, 320, 50, 10);

        crc2.fillStyle = "white";
        crc2.fillRect(500, 320, 50, 10);

        crc2.fillStyle = "white";
        crc2.fillRect(700, 320, 50, 10);

        crc2.fillStyle = "#B43104";
        crc2.fillRect(0, 350, 800, 50);

        crc2.fillStyle = "grey";
        crc2.fillRect(0, 400, 800, 50);
        crc2.fillStyle = "white";
        crc2.fillRect(50, 420, 50, 10);

        crc2.fillStyle = "white";
        crc2.fillRect(250, 420, 50, 10);

        crc2.fillStyle = "white";
        crc2.fillRect(450, 420, 50, 10);

        crc2.fillStyle = "white";
        crc2.fillRect(650, 420, 50, 10);

        crc2.fillStyle = "green";
        crc2.fillRect(0, 450, 800, 50);

        //Gras
        crc2.fillStyle = "green";
        crc2.fillRect(0, 500, 800, 100);
        












        img = crc2.getImageData(0, 0, 800, 600);
        console.log(img);



    }
}
