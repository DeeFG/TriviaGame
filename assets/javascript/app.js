/// link a val.  value to a new button
///set the timer for the game
/// how to change pages for each question




var score = 0;
var totalscore = 0;
var winnerPhoto = "";
var losePhoto = "";
var points = 0;
//var totalQuestions = questions.length;
var button = $("<button>");
  

var questions = [
    {
        question: "What is the capital of United Kingdom?",
        choices: ["Manchester", "Birmingham", "London", "Glasglow"],
        answer: 2
    },
    {
        question: "What is the capital of United States?",
        choices: ["California", "New York", "Miami", "Florida"],
        answer: 1
    },

    {
        question: "What is color is the sun",
        choices: ["red", "yellow", "blue", "violet"],
        answer: 2
    }
];



$(document).ready(function () {
    console.log("ready!");

    $("button").click(function () {
        console.log("hello");

    })
    function newBnt() {
        var newBtn = $("<button>");
        $(newBtn).text("clck me");
        newBtn.appendTo(button);

    }

    for (var i = 0; i < questions.length; i++) {
        // SHOW------ Questions
        console.log(questions[i].question);
        $("#box1").text(questions[i].question); // rotate questions

        // SHOW--CHOICES 
        for (var j = 0; j < questions[i].choices[j].length ; j++) {
            console.log(questions[i].choices[j]);
            //$("button").text(questions[i].choices[j]);

            for (var k = 0; k < questions[i].answer; k++) {
                /////// --- MATCH ANWERS
                console.log(questions[i].answer);
            }
            //-------CHANGE QUESTION AND ANWER
            // function changeQues() { }
            // function changeAnsw() {}

        }

    }


});


// ------- funtions -------
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};
//--------START GAME-----

///--------ADD TIMER FUNCTION
//   $(function () {
//     var timer;
//     $("#timer").html(timer);
//     function come() { alert("here"); }
//     clearInterval(timer);
//     var timer = setInterval(come, 10000000);
// });


// var timer = setInterval(function () {
//     if (!score === 0) {
//         $("timer").text(timer);
//     }
//    // clearTimeout(timer);
// }, 10000);



//---------CANCEL TIMER WHEN NEEDED 


// ----------SET SCOREING RULES
    function checkCorrectAnswer() {
        console.log("checkAnwer")  
    
    }

//----------RESET
// functino reset(){
//     console.log("reset")
//     new question
//     new answer
// }
