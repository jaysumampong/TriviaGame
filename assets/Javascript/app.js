$(document).ready(function(){

// Set Event Listeners
$("#timer").hide();
$("#win-screen").hide();
$("#start").on('click', startGame);

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
    }];

    // Set up HTML
    function updateDom(){
        for (let i = 0; i < wordBank.length; i++){
            $("#questions").append("<h3>" + wordBank[i].question + "</h3>");
            for (let x = 0; x < wordBank.length; x++){
                $("#questions").append('<input type="radio" name="question' + '-' + x + '" value="' + wordBank[x].answer[x] + '">' + wordBank[x].answer[x]);
            }
        }
    };

    // Set up Function for timer interval
    let number = 14;
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
        $("#correct").html(right);
    };

    function incorrectAnswer(){
        wrong++;
        $("#incorrect").html(wrong);
    };

    function notanswered(){
        unanswered++;
        $("#unanswered").html(unanswered);
    };
    function guessChecker(){
        let playerAnswer = $("#questions").children("input:checked");
        if ($(playerAnswer[i].val()=== wordBank.keyword)) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    };
});