var userChoice 
var randomNumber
var computerChoice

var userChoice = prompt("heads or tails");

var randomNumber = Math.floor(Math.random() * 1);

if (randomNumber == 0) {
    computerChoice = 'heads';
} else {
    computerChoice = 'tails';
}

if (userChoice == computerChoice) {
    alert ("You guessed right! The coin flip landed on heads");
} else {
    alert ("Sorry, the coin clip landed on tails");
}


var birthYear = prompt("What year were you born?");

var currentYear = 2023;
let age = currentYear - birthYear;

if (age > 21) {
    alert ("You are old enough to drink in the US");
} else if (age === 21) {
    alert ("You are old enough to drink in the US...barely");
} else if(age < 21) {
    alert ("Sorry, you are not old enough to drink in the US");
}
console.log(age)