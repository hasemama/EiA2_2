var L08_DOM;
(function (L08_DOM) {
    window.addEventListener("load", init);
    var input1 = prompt("Anzahl zwischen 10  und 100");
    var input2 = prompt("Farbe,Groesse,Abstand rechts, Abstand links, Abstand oben, Abstand unten");
    function init() {
        let splitted = input2.split(",");
        for (let i = 0; i < parseInt(input1); i++) {
            let h = document.createElement("div");
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
})(L08_DOM || (L08_DOM = {}));
//# sourceMappingURL=main.js.map