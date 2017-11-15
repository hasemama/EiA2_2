//Aufgabe: (Aufgabe 1)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (12.10.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var aufgabe5;
(function (aufgabe5) {
    window.addEventListener("load", init);
    let img;
    let fahrer = [];
    let snow = [];
    let wolke = [];
    let baum = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        aufgabe5.crc2 = canvas.getContext("2d");
        //Himmel
        aufgabe5.crc2.fillStyle = "#5CACEE";
        aufgabe5.crc2.fillRect(0, 0, 800, 600);
        //Be    
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(150, 112);
        aufgabe5.crc2.lineTo(200, 50);
        aufgabe5.crc2.lineTo(750, 562);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.strokeStyle = "#c2c2c2";
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "#c2c2c2";
        aufgabe5.crc2.fill();
        //Piste
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(0, 0);
        aufgabe5.crc2.lineTo(800, 600);
        aufgabe5.crc2.lineTo(0, 600);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.strokeStyle = "#FFFFFF";
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "#FFFFFF";
        aufgabe5.crc2.fill();
        //Sonne
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.arc(695, 60, 40, 0, 2 * Math.PI);
        aufgabe5.crc2.fillStyle = "#FFD700";
        aufgabe5.crc2.fill();
        //Lift
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(250, 0);
        aufgabe5.crc2.lineTo(1050, 600);
        aufgabe5.crc2.strokeStyle = "#000000";
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(260, 8);
        aufgabe5.crc2.lineTo(110, 210);
        aufgabe5.crc2.strokeStyle = "#000000";
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(505, 190);
        aufgabe5.crc2.lineTo(355, 392);
        aufgabe5.crc2.strokeStyle = "#000000";
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(700, 338);
        aufgabe5.crc2.lineTo(550, 540);
        aufgabe5.crc2.strokeStyle = "#000000";
        aufgabe5.crc2.stroke();
        //Liftsitze
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(300, 38);
        aufgabe5.crc2.lineTo(275, 70);
        aufgabe5.crc2.strokeStyle = "#000000";
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(275, 70);
        aufgabe5.crc2.lineTo(295, 85);
        aufgabe5.crc2.strokeStyle = "#000000";
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(650, 300);
        aufgabe5.crc2.lineTo(625, 332);
        aufgabe5.crc2.strokeStyle = "#000000";
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(625, 332);
        aufgabe5.crc2.lineTo(605, 317);
        aufgabe5.crc2.strokeStyle = "#000000";
        aufgabe5.crc2.stroke();
        //Schnemann 
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.arc(500, 550, 40, 0, 2 * Math.PI);
        aufgabe5.crc2.strokeStyle = "#000000";
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "#DCDCDC";
        aufgabe5.crc2.fill();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.arc(500, 480, 30, 0, 2 * Math.PI);
        aufgabe5.crc2.strokeStyle = "#000000";
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "#DCDCDC";
        aufgabe5.crc2.fill();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.arc(500, 430, 20, 0, 2 * Math.PI);
        aufgabe5.crc2.strokeStyle = "##000000";
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "##DCDCDC";
        aufgabe5.crc2.fill();
        //Augen Schneemann
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.arc(495, 430, 2, 0, 2 * Math.PI);
        aufgabe5.crc2.strokeStyle = "#000000";
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "#000000";
        aufgabe5.crc2.fill();
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.arc(510, 430, 2, 0, 2 * Math.PI);
        aufgabe5.crc2.strokeStyle = "#000000";
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "#000000";
        aufgabe5.crc2.fill();
        for (let i = 0; i < 5; i++) {
            let s = new aufgabe5.Baum(50 + Math.random() * 170, 200 + Math.random() * 150);
            baum[i] = s;
        }
        ;
        for (let i = 0; i < 4; i++) {
            let s = new aufgabe5.Ski(0, 0, "#0000FF");
            fahrer[i] = s;
        }
        for (let i = 0; i < 140; i++) {
            let s = new aufgabe5.Snow(0 + Math.random() * 800, 0 + Math.random() * 600);
            snow[i] = s;
        }
        ;
        for (let i = 0; i < 4; i++) {
            let s = new aufgabe5.Wolken(0 + Math.random() * 800, 0 + Math.random() * 80 + 50);
            wolke[i] = s;
        }
        img = aufgabe5.crc2.getImageData(0, 0, 800, 600);
        console.log(img);
        animate();
        function animate() {
            aufgabe5.crc2.putImageData(img, 0, 0);
            //Schnee
            for (let i = 0; i < snow.length; i++) {
                let s = snow[i];
                s.move();
            }
            for (let i = 0; i < baum.length; i++) {
                let s = baum[i];
                s.drawTree();
            }
            for (let i = 0; i < wolke.length; i++) {
                let s = wolke[i];
                s.move();
            }
            for (let i = 0; i < fahrer.length; i++) {
                let s = fahrer[i];
                s.move();
            }
            window.setTimeout(animate, 20);
        }
    }
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=main.js.map