/*****************************
* 029-2 - Boucles pour parcourir des tableaux
*/

// EXERCICE 1 :
// 1. Créez un tableau 'films' contenant les films "Forrest Gump", "Bohemian Rhapsody", "Le Seigneur des anneaux" et "Harry Potter".
const films = ["Forrest Gump", "Bohemian Rhapsody", "Le Seigneur des anneaux", "Harry Potter"];
let i = 0;
// 2. Parcourez ce tableau pour afficher les films qu'il contient :
//    1°) avec une boucle for
console.log("Avec une boucle for :");
for (i; i< films.length; i++) {
    console.log(films[i]);
}


//    2°) avec une boucle while
console.log("Avec une boucle while :");
let test = 0;
while (test<films.length) {
    console.log(films[test]);
    test++;
}

//    3°) avec une boucle for of
console.log("Avec une boucle for of :");
for (let film of films) {
    console.log(film);
}

// EXERCICE 2 :
// - Stockez le tableau ['John', 'Smith', 1990, 'designer', false, 'blue'] dans une variable 'john'.
const john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// - Parcourez ce tableau pour afficher les informations qu'il contient :
//    1°) avec une boucle for
console.log("Avec une boucle for :");
for (let test2 = 0; test2<john.length; test2++) {
    console.log(john[test2]);
}

//    2°) avec une boucle while
console.log("Avec une boucle while :");
let test3 = 0;
while (test3<john.length) {
    console.log(john[test3]);
    test3++;
}

//    3°) avec une boucle for of
console.log("Avec boucle for of : ");
for (let element of john) {
    console.log(element);
}

// EXERCICE 3 :
// - Créez un tableau "nombres" contenant les 5 premiers entiers.
const nombres = [1, 2, 3, 4, 5];

// - Affichez "Voici mon tableau de nombres :" suivi du tableau.

console.log(`Voici mon tableau de nombre ${nombres}`);

// - Créez un tableau vide "carres" qui contiendra les carrés de vos nombres.
const carres = [];

// - Parcourez le tableau "nombres" avec une boucle forEach et ajoutez dans le tableau "carres" le carré de chaque nombre.

nombres.forEach(nombres => {
    carres.push(nombres*nombres);
});

// - Affichez "Voici mon tableau de nombres au carré :" suivi du tableau contenant les carrés.

console.log(`Voici mon tableau de nombre au carré ${carres}`);