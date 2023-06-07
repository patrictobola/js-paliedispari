console.log('JS OK')

// Recupero dal DOM input e button 
const palindromeInput = document.querySelector('#palindrome input');
const palindromeBtn = document.querySelector('#palindrome button');
const palindromeParagraph = document.querySelector('#palindrome p');

// Creo una funzione che stabilisca se la parola inserita dall'utente è palindroma 
function isPalindrome(word){
    for (let i = 0; i < word.length / 2; i++){
        if (word[i] !== word[word.length - 1 - i]){
            return false;
        }
    }

    return true;
}

// Creo un event listener che raccoglie il value dell'input dove l'utente inserisce la parola 
palindromeBtn.addEventListener('click', function(){
    const word = palindromeInput.value.toLowerCase();
    const result = isPalindrome(word) ? 'La parola è palindroma' : 'La parola non è palindroma';
    console.log(result)
    palindromeParagraph.innerHTML = result
})

