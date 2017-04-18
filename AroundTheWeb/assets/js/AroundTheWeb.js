var diceValue = document.querySelector("#diceValue");
var players = 0;
//a working dice roll function
//simply call rand() to roll the die
var rand = function(random) {
	num = 1 + Math.floor(Math.random() * 6);
	return num;
};
console.log(rand());

//When "Yes!" button is clicked display prompt
//for number of players (2 for now)
$("#readyButton").on("click",function(){
	numOfPlayer = prompt("How many people are playing? ");
	players = numOfPlayer;
	$("#players").append(numOfPlayer);
});

//When start button is clicked, generate new players
//
// $("#start").on("click", function(){
	
// });


//When 'Roll The Dice' is clicked display value of roll
diceRoll.addEventListener("click", function() {
	diceValue.textContent = rand();
});