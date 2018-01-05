//Aufgabe: (Aufgabe 9)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (17.12.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var L09_DOM;
(function (L09_DOM) {
    window.addEventListener("load", init);
    let buchstaben = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    let div;
    let dataArray = buchstaben.split(",");
    let safeDiv;
    function init() {
        for (let i = 0; i < dataArray.length; i++) {
            draw(i);
        }
        drawFlaeche();
    }
    document.addEventListener("keydown", tastenDruck);
    function tastenDruck(_event) {
        console.log(_event.key);
        let div = document.getElementById("" + _event.key);
        if (safeDiv) {
            safeDiv.style.backgroundColor = "black";
        }
        safeDiv = div;
        div.style.backgroundColor = "red";
    }
    function draw(i) {
        div = document.createElement("div");
        div.addEventListener("click", handle);
        div.style.width = "0.5em";
        div.id = "" + dataArray[i];
        div.style.backgroundColor = "black";
        div.style.color = "white";
        div.style.marginLeft = "0.5em";
        div.style.fontSize = "1.5em";
        div.style.textAlign = "center";
        div.style.cssFloat = "left";
        div.style.padding = "0.5em";
        div.innerHTML = dataArray[i];
        document.body.appendChild(div);
    }
    function drawFlaeche() {
        div = document.createElement("div");
        div.addEventListener("click", write);
        div.style.width = "90%";
        div.style.height = "50vh";
        div.style.marginTop = "7em";
        div.style.marginLeft = "5%";
        div.style.backgroundColor = "white";
        div.style.border = "1px solid black";
        div.style.position = "absolute";
        document.body.appendChild(div);
    }
    function handle(_event) {
        if (safeDiv) {
            safeDiv.style.backgroundColor = "black";
        }
        let div = _event.target;
        safeDiv = _event.target;
        div.style.backgroundColor = "red";
    }
    function write(_event) {
        let div = document.createElement("div");
        div.style.position = "absolute";
        div.style.top = "" + (_event.clientY - 20) + "px";
        div.style.left = "" + (_event.clientX - 20) + "px";
        div.style.width = "0.5em";
        div.style.color = "white";
        div.style.textAlign = "center";
        div.style.padding = "0.5em";
        div.style.fontSize = "1.5em";
        div.style.backgroundColor = "hsl( " + Math.random() * 360 + ",100%,20%)";
        div.innerHTML = safeDiv.innerHTML;
        div.addEventListener("click", deleteBuch);
        document.body.appendChild(div);
    }
    function deleteBuch(_event) {
        if (_event.altKey) {
            let div = _event.target;
            document.body.removeChild(div);
        }
    }
})(L09_DOM || (L09_DOM = {}));
//# sourceMappingURL=main.js.map