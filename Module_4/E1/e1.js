'use strict';

class Student {
    constructor
    (naam, vakken) {
        this.naam = naam;
        this.vakken = vakken;
        this.punten ={};
    }

    voegPuntenToe(vak, punt) {
        if (!this.vakken.includes(vak)) {
            this.vakken.push(vak);
            
        }
        this.punten[vak] = punt;
        return `Punt ${punt} toegevoegd voor vak ${vak}`;
    }
    gemiddelde() {
        let totaal = 0;
        let aantalVakken = 0;
        for (const vak in this.punten) {
            totaal += this.punten[vak];
            aantalVakken++;
        }
        return aantalVakken > 0 ? totaal / aantalVakken : 0; 
    }
    toonRapport() {
        let rapport = `<h2>Rapport van ${this.naam}</h2>`;
        rapport += '<ul>';

        for (const vak of this.vakken) {
            rapport += `<li>${vak}: ${this.punten[vak]}/20</li>`;
        }
        rapport += '</ul>';
        rapport += `<p>Gemiddelde: ${this.gemiddelde().toFixed(1)}/20</p>`;
        return rapport;
    }
}

const student1 = new Student('Jef', ['Wiskunde', 'Nederlands']);
const student2 = new Student('Jan', ['Wiskunde', 'Nederlands', 'Geschiedenis']);

student1.voegPuntenToe('Wiskunde', 8);
student1.voegPuntenToe('Nederlands', 9);
student1.voegPuntenToe('Geschiedenis', 7);
student2.voegPuntenToe('Wiskunde', 7);
student2.voegPuntenToe('Nederlands', 8);
student2.voegPuntenToe('Geschiedenis', 6);


const outputDiv = document.getElementById('output');
outputDiv.innerHTML = student1.toonRapport() + "<hr>" + student2.toonRapport();

