window.addEventListener("load",init);
function init(): void {
   let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
   
   let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
  
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(400, 300);
    crc2.stroke();
    
}
