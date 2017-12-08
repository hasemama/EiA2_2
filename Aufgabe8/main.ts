namespace L08_DOM {

    window.addEventListener("load", init);



    var input1: string = prompt("Anzahl zwischen 10  und 100");




    function init(): void {

        for (let i: number = 0; i < parseInt(input1); i++) {
            let farbe: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let groesse: string = "40px";
            let position: number = 500 * Math.random();
            draw(position, farbe, groesse);

        }


    }

    function draw(_position: number, _farbe: string, _groesse: string): void {
        let h: HTMLElement = document.createElement("div");
        //console.log(h);
        h.style.position = "absolute";
        h.style.right = _position + "px";
        h.style.left = _position + "px";
        h.style.top = _position + "px";
        h.style.bottom = _position + "px";
        h.style.height = _groesse;
        h.style.width = _groesse;
        h.style.backgroundColor = _farbe;
        document.body.appendChild(h);
    }


}