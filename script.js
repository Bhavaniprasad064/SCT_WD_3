const quizData = [
{
question:"Which language is used for web page structure?",
options:["Python","HTML","Java","C++"],
answer:"HTML"
},
{
question:"Which CSS property changes text color?",
options:["font-size","color","background","display"],
answer:"color"
},
{
question:"Which language adds interactivity?",
options:["HTML","CSS","JavaScript","SQL"],
answer:"JavaScript"
},
{
question:"Which database is relational?",
options:["MongoDB","Firebase","MySQL","Redis"],
answer:"MySQL"
},
{
question:"Which company developed Java?",
options:["Sun Microsystems","Google","Microsoft","Apple"],
answer:"Sun Microsystems"
}
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");

loadQuestion();

function loadQuestion(){

let q = quizData[currentQuestion];

question.innerText = q.question;

options.forEach((btn,index)=>{
btn.innerText = q.options[index];

btn.onclick = ()=>{
checkAnswer(btn,q.answer);
};
});

document.getElementById("progressBar").style.width =
((currentQuestion)/quizData.length)*100 + "%";

}

function checkAnswer(btn,answer){

options.forEach(op=>op.disabled=true);

if(btn.innerText===answer){
btn.classList.add("correct");
score++;
}
else{
btn.classList.add("wrong");

options.forEach(op=>{
if(op.innerText===answer){
op.classList.add("correct");
}
});
}

}

nextBtn.onclick=()=>{

currentQuestion++;

if(currentQuestion<quizData.length){

options.forEach(op=>{
op.classList.remove("correct","wrong");
op.disabled=false;
});

loadQuestion();

}
else{

document.querySelector(".container").classList.add("hide");

document.getElementById("result").classList.remove("hide");

document.getElementById("score").innerText =
score + " / " + quizData.length;

}

};