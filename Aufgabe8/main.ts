namespace L08_DOM {

    window.addEventListener("load", init);


    var input1: string = prompt("Anzahl zwischen 10  und 100");

    var input2: string = prompt("Farbe,Groesse,Abstand rechts, Abstand links, Abstand oben, Abstand unten");


    function init(): void {
        let splitted: string[] = input2.split(",");
        for (let i: number = 0; i < parseInt(input1); i++) {
            let h: HTMLElement = document.createElement("div");
            //console.log(h);
            h.style.position = "absolute";
            h.style.right = splitted[2];
            h.style.left = splitted[3];
            h.style.top = splitted[4];
            h.style.bottom = splitted[5];
            h.style.height = splitted[1];
            h.style.width = splitted[1];
            h.style.backgroundColor = splitted[0];
            document.body.appendChild(h);
        }


    }


}