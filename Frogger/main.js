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
        g.draw();
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
        function animate() {
            Abschlussaufgabe.crc2.putImageData(img, 0, 0);
            for (let i = 0; i < object.length; i++) {
                let a = object[i];
                a.update();
            }
            window.setTimeout(animate, 20);
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map