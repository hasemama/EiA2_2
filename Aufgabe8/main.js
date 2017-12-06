var L08_DOM;
(function (L08_DOM) {
    window.addEventListener("load", init);
    var quadrat = [];
    var input1 = prompt("Anzahl zwischen 10  und 100");
    var input2 = prompt("Farbe,Groesse,Position");
    alert(saveData(input2));
    function init() {
        for (let i = 0; i < parseInt(input1); i++) {
            let h = document.createElement("div");
            //console.log(h);
            h.style.position = "absolute";
            // h.style.top = "50px";
            h.style.height = "40px";
            h.style.width = "40px";
            h.style.backgroundColor = "red";
            document.body.appendChild(h);
        }
    }
    function saveData(_input) {
        let splitted = _input.split(",");
        let quadrati = {
            Farbe: splitted[0],
            Groesse: parseInt(splitted[1]),
            Position: parseInt(splitted[2])
        };
        quadrat.push(quadrati);
        return "Thank you";
    }
})(L08_DOM || (L08_DOM = {}));
//# sourceMappingURL=main.js.map