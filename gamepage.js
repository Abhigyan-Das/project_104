// random value generated
  var y = Math.floor(Math.random() * 10 + 1)
// counting the number of guesses
guess = 0;
function submit() {

    playername = localStorage.getItem("playername");
    
var x = document.getElementById("guessfield").value;
// made for correct Guess

    if ( x==y ) {
    alert("CONGRATULATIONS!!! "+playername+" YOU GUESSED IT RIGHT IN "+ guess+" Guess");
}
  
// function for number guessed by user     
else if( x>y ) {
    guess = guess + 1;
    alert("opps sorry!!! try a smaller number");

}
else {
   guess = guess + 1;
    alert("opps sorry!!! try a bigger number");
}
} 


function playAgain() {
    y = Math.floor(Math.random() * 10 + 1)
}
