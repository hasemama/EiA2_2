namespace L08_DOM {

    window.addEventListener("load", init);



    let abc: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




    function init(): void {

        for (let i: number = 0; i < abc.length; i++) {
            let h: HTMLElement = document.createElement("div");
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
    function clickonletter(_event: MouseEvent): void {
        var target: HTMLElement = <HTMLElement>_event.target;
        target.style.color = "blue";
    }



}