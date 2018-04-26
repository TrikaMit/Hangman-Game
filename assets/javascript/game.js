startGame()
function startGame (){

var muscles = [

    'deltoid', 
    'pectoralismajor', 
    'rectusabdominis', 
    'adductor', 
    'abductor', 
    'trapezius', 
    'vastusmedialis', 
    'tibialis', 
    'teresminor', 
    'infraspinatus', 
    'tricepsbrachii', 
    'gluteusmaximus'
];

//listing all variables
var star = "*"
var starArray = [];
var whatLetter;
var lowerLetter;
var switcher;
var score;
var lives;
var remainingLetters;
var picker;
var pickMuscle;
var lives = 5;
if (wins=0){
    var score = 0;
}else {
    var score = 0+wins;
}

var wins;


var picker = Math.floor(Math.random() * muscles.length)

var pickMuscle = muscles[picker];
console.log(pickMuscle);

document.getElementById('score').innerHTML = "SCORE = " + score;
document.getElementById('lives').innerHTML = "LIVES = " + lives; 



//clicking guess box to display muscle

/*     document.getElementById('new-muscle').onclick = function () {
        newMuscle()
    };
    function newMuscle() {
        // var starMuscle = star.repeat(pickMuscle.length)
        //     console.log(starMuscle);
        //displays appropriate number of asterisks when guess box clicked
        document.getElementById('answer-box').innerHTML = starArray.join(" ");
    } */

for (var i = 0; i < pickMuscle.length; i++) {
    starArray[i] = "*";
    console.log(starArray);
    document.getElementById('answer-box').innerHTML = starArray.join(" ");

}
var remainingLetters = pickMuscle.length;


//the game play is kept within the pick Letter function
//alerts for guess when clicked

document.getElementById('guess-box').onclick = function () {
    pickLetter()
};

function pickLetter() {
    //Asks user for a letter input and converts to lower case
    var whatLetter = prompt('Please select a letter');
    //console.log(whatLetter);
    // if (whatLetter !== null) {
        
    // } 
    if (whatLetter === null) {
        alert("try again");
    } else if (whatLetter.length !== 1) {
        alert("Please enter a single letter guess");
    } else { //if actual guess
        var lowerLetter = whatLetter.toLowerCase();
        if (lives > 0){
            if (remainingLetters > 1){
                for (var j = 0; j < pickMuscle.length; j++){
                    if (pickMuscle[j] === lowerLetter) { //correct guess
                        starArray[j] = lowerLetter;
                        remainingLetters--;
                        console.log(remainingLetters);
                        document.getElementById('answer-box').innerHTML = starArray.join(" ");
                    }else if (!pickMuscle.includes(whatLetter)){
                        alert("WRONG!");
                        lives -= 1;
                        var wrongLetter = document.createElement('div');
                        wrongLetter.innerHTML = lowerLetter;
                        document.getElementById('incorrect-guesses').appendChild(wrongLetter);
                        document.getElementById('lives').innerHTML = "LIVES = " + lives;
                        break
                    }
                }
            }else{
                for (var j = 0; j < pickMuscle.length; j++){
                    if (pickMuscle[j] === lowerLetter) { //correct guess
                        starArray[j] = lowerLetter;
                        document.getElementById('answer-box').innerHTML = starArray.join(" ");
                        var youWin = alert('You win!');
                        score += 1;
                        wins += 1;
                        document.getElementById('score').innerHTML = "SCORE = " + score;
                        console.log(score);
                        
                        var playAgain = confirm("Do you want to play again?");
                        if (playAgain){
                           score += 1;
                           document.getElementById('score').innerHTML = "SCORE = " + score;
                           startGame(score += 1); 

                          
                        }

                    }
                }
            }
        }else{
            alert("The correct answer was " + pickMuscle);
            var youLose = alert("You lose!");
        
            var rePlay = confirm("Play again?");
            if (rePlay){
                location.reload()
            }
        }
    }
}


}


