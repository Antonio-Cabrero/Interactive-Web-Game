//Phrases
const phrasesArr = [
    "Free like a bird",
    "Loyal as dog",
    "Strong as a rock",
    "Smart like a dolphin",
    "Dumb like a drum"
];

//Variables

var missed = 0;


const mainCont = document.querySelector('.main-container');
const keyboard = document.getElementById('qwerty');
const keys = document.querySelectorAll('button');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const startBtn = document.querySelector('.btn__reset');
const guessPhrase = document.querySelector('#phrase ul');
const phraseArray = getRandomPhraseAsArray(phrasesArr);
const tries = document.querySelector('#scoreboard ol');
const title = document.querySelector('.title')


// functions 

function getRandomPhraseAsArray (arr) {
    
    const randomIndex = Math.floor(Math.random() * 5);
    let getPhrase = arr[randomIndex];
    const newPhrase = getPhrase.split("");    
    return newPhrase;
};

function addPhraseToDisplay (arr) {
    
    for (let i=0; i < arr.length; i++){
        let createLi = document.createElement('li');
        let letter = arr[i];
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
    let guess = clickedKey.textContent; // text from letter clicked
    let match = null;

    for (let i=0; i < checkPhrase.length; i++){ //check each letter in the hidden phrase
        let checkLetter = checkPhrase[i].textContent; // phrase letter
        
        if (guess === checkLetter.toLowerCase()) {  // check if guess is equal to 1 of the letters in the phrase
                checkPhrase[i].className += " show"; //giving that li class of show
                match = guess;
            }  
        } 
        
        return match; //get which letter was pressed
};

function checkWin () {
    let phraseLetters = document.querySelectorAll('.letter');
    let rightGuess = document.querySelectorAll('.show');
    
    if (phraseLetters.length === rightGuess.length) {
        overlay.classList = "win";
        title.innerHTML = "You Win!";
        overlay.style.display = "flex";
    }   else if (missed > 4){
        overlay.classList = "lose";
        title.innerHTML = "You Lose!";
        overlay.style.display = "flex";
    } 
};


// Event listeners

    //Start button
startBtn.addEventListener('click', (e) => {
    const btn = e.target;
    overlay.style.display = "none";
    if (overlay.className === "win" || overlay.className === "lose") {
        location.reload(true);
    }
});

keyboard.addEventListener('click', (e)=> {
    let chosen = e.target;
    if (chosen.tagName === 'BUTTON' && chosen.className !== "chosen") { //check if key clicked is a button
    chosen.setAttribute('disabled',  'true');
    chosen.className = "chosen";
    let guessChecker = checkLetter(e.target);
    if (guessChecker === null) {
        chosen.style.background = "var(--color-lose)";
        missed +=1;
        tries.removeChild(tries.firstElementChild);
    }
    }
    checkWin();
});


// working functions
addPhraseToDisplay(phraseArray);
