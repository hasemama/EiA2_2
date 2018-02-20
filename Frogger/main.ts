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
    let hitbox: number = 10;

    let car: Car[] = [];
    let coin: Coin[] = [];

    let guy: Guy = new Guy(400, 500);

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");

        let s: Street = new Street;
        s.draw();
      



        let c: Car = new Car(0, 128, 5 * Math.random() + 5);
        car.push(c);
        c = new Car(0, 100, 5 * Math.random() + 8);
        car.push(c);

        c = new Car(0, 228, 5 * Math.random() + 5);
        car.push(c);
        c = new Car(0, 328, 5 * Math.random() + 5);
        car.push(c);
        c = new Car(0, 300, 5 * Math.random() + 3);
        car.push(c);
        car.push(c);
        c = new Car(0, 402, 5 * Math.random() + 5);
        car.push(c);

        let e: Coin = new Coin(50, 125);
        coin.push(e);
        e = new Coin(350, 225);
        coin.push(e);
        e = new Coin(200, 325);
        coin.push(e);
        e = new Coin(550, 425);
        coin.push(e);


        img = crc2.getImageData(0, 0, 800, 600);
        console.log(img);
        animate();
        buttondraw();
    }

    function animate(): void {
        crc2.putImageData(img, 0, 0);

        for (let i: number = 0; i < car.length; i++) {
            let a: Superklasse = car[i];
            a.update();
           
        }
        for (let i: number = 0; i < coin.length; i++) {
            let a: Superklasse = coin[i];
            a.update();
        }

        guy.update();
        collision();
        collisioncoins();
        win();
        window.setTimeout(animate, 20);
    }

    function buttondraw(): void {
        let buttonup: HTMLButtonElement = document.createElement("button");
        buttonup.innerText = "UP";
        buttonup.id = "ButtonUp";
        buttonup.addEventListener("click", moveUp);
        document.body.appendChild(buttonup);

        let buttonleft: HTMLButtonElement = document.createElement("button");
        buttonleft.innerText = "LEFT";
        buttonleft.id = "ButtonLeft";
        buttonleft.addEventListener("click", moveLeft);
        document.body.appendChild(buttonleft);

        let buttonright: HTMLButtonElement = document.createElement("button");
        buttonright.innerText = "RIGHT";
        buttonright.id = "ButtonRight";
        buttonright.addEventListener("click", moveRight);
        document.body.appendChild(buttonright);
        let buttondown: HTMLButtonElement = document.createElement("button");
        buttondown.innerText = "DOWN";
        buttondown.id = "ButtonDown";
        buttondown.addEventListener("click", moveDown);
        document.body.appendChild(buttondown);


    }

    function moveUp(): void {        guy.y -= 10;
    }
    function moveDown(): void {
        guy.y += 10;
    }
    function moveLeft(): void {
        guy.x -= 10;
    }
    function moveRight(): void {
        guy.x += 10;
    }

    function collision(): void {
        for (let i: number = 1; i < car.length; i++) {
            let x: number;
            let y: number;
            x = Math.abs(car[i].x - guy.x);
            y = Math.abs(car[i].y - guy.y);

            if (x < hitbox && y < hitbox) {
                loose();

            }
        }
    }
    
    function collisioncoins(): void {

        for (let i: number = 1; i < coin.length; i++) {
            let x: number;
            let y: number;
            x = Math.abs(coin[i].x - guy.x);
            y = Math.abs(coin[i].y - guy.y);

            if (x < hitbox && y < hitbox) {
                coin[i].x = 5000; 
                coin[i].y = 5000;

            }
        }
    }

    function win(): void {
        if (guy.y <= 90) {
            alert("Gewonnen");
            location.reload();
        }
    }

    function loose(): void {
        alert("Verloren");
        location.reload();
    }
}
