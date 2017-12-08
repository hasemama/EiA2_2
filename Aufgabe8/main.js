var L08_DOM;
(function (L08_DOM) {
    window.addEventListener("load", init);
    var input1 = prompt("Anzahl zwischen 10  und 100");
    function init() {
        for (let i = 0; i < parseInt(input1); i++) {
            let farbe = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let groesse = "40px";
            let x = window.innerHeight * Math.random();
            let y = window.innerWidth * Math.random();
            draw(x, y, farbe, groesse);
        }
    }
    function draw(_x, _y, _farbe, _groesse) {
        let h = document.createElement("div");
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
})(L08_DOM || (L08_DOM = {}));
//# sourceMappingURL=main.js.map