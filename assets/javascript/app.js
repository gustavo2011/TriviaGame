console.log("this is working");
// global variables
var correct = 0;
var inCorrect = 0;
var unAnswered = 0;

var currentQuestion;
var currentQuestionNumber=0;

//questions for website
var questions = 
[
    {
        text:["1. Which team is known in Spanish as “El Tri”?"],
        answer: "B: Mexico",
        options: ["Holand", "Mexico", "Spain", "England"]
    },
    {
        text:["2. Which team won its only World Cup in 2010?"],
        answer: "D: Spain",
        options: ["France", "Italy", "Germany", "Spain"]
    },
    {
        text:["3. Which team has won the World Cup twice?"],
        answer: "A: Argentina",
        options:["Argentina", "Columbia", "USA", "Brazil"]
    },
    {
        text:["4. Which team Won the World Cup in 1998 as host nation?"],
        answer:"B: France",
        options:["Greece","France","Belgium", "Uruguay"]
    },
    {
        text:["5. Which team has qualified for every World Cup since 1990?"],
        answer:"A: USA",
        options:["USA", "Costa Rica", "Portugal", "Sweeden"]
    }
];

//start game with hidden divs
$(".gameContent").hide();

$('#resetButton').hide();

//on-click functions

$("#startButton").on("click" , function() {
    console.log("this button works");
    $(".gameContent").show();
    $("#startButton").hide();
  
    

 startCountdown();
 gameQuestions();
    
});



$(".gameContent").on("click", ".options", function() 
{
    selectedOption = $(this).text();
    checker();
});


$('#resetButton').on('click', function() // On Click, restarts game and timer
{
    gameQuestions();
   startCountdown(); 
   reset();
   
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

function gameQuestions() {
    currentQuestion = questions[currentQuestionNumber];
    html = "<p class = 'text-center question'> " + currentQuestion.text[0] + "</br>" + "</p>" + "<p class = 'text-center options'>" + "A: " + currentQuestion.options[0] + "</p>" + "<p class = 'text-center options'>" + "B: " + currentQuestion.options[1] + "</p>" + "<p class = 'text-center options'>" + "C: " + currentQuestion.options[2] + "</p>" + "<p class = 'text-center options'>" + "D: " + currentQuestion.options[3] + "</p>";
     $('.gameContent').html(html);
    (startCountdown);
}
// If timer hits 0
function timeOut()   
{
    html = "<p class = 'text-center timesUp'> " + "Aw, looks like you timed out! The correct answer was " + currentQuestion.answer + "</p>"; 
    $('.gameContent').html(html);
    unAnswered++;
    currentQuestionNumber++;
    setTimeout(nextQuestion, 4000);  
    console.log ("current number is: " + currentQuestionNumber);
}

function checker()
{
    if(selectedOption === currentQuestion.answer) 
    {
        html = "<p class = 'text-center options'>" + "Thats Correct!" + "</p>";
        $('.gameContent').html(html);
        correct++;
        currentQuestionNumber++;
        clearInterval(timer);
        setTimeout(nextQuestion, 5000);
    }
    else if(selectedOption !== currentQuestion.answer) 
    {
        html = "<p class = 'text-center options'>" + "Thats Incorrect! The correct answer was " + currentQuestion.answer + "</p>";
        $('.gameContent').html(html);
        inCorrect++;
        currentQuestionNumber++;
        clearInterval(timer);;
        setTimeout(nextQuestion, 5000);
    }
    console.log ("current number is: " + currentQuestionNumber);


}

function finalTally()
{
    html = "<p class = 'text-center closer'> " + "This is how you did " + "</p>" + "<p class = 'text-center results'>" + "Correct: " + correct + "</p>" + "<p class = 'text-center results'>" + "Incorrect: " + inCorrect + "</p>" + "<p class = 'text-center results'>" + "Unanswered: " + unAnswered + "</p>" ;
    $('.gameContent').html(html);
    clearInterval(timer);
    $('#resetButton').show;
}

function nextQuestion()
{
    if(currentQuestionNumber < 5) 
    {
        gameQuestions();
        time = 30;
        startCountdown();
    }
    else 
    {
        finalTally();
    }
}

//reset function
function reset()
{
    time = 30;
    currentQuestionNumber = 0;
    correct = 0;
    inCorrect = 0;
    unAnswered = 0;
    gameQuestions();
}