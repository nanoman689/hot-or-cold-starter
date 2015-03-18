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
  		var userGuessNumber = $('#userGuess').val();
  		console.log("You guessed "+ userGuessNumber);

  		/*--- Compare the guess and the actual number ---*/

  		checkHotCold(userGuessNumber);

  		$('#userGuess').val('');

  		return false; 

  	});


});


/*-- Random Number Picker --*/

var hotNumber = Math.floor((Math.random() * 100) + 1);
console.log(hotNumber);

/*-- Start counter at zero --*/

counterGuess = 0;

/*-- Get the value of the counter --*/

var guessCount = +document.getElementById('count');

/*-- check the guessNumber against the hotNumber) ---*/



/*--- Function to check the number ---*/

function checkHotCold(checkNumber){
	/* increase the count by 1 */

	counterGuess ++;

	var difference = Math.abs(hotNumber - checkNumber);

	if (difference === 0){
		  console.log("You Got It!");
		} else if (difference >= 50) {
			console.log("So Very Cold");
		} else if (difference >= 40) {
		    console.log("Still Cold");
		} else if (difference >= 30) {
			console.log("Cold");
		} else if (difference >= 20) {
			console.log("Warm!"); 
		} else if (difference >= 10) {
			console.log("Warmer!");			
		} else if (difference >= 5){
			console.log("Getting Close!");
		} else if (difference >= 1){
			console.log("Almost Have It!");			
		} else {
		  console.log("Try Again!");
	}
}




