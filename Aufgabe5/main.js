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
    let fahrer;
    let snow = [];
    let wolke = [];
    let baum = [];
    let hoehe = 50;
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
            baum[i] = {
                baumX: 50 + Math.random() * 170,
                baumY: 200 + Math.random() * 150
            };
        }
        for (let i = 0; i < 140; i++) {
            snow[i] = {
                snowX: 0 + Math.random() * 800,
                snowY: 0 + Math.random() * 600
            };
        }
        for (let i = 0; i < 4; i++) {
            wolke[i] = {
                wolkeX: 0 + Math.random() * 800,
                wolkeY: 0 + Math.random() * 80 + 50
            };
        }
        img = aufgabe5.crc2.getImageData(0, 0, 800, 600);
        console.log(img);
        animate();
        function drawTree(_baum) {
            //Baumkronen 
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(_baum.baumX, _baum.baumY, 40, 0, 2 * Math.PI);
            aufgabe5.crc2.strokeStyle = "#228B22";
            aufgabe5.crc2.stroke();
            aufgabe5.crc2.fillStyle = "#228B22";
            aufgabe5.crc2.fill();
            //Baumst�mme 
            aufgabe5.crc2.fillStyle = "#8B4513";
            aufgabe5.crc2.fillRect(_baum.baumX - 10, _baum.baumY + 39, 20, 150);
        }
        function snowflake(_snow) {
            aufgabe5.crc2.fillStyle = "#ffffff";
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(_snow.snowX, _snow.snowY, 5, 0, 2 * Math.PI);
            aufgabe5.crc2.fill();
        }
        function wolken(_wolke) {
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(_wolke.wolkeX, _wolke.wolkeY, 20, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "#ffffff";
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(_wolke.wolkeX - 10, _wolke.wolkeY + 10, 20, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "#ffffff";
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(_wolke.wolkeX - 10, _wolke.wolkeY - 10, 20, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "#ffffff";
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(_wolke.wolkeX - 25, _wolke.wolkeY - 15, 20, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "#ffffff";
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(_wolke.wolkeX - 35, _wolke.wolkeY + 5, 20, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "#ffffff";
            aufgabe5.crc2.fill();
        }
        function animate() {
            aufgabe5.crc2.putImageData(img, 0, 0);
            //Schnee
            for (let i = 0; i < snow.length; i++) {
                if (snow[i].snowY > 600) {
                    snow[i].snowY = 0;
                }
                snow[i].snowY += Math.random();
                snowflake(snow[i]);
            }
            for (let i = 0; i < baum.length; i++) {
                drawTree(baum[i]);
            }
            for (let i = 0; i < wolke.length; i++) {
                if (wolke[i].wolkeX > 800) {
                    wolke[i].wolkeY = 0;
                }
                wolke[i].wolkeX += 1;
                wolken(wolke[i]);
            }
            window.setTimeout(animate, 20);
        }
    }
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=main.js.map