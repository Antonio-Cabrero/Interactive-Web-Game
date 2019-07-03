//Phrases
const phrasesArr = [
    "Free like a bird",
    "Loyal as dog",
    "Strong as a rock",
    "Smart like a dolphin",
    "Dumb like a drum"
];

//Variables
const mainCont = document.querySelector('.main-container');
const keyboard = document.getElementById('qwerty');
const keys = document.querySelectorAll('button');
const phrase = document.getElementById('phrase');
const startGame = document.getElementById('overlay');
const startBtn = document.querySelector('#overlay a');
const guessPhrase = document.querySelector('#phrase ul');
const phraseArray = getRandomPhraseAsArray(phrasesArr);
const guessChecker = checkLetter(keys);

var missed;


// functions 

function getRandomPhraseAsArray (arr) {
    
    const randomIndex = Math.floor(Math.random() * 5);
    let getPhrase = arr[randomIndex];
    const newPhrase = getPhrase.split("");    
    return newPhrase;
};

function addPhraseToDisplay (arr) {
    
    for (let i=0; i < phraseArray.length; i++){
        let createLi = document.createElement('li');
        let letter = phraseArray[i];
        //assing string value to list item
        createLi.textContent = letter;
        // append each character in newPhrase to the ul (#phrase)
        guessPhrase.appendChild(createLi);
       
    if (letter !== " ") {
        createLi.className = "letter";
     } else {
        createLi.className = "space";
     }
    }
    return phrase;
};

function checkLetter (clickedKey) { // get letter clicked
    let checkPhrase = guessPhrase.children; // get the li list of letters phrase
    
    for (let i=0; i < checkPhrase.length; i++){ //check each letter in the hidden phrase
        let checkLetter = checkPhrase[i].textContent; // phrase letter
        let guess = clickedKey.textContent; // text from letter clicked
        if (checkLetter.toLowerCase() === guess) {  // check if guess is equal to 1 of the letters in the phrase
                
                checkPhrase[i].className = "show"; //giving that li class of show
                console.log(match);
                return match; //get which letter was pressed
            } else {
                return null;
            }
  
    }
    
};

// Event listeners

    //Start button
startBtn.addEventListener('click', (e) => {
    const btn = e.target;
    mainCont.removeChild(startGame)
});

keyboard.addEventListener('click', (e)=> {
    let chosen = e.target;
    if (chosen.tagName === 'BUTTON' && chosen.className !== "chosen") { //check if key clicked is a button
    chosen.setAttribute('disabled',  'true');
    chosen.className = "chosen";
    let checkMatch = checkLetter(keys);
    console.log(checkMatch);
    }
});


// working functions
addPhraseToDisplay(phraseArray);
