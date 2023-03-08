// CHIEDERE AL CLIENTE IL NUMERO DI CHILOMETRI CHE VUOLE PERCORRERE E L'ETA'

// CHILOMETRI CHE IL CLIENTE VORREBBE PERCORRERE TRASFORMANDO IL DATO INSERITO IN NUMERO
const street = parseInt (prompt ("Quanti chilometri vuoi percorrere?"));
// ETA' DEL CLIENTE TRASFORMANDO IL DATO INSERITO IN NUMERO
const userAge = parseInt (prompt ("Quanti anni hai? (in base alla tua età avrai uno sconto)"))
console.log(street, userAge);

// CALCOLARE IL PREZZO DEL BIGLIETTO IN BASE AI CHILOMETRI SCELTI
const price = street * 0.21;
console.log(price);

// DEFINIAMO GLI SCONTI IN BASE ALL'ETA' DEL CLIENTE
const underAge = 0.80;
const overAge = 0.60;
// Calcoliamo il prezzo in base all'età del cliente
let finalPrice = ""

if (userAge < 18) {
    finalPrice = (price * underAge);
} else if (userAge > 65) {
    finalPrice = (price * overAge)
} else {
    finalPrice = price
}

console.log(finalPrice);