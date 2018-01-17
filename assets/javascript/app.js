

var questionList = [{
    question: "Among the following which is not a football club?",
    answers: ["Arsenal, Chelsea, Astros"],
    correctAnswer: "Astros",
},
{
    question: "Tee, Par, and Flagstick are associated with what game?",
    answers: ["Golf, Football, Tennis"],
    correctAnswer: "Golf",
},
{
    question:  "Who has won the most Gold medals at a single Olympic Games in the history of the Olympics?",
    answers: ["James Connelly, Mark Spitz", "Michael Phelps"],
    correctAnswer: "Michael Phelps",
},
{
    question: " Name the Basketball player who Became Youngest Player in the History of NBA to Reach 30000 Career Points",
    answers: ["Lebron James, Kobe Bryant, Michael Jordan"],
    correctAnswer: "Kobe Bryant",
}
];

var x ="";
x = Math.floor(Math.random() * this.questionList.length);
$("#question").text(this.questionList[x].question);






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



