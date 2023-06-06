// Recupero gli elementi dal DOM 
const userChoice = document.getElementById('userChoice')
const userNumberChoice = document.getElementById('userNumberChoice')
const paragraph = document.getElementById('paragraph')
const oddEvenBtn = document.querySelector('#oddeven button')

// Creo una funzione che generi un numero random da 1 a 5 
function randomNum(){
    const result = Math.floor(Math.random() * 5) + 1;
    return result
}

// Creo una funziona che stabilisca se un numero è paro 
function isEven(a){
    result = false;
    if (a % 2 === 0) result = true;
    return result;
}

// Aggiungo un event listener al button per raccogliere i dati dell'utente e dare un risultato 
oddEvenBtn.addEventListener('click', function(){
    // Creo due variabili con le scelte dell'utente 
    const userChoiceValue = userChoice.value;
    const num1 = parseInt(userNumberChoice.value);

    // Salvo in una variabile un numero generato casualmente (teoricamente CPU Num )
    const num2 = randomNum();

    // Sommo i due numeri e li salvo in una variabile
    const resultNumber = num1 + num2;

    // La traccia richiedeva di sommare i due numeri e usando la funzione precedentemente creata di stabilire se il numero fosse paro o disparo e successivamente di dichiarare il vincitore, personalmente ho preferito saltare questo passaggio e sfruttare la funzione direttamente nella dichiarazione del vincitore

    
    // Preparo un testo di base da printare nel paragraph all'interno del DOM 
    let result = `L'utente ha scelto ${userChoiceValue} con il numero ${num1}, al pc è uscito il numero ${num2} che sommati fanno ${resultNumber}.  `

    // In base al risultato aggiungo il risultato al paragraph 
    if (userChoiceValue === 'even' && isEven(resultNumber)) result += `Complimenti hai vinto`;
    else if (userChoiceValue === 'odd' && !isEven(resultNumber)) result += `Complimenti hai vinto`;
    else result += `Complimenti hai perso, sfigato che non sei altro!`;

    // Printo il testo completo all'interno del DOM 
    paragraph.innerHTML = result;

})