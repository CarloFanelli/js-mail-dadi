/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// DADI

// Math.random() * (max - min) + min -- per avere un numero random tra due parametri

// creo il numero dell'utente e lo collego al DOC
document.getElementById('newGame').addEventListener('click', function (e) {
    e.preventDefault();

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
        winnerDOC.innerHTML = ' - con il numero: ' + userNumber + ' vince utente';

    } else if (userNumber < computerNumber) {

        console.log(`utente: ${userNumber}, computer: ${computerNumber}. Vince il computer!`);

        //metodo insertAdjacentHTML
        computerNumberDOC.innerHTML = 'computer: ' + computerNumber;
        userNumberDOC.innerHTML = 'user: ' + userNumber;
        winnerDOC.innerHTML = ' - con il numero: ' + computerNumber + ' vince il computer';

    } else if (userNumber === computerNumber) {

        console.log(`utente: ${userNumber}, computer: ${computerNumber}. Pareggio!`);

        //metodo append
        computerNumberDOC.innerHTML = 'computer: ' + computerNumber;
        userNumberDOC.innerHTML = 'user: ' + userNumber;
        winnerDOC.innerHTML = ' - con il numero: ' + userNumber + ' pareggio';

    }

});


// MAIL

/* Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
 */

// chiedo la mail all'utente
//const userMail = prompt('inserisci la tua email:'); - ho l'input in pagina

// lista di mail che possono accedere
const mailsList = ['carlo@gmail.com', 'pino@gmail.com', 'gino@gmail.com', 'piero@gmail.com', 'andrea@gmail.com', 'luigi@gmail.com']

// aggiungo event listener al pulsante del form

let result = false;

document.getElementById('checkMailButton').addEventListener('click', function (e) {
    e.preventDefault();
    const emailUserDOM = document.getElementById('emailUser').value;

    // console.log(emailUserDOM); -- debug

    const checkMailResultDOM = document.getElementById('checkMailResult');

    //metodo senza ciclo -- più performante

    console.log(emailUserDOM);

    //uso innerHTML perché così sovrascrive la vecchia frase se cambio mail senza ricaricare pagina

    /* if (mailsList.includes(emailUserDOM)) {
        // console.log('include');
        checkMailResultDOM.innerHTML = `l'indirizzo ` + emailUserDOM + ` è presente`;
        checkMailResultDOM.classList.add('text-success');
        checkMailResultDOM.classList.remove('text-danger');

    } else {
        // console.log('non include');
        checkMailResultDOM.innerHTML = `l'indirizzo ` + emailUserDOM + ` non è presente`;
        checkMailResultDOM.classList.add('text-danger');
        checkMailResultDOM.classList.remove('text-success');
    } */

    // metodo con ciclo

    for (let i = 0; i < mailsList.length; i++) {
        const mailList = mailsList[i];

        if (emailUserDOM === mailList) {
            result = true;
            console.log(result);
            i = mailList.length;

        } else {
            result = false;
            console.log(result);
        }

        if (result == true) {
            checkMailResultDOM.innerHTML = `l'indirizzo ` + emailUserDOM + ` è presente`;
            checkMailResultDOM.classList.add('text-success');
            checkMailResultDOM.classList.remove('text-danger');
        } else {
            checkMailResultDOM.innerHTML = `l'indirizzo ` + emailUserDOM + ` non è presente`;
            checkMailResultDOM.classList.add('text-danger');
            checkMailResultDOM.classList.remove('text-success');
        }
    }
}) 