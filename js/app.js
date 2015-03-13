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

  		checkHotCold(userGuessNumber);

  		return false; 

  	});

  	/*--- Compair the guess and the actual number ---*/

});


/*-- Random Number Picker --*/

var hotNumber = Math.floor((Math.random() * 100) + 1);

/* Test Number 
var hotNumber = 20;
checkHotCold(15);
*/

console.log(hotNumber);

/*--- Function to check the number ---*/

function checkHotCold(checkNumber){
	if (hotNumber === checkNumber){
	console.log("You Got It!");	
	} 
	else {
		if (hotNumber <= (50 + checkNumber)) {
		console.log("So Cold");
		} 
		else {
			if (hotNumber <= (20 + checkNumber)) {
			console.log("Cold");
			}
			else {
			console.log("Try Again!");	
			}	
		}
	}
}






