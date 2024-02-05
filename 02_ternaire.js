
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
    return a > b ? a : b
}

console.log(ternaire(1, 2)); // Ajouter un console log obligatoire pour lancer le test
// Pour tester, ouvrir le terminale et faire node \nomDuFichier.js

module.exports = ternaire;