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
        let halterung1 = {
            name: "Halterung1",
            preis: 10
        };
        let halterung2 = {
            name: "Halterung2",
            preis: 15
        };
        let halterung3 = {
            name: "Halterung3",
            preis: 20
        };
        let lieferung1 = {
            name: "Lieferung1",
            preis: 3
        };
        let lieferung2 = {
            name: "Lieferung2",
            preis: 10
        };
        let schmuck1 = {
            name: "Schmuck1",
            preis: 10
        };
        let schmuck2 = {
            name: "Schmuck2",
            preis: 15
        };
        let schmuck3 = {
            name: "Schmuck3",
            preis: 20
        };
        let kerze1 = {
            name: "Kerze1",
            preis: 10
        };
        let kerze2 = {
            name: "Kerze2",
            preis: 15
        };
        let kerze3 = {
            name: "Kerze3",
            preis: 20
        };
        let baeume = [baum1, baum2, baum3];
        let halterung = [halterung1, halterung2, halterung3];
        let lieferung = [lieferung1, lieferung2];
        let schmuck = [schmuck1, schmuck2, schmuck3];
        let kerze = [kerze1, kerze2, kerze3];
        //B�ume-------------------------------------------------------------
        var fieldset = document.createElement("FIELDSET");
        document.body.appendChild(fieldset);
        for (let i = 0; i < baeume.length; i++) {
            var radio = document.createElement("INPUT");
            var label = document.createElement("LABEL");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", baeume[i].name);
            radio.setAttribute("value", baeume[i].name);
            radio.setAttribute("id", baeume[i].name);
            label.innerText = baeume[i].name;
            console.log(radio);
            fieldset.appendChild(radio);
            fieldset.appendChild(label);
        }
        //Halterung---------------------------------------------------------
        var fieldset2 = document.createElement("FIELDSET");
        document.body.appendChild(fieldset2);
        for (let i = 0; i < halterung.length; i++) {
            var radio = document.createElement("INPUT");
            var label = document.createElement("LABEL");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", halterung[i].name);
            radio.setAttribute("value", halterung[i].name);
            radio.setAttribute("id", halterung[i].name);
            label.innerText = halterung[i].name;
            console.log(radio);
            fieldset2.appendChild(radio);
            fieldset2.appendChild(label);
        }
        //Schmuck----------------------------------------------------------
        var fieldset3 = document.createElement("FIELDSET");
        document.body.appendChild(fieldset3);
        for (let i = 0; i < schmuck.length; i++) {
            var box = document.createElement("INPUT");
            var label = document.createElement("LABEL");
            var stepper = document.createElement("INPUT");
            box.setAttribute("type", "checkbox");
            box.setAttribute("name", schmuck[i].name);
            box.setAttribute("value", schmuck[i].name);
            box.setAttribute("id", schmuck[i].name);
            stepper.setAttribute("type", "number");
            stepper.setAttribute("min", "0");
            stepper.setAttribute("value", "0");
            label.innerText = schmuck[i].name;
            console.log(box);
            fieldset3.appendChild(box);
            fieldset3.appendChild(label);
            fieldset3.appendChild(stepper);
        }
        //Kerze----------------------------------------------------------------------------
        var fieldset4 = document.createElement("FIELDSET");
        document.body.appendChild(fieldset4);
        for (let i = 0; i < kerze.length; i++) {
            var box = document.createElement("INPUT");
            var label = document.createElement("LABEL");
            var stepper = document.createElement("INPUT");
            box.setAttribute("type", "checkbox");
            box.setAttribute("name", kerze[i].name);
            box.setAttribute("value", kerze[i].name);
            box.setAttribute("id", kerze[i].name);
            stepper.setAttribute("type", "number");
            stepper.setAttribute("min", "0");
            stepper.setAttribute("value", "0");
            label.innerText = kerze[i].name;
            console.log(box);
            fieldset4.appendChild(box);
            fieldset4.appendChild(label);
            fieldset4.appendChild(stepper);
        }
        //Lieferung----------------------------------------------------------------------
        var fieldset5 = document.createElement("FIELDSET");
        document.body.appendChild(fieldset5);
        for (let i = 0; i < lieferung.length; i++) {
            var radio = document.createElement("INPUT");
            var label = document.createElement("LABEL");
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", lieferung[i].name);
            radio.setAttribute("value", lieferung[i].name);
            radio.setAttribute("id", lieferung[i].name);
            label.innerText = lieferung[i].name;
            console.log(radio);
            fieldset5.appendChild(radio);
            fieldset5.appendChild(label);
        }
        //Adresse-----------------------------------------------------------------------
        var fieldset6 = document.createElement("FIELDSET");
        document.body.appendChild(fieldset6);
        var adresse = document.createElement("INPUT");
        adresse.setAttribute("type", "Area");
        adresse.setAttribute("name", "Adresse");
        adresse.setAttribute("placeholder", "Hier Adresse eingeben");
        adresse.setAttribute("id", "Adressfeld");
        fieldset6.appendChild(adresse);
        //Ausgabe-------------------------------------------------------------------------
        var ausgabe = document.createElement("div");
        ausgabe.innerHTML = "<h1>Artikel</h1>";
        document.body.appendChild(ausgabe);
    }
})(L10_DOM || (L10_DOM = {}));
//# sourceMappingURL=main.js.map