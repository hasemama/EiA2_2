//Aufgabe: (Abschlussaufgabe)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (23.02.2018)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let img;
    let hitbox = 10;
    let object = [];
    let guy = new Abschlussaufgabe.Guy(400, 500);
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        let s = new Abschlussaufgabe.Street;
        s.draw();
        guy.draw();
        let c = new Abschlussaufgabe.Car(0, 128, 5 * Math.random() + 5);
        object.push(c);
        c = new Abschlussaufgabe.Car(0, 100, 5 * Math.random() + 8);
        object.push(c);
        c = new Abschlussaufgabe.Car(0, 228, 5 * Math.random() + 5);
        object.push(c);
        c = new Abschlussaufgabe.Car(0, 328, 5 * Math.random() + 5);
        object.push(c);
        c = new Abschlussaufgabe.Car(0, 300, 5 * Math.random() + 3);
        object.push(c);
        object.push(c);
        c = new Abschlussaufgabe.Car(0, 402, 5 * Math.random() + 5);
        object.push(c);
        let e = new Abschlussaufgabe.Coin(50, 125);
        object.push(e);
        e = new Abschlussaufgabe.Coin(350, 225);
        object.push(e);
        e = new Abschlussaufgabe.Coin(200, 325);
        object.push(e);
        e = new Abschlussaufgabe.Coin(550, 425);
        object.push(e);
        img = Abschlussaufgabe.crc2.getImageData(0, 0, 800, 600);
        console.log(img);
        animate();
        buttondraw();
    }
    function animate() {
        Abschlussaufgabe.crc2.putImageData(img, 0, 0);
        for (let i = 0; i < object.length; i++) {
            let a = object[i];
            a.update();
        }
        collision();
        win();
        window.setTimeout(animate, 20);
    }
    function buttondraw() {
        let buttonup = document.createElement("button");
        buttonup.innerText = "UP";
        buttonup.id = "ButtonUp";
        buttonup.addEventListener("click", moveUp);
        document.body.appendChild(buttonup);
        let buttonleft = document.createElement("button");
        buttonleft.innerText = "LEFT";
        buttonleft.id = "ButtonLeft";
        buttonleft.addEventListener("click", moveLeft);
        document.body.appendChild(buttonleft);
        let buttonright = document.createElement("button");
        buttonright.innerText = "RIGHT";
        buttonright.id = "ButtonRight";
        buttonright.addEventListener("click", moveRight);
        document.body.appendChild(buttonright);
        let buttondown = document.createElement("button");
        buttondown.innerText = "DOWN";
        buttondown.id = "ButtonDown";
        buttondown.addEventListener("click", moveDown);
        document.body.appendChild(buttondown);
    }
    function moveUp() {
        guy.y -= 10;
    }
    function moveDown() {
        guy.y += 10;
    }
    function moveLeft() {
        guy.x -= 10;
    }
    function moveRight() {
        guy.x += 10;
    }
    function collision() {
        for (let i = 1; i < object.length; i++) {
            let x;
            let y;
            x = Math.abs(object[i].x - guy.x);
            y = Math.abs(object[i].y - guy.y);
            if (x < hitbox && y < hitbox) {
                loose();
            }
        }
    }
    function win() {
        if (guy.y <= 90) {
            alert("Gewonnen");
            location.reload();
        }
    }
    function loose() {
        alert("Verloren");
        location.reload();
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map