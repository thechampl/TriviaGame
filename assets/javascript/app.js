var correctAnswer;

var questionList = [{
    question: "Among the following which is not a football club?",
    answers: ["Arsenal", "Chelsea", "Astros"],
    correctAnswer: "Astros"
},
{
    question: "Tee, Par, and Flagstick are associated with what game?",
    answers: ["Golf", "Football", "Tennis"],
    correctAnswer: "Golf"
},
{
    question: "Who has won the most Gold medals at a single Olympic Games in the history of the Olympics?",
    answers: ["James Connelly", "Mark Spitz", "Michael Phelps"],
    correctAnswer: "Michael Phelps"
},
{
    question: " Name the Basketball player who Became Youngest Player in the History of NBA to Reach 30000 Career Points",
    answers: ["Lebron James", "Kobe Bryant", "Michael Jordan"],
    correctAnswer: "Kobe Bryant"
}
];



function displayQuestion() {
   console.log(this.questionList);
    var x;
x = Math.floor(Math.random() * this.questionList.length);
    $("#question").empty();
    $("#question").text(this.questionList[x].question);
  
    for (i = 0; i < 3; i++) {
        selectionNumber = Math.floor(Math.random() * this.questionList[x].answers.length);
        var answerId = "#answer" + (i+1);
        $(answerId).text(this.questionList[x].answers[selectionNumber]);
        $(answerId).val(this.questionList[x].answers[selectionNumber]);
        this.questionList[x].answers.splice([selectionNumber], 1);
    }
    correctAnswer = this.questionList[x].correctAnswer;
    console.log(correctAnswer);
    number = 20;
    run();
    this.questionList.splice(x, 1);

}


var game = {
    win: 0,
    loss: 0,
    state: ""
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
    game.loss++;
    $("#wrong").html("WRONG " + game.loss);

    number = 20;
    $("#remaining").html("" + number);
    // x--;
    displayQuestion();

}

displayQuestion();



$(".btn-default").click(function () {

    if (this.value === correctAnswer) {
        game.win++
        $("#correct").html("CORRECT " + game.win);
        number = 20;


    }
    else {
        game.loss++
        $("#wrong").html("WRONG " + game.loss);

    }

    clearInterval(intervalId);
    number = 20;
    $("#remaining").html("" + number);
    // x--;

    if (questionList.length>0) {
        displayQuestion()
    }
    console.log(number);
    console.log(question);
    console.log(questionList);
    console.log(correctAnswer);
});







