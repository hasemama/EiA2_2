var L08_DOM;
(function (L08_DOM) {
    window.addEventListener("load", init);
    var quadrat = [];
    var input = prompt("Farbe,Groesse,Position");
    alert(saveData(input));
    function init() {
        let h = document.createElement("div");
        //console.log(h);
        h.style.position = "absolute";
        // h.style.top = "50px";
        h.style.height = "40px";
        h.style.width = "40px";
        h.style.backgroundColor = "red";
        document.body.appendChild(h);
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