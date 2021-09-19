var readlineSync = require('readline-sync');

var askUserName = readlineSync.question("Hey dude! What's your name: ");

console.log("Welcome, "+ askUserName +"!");

console.log("Let's see how much do you know about FRIENDS series :P");

var score = 0;

var scoreboard = [
  {name : "Lovely Bhaiyaa",
  score : 3
  },
  {name : "Saxxy Guy",
  score : 1
  }
]

var questions = [
  {question : "How many seasons of FRIENDS are there?\nans: ",
  answer: "10"},
  {question: "How many times did Ross get divorced?\nans: ",
  answer: "3"},
  {question : "True or false, Rachel kissed all of her Friends (male and female) on the show?\nans: ",
  answer : "true"},
]

function play (question, answer){
  var askQuestion = readlineSync.question(question);

  if(askQuestion.toUpperCase() === answer.toUpperCase()){
    console.log("yeahh! You are right");
    score++;
  }else{
    console.log("Nohh Mann!")
  }

  console.log("Your current score is:- " + score);
  console.log("__________________________________")
}

for(var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];

  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Great! YOU SCORED:- " + score);
console.log("Check out other people scores aslo:-")

for(var i = 0; i < scoreboard.length; i++){
  var serialNo = i+1;
  console.log(serialNo +". " + scoreboard[i].name + ":- " + scoreboard[i].score);
}

console.log("_____________________________")
console.log("until next time, Love Love!");

