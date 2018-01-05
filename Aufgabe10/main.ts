namespace L10_DOM {
    window.addEventListener("load", init);
    function init(): void {
        interface Produkte {
            name: string;
            preis: number;

        }

        let baum1: Produkte = {
            name: "Baum1",
            preis: 10
        };
        let baum2: Produkte = {
            name: "Baum2",
            preis: 15
        };
        let baum3: Produkte = {
            name: "Baum3",
            preis: 20
        };
        let halterung1: Produkte = {
            name: "Halterung1",
            preis: 10
        };
        let halterung2: Produkte = {
            name: "Halterung2",
            preis: 15
        };
        let halterung3: Produkte = {
            name: "Halterung3",
            preis: 20
        };
        let lieferung1: Produkte = {
            name: "Lieferung1",
            preis: 3
        };
        let lieferung2: Produkte = {
            name: "Lieferung2",
            preis: 10
        };
        let schmuck1: Produkte = {
            name: "Schmuck1",
            preis: 10
        };
        let schmuck2: Produkte = {
            name: "Schmuck2",
            preis: 15
        };
        let schmuck3: Produkte = {
            name: "Schmuck3",
            preis: 20
        };
        let kerze1: Produkte = {
            name: "Kerze1",
            preis: 10
        };
        let kerze2: Produkte = {
            name: "Kerze2",
            preis: 15
        };
        let kerze3: Produkte = {
            name: "Kerze3",
            preis: 20
        };
        let baeume: Produkte[] = [baum1, baum2, baum3];
        let halterung: Produkte[] = [halterung1, halterung2, halterung3];
        let lieferung: Produkte[] = [lieferung1, lieferung2];
        let schmuck: Produkte[] = [schmuck1, schmuck2, schmuck3];
        let kerze: Produkte[] = [kerze1, kerze2, kerze3];

        //Bäume-------------------------------------------------------------
        var fieldset: HTMLElement = document.createElement("FIELDSET");
        document.body.appendChild(fieldset);
        for (let i: number = 0; i < baeume.length; i++) {
            var radio: HTMLElement = document.createElement("INPUT");
            var label: HTMLElement = document.createElement("LABEL");
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
        var fieldset2: HTMLElement = document.createElement("FIELDSET");
        document.body.appendChild(fieldset2);
        for (let i: number = 0; i < halterung.length; i++) {
            var radio: HTMLElement = document.createElement("INPUT");
            var label: HTMLElement = document.createElement("LABEL");
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
        var fieldset3: HTMLElement = document.createElement("FIELDSET");
        document.body.appendChild(fieldset3);
        for (let i: number = 0; i < schmuck.length; i++) {
            var box: HTMLElement = document.createElement("INPUT");
            var label: HTMLElement = document.createElement("LABEL");
            var stepper: HTMLElement = document.createElement("INPUT");
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
        var fieldset4: HTMLElement = document.createElement("FIELDSET");
        document.body.appendChild(fieldset4);
        for (let i: number = 0; i < kerze.length; i++) {
            var box: HTMLElement = document.createElement("INPUT");
            var label: HTMLElement = document.createElement("LABEL");
            var stepper: HTMLElement = document.createElement("INPUT");
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
        var fieldset5: HTMLElement = document.createElement("FIELDSET");
        document.body.appendChild(fieldset5);
        for (let i: number = 0; i < lieferung.length; i++) {
            var radio: HTMLElement = document.createElement("INPUT");
            var label: HTMLElement = document.createElement("LABEL");
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
        var fieldset6: HTMLElement = document.createElement("FIELDSET");
        document.body.appendChild(fieldset6);

        var adresse: HTMLElement = document.createElement("INPUT");

        adresse.setAttribute("type", "Area");
        adresse.setAttribute("name", "Adresse");
        adresse.setAttribute("placeholder", "Hier Adresse eingeben");
        adresse.setAttribute("id", "Adressfeld");
        fieldset6.appendChild(adresse);

        //Ausgabe-------------------------------------------------------------------------
        var ausgabe: HTMLDivElement = document.createElement("div");
        ausgabe.innerHTML = "<h1>Artikel</h1>";
        document.body.appendChild(ausgabe);
       






    }


}
