// CHIEDERE AL CLIENTE IL NUMERO DI CHILOMETRI CHE VUOLE PERCORRERE E L'ETA'
alert("Benvenuto in Boolean trainline. Con questo programma puoi calcolare il prezzo del tuo biglietto in base ai chilometri che vuoi percorrere e all'età che hai!!")

// CHILOMETRI CHE IL CLIENTE VORREBBE PERCORRERE TRASFORMANDO IL DATO INSERITO IN NUMERO
const kilometres = parseInt (prompt ("Quanti chilometri vuoi percorrere?"));
// ETA' DEL CLIENTE TRASFORMANDO IL DATO INSERITO IN NUMERO
const userAge = parseInt (prompt ("Quanti anni hai? (in base alla tua età avrai uno sconto)"))
console.log(kilometres, userAge);

if (isNaN(kilometres && userAge)){
    document.getElementById("error").innerHTML = "Non hai inserito i dati corretti. Ricarica la pagina premendo il tasto in alto del tuo browser oppure premi F5"
} else {

// CALCOLARE IL PREZZO DEL BIGLIETTO IN BASE AI CHILOMETRI SCELTI
const price = kilometres * 0.21;
console.log(price);

// DEFINIAMO GLI SCONTI IN BASE ALL'ETA' DEL CLIENTE
const underAge = 0.80;
const overAge = 0.60;
// Calcoliamo il prezzo in base all'età del cliente
let finalPrice = ""

if (userAge <= 18) {
    finalPrice = (price * underAge);
} else if (userAge >= 65) {
    finalPrice = (price * overAge)
} else {
    finalPrice = price
}
console.log(finalPrice);

// STAMPIAMO IL PREZZO DEL BIGLIETTO
document.getElementById("final-price").innerHTML = `Il prezzo del tuo biglietto è: €${finalPrice}`

}