var L10_DOM;
(function (L10_DOM) {
    window.addEventListener("load", init);
    function init() {
        let baum1 = {
            name: "Baum1",
            preis: 10
        };
        let baum2 = {
            name: "Baum2",
            preis: 15
        };
        let baum3 = {
            name: "Baum3",
            preis: 20
        };
        let baeume = [baum1];
        var fieldset = document.createElement("FIELDSET");
        var radio = document.createElement("INPUT");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", baeume[0].name);
        document.body.appendChild(fieldset);
        fieldset.appendChild(radio);
    }
})(L10_DOM || (L10_DOM = {}));
//# sourceMappingURL=main.js.map