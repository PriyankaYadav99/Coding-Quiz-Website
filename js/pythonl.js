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
      "Which of the following functions is a built-in function in python language?",
    answers: [
      { text: "val()", correct: false },
      { text: "print()", correct: true },
      { text: "print[]", correct: false },
      { text: "None of these", correct: false },
    ],
  },
  {
    question: " Which of the following is not a keyword in Python language?",
    answers: [
      { text: "val", correct: true },
      { text: "raise", correct: false },
      { text: "try", correct: false },
      { text: "with", correct: false },
    ],
  },
  {
    question:
      "Why does the name of local variables start with an underscore discouraged?",
    answers: [
      { text: "To identify the variable", correct: false },
      { text: "It confuses the interpreter", correct: false },
      { text: "It indicates a private variable of a class", correct: true },
      { text: "None of these", correct: false },
    ],
  },
  {
    question: "What is the method inside the class in python language?",
    answers: [
      { text: "Object", correct: false },
      { text: "Function", correct: true },
      { text: "Attribute", correct: false },
      { text: "Argument", correct: false },
    ],
  },
  {
    question:
      " Which of the following statements is correct regarding the object-oriented programming concept in Python?",
    answers: [
      {
        text: "Classes are real-world entities while objects are not real",
        correct: false,
      },
      {
        text: "Objects are real-world entities while classes are not real",
        correct: true,
      },
      {
        text: "Both objects and classes are real-world entities",
        correct: false,
      },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question:
      "Which character is used in Python to make a single line comment?",
    answers: [
      { text: "/", correct: false },
      { text: "//", correct: false },
      { text: "#", correct: true },
      { text: "!", correct: false },
    ],
  },
  {
    question: "What do we use to define a block of code in Python language?",
    answers: [
      { text: "Key", correct: false },
      { text: "Brackets", correct: false },
      { text: "Indentation", correct: true },
      { text: "None of these", correct: false },
    ],
  },
  {
    question:
      "Which one of the following is the correct extension of the Python file? ",
    answers: [
      { text: ".py", correct: true },
      { text: ".python", correct: false },
      { text: ".p", correct: false },
      { text: "None of these", correct: false },
    ],
  },
  {
    question: "In which language is Python written?",
    answers: [
      { text: "php", correct: false },
      { text: "English", correct: false },
      { text: "c", correct: true },
      { text: "All of the Above", correct: false },
    ],
  },
  {
    question: "Who developed the Python language? ",
    answers: [
      { text: "Zim Den", correct: false },
      { text: "Guido van Rossum", correct: true },
      { text: "Niene Stom", correct: false },
      { text: "Wick van Rossum", correct: false },
    ],
  },
  {
    question: "What is the maximum length of a Python identifier?",
    answers: [
      { text: "32", correct: false },
      { text: "16", correct: false },
      { text: "128", correct: false },
      { text: "No Fixed length is specified", correct: true },
    ],
  },
];
