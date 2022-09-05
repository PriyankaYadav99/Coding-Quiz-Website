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
    question: "What is Java?",
    answers: [
      {
        text: "Java is a high-level, class-based, object-oriented programming language",
        correct: true,
      },
      { text: "Java is a language", correct: false },
      { text: "Java is a frameworke", correct: false },
      { text: "Java is a Programming language", correct: false },
    ],
  },
  {
    question:
      " Which of the following option leads to the portability and security of Java?",
    answers: [
      { text: "Bytecode is executed by JVM", correct: true },
      {
        text: "The applet makes the Java code secure and portable",
        correct: false,
      },
      { text: "Use of exception handling", correct: false },
      { text: "Dynamic binding between objects", correct: false },
    ],
  },
  {
    question: "Which of the following is not a Java features?",
    answers: [
      { text: "Dynamic", correct: false },
      { text: "Use of pointers", correct: true },
      { text: "Architecture Neutral", correct: false },
      { text: "Object-oriented", correct: false },
    ],
  },
  {
    question: "_____ is used to find and fix bugs in the Java programs.",
    answers: [
      { text: "JVM", correct: false },
      { text: "JRE", correct: false },
      { text: "JDK", correct: false },
      { text: "JDB", correct: true },
    ],
  },
  {
    question:
      "What is the return type of the hashCode() method in the Object class?",
    answers: [
      { text: "Object", correct: false },
      { text: "int", correct: true },
      { text: "long", correct: false },
      { text: "void", correct: false },
    ],
  },
  {
    question: "Which of the following is a valid long literal?",
    answers: [
      { text: "ABH8097", correct: false },
      { text: "L990023", correct: false },
      { text: "0xnf029L", correct: true },
      { text: "904423", correct: false },
    ],
  },
  {
    question: "What does the expression float a = 35 / 0 return?",
    answers: [
      { text: "0", correct: false },
      { text: "Not a Number", correct: false },
      { text: "Infinity", correct: true },
      { text: "Run time exception", correct: false },
    ],
  },
  {
    question:
      "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code? ",
    answers: [
      { text: "javaw command", correct: false },
      { text: "javap tool", correct: false },
      { text: "javah command", correct: false },
      { text: "Javadoc tool", correct: true },
    ],
  },
  {
    question:
      "Which of the following creates a List of 3 visible items and multiple selections abled?",
    answers: [
      { text: "new List(false, 3)", correct: false },
      { text: "new List(3, true)", correct: true },
      { text: "new List(true, 3)", correct: false },
      { text: "new List(3, false)", correct: false },
    ],
  },
  {
    question:
      "Which of the following is true about the anonymous inner class? ",
    answers: [
      { text: "It has only methods", correct: false },
      { text: "Objects cannot be created", correct: false },
      { text: "It has a fixed class name", correct: false },
      { text: "It has no class name", correct: true },
    ],
  },
  {
    question: "Which package contains the Random class?",
    answers: [
      { text: "java.util package", correct: false },
      { text: "java.lang package", correct: true },
      { text: "java.awt package", correct: false },
      { text: "new List(3, false)", correct: false },
    ],
  },
];
