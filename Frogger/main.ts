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

    let object: Super[] = [];

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        let s: Street = new Street;
        s.draw();
        let g: Guy = new Guy(400, 550);
        g.draw();

        let c: Car = new Car(0, 128, 3 * Math.random() + 5);
        object.push(c);

        c = new Car(0, 228, 3 * Math.random() + 5);
        object.push(c);
        c = new Car(0, 328, 3 * Math.random() + 5);
        object.push(c);
        c = new Car(0, 402, 3 * Math.random() + 5);
        object.push(c);

        img = crc2.getImageData(0, 0, 800, 600);
        console.log(img);
        animate();
        function animate(): void {
            crc2.putImageData(img, 0, 0);

            for (let i: number = 0; i < object.length; i++) {

                let a: Super = object[i];
                a.update();
            }



            window.setTimeout(animate, 20);

        }


    }
}
