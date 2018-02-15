//Aufgabe: (Aufgabe 1)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (12.10.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let img;
    let object = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        let s = new Abschlussaufgabe.Street;
        s.draw();
        let g = new Abschlussaufgabe.Guy(400, 550);
        object.push(g);
        let c = new Abschlussaufgabe.Car(0, 128, 3 * Math.random() + 5);
        object.push(c);
        c = new Abschlussaufgabe.Car(0, 228, 3 * Math.random() + 5);
        object.push(c);
        c = new Abschlussaufgabe.Car(0, 328, 3 * Math.random() + 5);
        object.push(c);
        c = new Abschlussaufgabe.Car(0, 402, 3 * Math.random() + 5);
        object.push(c);
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
        window.setTimeout(animate, 20);
    }
    function buttondraw() {
        let buttonup = document.createElement("button");
        buttonup.innerText = "UP";
        buttonup.style.position = "absolute";
        buttonup.style.top = "85%";
        buttonup.style.left = "15%";
        buttonup.style.height = "8%";
        buttonup.style.width = "25%";
        buttonup.id = "ButtonUp";
        buttonup.addEventListener("click", moveUp);
        document.body.appendChild(buttonup);
        let buttonleft = document.createElement("button");
        buttonleft.innerText = "LEFT";
        buttonleft.style.position = "absolute";
        buttonleft.style.top = "93%";
        buttonleft.style.left = "15%";
        buttonleft.style.height = "8%";
        buttonleft.style.width = "12%";
        buttonleft.id = "ButtonLeft";
        buttonleft.addEventListener("click", moveLeft);
        document.body.appendChild(buttonleft);
        let buttondown = document.createElement("button");
        buttondown.innerText = "DOWN";
        buttondown.style.position = "absolute";
        buttondown.style.top = "101%";
        buttondown.style.left = "15%";
        buttondown.style.height = "8%";
        buttondown.style.width = "25%";
        buttondown.id = "ButtonDown";
        buttondown.addEventListener("click", moveDown);
        document.body.appendChild(buttondown);
        let buttonright = document.createElement("button");
        buttonright.innerText = "RIGHT";
        buttonright.style.position = "absolute";
        buttonright.style.top = "93%";
        buttonright.style.left = "28%";
        buttonright.style.height = "8%";
        buttonright.style.width = "12%";
        buttonright.id = "ButtonRight";
        buttonright.addEventListener("click", moveRight);
        document.body.appendChild(buttonright);
    }
    function moveUp() {
        object[0].y -= 10;
    }
    function moveDown() {
        object[0].y += 10;
    }
    function moveLeft() {
        object[0].x -= 10;
    }
    function moveRight() {
        object[0].x += 10;
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map