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

        object.push(g);

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
        buttondraw();




    }
    function animate(): void {
        crc2.putImageData(img, 0, 0);

        for (let i: number = 0; i < object.length; i++) {

            let a: Super = object[i];
            a.update();
        }



        window.setTimeout(animate, 20);

    }
    function buttondraw(): void {
        let buttonup: HTMLButtonElement = document.createElement("button");
        buttonup.innerText = "UP";
        buttonup.style.position = "absolute";
        buttonup.style.top = "46%";
        buttonup.style.left = "28%";
        buttonup.style.height = "8%";
        buttonup.style.width = "25%";
        buttonup.id = "ButtonUp";
        buttonup.addEventListener("click", moveUp);
        document.body.appendChild(buttonup);

        let buttonleft: HTMLButtonElement = document.createElement("button");
        buttonleft.innerText = "LEFT";
        buttonleft.style.position = "absolute";
        buttonleft.style.top = "54%";
        buttonleft.style.left = "28%";
        buttonleft.style.height = "8%";
        buttonleft.style.width = "12%";
        buttonleft.id = "ButtonLeft";
        buttonleft.addEventListener("click", moveLeft);
        document.body.appendChild(buttonleft);

        let buttondown: HTMLButtonElement = document.createElement("button");
        buttondown.innerText = "DOWN";
        buttondown.style.position = "absolute";
        buttondown.style.top = "62%";
        buttondown.style.left = "28%";
        buttondown.style.height = "8%";
        buttondown.style.width = "25%";
        buttondown.id = "ButtonDown";
        buttondown.addEventListener("click", moveDown);
        document.body.appendChild(buttondown);

        let buttonright: HTMLButtonElement = document.createElement("button");
        buttonright.innerText = "RIGHT";
        buttonright.style.position = "absolute";
        buttonright.style.top = "54%";
        buttonright.style.left = "41%";
        buttonright.style.height = "8%";
        buttonright.style.width = "12%";
        buttonright.id = "ButtonRight";
        buttonright.addEventListener("click", moveRight);
        document.body.appendChild(buttonright);

    }
    function moveUp(): void {
        object[0].y -= 10;
        collision();
        win();

    }
    function moveDown(): void {
        object[0].y += 10;
        collision();
        win();
    }
    function moveLeft(): void {
        object[0].x -= 10;
        collision();
        win();



    }
    function moveRight(): void {
        object[0].x += 10;
        collision();
        win();
    }
    function collision(): void {
//


    }
    function win(): void {
        if (object[0].y <= 90) {
            alert("Gewonnen");
            location.reload();
        }
    }
    function loose(): void {

        alert("Verloren");
        location.reload();

    }
}
