//Aufgabe: (Aufgabe 1)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (12.10.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
namespace aufgabe5 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let img: ImageData;

    let fahrer: Ski[] = [];
    let snow: Snow[] = [];
    let wolke: Wolken[] = [];
    let baum: Baum[] = [];

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

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
        crc2.arc(500, 550, 40, 0, 2 * Math.PI);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fillStyle = "#DCDCDC";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(500, 480, 30, 0, 2 * Math.PI);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fillStyle = "#DCDCDC";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(500, 430, 20, 0, 2 * Math.PI);
        crc2.strokeStyle = "##000000";
        crc2.stroke();
        crc2.fillStyle = "##DCDCDC";
        crc2.fill();

        //Augen Schneemann
        crc2.beginPath();
        crc2.arc(495, 430, 2, 0, 2 * Math.PI);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(510, 430, 2, 0, 2 * Math.PI);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.fill();




        for (let i: number = 0; i < 5; i++) {
            let s: Baum = new Baum(50 + Math.random() * 170, 200 + Math.random() * 150);
            baum[i] = s;

        };

        for (let i: number = 0; i < 4; i++) {
            let s: Ski = new Ski(0, 0, "#0000FF", Math.random() * 2 + 5, Math.random() * 2 + 5);

            fahrer[i] = s;
        }

        for (let i: number = 0; i < 140; i++) {
            let s: Snow = new Snow(0 + Math.random() * 800, 0 + Math.random() * 600);
            snow[i] = s;
        };


        for (let i: number = 0; i < 4; i++) {
            let s: Wolken = new Wolken(0 + Math.random() * 800, 0 + Math.random() * 80 + 50);
            wolke[i] = s;
        }
        img = crc2.getImageData(0, 0, 800, 600);
        console.log(img);
        animate();
        }

        //Animate
        function animate(): void {
            crc2.putImageData(img, 0, 0);
            //Schnee
            for (let i: number = 0; i < snow.length; i++) {
                let s: Snow = snow[i];
                s.move();
            }

            //B�ume
            for (let i: number = 0; i < baum.length; i++) {
                let s: Baum = baum[i];

                s.drawTree();
            }
            //Wolken
            for (let i: number = 0; i < wolke.length; i++) {
                let s: Wolken = wolke[i];
                s.move();
            }
            //Skifahrer
            for (let i: number = 0; i < fahrer.length; i++) {
                let s: Ski = fahrer[i];
                s.move();
            }

            window.setTimeout(animate, 20);
        }

   

}