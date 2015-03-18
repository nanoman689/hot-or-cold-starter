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
  		if (userGuessNumber <= 100 && userGuessNumber >= 0){
  			
  			checkHotCold(userGuessNumber);

  			$('#guessList').append("<li>" + userGuessNumber + "</li>");

  			$('#userGuess').val('');
  		} else {
  			document.getElementById('feedback').innerHTML = "Try another number!";
  		}
  	
  		return false; 

  	});

  	$('.new').click(function (){
  		$('#userGuess').val('');
  		hotNumber = Math.floor((Math.random() * 100) + 1);
  		console.log(hotNumber);
  		counterGuess = 0;
  		document.getElementById('count').innerHTML = 0;
  		document.getElementById('feedback').innerHTML = "Make Your Guess!";
  		$('input#guessButton').prop("disabled", false);
		$('input#userGuess').prop("disabled", false);
  		$('#guessList').empty();

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

	document.getElementById('count').innerHTML = counterGuess;

	var difference = Math.abs(hotNumber - checkNumber);

	if (difference === 0){
			console.log("You Got It!");
			document.getElementById('feedback').innerHTML = "You Got It!";
		} else if (difference >= 50) {
			console.log("So Very Cold");
			document.getElementById('feedback').innerHTML = "So Very Cold";
		} else if (difference >= 40) {
		    console.log("Still Cold");
		    document.getElementById('feedback').innerHTML = "Still Cold";
		} else if (difference >= 30) {
			console.log("Cold");
			document.getElementById('feedback').innerHTML = "Cold";
		} else if (difference >= 20) {
			console.log("Warm!"); 
			document.getElementById('feedback').innerHTML = "Warm!";
		} else if (difference >= 10) {
			console.log("Warmer!");		
			document.getElementById('feedback').innerHTML = "Warmer";	
		} else if (difference >= 5){
			console.log("Getting Close!");
			document.getElementById('feedback').innerHTML = "Getting Close!";
		} else if (difference >= 1){
			console.log("Almost Have It!");	
			document.getElementById('feedback').innerHTML = "Almost Have It!";		
		} else {
			console.log("Try Again!");
			document.getElementById('feedback').innerHTML = "Try Again!";
	}

	if (counterGuess >= 10){
		document.getElementById('feedback').innerHTML = ("You didn't get it! <br> My number was <br>" + hotNumber + "<br> Try a new game!");
		$('input#guessButton').prop("disabled", "true");
		$('input#userGuess').prop("disabled", "true");
	}
}




