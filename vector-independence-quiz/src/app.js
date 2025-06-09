const questions = [
    {
        question: "Which of the following sets of vectors is linearly independent?",
        options: [
            "A = { (1, 2), (2, 4), (3, 6) }",
            "B = { (1, 0), (0, 1), (1, 1) }",
            "C = { (1, 1), (1, 2), (1, 3) }",
            "D = { (0, 0), (0, 0), (0, 0) }"
        ],
        answer: "B"
    },
    {
        question: "If a set of vectors contains the zero vector, what can be said about their linear independence?",
        options: [
            "They are always independent.",
            "They are always dependent.",
            "It depends on the other vectors.",
            "None of the above."
        ],
        answer: "B"
    },
    {
        question: "Which of the following statements is true?",
        options: [
            "Two vectors are independent if they are not scalar multiples of each other.",
            "Three vectors in R^2 are always independent.",
            "A single vector is always dependent.",
            "All vectors in R^3 are independent."
        ],
        answer: "A"
    },
    {
        question: "What is the maximum number of linearly independent vectors in R^3?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: "C"
    },
    {
        question: "If vectors v1, v2, and v3 are linearly dependent, which of the following is true?",
        options: [
            "At least one of the vectors can be written as a linear combination of the others.",
            "All vectors are multiples of each other.",
            "They span R^3.",
            "None of the above."
        ],
        answer: "A"
    },
    {
        question: "Which of the following sets of vectors is dependent?",
        options: [
            "A = { (1, 2), (2, 4), (3, 6) }",
            "B = { (1, 0), (0, 1) }",
            "C = { (1, 1), (2, 2) }",
            "D = { (1, 2), (3, 4), (5, 6) }"
        ],
        answer: "A"
    },
    {
        question: "What does it mean for a set of vectors to span a space?",
        options: [
            "They can be combined to form any vector in that space.",
            "They are all orthogonal to each other.",
            "They are all dependent.",
            "They are all independent."
        ],
        answer: "A"
    },
    {
        question: "If a set of vectors is independent, what can be said about their span?",
        options: [
            "They cannot span any space.",
            "They span a unique space.",
            "They span the entire space.",
            "They span a subspace."
        ],
        answer: "B"
    },
    {
        question: "Which of the following is a method to determine if vectors are linearly independent?",
        options: [
            "Row reducing a matrix formed by the vectors.",
            "Calculating the dot product.",
            "Finding the cross product.",
            "None of the above."
        ],
        answer: "A"
    },
    {
        question: "If the determinant of a matrix formed by vectors is zero, what can be concluded?",
        options: [
            "The vectors are independent.",
            "The vectors are dependent.",
            "The vectors span the space.",
            "None of the above."
        ],
        answer: "B"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

function loadQuiz() {
    questions.forEach((currentQuestion, questionIndex) => {
        const options = currentQuestion.options.map((option, index) => `
            <label>
                <input type="radio" name="question${questionIndex}" value="${option}">
                ${option}
            </label>
        `).join('');
        
        quizContainer.innerHTML += `
            <div class="question">
                <h3>${currentQuestion.question}</h3>
                <div class="options">${options}</div>
            </div>
        `;
    });
}

function calculateResults() {
    let score = 0;
    questions.forEach((currentQuestion, questionIndex) => {
        const selectedOption = document.querySelector(`input[name="question${questionIndex}"]:checked`);
        if (selectedOption && selectedOption.value === currentQuestion.answer) {
            score++;
        }
    });
    alert(`You scored ${score} out of ${questions.length}`);
}

submitButton.addEventListener('click', calculateResults);

loadQuiz();