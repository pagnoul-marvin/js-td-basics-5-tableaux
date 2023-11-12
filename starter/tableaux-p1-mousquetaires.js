/*
TABLEAUX - PRÉPA 1 : Les trois mousquetaires
1. Créez un tableau nommé 'mousquetaires' contenant les noms des trois mousquetaires, Athos, Porthos et Aramis.
2. Utilisez une boucle 'for' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Voici les Trois Mousquetaires :".
3. Ajoutez au tableau le mousquetaire d'Artagnan.
4. Utilisez la méthode 'forEach()' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Ils sont quatre à présent :".
5. Supprimez Aramis du tableau.
6. Utilisez une boucle 'for-of' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Le pauvre Aramis est mort…".
*/
let i = 0;
const mousquetaires = ["Athos", "Porthos", "Aramis"];
console.log("Voici les 3 mousquetaires :");
for (i; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i]);
}

mousquetaires.push("Artagnan");
mousquetaires.forEach(mousquetaires =>{
    console.log(mousquetaires);
})
console.log("Ils sont 4 à présent");

mousquetaires.splice(2, 1);
for (let mousquetaire of mousquetaires) {
    console.log(mousquetaire);

}
console.log("Le pauvre Aramis est mort");