$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Get the number ---*/
  	
  	$('input#guessButton').click(function() {
  		$('#userGuess').val;
  		var userGuessNumber = +document.getElementById('userGuess').value;
  		console.log("You guessed "+ userGuessNumber);

  		/*--- Compare the guess and the actual number ---*/

  		checkHotCold(userGuessNumber);

  		$('#userGuess').val('');

  		return false; 

  	});


});


/*-- Random Number Picker --*/

var hotNumber = Math.floor((Math.random() * 100) + 1);

/* Test Number 
var hotNumber = 20;
checkHotCold(15);
*/

console.log(hotNumber);

/*-- Start counter at zero --*/

counterGuess = 0;

/*-- Get the value of the counter --*/

var guessCount = +document.getElementById('count');

/*--- Function to check the number ---*/

function checkHotCold(checkNumber){
	/* increase the count by 1 */

	counterGuess ++;

	if (hotNumber === checkNumber){
	console.log("You Got It!");
	} 
	else {
		/* within than 50 */
		if (hotNumber >= (checkNumber - 50) && hotNumber <= (checkNumber + 50)) {
		console.log("So Cold");
		} 
		else {
			/* within than 20 */
			if (hotNumber >= (checkNumber - 30) && hotNumber <= (checkNumber + 30)) {
			console.log("Cold");
			}
			else {
				/* within then 10 */
				if (hotNumber >= (checkNumber - 10) && hotNumber <= (checkNumber + 10)) {
				console.log("Warm!");	
				}
				else {
					/* within then 5 */
					if (hotNumber >= (checkNumber - 5) && hotNumber <= (checkNumber + 5)){
					console.log("So Very Warm!");
					}
				}
			}	
		}
		/* Nope, try again! */
		console.log("Try Again!");
	}
		
	console.log("Counter counter guess is: " + counterGuess);
	console.log("Guess count is: " + guessCount);	
}






