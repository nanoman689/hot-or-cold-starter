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
  		return false;

  		checkHotCold(userGuessNumber);

  	});

  	/*--- Compair the guess and the actual number ---*/

});


/*-- Random Number Picker --*/

var hotNumber = Math.floor((Math.random() * 100) + 1);

console.log(hotNumber);


/*--- Function to check the number ---*/

function checkHotCold(checkNumber){
	if (hotNumber === userGuessNumber) {
	console.log("You Got It!");	
	}else if (hotNumber <= userGuessNumber) {
	console.log("Cold");
	}else {
	console.log("So Cold");
	}
}




