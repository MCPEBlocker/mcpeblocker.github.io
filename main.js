var quizGamePoints = 0;
var k = 0;

//questions used in the quiz
var allQuestions = [{
    question: "Я хочу учиться в университете, … носит имя Беруни.",
    answers: ["A) которая", "B) который", "C) которое", "D) которые"],
    correctAnswer: "1"
}, {
    question: "Азиза написала письмо подруге, которая…",
    answers: ["A) я давно не видела", "B) учится в колледже", "C) я звонила недавно", "D) знаешь русский язык"],
    correctAnswer: "1"
}, {
    question: "Бабушка хорошо знает врача, … была моя сестра.",
    answers: ["A) который", "B) о котором", "C) перед которым", "D) у которого "],
    correctAnswer: "3"
}, {
    question: "Преподаватель попросил, … ученики взяли словарь в библиотеке.",
    answers: ["A) что", "B) чтобы", "C) когда", "D) где"],
    correctAnswer: "1"
}, {
    question: "Сегодня плохая погода, … мы не идем гулять",
    answers: ["A) потому что", "B) поэтому", "C)  чтобы", "D) хотя"],
    correctAnswer: "1"
}, {
    question: "Я не знаю, где …",
    answers: ["A) ушел мой друг", "B) сейчас моя подруга", "C) он получил письмо", "D) интересовался мой брат"],
    correctAnswer: "1"
}, {
    question: "Ученики прочитали рассказ, … в журнале «Звезда Востока».",
    answers: ["A) напечатанная", "B) напечатанный", "C) напечатанные", "D) напечатанное"],
    correctAnswer: "1"
}, {
    question: "Ученик сделал ошибку, … на вопрос.",
    answers: ["A) отвечая ", "B) ответив", "C) решая ", "D) ответивший "],
    correctAnswer: "0"
}, {
    question: "Наш знакомый прекрасно знает …",
    answers: ["A) русский язык", "B) по-русски", "C) на русском языке", "D) русским языком"],
    correctAnswer: "0"
}, {
    question: "Расскажите мне …., что вы видели.",
    answers: ["A)о том", "B)с теми", "C)про того", "D) про того"],
    correctAnswer: "0"

}



];




$("#quiz-game-btn").on("click", function () {
    $('#game').show("slow");
    createQuizBoard();

});


function createQuizBoard() {
    $('#game').html('<div id="question-game"></div><button id="questions-submit">Отправить<i class="fa fa-angle-right" aria-hidden="true"></i></button>');

    //create quiz questions based on the allQuestions object
    $.each(allQuestions, function (i) {
        $('#question-game').append('<h3>' + allQuestions[i].question + '</h3>');
        $.each(this.answers, function (j) {
            currentAnswer = allQuestions[i].answers[j];
            $('#question-game').append('<div class="radio"><input type="radio" value="' + j + '" name="answer' + i + '" id="ans' + k + '" /><label for="ans' + k + '" class="label">' + currentAnswer + '</label></div>');
            k++;
        });

    });


    $("#questions-submit").on("click", function () {

        $.each(allQuestions, function (i) {

            //if marked answer is same as the correct one increase number of points
            if ($("input[name='answer" + i + "']:checked").val() == allQuestions[i].correctAnswer) {
                quizGamePoints++;
            }
        });
        createPointSummary();

    });


}

function createPointSummary() {
    document.getElementById("game").innerHTML = "";
    $('#game').append('<div id="gameSummaryBox"><p>Набранные очки: ' + quizGamePoints + '<p></div>');

    $("#gameSummaryBox").addClass("showPointsAnim");
    // $('#game').delay(2000).hide("slow");
    setTimeout(createQuizBoard, 3000);
    //reset quiz points so quiz can be taken again
    quizGamePoints = 0;

    // var quizGamePoints = 0;
    // var k = 0;
    
    // //questions used in the quiz
    // var allQuestions = [{
    //     question: "Я хочу учиться в университете, … носит имя Беруни.",
    //     answers: ["A) которая", "B) который", "C) которое", "D) которые"],
    //     correctAnswer: "1"
    // }, {
    //     question: "Азиза написала письмо подруге, которая…",
    //     answers: ["A) я давно не видела", "B) учится в колледже", "C) я звонила недавно", "D) знаешь русский язык"],
    //     correctAnswer: "1"
    // }, {
    //     question: "Бабушка хорошо знает врача, … была моя сестра.",
    //     answers: ["A) который", "B) о котором", "C) перед которым", "D) у которого "],
    //     correctAnswer: "3"
    // }, {
    //     question: "Преподаватель попросил, … ученики взяли словарь в библиотеке.",
    //     answers: ["A) что", "B) чтобы", "C) когда", "D) где"],
    //     correctAnswer: "1"
    // }, {
    //     question: "Сегодня плохая погода, … мы не идем гулять",
    //     answers: ["A) потому что", "B) поэтому", "C)  чтобы", "D) хотя"],
    //     correctAnswer: "1"
    // }, {
    //     question: "Я не знаю, где …",
    //     answers: ["A) ушел мой друг", "B) сейчас моя подруга", "C) он получил письмо", "D) интересовался мой брат"],
    //     correctAnswer: "1"
    // }, {
    //     question: "Ученики прочитали рассказ, … в журнале «Звезда Востока».",
    //     answers: ["A) напечатанная", "B) напечатанный", "C) напечатанные", "D) напечатанное"],
    //     correctAnswer: "1"
    // }, {
    //     question: "Ученик сделал ошибку, … на вопрос.",
    //     answers: ["A) отвечая ", "B) ответив", "C) решая ", "D) ответивший "],
    //     correctAnswer: "0"
    // }, {
    //     question: "Наш знакомый прекрасно знает …",
    //     answers: ["A) русский язык", "B) по-русски", "C) на русском языке", "D) русским языком"],
    //     correctAnswer: "0"
    // }, {
    //     question: "Расскажите мне …., что вы видели.",
    //     answers: ["A)о том", "B)с теми", "C)про того", "D) про того"],
    //     correctAnswer: "0"


    
    // }];
    
    
    
    
    // $("#quiz-game-btn").on("click", function () {
    //     $('#game').show("slow");
    //     createQuizBoard();
    
    // });
    
    
    // function createQuizBoard() {
    //     $('#game').html('<div id="question-game"></div><button id="questions-submit">Submit <i class="fa fa-angle-right" aria-hidden="true"></i></button>');
    
    //     //create quiz questions based on the allQuestions object
    //     $.each(allQuestions, function (i) {
    //         $('#question-game').append('<h3>' + allQuestions[i].question + '</h3>');
    //         $.each(this.answers, function (j) {
    //             currentAnswer = allQuestions[i].answers[j];
    //             $('#question-game').append('<div class="radio"><input type="radio" value="' + j + '" name="answer' + i + '" id="ans' + k + '" /><label for="ans' + k + '" class="label">' + currentAnswer + '</label></div>');
    //             k++;
    //         });
    
    //     });
    
    
    //     $("#questions-submit").on("click", function () {
    
    //         $.each(allQuestions, function (i) {
    
    //             //if marked answer is same as the correct one increase number of points
    //             if ($("input[name='answer" + i + "']:checked").val() == allQuestions[i].correctAnswer) {
    //                 quizGamePoints++;
    //             }
    //         });
    //         createPointSummary();
    
    //     });
    
    
    // }
    
    // function createPointSummary() {
    //     $('#game').append('<div id="gameSummaryBox"><p>Points gained: ' + quizGamePoints + '<p></div>');
    
    //     $("#gameSummaryBox").addClass("showPointsAnim");
    //     $('#game').delay(2000).hide("slow");
    
    //     //reset quiz points so quiz can be taken again
    //     quizGamePoints = 0;
    
    // }
}