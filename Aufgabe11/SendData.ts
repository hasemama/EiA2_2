namespace SendData {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        setupColorDivs();
    }
//Diese Funktion erzeugt die Farbfelder
    function setupColorDivs(): void {
        console.log("Hallo");
        let colors: string[] = ["red", "green", "blue"];
        let divs: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        console.log(divs);
        for (let i: number = 0; i < divs.length; i++) {
            console.log(i);
            divs[i].style.backgroundColor = colors[i];
            divs[i].addEventListener("click", handleClickOnDiv);
        }
    }
//Diese Funktion handelt den EventListener und löst die Request sendende Funktion "sendRequest" aus
    function handleClickOnDiv(_event: Event): void {
        let style: CSSStyleDeclaration = (<HTMLElement>_event.target).style;
        console.log(style.backgroundColor);
        sendRequest(style.backgroundColor);
    }
//Durch xhr.open wird von der Seite ohne sie neu zu laden die eingegeben Farbe angefordert
// readystatechange hat ihr eine ähnliche Funktion wie DOMCOntenloaded
    function sendRequest(_color: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8100?color=" + _color, true);
        xhr.open("GET", "https://eia2aufgabe11marcelhasemann.herokuapp.com?color=" + _color, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
//Wurde der Request nun beantwortet werden in der Console und in einer Alertbox etwas ausgegeben
    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            alert(xhr.response);
        }
    }
}