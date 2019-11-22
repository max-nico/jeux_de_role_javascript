import {perso_1_max, perso_2_max, perso_3_max} from "./persoMax.js"
import  {bubu, dylan, flash} from "./personico.js";

//console.log(flash);console.log(dylan);console.log(bubu);
//console.log(perso1, perso_3_max, perso_1_max, perso_2_max);

let Tabperso = [perso_1_max,perso_2_max,perso_3_max,bubu,dylan,flash];
let selectedPerso = [];
let choose = document.getElementById('choose-perso');


function SelectPerso (){
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
            } else {
                //si plus de 2 choix effacer derniere entrer dans le tableau selected et l'id
                let index = selectedPerso.indexOf(e.target.id);
                if (index > -1) {
                    selectedPerso.splice(index, 1);
                }
                // Stop selected checkbox 
                if (selectedPerso.length==2) {
                    e.preventDefault(); 
                }
            }
        })  
    }
}
function validechoice() {
    let btn = document.getElementById('valide');
    btn.addEventListener("click", function(){
        console.log('click');
        
        for (let i=selectedPerso.length-1; i >= 0; i--) {
            let indexperso = parseInt(selectedPerso[i].replace("_","") -1);
                console.log('tabperso selceted ' + Tabperso[indexperso].name);
                let ul = document.createElement("ul");
                choose.append(ul);
                ul.innerHTML+= `<li>${Tabperso[indexperso].name}</li>`;
                ul.innerHTML+= `<li>${Tabperso[indexperso].race}</li>`;
                ul.innerHTML+= `<li>${Tabperso[indexperso].quality}</li>`;
                ul.innerHTML+= `<li>${Tabperso[indexperso].victory}</li>`;
                ul.innerHTML+= `<li>${Tabperso[indexperso].loose}</li>`;
                ul.innerHTML+= `<li>${Tabperso[indexperso].degats}</li>`;
                ul.innerHTML+= `<li>${Tabperso[indexperso].pv}</li>`;
                Tabperso[indexperso].img = "./assets/" + Tabperso[indexperso].id + ".png";
                ul.innerHTML+= `<li><img src="${Tabperso[indexperso].img}"></li>`;
                ul.innerHTML+= `<li>${Tabperso[indexperso].block}</li>`;
            }
    })
}

function initgame(params) {
    SelectPerso();
    validechoice();
}

function attack() { 
    
}
function tours() { 
    
}
function win() { 
    
}
function loose() { 
    
}

function play() { 
    attack();
    tours();
    win();
    loose();
 }

initgame();


