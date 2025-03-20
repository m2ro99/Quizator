let quizContainer = document.getElementsByClassName("quiz")[0];
let resultMessage = document.getElementsByClassName("result")[0];
let questions = [];
let correctAnswers = [];
let userAnswers = [];
let shuffledAnswers = [];

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to create and display the quiz
function displayQuiz(data) {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Answer the Questions Below:-";
    h1.style.cssText = "margin-bottom:2rem;font-size:1.5rem;text-align:center;";
    quizContainer.append(h1);

    data.results.forEach((questionData, index) => {
        questions.push(questionData.question);
        correctAnswers.push(questionData.correct_answer);

        // Shuffle the answers
        const answers = shuffleArray([questionData.correct_answer, ...questionData.incorrect_answers]);
        shuffledAnswers.push(answers);

        const questionContainer = document.createElement("div");
        const questionText = document.createElement("h4");
        questionText.innerHTML = `${index + 1} - ${questionData.question}`;

        const answersContainer = document.createElement("div");
        answersContainer.className = "answer";

        answers.forEach((answer, i) => {
            const answerDiv = document.createElement("div");
            const label = document.createElement("label");
            const input = document.createElement("input");

            label.innerHTML = answer;
            input.type = "radio";
            input.name = `ans-${index + 1}`;
            input.id = `ans-${index + 1}-${i + 1}`;
            label.setAttribute("for", input.id);

            input.addEventListener("click", () => {
                userAnswers[index] = answer;
            });

            answerDiv.append(input, label);
            answersContainer.append(answerDiv);
        });

        questionContainer.append(questionText, answersContainer);
        quizContainer.append(questionContainer);
    });

    const submitButton = document.createElement("button");
    submitButton.innerHTML = "Finish Quiz";
    submitButton.id = "submit";
    quizContainer.append(submitButton);

    submitButton.addEventListener("click", handleSubmit);
}

// Function to handle the quiz submission
function handleSubmit(e) {
    const filteredUserAnswers = userAnswers.filter(answer => answer !== null);
    if (filteredUserAnswers.length < questions.length) {
        alert("Please answer all the questions before submitting.");
        e.preventDefault();
    } else {
        quizContainer.style.display = "none";
        let result = 0;

        filteredUserAnswers.forEach((answer, index) => {
            if (answer === correctAnswers[index]) {
                result += 1;
            }
        });

        displayResult(result);
    }
}

// Function to display the quiz result
function displayResult(result) {
    resultMessage.style.cssText = "display:flex !important;";
    const tryAgainLink = `<a href="./quiz.html">Try again</a>`;

    let message;
    if (result < 10) {
        message = `You Got ${result} from 20 ${tryAgainLink}`;
    } else if (result === 10) {
        message = `You got half of the questions right ${tryAgainLink}`;
    } else if (result >= 11 && result <= 14) {
        message = `You Got ${result} from 20 ${tryAgainLink} for the full mark.`;
    } else if (result >= 15 && result !== 20) {
        message = `Nice! You Got ${result} from 20, so near to getting the full mark ${tryAgainLink}`;
    } else {
        message = `Congratulations! You got the full mark. You can test yourself again. ${tryAgainLink}`;
    }

    resultMessage.innerHTML = message;
}

// Fetch quiz data and initialize the quiz
try {
    fetch("https://opentdb.com/api.php?amount=20&category=18")
        .then(response => response.json())
        .then(data => displayQuiz(data))
        .catch(error => console.error("Error fetching quiz data:", error));
} catch (err) {
    console.error("Error:", err);
}