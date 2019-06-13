$(document).ready(function(){

// Set Event Listeners
$("#body").hide();
$("#win-screen").hide();
$("#start").on('click', startGame);
// Variables for Correct, Uncorrect and Unanswered counters
    let right = 0;
    let wrong= 0;
    let unanswered = 0;
    
    // Set up Function for timer interval
    let number = 3;
    let intervalId;

    function startGame() {
        $("#body").show();
        $("#start").hide();
        timerStart();
        
    };

    function timerStart() { 
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    };
    
    function decrement() {
        number--;
        $("#time-remaining").html(number);
        if (number === 0) {
            winScreen();
        }
    };

    function winScreen() {
        $("#body").hide();
        $("#win-screen").show();
    };
    // set up functions to determine if answers are right or wrong
    function correctAnswer(){
        right++;
    };

    function incorrectAnswer(){
        wrong++;
    };

    function notanswered(){
        unanswered++;
    };

    // Trivia questions
    let triviaQuestions = {

    }








})