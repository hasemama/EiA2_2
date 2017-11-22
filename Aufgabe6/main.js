//Aufgabe: (Aufgabe 1)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (12.10.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var aufgabe6;
(function (aufgabe6) {
    window.addEventListener("load", init);
    let img;
    let object = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        aufgabe6.crc2 = canvas.getContext("2d");
        let n = 10;
        //Himmel
        aufgabe6.crc2.fillStyle = "#5CACEE";
        aufgabe6.crc2.fillRect(0, 0, 800, 600);
        //Be    
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(150, 112);
        aufgabe6.crc2.lineTo(200, 50);
        aufgabe6.crc2.lineTo(750, 562);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.strokeStyle = "#c2c2c2";
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "#c2c2c2";
        aufgabe6.crc2.fill();
        //Piste
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(0, 0);
        aufgabe6.crc2.lineTo(800, 600);
        aufgabe6.crc2.lineTo(0, 600);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.strokeStyle = "#FFFFFF";
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "#FFFFFF";
        aufgabe6.crc2.fill();
        //Sonne
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.arc(695, 60, 40, 0, 2 * Math.PI);
        aufgabe6.crc2.fillStyle = "#FFD700";
        aufgabe6.crc2.fill();
        //Lift
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(250, 0);
        aufgabe6.crc2.lineTo(1050, 600);
        aufgabe6.crc2.strokeStyle = "#000000";
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(260, 8);
        aufgabe6.crc2.lineTo(110, 210);
        aufgabe6.crc2.strokeStyle = "#000000";
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(505, 190);
        aufgabe6.crc2.lineTo(355, 392);
        aufgabe6.crc2.strokeStyle = "#000000";
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(700, 338);
        aufgabe6.crc2.lineTo(550, 540);
        aufgabe6.crc2.strokeStyle = "#000000";
        aufgabe6.crc2.stroke();
        //Liftsitze
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(300, 38);
        aufgabe6.crc2.lineTo(275, 70);
        aufgabe6.crc2.strokeStyle = "#000000";
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(275, 70);
        aufgabe6.crc2.lineTo(295, 85);
        aufgabe6.crc2.strokeStyle = "#000000";
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(650, 300);
        aufgabe6.crc2.lineTo(625, 332);
        aufgabe6.crc2.strokeStyle = "#000000";
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(625, 332);
        aufgabe6.crc2.lineTo(605, 317);
        aufgabe6.crc2.strokeStyle = "#000000";
        aufgabe6.crc2.stroke();
        //Schnemann 
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.arc(500, 550, 40, 0, 2 * Math.PI);
        aufgabe6.crc2.strokeStyle = "#000000";
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "#DCDCDC";
        aufgabe6.crc2.fill();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.arc(500, 480, 30, 0, 2 * Math.PI);
        aufgabe6.crc2.strokeStyle = "#000000";
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "#DCDCDC";
        aufgabe6.crc2.fill();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.arc(500, 430, 20, 0, 2 * Math.PI);
        aufgabe6.crc2.strokeStyle = "##000000";
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "##DCDCDC";
        aufgabe6.crc2.fill();
        //Augen Schneemann
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.arc(495, 430, 2, 0, 2 * Math.PI);
        aufgabe6.crc2.strokeStyle = "#000000";
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "#000000";
        aufgabe6.crc2.fill();
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.arc(510, 430, 2, 0, 2 * Math.PI);
        aufgabe6.crc2.strokeStyle = "#000000";
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "#000000";
        aufgabe6.crc2.fill();
        for (let i = 0; i < n; i++) {
            let s = new aufgabe6.Ski(300, 150, "#0000ff", Math.random() * 1 + 2, Math.random() * 1 + 2);
            object.push(s);
            let t = new aufgabe6.Baum(100, 150);
            object.push(t);
            let w = new aufgabe6.Wolken(100, 150);
            object.push(w);
            let sn = new aufgabe6.Snow(100, 150);
            object.push(sn);
        }
        img = aufgabe6.crc2.getImageData(0, 0, 800, 600);
        console.log(img);
        animate();
    }
    //Animate
    function animate() {
        aufgabe6.crc2.putImageData(img, 0, 0);
        for (let i = 0; i < object.length; i++) {
            let s = object[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=main.js.map