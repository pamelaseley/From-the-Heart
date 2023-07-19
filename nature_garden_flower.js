//This code is a basic game to guess the correct character

//Create the game elements
let answer;
let guess;
let message;
let gameRunning = true;

//Game introduction
alert("Hello, and welcome to 'From the Heart'! In this game, you will try to guess the correct character. Read the clues, and see if you can guess it correctly!");

//Create an endless loop
while (gameRunning) {
  //Generate a random character
  answer = Math.floor(Math.random() * 10 + 1);

  //Ask for a user guess
  guess = prompt("I am thinking of a character. Can you guess which one it is?");

  //Compare the guess to the answer
  if (parseInt(guess) === answer) {
		message = "You are correct! The character is " + answer + "!";
    gameRunning = false;
  }
  else {
    message = "Sorry, that is not correct. Please try again.";
  }

  //Display the message
  alert(message);
}

//Thank the user
alert("Thanks for playing 'From the Heart'! We hope you enjoyed it!");