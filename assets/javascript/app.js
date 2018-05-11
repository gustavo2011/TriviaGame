console.log("this is working");
// global variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var currentQuestion;
var currentQuestionNumber=0;

var questions = 
[
    {
        text:["1. Which team is known in Spanish as “El Tri”?"],
        answer: "Mexico",
        options: ["Holand, Mexico, Spain, England"]
    },
    {
        text:["2. Which team won its only World Cup in 2010?"],
        answer: "Spain",
        options: ["France, Italy, Germany, Spain"]
    },
    {
        text:["3. Which team has won the World Cup twice?"],
        answer: "Argentina",
        options:["Argentina, Columbia, USA, Brazil"]
    },
    {
        text:["4. Which team Won the World Cup in 1998 as host nation?"],
        answer:"France",
        options:["Greece,France,Belgium, Uruguay"]
    },
    {
        text:["5. Which team has qualified for every World Cup since 1990?"],
        answer:"USA",
        options:["USA, Costa Rica, Portugal, Sweeden"]
    }
]

//start game with hidden divs
$(".game_content").hide();
$("#doneButton").hide();


$("#startButton").on("click" , function() {
    console.log("this button works");
    $(".gameContent").show();
    $("#startButton").hide();
    $("#doneButton").show();

 startCountdown();
    
});

var time = 30;
var timer;

function startCountdown (){
    console.log("this is working");
    timer = setInterval(thirtySeconds, 1000)
    function thirtySeconds() 
    {
        if(time === 0)
        {
            timeOut();
            clearInterval(timer);
        }

        if(time>0)
        {
            time --;
            console.log(time);
        }
        $('#timer').html("Timer: " + time);
    }
}

console.log(startCountdown);