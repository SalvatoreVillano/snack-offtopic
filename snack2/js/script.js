const btn = document.getElementById("esegui");
const ordina = document.getElementById("ordina");
const arrayStampato = document.getElementById("arrayStampato");
const arrayOrdinato = document.getElementById("arrayOrdinato");
var arrayGenerato = [];

btn.addEventListener('click', function() {
    let numeriGenerati = 0;
    for(let j = 0; j < 10; j++){
    numeriGenerati = Math.floor(Math.random() * 50); 
    arrayGenerato.push(numeriGenerati);
    }
    arrayStampato.innerHTML = 'Il tuo array generato casualmente è: ' + arrayGenerato;
});

ordina.addEventListener('click', function() {
    arrayGenerato.sort(function(a, b){return a-b});
    arrayOrdinato.innerHTML = 'Il tuo array generato è stato ordinato dal piu piccolo al piu grande: ' + arrayGenerato;
});
