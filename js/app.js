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

var difference = Math.abs(hotNumber - checkNumber);

/*--- Function to check the number ---*/

function checkHotCold(checkNumber){
	/* increase the count by 1 */

	counterGuess ++;

	if (hotNumber === checkNumber){
		  console.log("You Got It!");
		} else if (difference >= 50) {
		    /* within than 50 */
		    console.log("So Cold");
		} else if (hotNumber >= (checkNumber - 30) && hotNumber <= (checkNumber + 30)) {
		  /* within than 20 */
		  console.log("Cold");
		} else if (hotNumber >= (checkNumber - 10) && hotNumber <= (checkNumber + 10)) {
		  /* within then 10 */
		  console.log("Warm!"); 
		} else if (hotNumber >= (checkNumber - 5) && hotNumber <= (checkNumber + 5)){
		  /* within then 5 */
		  console.log("So Very Warm!");
		} else {
		  /* Nope, try again! */
		  console.log("Try Again!");
	}
}



difference >= 50;
difference >= 30;




