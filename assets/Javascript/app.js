$(document).ready(function(){

// Set Event Listeners
$("#timer").hide();
$("#win-screen").hide();
$("#start").on("click", startGame);

// Variables 
    let right = 0;
    let wrong= 0;
    let unanswered = 0;
    // let keywords = ["Valoran", "Volibear", "Graggy Ice", "Poison"];
    let wordBank = [{
        question: "In which continent does League of Legends reside",
        answer: ["Bandle City", "Demacia", "Valoran", "Bilgewater"],
        keyword: "Valoran",    
    },
    
    {
        question: "Who bears the title of Thunder's Roar?",
        answer: ["Pyke", "Volibear", "Tayliyah", " Kennen"],
        keyword: "Volibear",

    },
    
    {
        question: "What is the name of Gragas' homemade special brew?",
        answer: ["Dalaran Brew", "Graggy Ice", "Butter Beer", "Apple Spice Ale"],
        keyword: "Graggy Ice",
    },
    
    {
        question: "Which Champion is the owner of a sunscreen brand?",
        answer: ["Vayne", "Sona", "Hecarim", "Taric"],
        keyword: "Taric",
    },
    
    {
        question: "what does Cassiopiea use as a weapon?",
        answer: ["Steel", "Fire", "Poison", "Summon's"],
        keyword: "Poison",
    }];

    // Set up HTML
    function updateDom(){
        for (let i = 0; i < wordBank.length; i++){
            $("#questions").append("<h3>" + wordBank[i].question + "</h3>");
            for (let x = 0; x < wordBank[i].answer.length; x++){
                $("#questions").append('<input type="radio" name="question' + '-' + i + '" value="' + wordBank[i].answer[x] + '">' + wordBank[i].answer[x]);
                // console.log(wordBank[i].answer);
            }
        }
    };

    // Set up Function for timer interval
    let number = 30;
    let intervalId;

    function startGame() {
        $("#timer").show();
        $("#start").hide();
        updateDom();
        timerStart();
        guessChecker();
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
        $("#Container").hide();
        $("#win-screen").show();
    };
    // set up functions to determine if answers are right or wrong
    function correctAnswer(){
        right++;
        console.log("this is right: " + right);
        $("#correct").html(right);
    };

    function incorrectAnswer(){
        wrong++;
        console.log("this is wrong: " + wrong);
        $("#incorrect").html(wrong);
    };
    // Couldn't figure out how to implement unanswered
    function notanswered(){
        unanswered++;
        $("#unanswered").html(unanswered);
    };


    // not sure why the right and wrong counters are not being recorded
    function guessChecker(){
        let playerAnswer = $("#questions").children("input:checked");
        for (let i = 0; i < playerAnswer.length; i++){
            if ($(playerAnswer[i]).val() === wordBank[i].keyword) {
            correctAnswer();
            console.log("this is right " + right);
            }    else {
                incorrectAnswer();
                console.log("this is wrong: " + wrong);
            }
        }
    };
    $(document).on("click", "#guessChecker", function() {
        guessChecker();
      });
      
});