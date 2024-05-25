
var questions = [  
  {
    question: " One of the legends of cricket, Pakistan won the ICC World Cup under his captaincy. Can you guess who he is?",
    option1: "Imran Khan",
    option2: "Shahid Afridi",
    option3: "Virat Koli",
    corrAnswer: "Imran Khan",
  },
  {
    question: "Who was appointed the coach of the Pakistani Cricket team after the World Cup of 2003?",
    option1: "Shahid Afridi",
    option2: "Younis Khan",
    option3: "Javed Miandad",
    corrAnswer: "Javed Miandad",
  },
  {
    question: "Who was Pakistan's first Test captain?",
    option1: " Abdul Kardar",
    option2: "Javed Miandad",
    option3: "Shoib Akhtar",
    corrAnswer: " Abdul Kardar",
  },
  {
    question: "Who was the captain of Pakistan team in 2009? ",
    option1: "shahid Afridi",
    option2: "Younis Khan",
    option3: "Javed Miandad",
    corrAnswer: "Younis Khan",
  },
  {
    question: "Which former Pakistan captain scored 8800+ runs in Tests with a triple century and 11000+ runs in ODIs? ",
    option1: "Asif Iqbal",
    option2: "Inzamam-ul-haq",
    option3: "Zaheer Abbas",
    corrAnswer: "Inzamam-ul-haq",
  },
  {
    question: "The World Cup was first held in Pakistan in ____ ? ",
    option1: "1987",
    option2: "1996",
    option3: "1992",
    corrAnswer: "1987",
  },
  {
    question: "Pakistan and _______ played a one day match in Bangladesh in May-June,2000 ",
    option1: "India",
    option2: " England",
    option3: " Australia",
    corrAnswer: "India",
  },
  {
    question: "Who was the first player to score a triple century in Test cricket? ",
    option1: "Andy Sandham",
    option2: "Ramees Raja",
    option3: "Shahid Afridi",
    corrAnswer: "Andy Sandham",
  },
  {
    question: "When did Shahid Afridi score the fastest century? ",
    option1: "2000",
    option2: "1992",
    option3: "1996",
    corrAnswer: "1996",
  },
  {
    question: "Which country did Pakistan tour in 1999-2000? ",
    option1: "Zimbabwe",
    option2: "India",
    option3: " Australia",
    corrAnswer: " Australia",
  },
];
var ques = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var timer = document.getElementById("timer");
var index = 0;
var score = 0;
var min = 1;
var sec = 59;
setInterval(function () {
  timer.innerHTML = `${min}:${sec}`;
  sec--;
  if (sec < 0) {
    min--;
    sec = 59;
    if (min < 0) {
      min = 1;
      sec = 59;
      nextQuestion();
    }
  }
}, 1000);
function nextQuestion() {
  var getOptions = document.getElementsByName("option");
  for (var i = 0; i < getOptions.length; i++) {
    if (getOptions[i].checked) {
      var selectedValue = getOptions[i].value;
      var selectedQues = questions[index - 1].question;
      var selectedAns = questions[index - 1][`option${selectedValue}`];
      var correctAnswer = questions[index - 1]["corrAnswer"];
      if (selectedAns == correctAnswer) {
        score++;
      }
    }
    getOptions[i].checked = false;
  }
  btn.disabled = true;
  if (index > questions.length - 1) {
    Swal.fire({
      title: "Good job!",
      text:
        "your percetnage is: " + ((score / questions.length) * 100).toFixed(2),
      icon: "success",
    });
  } else {
    ques.innerText = questions[index].question;
    opt1.innerText = questions[index].option1;
    opt2.innerText = questions[index].option2;
    opt3.innerText = questions[index].option3;
    index++;
    min = 1;
    sec = 59;
  }
}

   
function target() {
  var btn = document.getElementById("btn");

  btn.disabled = false;
}