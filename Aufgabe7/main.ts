namespace StudiVZ {
    interface StudentData {
        name: string;
        vorname: string;
        alter: number;
        mn: number;
        geschlecht: boolean;
        kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s),n, a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let splitted: string[] = _input.split(",");

        var geeschlecht: boolean = parseInt(splitted[4]) == 1;

        let student: StudentData = {
            name: splitted[1],
            vorname: splitted[2],
            alter: parseInt(splitted[3]),
            mn: parseInt(splitted[0]),
            geschlecht: geeschlecht,
            kommentar: splitted[5]

        };

        students.push(student);

        return;
    }
    function queryData(_matrikel: number): string {
        //if (students[i].mn = _matrikel) {
            //sasd
       // }


        return "Hier fehlt noch der richtige Code...";
    }
}