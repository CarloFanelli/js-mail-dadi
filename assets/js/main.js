/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// DADI

// Math.random() * (max - min) + min -- per avere un numero random tra due parametri

// creo il numero dell'utente e lo collego al DOC
const userNumber = Math.floor(Math.random() * 6 + 1);
const userNumberDOC = document.getElementById('user');

console.log(userNumber);

// creo il numero del computer e lo collego al DOC
const computerNumber = Math.floor(Math.random() * 6 + 1);
const computerNumberDOC = document.getElementById('computer');

console.log(computerNumber);

//collego per il risultato
const winnerDOC = document.getElementById('dadi');


if (userNumber > computerNumber) {

    console.log(`utente: ${userNumber}, computer: ${computerNumber}. Vince l'utente!`);

    //metodo innerHTML
    computerNumberDOC.innerHTML = 'computer: ' + computerNumber;
    userNumberDOC.innerHTML = 'user: ' + userNumber;
    winnerDOC.innerHTML += ' - con il numero: ' + userNumber + ' vince utente';
    
} else if (userNumber < computerNumber) {
    
    console.log(`utente: ${userNumber}, computer: ${computerNumber}. Vince il computer!`);

    //metodo insertAdjacentHTML
    computerNumberDOC.insertAdjacentHTML("beforeend",`computer: ${computerNumber}`);
    userNumberDOC.insertAdjacentHTML("beforeend",`user: ${userNumber}`);
    winnerDOC.insertAdjacentHTML("beforeend", ` - con il numero: ${computerNumber} il computer vince`)

} else if (userNumber === computerNumber) {
    
    console.log(`utente: ${userNumber}, computer: ${computerNumber}. Pareggio!`);

    //metodo append
    userNumberDOC.append(`utente: ${userNumber}`);
    computerNumberDOC.append(`computer: ${computerNumber}`);
    winnerDOC.append(` - pareggio!`)

}{
    
}


// MAIL

/* Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
 */

// chiedo la mail all'utente
//const userMail = prompt('inserisci la tua email:'); - ho l'input in pagina

// lista di mail che possono accedere
const mailsList = ['carlo@gmail.com','pino@gmail.com','gino@gmail.com','piero@gmail.com','andrea@gmail.com','luigi@gmail.com']

// ciclo di controllo nella lista
/*  for (let i = 0; i  < mailsList.length; i++) {

    const mailList = mailsList[i];

    let esitoMail='respinto';

    //console.log(mailList);

    if (userMail === mailList) {
        esitoMail='puoi entrare'
        //console.log(esitoMail);
        // assegno ad i il valore "finale" in modo che termini il ciclo una volta che trova l'elemento in lista
        i = mailsList.length;
        
    }else{
        //console.log(esitoMail);
    }

    console.log(esitoMail);
}  */


// aggiungo event listener al pulsante del form

document.getElementById('checkMailButton').addEventListener('click', function(e){ 
    e.preventDefault();
    const emailUserDOM = document.getElementById('emailUser').value;

   console.log(emailUserDOM);


//metodo senza ciclo -- più performante

   /*  if (mailsList.includes(emailUser)) {
        console.log('include');
    } else {
        console.log('non include');
    } */

})