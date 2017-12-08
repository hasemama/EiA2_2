namespace L08_DOM {

    window.addEventListener("load", init);



    var input1: string = prompt("Anzahl zwischen 10  und 100");




    function init(): void {

        for (let i: number = 0; i < parseInt(input1); i++) {
            let farbe: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let groesse: string = "40px";
            let x: number = window.innerHeight * Math.random();
            let y: number = window.innerWidth * Math.random();
            draw(x, y, farbe, groesse);

        }


    }

    function draw(_x: number, _y: number, _farbe: string, _groesse: string): void {
        let h: HTMLElement = document.createElement("div");
        //console.log(h);
        h.style.position = "absolute";
        h.style.right = _y + "px";
        h.style.left = _y + "px";
        h.style.top = _x + "px";
        h.style.bottom = _x + "px";
        h.style.height = _groesse;
        h.style.width = _groesse;
        h.style.backgroundColor = _farbe;
        document.body.appendChild(h);
    }


}