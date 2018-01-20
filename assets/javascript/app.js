var correctAnswer = "";

var questionList = [{
    question: "Among the following which is not a football club?",
    answers: ["Arsenal", "Chelsea", "Astros"],
    correctAnswer: "Astros",
},
{
    question: "Tee, Par, and Flagstick are associated with what game?",
    answers: ["Golf", "Football", "Tennis"],
    correctAnswer: "Golf",
},
{
    question:  "Who has won the most Gold medals at a single Olympic Games in the history of the Olympics?",
    answers: ["James Connelly", "Mark Spitz", "Michael Phelps"],
    correctAnswer: "Michael Phelps",
},
{
    question: " Name the Basketball player who Became Youngest Player in the History of NBA to Reach 30000 Career Points",
    answers: ["Lebron James", "Kobe Bryant", "Michael Jordan"],
    correctAnswer: "Kobe Bryant",
}
];

var x ="";
x = Math.floor(Math.random() * this.questionList.length);

function displayQuestion(){
$("#question").text(this.questionList[x].question);
var idNumber = 1;
		for(i = 0; i < 3; i++){
			selectionNumber = Math.floor(Math.random() * this.questionList[x].answers.length);
            var answerId = "#answer" + idNumber;
            console.log(answerId);
			idNumber = idNumber + 1;
			$(answerId).text(this.questionList[x].answers[selectionNumber]);
			$(answerId).val(this.questionList[x].answers[selectionNumber]);
            this.questionList[x].answers.splice([selectionNumber],1);}
            correctAnswer = this.questionList[x].correctAnswer;
            console.log(correctAnswer);
        }
            
            
var game = {
win:  0,
loss: 0,
state : ""
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
    game.loss ++;
    $("#wrong").html("WRONG " + game.loss);
    // $("#remaining").clear();
    number = 20;
    $("#remaining").html("" + number);
    x++;
    displayQuestion();
    run();
}

displayQuestion();

run();

$(".btn-default").click(function() {
    alert("test");
    console.log(this);
    console.log(this.value);

//  if(this. = correctAnswer)

});  




    

