var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s),n, a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let splitted = _input.split(",");
        var geeschlecht = parseInt(splitted[4]) == 1;
        let student = {
            name: splitted[1],
            vorname: splitted[2],
            alter: parseInt(splitted[3]),
            mn: parseInt(splitted[0]),
            geschlecht: geeschlecht,
            kommentar: splitted[5]
        };
        if (Number.isNaN(student.mn)) {
            return "Matrikelnummer ist keine Nummer";
        }
        students.push(student);
        return "Daten zur eingegebenen Matrikelnummer: " + student.mn + "\nName: " + student.name + "\nVorname: " + student.vorname + "\nAlter: " + student.alter + "\nGeschlecht: " + student.geschlecht + "\nKommentar: " + student.kommentar;
    }
    function queryData(_matrikelnummer) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].mn == _matrikelnummer) {
                return "Daten zur eingegebenen Matrikelnummer: " + students[i].mn + "\nName: " + students[i].name + "\nVorname: " + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + students[i].geschlecht + "\nKommentar: " + students[i].kommentar;
            }
            else {
                continue;
            }
        }
        return "Die eingegebene Matrikelnummer wurde nicht gefunden";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=main.js.map