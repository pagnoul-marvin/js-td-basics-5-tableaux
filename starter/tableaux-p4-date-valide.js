/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/

let isValid = true;

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
            } else {
                if (jour > 28) {
                    isValid = false;
                }
            }
            break;
        case 4 :
        case 6 :
        case 9 :
        case 11 :
            if (jour > 30) {
                isValid = false;
            }
    }
}

valid();
if (isValid === true) {
    console.log(`Date valide`);
} else {
    console.log(`Ce n'est pas une date valide`);
}