const API = "https://mock-api.driven.com.br/api/v3/buzzquizz/quizzes";
const quizBox = document.querySelector(".boxes-quizz");

let quizzes;
let boxquiz;
let quizClickada;

let quizId;

function getQuizz() {
  axios.get(API).then((e) => {
    quizzes = e.data;
    writeQuizz();
  });
}

// Function renderiza as quizz
function writeQuizz() {
  quizBox.innerHTML = "";
  quizzes.forEach((element) => {
    quizBox.innerHTML += `<div class="box-quiz" id="${element.id}">
        <img class="gradient"  width="340px" height="181px" src="${element.image}" alt="">
        <div class="sombra">
        <span class="title">${element.title}</span>
        </div>
    </div>`;
  });
  getOneQuiz();
}

// Function devolver id do quizz clicado

function getOneQuiz() {
  boxquiz = document.querySelectorAll(".box-quiz");
  boxquiz.forEach((e) => {
    e.addEventListener("click", function () {
      console.log(e.id);
      verifyId(e);
    });
    0;
  });
}

function verifyId(x) {
  quizzes.forEach((e) => {
    if (x.id == e.id) {
      console.log(e.title);
      quizClickada = e;
    }
  });
}
getQuizz();

function openQuiz() {
  const banner = document.querySelector("#banner");
  const bannerTitle = document.querySelector("#bannerTitle");

  axios.get(`${API}/213`).then((a) => {
    quizId = a.data;
    banner.src = quizId.image;
    bannerTitle.innerHTML = quizId.title;
    console.log(quizId);
  });
}
openQuiz();
