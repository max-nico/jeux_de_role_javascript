import {
    perso_1_max,
    perso_2_max,
    perso_3_max
} from "./persoMax.js"
import {
    bubu,
    dylan,
    flash
} from "./personico.js";

let Tabperso = [perso_1_max, perso_2_max, perso_3_max, bubu, dylan, flash];
let selectedPerso = [];
let choose = document.getElementById('choose-perso');
let combatPerso = []
let persoLoose = false;
let play = false;


function SelectPerso() {
    Tabperso.forEach(element => {
        choose.innerHTML += `<input type="checkbox" id="_${element.id}">${element.name}</input>`;
    });
    let checkbox = document.querySelectorAll('[type="checkbox"]');
    for (let c = 0; c < checkbox.length; c++) {
        const cb = checkbox[c];
        // push au click des inputs les choix des persos dans un tableau < 2
        cb.addEventListener("click", function (e) {
            if (selectedPerso.length < 2) {
                selectedPerso.push(cb.id);
            } else {
                //si plus de 2 choix effacer derniere entrer dans le tableau selected et l'id
                let index = selectedPerso.indexOf(e.target.id);
                if (index > -1) {
                    selectedPerso.splice(index, 1);
                }
                // Stop selected checkbox 
                if (selectedPerso.length == 2) {
                    e.preventDefault();
                }
            }
        })
    }
}

initgame();

function isSelectPerso() {
    'use strict';
    for (let i = selectedPerso.length - 1; i >= 0; i--) {
        let indexperso = parseInt(selectedPerso[i].replace("_", "") - 1);

        combatPerso.push(Tabperso[indexperso]);

        let ul = document.createElement("ul");
        choose.append(ul);
        // generation des cartes des personnages sélectionner
        ul.innerHTML += `<li>${Tabperso[indexperso].name}</li>`;
        ul.innerHTML += `<li>${Tabperso[indexperso].race}</li>`;
        ul.innerHTML += `<li>${Tabperso[indexperso].quality}</li>`;
        ul.innerHTML += `<li>${Tabperso[indexperso].victory}</li>`;
        ul.innerHTML += `<li>${Tabperso[indexperso].loose}</li>`;
        ul.innerHTML += `<li>${Tabperso[indexperso].degats}</li>`;
        ul.innerHTML += `<li>${Tabperso[indexperso].pv}</li>`;
        Tabperso[indexperso].img = "./assets/" + Tabperso[indexperso].id + ".png";
        ul.innerHTML += `<li><img src="${Tabperso[indexperso].img}"></li>`;
        ul.innerHTML += `<li>${Tabperso[indexperso].block}</li>`;
    };
    console.log('isSelectedPerso launch')
    attack()
}
// validation des personnage qu'on envoie se foutre sur la gueule
let btn = document.getElementById('valide');
btn.addEventListener("click",
    isSelectPerso, false);

// initialisation du jeu
function initgame() {
    SelectPerso();
}

btn.addEventListener('click', (e) => {
    'use strict';
    btn.removeEventListener('click',
        isSelectPerso,
        false
    );
    console.log("remove btn");
});


let consoleAttack = document.getElementById('consoleAttack');

function attack() {
    //perso 1 attack perso 2
    console.log(combatPerso[0].name);
    console.log(combatPerso[1].pv);
    setInterval(() => {
        if (combatPerso[1].pv > 0) {
            combatPerso[1].pv = combatPerso[1].pv - combatPerso[0].degats;
            consoleAttack.innerHTML += `<p>${combatPerso[0].name} >>>>> Attack ${combatPerso[1].name} <br>
            >>>>>> il reste ${combatPerso[1].pv} à ${combatPerso[1].name}</p>`;
        } else {
            clearInterval()
            loose()
        }
    }, 2000);
};

function tours() {};

function win() {

};

function loose() {
    console.log("perdu");
    initgame();
};
