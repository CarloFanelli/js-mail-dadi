/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// DADI

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


// MAIL

/* Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
 */

// chiedo la mail all'utente
const userMail = prompt('inserisci la tua email:');

// lista di mail che possono accedere
const mailsList = ['carlo@gmail.com','pino@gmail.com','gino@gmail.com','piero@gmail.com','andrea@gmail.com','luigi@gmail.com']

// ciclo di controllo nella lista
for (let i = 0; i  < mailsList.length; i++) {

    const mailList = mailsList[i];

    //console.log(mailList);

    if (userMail === mailList) {
        console.log('puoi entrare');
        // assegno ad i il valore "finale" in modo che termini il ciclo una volta che trova l'elemento in lista
        i = mailsList.length
    }else{
        console.log('respinto');
    }

}