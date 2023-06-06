console.log('JS OK')

// Recupero dal DOM input e button 
const palindromeInput = document.querySelector('#palindrome input');
const palindromeBtn = document.querySelector('#palindrome button');

// Creo una funzione che stabilisca se la parola inserita dall'utente è palindroma 
function isPalindrome(word){
    const len = word.length;
    for (let i = 0; i < len / 2; i++){
        if (word[i] !== word[len - 1 - i]){
            return 'Non è palindroma';
        }
    }
    return 'è palindroma';
    
}

// Creo un event listener che raccoglie il value dell'input dove l'utente inserisce la parola 
let word = ''
palindromeBtn.addEventListener('click', function(){
    word = palindromeInput.value;
    const result = isPalindrome(word);
    console.log(result)
})

