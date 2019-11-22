

let event = document.getElementById("subblock-title");
let appear = document.getElementById('appear');
let logoover = document.getElementById('logocrazy');
let logo = document.getElementById('logo');

event.addEventListener("mouseover", function() {
    appear.classList.add('display');
});

appear.addEventListener("click", function() {
    console.log('click btn');
    appear.remove();
    logo.remove();
    logoover.classList.add('crazy');

});

