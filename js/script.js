const quizData = [
    {
        question: "Capital of Poland",
        answer: "Warsaw"
    },
    {
        question: "Color of the sky",
        answer: "Blue"
    },
    {
        question: "Opposite of cold",
        answer: "Hot"
    },
    {
        question: "Day after Sunday",
        answer: "Monday"
    },
    {
        question: "Number of sides in a triangle",
        answer: "Three"
    }
];

let score = 0,
    questionNumber = 0;

(function (){
    for (let index = 0; index<quizData.length; index++){
        const newIndex = Math.floor(Math.random() * (index + 1));
        [quizData[index], quizData[newIndex]] = [quizData[newIndex], quizData[index]];
    }
})();

function setQuestion(button, input){
    const question = document.getElementById("questionName")

    if (questionNumber >= quizData.length){
        button.style.display = "none"
        input.style.display = "none"
        document.getElementById("hint").style.display = "none"
        question.textContent = "Your Score is: "+score+"!"
    } else {
        question.textContent = quizData[questionNumber].question;
    }
}

function checkAnswer(){
    const button = document.getElementById("button");
    const answer = document.getElementById("questionAnswer");
    const resultText = document.getElementById("questionResult");
    const resultDiv = document.getElementById("result");

    if (answer.value.toLowerCase().trim() === quizData[questionNumber].answer.toLowerCase().trim()){
        score++;
        resultDiv.style.background = "green"
        resultText.textContent = "Good Answer!"
    } else{
        resultDiv.style.background = "red"
        resultText.textContent = "Wrong Answer!"
    }
    resultDiv.style.display = "block"
    button.disabled = true

    setTimeout(function() {
        resultDiv.classList.add("result-hide")

        setTimeout(function() {
            resultDiv.style.display = "none"
            resultDiv.classList.remove("result-hide")
        }, 550)

        questionNumber++;
        setQuestion(answer, button)

        answer.value = ""
        button.disabled = false
    }, 2000)
}

document.addEventListener("DOMContentLoaded", setQuestion);