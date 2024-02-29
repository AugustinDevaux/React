
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

const multiplyByTwo = array => array.map(i => i * 2)

console.log(multiplyByTwo([1, 2, 3, 4, 5]))


/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

// DOUBLE EGAL INTERDIT
//const filterNameStartByA = array => array.filter(i => i[0] === "A")
const filterNameStartByA = array => array.filter(i => i.startsWith("A"))
console.log(filterNameStartByA(["Augustin", "Maelys", "Ismael"]))

/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const sum = (array) => {}
let array = ["a", "b", "c", "d"];
let count = 0;
for (let i = 0; i < array.length; i++) {
count++;
}
array.reduce((acc, i) => {
acc = acc + 1;
console.log(acc, i);
return acc;
}, "");

/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const array2 = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Doe'},
  {id: 3, name: 'Foo'},
  {id: 4, name: 'Bar'},
  ]
  const findUserById = (array2, id) => array.find(i => i.id === id)?.name ?? null; console.log(findUserById(array, 5))
  module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};

module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};