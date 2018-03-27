console.log("this is working");

var triviaQuestions = [{
    question1 = "Which team is known in Spanish as “El Tri”?",
    answers = ["Holand" , "Mexico" , "Spain" , "England"],
    correctAnswer = 1

}]

function showQuestion(triviaQuestions) {
    $("#questions").html(triviaQuestions.question1);
}

function countDown () {
    seconds= 20;
    $("#timer").html("<h4>Your time remaining : " + seconds + "</h4>");
    answered: true;
    time = setInterval(1000);
}