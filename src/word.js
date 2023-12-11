let word

function setupWord(element, initWord) {
    word = initWord
    for (let i = 0; i < initWord.length; i++){
        let letterDiv = document.createElement('div')
        letterDiv.className = "letter-box"
        element.appendChild(letterDiv)
    }
}
// setupWord(document.querySelector('#word-container'), word);

function isLetterInWord(letter) {
    return word.includes(letter)
}

function revealLetterInWord(letter) {
    let elList = document.querySelectorAll('.letter-box')
    for (let i = 0; i < elList.length; i++){
        if(word[i] === letter){
            elList[i].innerHTML = letter
        }
        //if the letter of word at i is equal to letter
        
        //then we need to take the respective underscore element
        //and make it's innerHTML the letter
    }


}

export {setupWord, isLetterInWord, revealLetterInWord}