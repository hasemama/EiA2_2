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

        //Himmel
        crc2.fillStyle = "#5CACEE";
        crc2.fillRect(0, 0, 800, 600);

        //Gras
        crc2.fillStyle = "green";
        crc2.fillRect(0, 200, 800, 400);
        //Sonne
        crc2.beginPath();
        crc2.arc(695, 60, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFD700";
        crc2.fill();
        //

        //Leute
        crc2.fillStyle = "blue";
        crc2.fillRect(467, 385, 5, -20);
        crc2.beginPath();
        crc2.arc(467 + 2.5, 385 - 20, 7, 0, 2 * Math.PI);
        crc2.fill();
        //Baumkronen 
        crc2.beginPath();
        crc2.arc(480, 300, 40, 0, 2 * Math.PI);
        crc2.strokeStyle = "#228B22";
        crc2.stroke();
        crc2.fillStyle = "#228B22";
        crc2.fill();

        //Baumstämme 
        crc2.fillStyle = "#8B4513";
        crc2.fillRect(480 - 10, 300 + 39, 20, 50);






        for (let i: number = 0; i < 50; i++) {

            let t: Baum = new Baum(Math.random() * 350, Math.random() * 400 + 150);

            object.push(t);
        }

        for (let i: number = 0; i < n; i++) {
            let w: Wolken = new Wolken(0 + Math.random() * 800, 0 + Math.random() * 80);
            object.push(w);
        }
        for (let i: number = 0; i < 50; i++) {

            let t: Baum = new Baum(Math.random() * 250 + 550, Math.random() * 400 + 150);
            object.push(t);


        }

        img = crc2.getImageData(0, 0, 800, 600);
        console.log(img);
        animate();
    }

    //Animate 
    function animate(): void {
        crc2.putImageData(img, 0, 0);

        for (let i: number = 0; i < object.length; i++) {
            let s: MovingObjects = object[i];
            s.update();
        }


        window.setTimeout(animate, 20);
    }



}