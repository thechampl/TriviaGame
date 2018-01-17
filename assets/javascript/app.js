

var questionList = [{
    question: "Among the following which is not a football club?",
    answers: ["Arsenal, Chelsea, Astros"],
    correctAnswer: "Astros",
},
{
    question: "Tee, Par, and Flagstick are associate with what game?",
    answers: ["Golf, Football, Tennis"],
    correctAnswer: "Golf",
}
    "Who has won the maximum number of Gold medals at a single Olympic Games in the history of the Olympics?",
" Name the Basketball player who Became Youngest Player in the History of NBA to Reach 30000 Career Points"


{
    wronganswersone: ["Arsenal, Chelsea"],
    wronganswertwo: ["Football, Tennis"],
    wronganswerthree: ["James Connelly, Mark Spitz"],
    wronganswerfour: ["Lebron James, Michael Jordan"],
}
{
    questionone: "Houston Astros",
    questiontwo = "Golf",
    questionthree = "Michael Phelps",
    questionfour = "Kobe Bryant", 
}

var number = 20;
var intervalId;
function run() {
    

    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#remaining").html("  " + number);
    if (number === 0) {
        stop();        
    }
}

function stop() {
    clearInterval(intervalId);
}

run();


var RandomquestionOne = questionList[Math.floor(Math.random()*questionList.length)];
console.log(RandomquestionOne)
RandomquestionOne = $("#questionValue").html(" " + RandomquestionOne);
questionList.splice(RandomquestionOne, 1);
console.log(questionList)

var RandomquestionTwo = questionList[Math.floor(Math.random()*questionList.length)];
RandomquestionTwo = $("#questionValue2").html(" " + RandomquestionTwo);
questionList.splice(RandomquestionTwo, 1);
console.log(questionList)

var RandomquestionThree = questionList[Math.floor(Math.random()*questionList.length)];
RandomquestionThree = $("#questionValue3").html(" " + RandomquestionThree);
questionList.splice(RandomquestionThree, 1);
console.log(questionList)

var RandomquestionFour = questionList[Math.floor(Math.random()*questionList.length)];
RandomquestionFour = $("#questionValue4").html(" " + RandomquestionFour);


var wronganswer1 = wronganswers.wronganswersone[Math.floor(Math.random()*wronganswers.wronganswersone.length)]
wronganswer1 = $("")



