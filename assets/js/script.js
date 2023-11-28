var firstQuestion = "commonly used data types do not include what?";
var secondQuestion = "the condition in an if/else statemnt is enclosed in what?";
var thirdQuestion = "arrays in javascript can be used to store what?";
var fourthQuestion = "string values must be enclosed in what when assigning it to a variable?";
var fifthQuestion = "a very useful tool used during debugging to print content to the debugger is what?";
var questionList = [firstQuestion, secondQuestion,thirdQuestion,fourthQuestion,fifthQuestion];

var firstQuestionAnswers = ["strings", "booleans", "alerts", "numbers"]
var secondQuestionAnswers = ["quotes","curly brackets", "parenthases", "square brackets"];
var thirdQuestionAnswers = ["numbers", "strings", "booleans", "all of the above"]; 
var fourthQuestionAnswers = ["commas", "curly brackets", "quotes", "square brackets"];
var fifthQuestionAnswers = ["javascript", "console.log", "terminal/bash", "for loops"];
var questionAnswers = [firstQuestionAnswers, secondQuestionAnswers, thirdQuestionAnswers, fourthQuestionAnswers, fifthQuestionAnswers];

var questionPage = document.getElementById('questionPage');
var p = document.createElement('p');p.setAttribute('class', 'currentQuestion');
var pText = document.createTextNode(firstQuestion);

var answerButtonSection = document.getElementById('answerButtonSection');
var button = document.createElement('button');button.setAttribute('class', 'answerButtons');
var buttonText = document.createTextNode(firstQuestionAnswers);

var questionNumber = 0;





function hideStartPage(){
    document.getElementById("startPage").style.display = 'none';
};

function hideQuestionPage(){
    document.getElementById("questionPage").style.display = "none";
}

function showStartPage(){
    document.getElementById("startPage").style.display = 'block';
};

function createQuestion(questionNumber){

    questionPage = document.getElementById('questionPage');
    pText = document.createTextNode(questionList[questionNumber]);
    p.appendChild(pText);
    questionPage.appendChild(p)
}

function createAnswerButtons(questionNumber){
    var answerPool = questionAnswers[questionNumber];

    for(i = 0; i < 4; i++){
        button = document.createElement('button');button.setAttribute('class', 'answerButtons');button.setAttribute('id', 'answerButtons'[i]);
        buttonText = document.createTextNode(answerPool[i]);
        button.appendChild(buttonText);
        answerButtonSection.appendChild(button);
    }
    
}



function nextQuestion(questionNumber){
    questionNumber = questionNumber + 1;
    createQuestion(questionNumber);
    createAnswerButtons(questionNumber);
}

function removeQuestions(){
   p.remove(pText);
   button.remove(buttonText);
};


document.getElementById("startButton").addEventListener("click", function(){
    hideStartPage();
    createQuestion(questionNumber);
    createAnswerButtons(questionNumber);

    
document.getElementById("answerButtons"[0]).addEventListener("click", function(){
    
    createQuestion(questionNumber + 1);
    createAnswerButtons(questionNumber + 1);

});
document.getElementById("answerButtons"[1]).addEventListener("click", function(){
    
});
document.getElementById("answerButtons"[2]).addEventListener("click", function(){
    location.reload();
});
document.getElementById("answerButtons"[3]).addEventListener("click", function(){
    location.reload();
});

});





    
document.getElementById("restartButton").addEventListener("click", function(){
    location.reload();
});





