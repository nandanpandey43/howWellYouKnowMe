var readLineSync = require("readline-sync");

var score = 0;
var userName = readLineSync.question("What's your name?\n");
console.log("\nHi, "+userName.toUpperCase());
console.log("Let's play a game to see how well you know me!\n\n");

var doYouKnowMe = [
    {
      question: "Who is my favorite actor? ",
      answer: "Hrithik Roushan" 
    },
    {
      question: "What is my nickname? ",
      answer: "nandu"
    },
    {
      question: "Which is my favorite movie? ",
      answer: "3 idiots"
    }
]

function play(que){
  for(var i=0; i<que.length; i++){
      console.log(doYouKnowMe[i].question);
      var ans = readLineSync.question();
      if(ans.toUpperCase() == doYouKnowMe[i].answer.toUpperCase()){
        score = score+1;
        console.log("you got it right!")
      }
      else{
        console.log("wrong!");
        score = score;
      }
      console.log("\n\n");
  }
}

play(doYouKnowMe);

console.log("your score is: "+score);