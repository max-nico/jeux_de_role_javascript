import Personnage from "./players.js";

const divblock = document.createElement("DIV");
divblock.classList.add('block-perso');
//let url
let img = document.createElement("img");
//imgbubu.setAttribute("src", url);




let bubu = new Personnage('Bubu', 'Tortue', 'Lente','C.....est......moi.......qu....ai.........gagné','ahhhh.......je........meurs',6 ,24, imgbubu, divblock);

console.log(bubu);

let dylan = new Personnage('Johnny', 'Raton-laveur', 'Voleur','bah guette que jvoyons comment que jlai baggarrer','Le sang de mes morts que j ai perdu' ,4 ,30, img, divblock);

console.log(dylan);

let flash = new Personnage('Furtif', 'Ecureil', 'Gland','je t ai bien eu..','rien' ,6 ,22, img, divblock);

console.log(flash);