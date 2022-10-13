const numeroArray = document.getElementById("nArray");
const btn = document.getElementById("esegui");
const arrayStampato = document.getElementById("numeriStampati");

btn.addEventListener('click', function() {
    let arrayGenerato = [];
    let numeriGenerati = [];
    for(let i = 0; i < numeroArray.value; i++){
    for(let j = 0; j < 10; j++){
    numeriGenerati = Math.floor(Math.random() * 100) + 1; 
    arrayGenerato.push(numeriGenerati);
    }
    arrayStampato.innerHTML = `Il tuo array è il seguente: ${arrayGenerato} <br>`
    }
});