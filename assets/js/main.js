/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// Math.random() * (max - min) + min -- per avere un numero random tra due parametri

// creo il numero dell'utente
const userNumber = Math.floor(Math.random() * 6 + 1);

console.log(userNumber);

// creo il numero del computer
const computerNumber = Math.floor(Math.random() * 6 + 1);

console.log(computerNumber);

if (userNumber > computerNumber) {

    console.log(`utente: ${userNumber}, computer: ${computerNumber}. Vince l'utente!`);
    
} else if (userNumber < computerNumber) {
    
    console.log(`utente: ${userNumber}, computer: ${computerNumber}. Vince il computer!`);

} else if (userNumber === computerNumber) {
    
    console.log(`utente: ${userNumber}, computer: ${computerNumber}. Pareggio!`);

}{
    
}
