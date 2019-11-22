import {perso_1_max, perso_2_max, perso_3_max} from "./persoMax.js"
import  {bubu, dylan, flash} from "./personico.js";

//console.log(flash);console.log(dylan);console.log(bubu);
//console.log(perso1, perso_3_max, perso_1_max, perso_2_max);

let Tabperso = [flash,dylan,bubu,perso_1_max,perso_3_max,perso_2_max];
let selectedPerso = [];

function SelectPerso (){
    let choose = document.getElementById('choose-perso');
    Tabperso.forEach(element => {
        choose.innerHTML += `<input type="checkbox" id="_${element.id}">${element.name}</input>`;
    });
    let checkbox = document.querySelectorAll('[type="checkbox"]');
    for (let c = 0; c < checkbox.length; c++) {
        const cb = checkbox[c];
        // push au click des inputs les choix des persos dans un tableau < 2
        cb.addEventListener("click", function(e){
            if (selectedPerso.length < 2) {
                selectedPerso.push(cb.id); 
                console.log(selectedPerso); 
            } else {
                e.preventDefault(); // arrete le onclick et le push des persos dans le tableau
            }
        })  
    }
}


SelectPerso();