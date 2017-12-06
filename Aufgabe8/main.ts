namespace L08_DOM {

    window.addEventListener("load", init);

    interface Quadrat {
        Farbe: string;
        Groesse: number;
        Position: number;
    }
    var quadrat: Quadrat[] = [];

    var input: string = prompt("Farbe,Groesse,Position");
    alert(saveData(input));

    function init(): void {

        let h: HTMLElement = document.createElement("div");
        //console.log(h);
        h.style.position = "absolute";
        // h.style.top = "50px";
        h.style.height = "40px";
        h.style.width = "40px";
        h.style.backgroundColor = "red";
        document.body.appendChild(h);


    }
    function saveData(_input: string): string {
        let splitted: string[] = _input.split(",");

        let quadrati: Quadrat = {
            Farbe: splitted[0],
            Groesse: parseInt(splitted[1]),
            Position: parseInt(splitted[2])

        };

        quadrat.push(quadrati);
        return "Thank you";
    }


}