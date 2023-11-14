/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/
/*
let isValid = true;
const jourMax = [];

function valid(jour, annee, mois) {
    jour = parseInt(prompt('Entrez le jour'));
    mois = parseInt(prompt('Entrez le mois'));
    annee = parseInt(prompt('Entrez le année'));
    let isBissextile = false;

    function bissextile() {
        if (((annee % 4 === 0) && (!annee % 100 === 0)) || annee % 400 === 0) {
            isBissextile = true;
        }
    }

    bissextile();
    if (isNaN(jour) || isNaN(mois) || isNaN(annee)) {
        isValid = false;
    }
    if (jour < 1 || jour > 31) {
        isValid = false;
    }
    if (mois < 1 || mois > 12) {
        isValid = false;
    }
    if (annee < 1) {
        isValid = false;
    }

    switch (mois) {
        case 2 :
            if (isBissextile === true) {
                if (jour > 29) {
                    isValid = false;
                }
                jourMax.push(29);
            } else {
                if (jour > 28) {
                    isValid = false;
                }
                jourMax.push(28);
            }
            break;
        case 4 :
        case 6 :
        case 9 :
        case 11 :
            if (jour > 30) {
                isValid = false;
            }
            jourMax.push(30);
            break;
        default :
            jourMax.push(31);
    }
}

valid();
if (isValid === true) {
    console.log(`Date valide`);
    console.log(`Il peut y avoir ${jourMax[0]} jours maximum`);
} else {
    console.log(`Ce n'est pas une date valide`);
}
*/


const dateValide = {
    jour: prompt("Entrez un jour :"),
    mois: prompt("Entrez un mois :"),
    annee: prompt("Entrez une année :"),
    jourMax: [],
    valid() {
        let isValid = true;
        let isBissextile = false;
        if (((this.annee % 4 === 0) && (!this.annee % 100 === 0)) || this.annee % 400 === 0) {
            isBissextile = true;
        }
        if (isNaN(this.jour) || isNaN(this.mois) || isNaN(this.annee)) {
            isValid = false;
        }
        if (this.annee < 1) {
            isValid = false;
        }
        if (this.mois < 1 || this.mois > 12) {
            isValid = false;
        }
        if (this.jour < 1 || this.jour > 31) {
            isValid = false;
        }
        switch (parseInt(this.mois)) {
            case 2 :
                if (isBissextile === true) {
                    if (this.jour > 29) {
                        isValid = false;
                    }
                    this.jourMax.push(29);
                } else {
                    if (this.jour > 28) {
                        isValid = false;
                    }
                    this.jourMax.push(28);
                }
                break;
            case 4 :
            case 6 :
            case 9 :
            case 11 :
                if (this.jour > 30) {
                    isValid = false;
                }
                this.jourMax.push(30);
                break;
            default :
                this.jourMax.push(31);
        }
        if (isValid === true) {
            console.log(`Ce mois peut contenir ${this.jourMax[0]} jours maximum.`);
            return `Le ${this.jour} ${this.mois} ${this.annee} est une date valide`;
        } else {
            return "Ce n'est pas une date valide";
        }
    }
}

console.log(dateValide.valid());

