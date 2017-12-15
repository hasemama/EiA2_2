var L08_DOM;
(function (L08_DOM) {
    window.addEventListener("load", init);
    let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    function init() {
        for (let i = 0; i < abc.length; i++) {
            let h = document.createElement("div");
            h.style.height = "50px";
            h.style.width = "50px";
            h.style.backgroundColor = "red";
            h.textContent = abc[i];
            h.style.margin = "15px";
            h.style.padding = "5px";
            h.id = abc[i];
            h.addEventListener("click", clickonletter);
            h.addEventListener("keydown", clickonletter);
            document.body.appendChild(h);
        }
    }
    function clickonletter(_event) {
        var target = _event.target;
        target.style.color = "blue";
    }
})(L08_DOM || (L08_DOM = {}));
//# sourceMappingURL=main.js.map