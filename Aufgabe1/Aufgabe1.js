window.addEventListener("load", init);
function init() {
    let canvas = document.getElementsByTagName("canvas")[0];
    let crc2 = canvas.getContext("2d");
    //Piste
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(800, 600);
    crc2.stroke();
    //Lift
    crc2.beginPath();
    crc2.moveTo(250, 0);
    crc2.lineTo(1050, 600);
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(260, 8);
    crc2.lineTo(110, 210);
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(505, 190);
    crc2.lineTo(355, 392);
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(700, 338);
    crc2.lineTo(550, 540);
    crc2.stroke();
    //Liftsitze
    crc2.beginPath();
    crc2.moveTo(300, 38);
    crc2.lineTo(275, 70);
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(275, 70);
    crc2.lineTo(295, 85);
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(650, 300);
    crc2.lineTo(625, 332);
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(625, 332);
    crc2.lineTo(605, 317);
    crc2.stroke();
    //Baumst�mme 
    crc2.fillStyle = "#8B4513";
    crc2.fillRect(190, 289, 20, 150);
    crc2.fillStyle = "#8B4513";
    crc2.fillRect(40, 440, 20, 150);
    crc2.fillStyle = "#8B4513";
    crc2.fillRect(490, 340, 20, 150);
    //Baumkronen 
    crc2.beginPath();
    crc2.arc(200, 250, 40, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.fillStyle = "#228B22";
    crc2.fill;
    crc2.beginPath();
    crc2.arc(50, 400, 40, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.fillStyle = "#228B22";
    crc2.fill;
    crc2.beginPath();
    crc2.arc(500, 300, 40, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.fillStyle = "#228B22";
    crc2.fill;
    //Schnemann 
    crc2.beginPath();
    crc2.arc(250, 550, 40, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.beginPath();
    crc2.arc(250, 480, 30, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.beginPath();
    crc2.arc(250, 430, 20, 0, 2 * Math.PI);
    crc2.stroke();
    //Augen Schneemann
    crc2.beginPath();
    crc2.arc(245, 430, 2, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.beginPath();
    crc2.arc(260, 430, 2, 0, 2 * Math.PI);
    crc2.stroke();
    crc2.fillStyle = "#000000";
    crc2.fill;
}
