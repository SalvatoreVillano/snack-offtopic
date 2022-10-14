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
    arrayStampato.innerHTML = `Il tuo array è il seguente: ${arrayGenerato} <br>`
    btn.classList.add('d-none');
});

ordina.addEventListener('click', function() {
    arrayGenerato.sort(function(a, b){return a-b});
    arrayOrdinato.innerHTML = `Il tuo array ordinato è il seguente: ${arrayGenerato} <br>`
    ordina.classList.add('d-none');

});
