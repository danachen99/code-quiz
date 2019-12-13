$(document).ready(function() {

    var counter = 75;
    var questions = [{
            title: "All of these dogs are fluffy EXCEPT:",
            choices: ["samoyeds", "alaskan aalamutes", "staffordshires", "golden retrievers"],
            answer: "staffordshires"
        },
        {
            title: "What are Samoyeds bred for?",
            choices: ["to hunt", "to herd", "to sled", "all of the above"],
            answer: "all of the above"
        },
        {
            title: "Which is not an acceptable term for a dog's tongue?",
            choices: ["tongue", "mlem", "taster", "blep"],
            answer: "tongue"
        },
        {
            title: "Which of these snacks can dogs have?",
            choices: ["chocolate", "apples", "grapes", "onions"],
            answer: "apples"
        },
        {
            title: "",
            choices: [],
            answer: ""
        }
    ];

    var welcome = $("#welcome");
    var start = $("#start");
    var highScores = $("#highscores");
    var questionContainer = $("#questionsContainer");
    var controlButtons = $("#controlBtns");
    var questionText = $("#questionText");
    var choiceButtons = $(".option");


    function startMe() {
        console.log("HELLO");
        $(welcome).removeAttr("style").hide();
        $(start).removeAttr("style").hide();
        $(highScores).removeAttr("style").hide();
        populate();
    }

    function populate() {
        $(questionContainer).show();
        questionText.append(questions[1].title);
        choiceButtons.array.forEach(element => {
            choiceButtons.append(questions[1].choices);
        });
        // selected1();
    }

    function selected1() {
        //questionText.text() = (questions.js).questions;
        // console.log(questions.title);

    }

    function highScoreDisplay() {

    }


    $(start).on("click", startMe);
    $(highScores).on("click", highScoreDisplay);
    $(choiceButtons).on("click", selected1);

});