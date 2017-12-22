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
        let baeume: Produkte[] = [baum1];

        var fieldset: HTMLElement = document.createElement("FIELDSET");
        var radio: HTMLElement = document.createElement("INPUT");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", baeume[0].name);
        document.body.appendChild(fieldset);
        fieldset.appendChild(radio);

    }
}
