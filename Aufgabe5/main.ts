//Aufgabe: (Aufgabe 1)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (12.10.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
namespace aufgabe4 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let img: ImageData;
    interface Skiinfo {
        skiX: number;
        skiY: number;
        color: string;
        dx: number;
        dy: number;
    }
    interface Snowinfo {
        snowX: number;
        snowY: number;
    }

    interface Wolkeinfo {
        wolkeX: number;
        wolkeY: number;
    }
    interface Baume {
        baumX: number;
        baumY: number;
    }
    let fahrer: Skiinfo[] = [];
    let snow: Snowinfo[] = [];
    let wolke: Wolkeinfo[] = [];
    let baum: Baume[] = [];
    let hoehe: number = 50;


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
            baum[i] = {
                baumX: 50 + Math.random() * 170,
                baumY: 200 + Math.random() * 150
            };
        }

        for (let i: number = 0; i < 140; i++) {
            snow[i] = {
                snowX: 0 + Math.random() * 800,
                snowY: 0 + Math.random() * 600
            };
        }
        for (let i: number = 0; i < 4; i++) {
            fahrer[i] = {
                skiX: 0,
                skiY: 0,
                color: "#0000FF",
                dx: Math.random() * 2 + 1,
                dy: Math.random() * 2 + 1

            };
        }
        for (let i: number = 0; i < 4; i++) {
            wolke[i] = {
                wolkeX: 0 + Math.random() * 800,
                wolkeY: 0 + Math.random() * 80 + 50
            };
        }



        img = crc2.getImageData(0, 0, 800, 600);
        console.log(img);
        animate();





        function drawTree(_baum: Baume): void {
            //Baumkronen 
            crc2.beginPath();
            crc2.arc(_baum.baumX, _baum.baumY, 40, 0, 2 * Math.PI);
            crc2.strokeStyle = "#228B22";
            crc2.stroke();
            crc2.fillStyle = "#228B22";
            crc2.fill();

            //Baumstämme 
            crc2.fillStyle = "#8B4513";
            crc2.fillRect(_baum.baumX - 10, _baum.baumY + 39, 20, 150);
        }

        function snowflake(_snow: Snowinfo): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(_snow.snowX, _snow.snowY, 5, 0, 2 * Math.PI);
            crc2.fill();
        }
        function ski(_fahrer: Skiinfo): void {
            crc2.fillStyle = _fahrer.color;
            crc2.fillRect(_fahrer.skiX, _fahrer.skiY, 5, -20);
            crc2.beginPath();
            crc2.arc(_fahrer.skiX + 2.5, _fahrer.skiY - 20, 7, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(_fahrer.skiX - 4, _fahrer.skiY - 4);
            crc2.lineTo(_fahrer.skiX + 13, _fahrer.skiY + 7);
            crc2.strokeStyle = _fahrer.color;
            crc2.stroke();


        }
        function wolken(_wolke: Wolkeinfo): void {
            crc2.beginPath();
            crc2.arc(_wolke.wolkeX, _wolke.wolkeY, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_wolke.wolkeX - 10, _wolke.wolkeY + 10, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_wolke.wolkeX - 10, _wolke.wolkeY - 10, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_wolke.wolkeX - 25, _wolke.wolkeY - 15, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_wolke.wolkeX - 35, _wolke.wolkeY + 5, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

        }
        function animate(): void {
            crc2.putImageData(img, 0, 0);
            //Schnee
            for (let i: number = 0; i < snow.length; i++) {
                if (snow[i].snowY > 600) {
                    snow[i].snowY = 0;
                }
                snow[i].snowY += Math.random();
                snowflake(snow[i]);
            }

            for (let i: number = 0; i < fahrer.length; i++) {
                if (fahrer[i].skiX > 800) {
                    fahrer[i].skiX = 0;
                    fahrer[i].skiY = 0;
                }
                if (fahrer[i].skiY > 600) {
                    fahrer[i].skiX = 0;
                    fahrer[i].skiY = 0;
                }
                fahrer[i].skiY += fahrer[i].dy;
                fahrer[i].skiX += fahrer[i].dx;
                ski(fahrer[i]);


            }
            for (let i: number = 0; i < baum.length; i++) {

                drawTree(baum[i]);
            }

            for (let i: number = 0; i < wolke.length; i++) {
                if (wolke[i].wolkeX > 800) {
                    wolke[i].wolkeY = 0;
                }
                wolke[i].wolkeX += 1;
                wolken(wolke[i]);
            }
            window.setTimeout(animate, 20);
        }

    }

}