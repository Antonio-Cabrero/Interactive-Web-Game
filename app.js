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
const phrase = document.getElementById('phrase');
const startGame = document.getElementById('overlay');
const startBtn = document.querySelector('#overlay a');
const guessPhrase = document.querySelector('#phrase ul');
const phraseArray = getRandomPhraseAsArray(phrasesArr);

var missed;


// functions 

function getRandomPhraseAsArray (arr) {
    
    const randomIndex = Math.floor(Math.random() * 5);
    let getPhrase = phrasesArr[randomIndex];
    const newPhrase = getPhrase.split("");    
    return newPhrase;
};

function addPhraseToDisplay (arr) {

    for (let i=0; i < phraseArray.length; i++){
       phraseArray[i] = document.createElement('li');
       guessPhrase.appendChild(phraseArray[i]);
    }
    
    // append each character in newPhrase to the ul (#phrase)
    if (phraseArray[i] === str) {
       phraseArray[i].className = "letter";
     
};

// Event listeners

    //Start button
startBtn.addEventListener('click', (e) => {
    const btn = e.target;
    mainCont.removeChild(startGame)
});

addPhraseToDisplay(phraseArray);