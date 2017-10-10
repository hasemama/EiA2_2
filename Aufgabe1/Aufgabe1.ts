window.addEventListener("load",init);
function init(): void {
   let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
   
   let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
  
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(800, 600);
    crc2.stroke();
    
    
    crc2.fillStyle="#8B4513";
    crc2.fillRect(190,89,20,150);
    
    crc2.fillStyle="#8B4513";
    crc2.fillRect(40,440,20,150);
    
    crc2.fillStyle="#8B4513";
    crc2.fillRect(490,340,20,150);
    
    
    
    crc2.beginPath();
    crc2.arc(200,50,40,0,2*Math.PI);
    crc2.stroke();
    crc2.fillStyle="#228B22";
    crc2.fill;
    
    
    crc2.beginPath();
    crc2.arc(50,400,40,0,2*Math.PI);
    crc2.stroke();
    crc2.fillStyle="#228B22";
    crc2.fill;
    
    crc2.beginPath();
    crc2.arc(500,300,40,0,2*Math.PI);
    crc2.stroke();
    crc2.fillStyle="#228B22";
    crc2.fill;
    
    
   crc2.beginPath();
    crc2.arc(250,550,40,0,2*Math.PI);
    crc2.stroke();
    
    crc2.beginPath();
    crc2.arc(250,480,30,0,2*Math.PI);
    crc2.stroke();
    
    crc2.beginPath();
    crc2.arc(250,430,20,0,2*Math.PI);
    crc2.stroke();
    
    crc2.beginPath();
    crc2.arc(245,430,2,0,2*Math.PI);
    crc2.stroke();
    
    crc2.beginPath();
    crc2.arc(260,430,2,0,2*Math.PI);
    crc2.stroke();
    crc2.fillStyle="#000000";
    crc2.fill;
    
    
}
