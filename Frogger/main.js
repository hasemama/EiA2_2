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
        let n = 5;
        //Hintergrund
        //Gras
        Abschlussaufgabe.crc2.fillStyle = "green";
        Abschlussaufgabe.crc2.fillRect(0, 0, 600, 100);
        //Street
        Abschlussaufgabe.crc2.fillStyle = "grey";
        Abschlussaufgabe.crc2.fillRect(0, 100, 600, 400);
        //Gras
        Abschlussaufgabe.crc2.fillStyle = "green";
        Abschlussaufgabe.crc2.fillRect(0, 500, 600, 100);
        img = Abschlussaufgabe.crc2.getImageData(0, 0, 800, 600);
        console.log(img);
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map