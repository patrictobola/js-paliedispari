console.log('JS OK')

// Recupero dal DOM input e button 
const palindromeInput = document.querySelector('#palindrome input');
const palindromeBtn = document.querySelector('#palindrome button');
const palindromeParagraph = document.querySelector('#palindrome p');

// Creo una funzione che stabilisca se la parola inserita dall'utente è palindroma 
function isPalindrome(word){
    for (let i = 0; i < word.length / 2; i++){
        if (word[i] !== word[word.length - 1 - i]){
            return 'Ops, non è palindroma';
        }
    }

    return 'Daje è palindroma';
    
}

// Creo un event listener che raccoglie il value dell'input dove l'utente inserisce la parola 
palindromeBtn.addEventListener('click', function(){
    const word = palindromeInput.value;
    const result = isPalindrome(word);
    console.log(result)
    palindromeParagraph.innerHTML = result
})

