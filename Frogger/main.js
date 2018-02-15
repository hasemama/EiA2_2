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
        //Gras
        Abschlussaufgabe.crc2.fillStyle = "green";
        Abschlussaufgabe.crc2.fillRect(0, 0, 800, 100);
        //Street
        Abschlussaufgabe.crc2.fillStyle = "grey";
        Abschlussaufgabe.crc2.fillRect(0, 100, 800, 50);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(100, 120, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(300, 120, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(500, 120, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(700, 120, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "#B43104";
        Abschlussaufgabe.crc2.fillRect(0, 150, 800, 50);
        Abschlussaufgabe.crc2.fillStyle = "grey";
        Abschlussaufgabe.crc2.fillRect(0, 200, 800, 50);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(50, 220, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(250, 220, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(450, 220, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(650, 220, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "#B43104";
        Abschlussaufgabe.crc2.fillRect(0, 250, 800, 50);
        Abschlussaufgabe.crc2.fillStyle = "grey";
        Abschlussaufgabe.crc2.fillRect(0, 300, 800, 50);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(100, 320, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(300, 320, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(500, 320, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(700, 320, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "#B43104";
        Abschlussaufgabe.crc2.fillRect(0, 350, 800, 50);
        Abschlussaufgabe.crc2.fillStyle = "grey";
        Abschlussaufgabe.crc2.fillRect(0, 400, 800, 50);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(50, 420, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(250, 420, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(450, 420, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillRect(650, 420, 50, 10);
        Abschlussaufgabe.crc2.fillStyle = "green";
        Abschlussaufgabe.crc2.fillRect(0, 450, 800, 50);
        //Gras
        Abschlussaufgabe.crc2.fillStyle = "green";
        Abschlussaufgabe.crc2.fillRect(0, 500, 800, 100);
        let s = new Abschlussaufgabe.Car(0, 128, 3 * Math.random() + 5);
        object.push(s);
        s = new Abschlussaufgabe.Car(0, 228, 3 * Math.random() + 5);
        object.push(s);
        s = new Abschlussaufgabe.Car(0, 328, 3 * Math.random() + 5);
        object.push(s);
        s = new Abschlussaufgabe.Car(0, 402, 3 * Math.random() + 5);
        object.push(s);
        img = Abschlussaufgabe.crc2.getImageData(0, 0, 800, 600);
        console.log(img);
        animate();
        function animate() {
            Abschlussaufgabe.crc2.putImageData(img, 0, 0);
            for (let i = 0; i < object.length; i++) {
                let s = object[i];
                s.update();
            }
            window.setTimeout(animate, 20);
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map