import Personnage from "./players.js";

const divblock = document.createElement("DIV");
divblock.classList.add('block-perso');
//let url
let img = document.createElement("img");
//imgbubu.setAttribute("src", url);




export let bubu = new Personnage(4,'Bubu', 'Tortue', 'Lente','C.....est......moi.......qu....ai.........gagné','ahhhh.......je........meurs',6 ,24, img, divblock);



export let dylan = new Personnage(5,'Johnny', 'Raton-laveur', 'Voleur','bah guette que jvoyons comment que jlai baggarrer','Le sang de mes morts que j ai perdu' ,4 ,30, img, divblock);



export let flash = new Personnage(6,'Furtif', 'Ecureil', 'Gland','je t ai bien eu..','rien' ,6 ,22, img, divblock);
