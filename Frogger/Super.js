//Aufgabe: (Abschlussaufgabe)
//Name: (Marcel Hasemann)
//Matrikel: (256646)
//Datum: (23.02.2018)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Super {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        ;
        update() {
            this.draw();
            this.move();
        }
        draw() {
            //bla
        }
        ;
        move() {
            //bla    
        }
        ;
    }
    Abschlussaufgabe.Super = Super;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Super.js.map