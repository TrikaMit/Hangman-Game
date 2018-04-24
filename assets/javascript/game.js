var muscles = ['deltoid','pectoralismajor','rectusabdominis','adductor','abductor','trapezius','vastusmedialis','tibialis','teresminor','infraspinatus','tricepsbrachii','gluteusmaximus'];
console.log(muscles);

//listing all variables
var star = "*"
var starArray = [];
var whatLetter;
var lowerLetter;
var switcher;
var score = 0;
var lives = 5;

document.getElementById('score').innerHTML = "SCORE = " + score;
document.getElementById('lives').innerHTML = "LIVES = " + lives;


//This picks a random point from the string
var picker = Math.floor(Math.random() * muscles.length)
console.log(picker)
//this picks the muscle corresponding to point that player is guessing
var pickMuscle = muscles[picker] 
console.log(pickMuscle) 

//clicking guess box to display muscle
 document.getElementById('new-muscle').onclick = function() { 
     newMuscle()}; 
 function newMuscle() {
    // var starMuscle = star.repeat(pickMuscle.length)
//     console.log(starMuscle);
     document.getElementById('answer-box').innerHTML = starArray.join(" ");
 }

//displays appropriate number of asterisks when guess box clicked

for (var i = 0; i < pickMuscle.length; i++) {
    starArray[i] = "*";
    console.log(starArray);
   }
var starNumber = starArray[pickMuscle.length - 1];
//console.log(starNumber);
var remainingLetters = pickMuscle.length;




//the game play is kept within the pick Letter function
//alerts for guess when clicked
 document.getElementById('guess-box').onclick = function() { 
     pickLetter()};
 
function pickLetter() {
     //Asks user for a letter input and converts to lower case
     var whatLetter = prompt('Please select a letter');
     //console.log(whatLetter);
     if (whatLetter!==null) {
        var lowerLetter = whatLetter.toLowerCase();
        console.log(lowerLetter);  
     }
     //game options
     if (whatLetter===null){
        alert("try again");
    } else if (lowerLetter.length !== 1) {
        alert ("Please enter a single letter guess");
    } else {
        
        for (var j = 0; j < pickMuscle.length; j++) {
    //correct guess
            if (starArray.includes('*',0)) {
                if (pickMuscle[j] === whatLetter ){
            starArray[j] = whatLetter;
            console.log(pickMuscle[j]);
            remainingLetters--;
            console.log(starArray);
            document.getElementById('answer-box').innerHTML = starArray.join(" ");
            //add score 
                }    
        }
            else {
                alert("You win!");
                score += 1;
                document.getElementById('score').innerHTML = "SCORE = " + score;
                console.log(score);
            }
        }    
    }
    //input if WRONG
   
 }




//if they correctly pick a letter
// function youRight() {
//     var switcher = starMuscle.replace(starMuscle, whatLetter);
//     console.log(switcher);
//     document.getElementById('answer-box').innerHTML = switcher;
// }

// if (pickMuscle.includes(lowerletter)) {
//     console.log('this is working')
//     youRight();
// }







//This will switch whatever with whatLetter
// var switcher = pickMuscle.replace(pickMuscle[1], whatLetter);
// console.log(switcher);


//Will need this to replace asterisk with correct letter
//str = "Please visit Microsoft and Microsoft!";
//var n = str.replace(/Microsoft/g, "W3Schools");
