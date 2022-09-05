console.log("its working");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question:
      "Which of the following number object function returns the value of the number?",
    answers: [
      { text: "toString()", correct: false },
      { text: "valueOf()", correct: true },
      { text: "toLocaleString()", correct: false },
      { text: "toPrecision()", correct: false },
    ],
  },
  {
    question:
      " In the JavaScript, which one of the following is not considered as an error:",
    answers: [
      { text: "Syntax error", correct: false },
      { text: "Missing of semicolons", correct: false },
      { text: "Division by zero", correct: true },
      { text: "Missing of Bracket", correct: false },
    ],
  },
  {
    question:
      "Which of the following option is used as hexadecimal literal beginning? ",
    answers: [
      { text: "00", correct: false },
      { text: "0x", correct: false },
      { text: "0X", correct: false },
      { text: "Both 0x and 0X", correct: true },
    ],
  },
  {
    question: "Which of the following type of a variable is volatile?",
    answers: [
      { text: "Mutable variable", correct: true },
      { text: "Dynamic variable", correct: false },
      { text: "Volatile variable", correct: false },
      { text: "Immutable variable", correct: false },
    ],
  },
  {
    question:
      "Which one of the following is the correct way for calling the JavaScript code?",
    answers: [
      { text: "Preprocessor", correct: false },
      { text: "Triggering Event", correct: false },
      { text: "RMI", correct: false },
      { text: "Function/Method", correct: true },
    ],
  },
  {
    question: 'The "function" and " var" are known as:',
    answers: [
      { text: "Keywords", correct: false },
      { text: "Data types", correct: false },
      { text: "Declaration statements", correct: true },
      { text: "Prototypes", correct: false },
    ],
  },
  {
    question:
      "When interpreter encounters an empty statements, what it will do?",
    answers: [
      { text: "Shows a warning", correct: false },
      { text: "Prompts to complete the statement", correct: false },
      { text: "Throws an error", correct: false },
      { text: "Ignores the statements", correct: true },
    ],
  },
  {
    question:
      "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code? ",
    answers: [
      { text: "Conditional block", correct: false },
      {
        text: "block that combines a number of statements into a single compound statement",
        correct: true,
      },
      { text: "both conditional block and a single statement", correct: false },
      { text: "block that contains a single statement", correct: false },
    ],
  },
  {
    question: "In JavaScript, what is a block of statement?",
    answers: [
      { text: "new List(false, 3)", correct: false },
      { text: "new List(3, true)", correct: true },
      { text: "new List(true, 3)", correct: false },
      { text: "new List(3, false)", correct: false },
    ],
  },
  {
    question:
      "Which one of the following also known as Conditional Expression: ",
    answers: [
      { text: "It has only methods", correct: false },
      { text: "Switch statement", correct: false },
      { text: "If-then-else statement", correct: false },
      { text: "immediate if", correct: true },
    ],
  },
  {
    question: "Which type of JavaScript language is ___",
    answers: [
      { text: "Object-Oriented", correct: false },
      { text: "Object-Based", correct: true },
      { text: "Assembly-language", correct: false },
      { text: "High-level", correct: false },
    ],
  },
];
