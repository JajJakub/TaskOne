const button = document.getElementById("button");
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

let score = 0;
let questionNumber = 0;

function shuffleQuestions(){
    for (let index = 0; index<quizData.length; index++){
        const newIndex = Math.floor(Math.random() * (index + 1));
        [quizData[index], quizData[newIndex]] = [quizData[newIndex], quizData[index]];
    }
}

function setQuestion(){
    const question = document.getElementById("questionName")
    question.textContent = quizData[questionNumber].question;
}

function endQuiz(input){
    const question = document.getElementById("questionName")
    button.style.display = "none"
    input.style.display = "none"
    question.textContent = "Your Score is: "+score+"!"
}

function checkAnswer(){
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

        (questionNumber < quizData.length) ? setQuestion() : endQuiz(answer)

        answer.value = ""
        button.disabled = false
    }, 2000)
}

shuffleQuestions()
setQuestion()
button.addEventListener("click", checkAnswer)