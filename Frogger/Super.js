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