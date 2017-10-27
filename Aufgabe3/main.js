//Aufgabe: (Aufgabe 1)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (12.10.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var aufgabe3;
(function (aufgabe3) {
    window.addEventListener("load", init);
    let crc2;
    let img;
    let snowX = [];
    let snowY = [];
    let hoehe = 50;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //Himmel
        crc2.fillStyle = "#5CACEE";
        crc2.fillRect(0, 0, 800, 600);
        //Be    
        crc2.beginPath();
        crc2.moveTo(150, 112);
        crc2.lineTo(200, 50);
        crc2.lineTo(750, 562);
        crc2.closePath();
        crc2.strokeStyle = "#c2c2c2";
        crc2.stroke();
        crc2.fillStyle = "#c2c2c2";
        crc2.fill();
        //Piste
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.strokeStyle = "#FFFFFF";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        //Wol    
        crc2.beginPath();
        crc2.arc(420, 50, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(410, 60, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(410, 40, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(395, 35, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(385, 55, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //Sonne
        crc2.beginPath();
        crc2.arc(695, 60, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFD700";
        crc2.fill();
        //Lift
        crc2.beginPath();
        crc2.moveTo(250, 0);
        crc2.lineTo(1050, 600);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(260, 8);
        crc2.lineTo(110, 210);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(505, 190);
        crc2.lineTo(355, 392);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(700, 338);
        crc2.lineTo(550, 540);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        //Liftsitze
        crc2.beginPath();
        crc2.moveTo(300, 38);
        crc2.lineTo(275, 70);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(275, 70);
        crc2.lineTo(295, 85);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(650, 300);
        crc2.lineTo(625, 332);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(625, 332);
        crc2.lineTo(605, 317);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        //Schnemann 
        crc2.beginPath();
        crc2.arc(250, 550, 40, 0, 2 * Math.PI);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fillStyle = "#DCDCDC";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(250, 480, 30, 0, 2 * Math.PI);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fillStyle = "#DCDCDC";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(250, 430, 20, 0, 2 * Math.PI);
        crc2.strokeStyle = "##000000";
        crc2.stroke();
        crc2.fillStyle = "##DCDCDC";
        crc2.fill();
        //Augen Schneemann
        crc2.beginPath();
        crc2.arc(245, 430, 2, 0, 2 * Math.PI);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(260, 430, 2, 0, 2 * Math.PI);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.fill();
        drawTree(200, 250);
        drawTree(500, 400);
        drawTree(350, 450);
        for (let i = 0; i < 5; i++) {
            let x = 50 + Math.random() * 170;
            let y = 200 + Math.random() * 150;
            drawTree(x, y);
        }
        for (let i = 0; i < 140; i++) {
            snowX[i] = 0 + Math.random() * 800;
            snowY[i] = 0 + Math.random() * 600;
        }
        img = crc2.getImageData(0, 0, 800, 600);
        console.log(img);
        animate();
    }
    function drawTree(_x, _y) {
        //Baumkronen 
        crc2.beginPath();
        crc2.arc(_x, _y, 40, 0, 2 * Math.PI);
        crc2.strokeStyle = "#228B22";
        crc2.stroke();
        crc2.fillStyle = "#228B22";
        crc2.fill();
        //Baumst�mme 
        crc2.fillStyle = "#8B4513";
        crc2.fillRect(_x - 10, _y + 39, 20, 150);
    }
    function snowflake(_x, _y) {
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        crc2.fill();
    }
    function animate() {
        crc2.putImageData(img, 0, 0); // hier Hintergrund restaurieren
        for (let i = 0; i < snowX.length; i++) {
            if (snowY[i] > 600) {
                snowY[i] = 0;
            }
            snowY[i] += Math.random(); // andere Bewegungsmuster zu finden
            snowflake(snowX[i], snowY[i]);
        }
        window.setTimeout(animate, 20);
    }
})(aufgabe3 || (aufgabe3 = {}));
////  function drawSnowflake(_x: number, _y: number): void {
// / crc2.beginPath();
// / crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
// / crc2.strokeStyle = "#FFFFFF";
// / crc2.stroke();
////crc2.fillStyle = "#FFFFFF";
////crc2.fill();
////  }
//for (let i: number = 0; i < 100; i++) {
// let x: number = 1 + Math.random() * 800;
// let y: number = 1 + Math.random() * 600;
// drawSnowflake(x, y);
// }
//# sourceMappingURL=main.js.map