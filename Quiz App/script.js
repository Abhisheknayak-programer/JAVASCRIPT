const quizDB = [
  {
    question: "Q1. What is the full form of HTML ?",
    a: "Hello To My Land",
    b: "HyperText Markup Language",
    c: "HyperText Master Language",
    d: "HyperText Makeup Language",
    ans: "ans2",
  },
  {
    question: "Q2. What is the full form of CSS ?",
    a: "Cascading Style Sheet",
    b: "Cascard Style Sheet",
    c: "Cartoon Super Sheet",
    d: "Cascading Style Summary",
    ans: "ans1",
  },
  {
    question: "Q3. What is the full form of HTTP ?",
    a: "HyperText Transformation Permission",
    b: "Height Testing Transmission Protocol",
    c: "Huge Transition Testing Protocol",
    d: "Hypertext Transfer Protocol",
    ans: "ans4",
  },
  {
    question: "Q4. What is the full form of JS ?",
    a: "Java Set",
    b: "Java Summary",
    c: "Java Script",
    d: "Java Superior",
    ans: "ans3",
  },
];

const Question = document.querySelector(".questions");
const Ans1 = document.querySelector("#option1");
const Ans2 = document.querySelector("#option2");
const Ans3 = document.querySelector("#option3");
const Ans4 = document.querySelector("#option4");
const submitBtn = document.querySelector("#submit");
const showScore = document.querySelector(".showScore");
const answers = document.querySelectorAll(".answer");
const my__score = document.querySelector(".my__score");
const total__questions = document.querySelector(".total__questions");
const playAgain = document.querySelector(".playAgain");

let QuestionCount = 0;
let score = 0;

const LoadQuestion = () => {
  const QuestionList = quizDB[QuestionCount];
  Question.textContent = QuestionList.question;
  Ans1.textContent = QuestionList.a;
  Ans2.textContent = QuestionList.b;
  Ans3.textContent = QuestionList.c;
  Ans4.textContent = QuestionList.d;
};
LoadQuestion();

const getCheckedAnswer = () => {
  let myAnswer;
  answers.forEach((element) => {
    if (element.checked) {
      myAnswer = element.id;
    }
  });
  return myAnswer;
};

const deselectCheckBtn = () => {
  answers.forEach((element) => {
    element.checked = false;
  });
};

submitBtn.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();
  if (checkedAnswer === quizDB[QuestionCount].ans) {
    score++;
  }

  QuestionCount++;

  if (QuestionCount < quizDB.length) {
    LoadQuestion();
    deselectCheckBtn();
  } else {
    showScore.style.display = "block";
    total__questions.textContent = `${quizDB.length}`;
    my__score.textContent = `${score}`;
  }
});

playAgain.addEventListener("click", () => {
  QuestionCount = 0;
  score = 0;
  showScore.style.display = "none";
  LoadQuestion();
});
