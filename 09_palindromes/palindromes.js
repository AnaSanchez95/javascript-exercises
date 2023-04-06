const palindromes = function (string) {
    let newWord = '';
    for (let i = string.length ; i >= 0; i--) {        
        newWord += string.charAt(i);
    }
    if (string === newWord) {
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
