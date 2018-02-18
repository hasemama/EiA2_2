//Aufgabe: (Abschlussaufgabe)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (23.02.2018)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let img: ImageData;
    let hitbox: number = 10;  //-> da die Autos nicht quadratisch sind, passt das nicht so ganz

    let object: Super[] = []; //-> der Name Super ist nicht sehr aussagekräftig

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        let s: Street = new Street;
        s.draw();
        let g: Guy = new Guy(400, 550);

        object.push(g); //-> guy sollte nicht in Array, da er doch eine klare Sonderfunktion hat.
        //-> Besser über eine Variable z.B. namens guy ansprechen

        let c: Car = new Car(0, 128, 5 * Math.random() - 2); //-> so können Autos auch nach links fahren
        object.push(c);

        c = new Car(0, 228, 5 * Math.random() - 2);
        object.push(c);
        c = new Car(0, 328, 5 * Math.random() - 2);
        object.push(c);
        c = new Car(0, 402, 5 * Math.random() - 2);
        object.push(c);
        //-> mehr Autos wären schön

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

        collision();
        win(); //-> wenn man die win-condition hier abfragt, muss sie nicht vier mal bei den moves eingetragen werden.
        window.setTimeout(animate, 20);
    }

    function buttondraw(): void {
        let buttonup: HTMLButtonElement = document.createElement("button");
        buttonup.innerText = "UP";
        buttonup.style.position = "absolute"; //-> es ist auch erlaubt ein Stylesheet zu nutzen, dann bläht man den Code nicht so auf.
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
    }
    function moveDown(): void {
        object[0].y += 10;
    }
    function moveLeft(): void {
        object[0].x -= 10;
    }
    function moveRight(): void {
        object[0].x += 10;
    }

    function collision(): void {
        //
        for (let i: number = 1; i < object.length; i++) {
            let x: number;
            let y: number;
            x = Math.abs(object[i].x - object[0].x);
            y = Math.abs(object[i].y - object[0].y);

            if (x < hitbox && y < hitbox) {
                loose();
            }
        }
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
