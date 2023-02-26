// BUTTONS
const checkBtn = document.querySelector('.check-btn');
const againBtn = document.querySelector('.again-btn');

let gameOutput = document.querySelector('.game-output');
let scoreOutput = document.querySelector('.score');
let highScoreOutput = document.querySelector('.highscore');
let guessInput = document.querySelector('input');
const secretNumberOutput = document.querySelector('.number');

let score = 20;
let number = '';
let highScore = 0;
let guessNumber = 0;

// RANDOM NUMBER FUNCTION
const randomNumber = () =>{
    number = Math.floor(Math.random() * 20) + 1;
    //console.log(number)
};
randomNumber();

// WINNING FUNCTION
const winningGame = () =>{
    // Winninh output
    if(number == guessNumber){
        gameOutput.textContent = `You Won 🎉`;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.guess').style.backgroundColor = 'green';
        secretNumberOutput.textContent = number;
        // Highscore
        if(score > highScore){
            highScore = score;
            highScoreOutput.textContent = score;
        }
    }
}

// LOOSING FUNCTION
const loosingGame = () =>{
    // Loosing output
    if(number > guessNumber){
        gameOutput.textContent = `Too Low 📉`;
        score--;
        scoreOutput.textContent = score;
    } else if(number < guessNumber){
        gameOutput.textContent = `Too High 📈`;
        score--;
        scoreOutput.textContent = score;
    }
}

//GAME FUNCTION
checkBtn.addEventListener('click', ()=>{
    guessNumber = document.querySelector('.guess').value;
    //console.log(guessNumber)
    if(number === null){
        scoreOutput = 'Please choose a number'
    };
    // GAME LOGIC
    if(number == guessNumber){
        winningGame();
    
    } else{
        loosingGame()
    }
    // WRONG OUTPUT
    if(guessNumber == ''){
        gameOutput.textContent = '⛔️ Please choose a number!'
    } else if(guessNumber > 20 || guessNumber < 1){
        gameOutput.textContent = '⛔️ Please choose a number 1 - 20!'
    }
    // LOOSING BACKGROUND COLOR
    if(score < 1){
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.guess').style.backgroundColor = 'red';
        gameOutput.textContent = '⛔️ You Lost!! ⛔️'
    }
});

// AGAIN BUTTON
againBtn.addEventListener('click', () =>{
    randomNumber();
    gameOutput.textContent = 'Start guessing...';
    secretNumberOutput.textContent = '?';
    guessInput.value = null;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').style.backgroundColor = '#222';
    score = 20;
    scoreOutput.textContent = score;
});