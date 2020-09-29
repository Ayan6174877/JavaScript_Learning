// showing the second section
// const sec_1 = document.querySelector("#section_1");
// const sec_2 = document.querySelector("#section_2");
// const sec_3 = document.querySelector("#section_3");

function show_Section2(param1, param2){
    (param1).style.display = "none";
    (param2 ).style.display = "block";
}

// getting the end keypress

const input_name = document.querySelector(".name-input");

let name = document.querySelector("#username");
input_name.addEventListener("keyup", (event) => {
    var key =  event.which || event.keyCode; // event.key
    let borderColor = "border-bottom-color";
    if(key == 13){
        if(name.value.length == 0 || name == '' ){
            name.focus();
        }
        else{
            show_Section2(section_2,section_3);
        }
    }
});

function startTest(){
    show_Section2(section_3, section_4)
    loadquestions();
}

// coding for the main test starts

let questionaries = [
    {
        question:  "What does HTML stands for?",
        options:{
            a: "Hypertext Machine language",
            b: "Hypertext and links markup language.",
            c: "Hypertext Markup Language",
            d: "Hightext machine language."
        },
        answer: "c"
    },
    {
        question:  "How is document type initialized in HTML5?",
        options:{
            a: "</DOCTYPE HTML>",
            b: "</DOCTYPE>",
            c: "<!DOCTYPE HTML>",
            d: "</DOCTYPE html>"
        },
        answer: "c"
    },
    {
        question:  "Which of the following HTML Elements is used for making any text bold ?",
        options:{
            a: "<p>",
            b: "<i>",
            c: "<li>",
            d: "<b>"
        },
        answer: "d"
    },
    {
        question:  "Which of the following HTML element is used for creating an unordered list??",
        options:{
            a: "<ui>",
            b: "<i>",
            c: "<em>",
            d: "<ul>"
        },
        answer: "d"
    },
    {
        question:  "What is the font-size of the h1 heading tag?",
        options:{
            a: "3.5 em",
            b: "2.17 em",
            c: "2 em",
            d: "1.5 em"
        },
        answer: "c"
    },
    {
        question:  "What is the HTML tag under which one can write the JavaScript code?",
        options:{
            a: " <javascript>",
            b: "<scripted>",
            c: "<script>",
            d: "<js>"
        },
        answer: "c"
    },
    {
        question:  `Choose the correct JavaScript syntax to change the content of the following HTML code \n <p id="geek">GeeksforGeeks</p>`,
        options:{
            a: `document.getElement(“geek”).innerHTML=”I am a Geek”`,
            b:`document.getElementById(“geek”).innerHTML=”I am a Geek”;`,
            c: `document.getId(“geek”)=”I am a Geek”`,
            d: `document.getElementById(“geek”).innerHTML=I am a Geek`
        },
        answer: "b"
    },
    {
        question:  "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
        options:{
            a: "alertbox('GeeksforGeeks')",
            b: "msg('GeeksforGeeks')",
            c: "msgbox('GeeksforGeeks')",
            d: "alert('GeeksforGeeks')"
        },
        answer: "d"
    },
    {
        question:  "What is the correct syntax for referring to an external script called “geek.js”??",
        options:{
            a: '<script src=”geek.js”>',
            b: '<script href=”geek.js”>',
            c: '<script ref=”geek.js”>',
            d: '<script name=”geek.js”>'
        },
        answer: "a"
    },
    {
        question:  "What is the full form of CSS?",
        options:{
            a: 'Cereal style sheets',
            b: 'Cascadding style sheets',
            c: 'Color style sheets',
            d: 'Customize style sheets'
        },
        answer: "b"
    },
]

// alert(questionaries[0].question);

let timer = 0;
let timercount = document.querySelector(".timer");
let questionArrayCounter = 0;
let questionArrayLength = questionaries.length;

const questionDiv = document.querySelector(".question");
const optionsLoad = document.querySelector(".options");


function characterToAlphabet(value){
    switch(value) {
        case 1:
          return 'a'
          break;
        case 2:
          return 'b'
            break;
        case 3:
          return 'c'
            break;
        case 4:
           return 'd'
           break;
      }
}

let rightAnswer = 0;
let wrongAnswer = 0;
let totalscore = 0;

// function which will load the questions for the quiz
loadquestions = () => {
    timer = 30;
   // document.getElementById('options').style.cursor = 'show';
    optionsLoad.innerHTML = "";
    if(questionArrayCounter == questionArrayLength){
        clearInterval(myTimer);
        document.querySelector("#total_score").innerText = totalscore;
        document.querySelector("#right_answer").innerText = rightAnswer;
        document.querySelector("#wrong_answer").innerText = wrongAnswer;
        document.querySelector("#name").innerText = name.value;
        document.querySelector("#section_4").style.display = "none";
        document.querySelector("#section_5").style.display = "block";
    }
    else{
        questionDiv.innerHTML = questionaries[questionArrayCounter].question;
        for(let i = 1; i <= 4; i++){
           let optionValues =  document.createElement("li");
           optionValues.setAttribute("id", i);
           optionValues.addEventListener('click', function(){ optionClick(this, this.id);}, false);
          // optionValues.addEventListener("click", optionClick, false);
           optionValues.innerText = questionaries[questionArrayCounter].options[characterToAlphabet(i)];
           optionsLoad.appendChild(optionValues);
        }
    }
}

loadquestions();

 // calling the time counter after every one second 
 var myTimer = setInterval(() => {
    if(timer < 10){
        timercount.style.color = "red";
    }
    else{
        timercount.style.color = "black";
    }
    timercount.innerHTML = timer;
    // if timer is 0 move to the next question 
    if(timer == 0){
       questionArrayCounter += 1;
       loadquestions();
    }
    else{
      timer -= 1;
    }
}, 1000);

function optionClick(e, id){
    let answerResult = questionaries[questionArrayCounter].answer;
    let selectedOption = characterToAlphabet(parseInt(id));
   
    if(answerResult == selectedOption){ 
        // if the answer is corrct increment the score and the rightAnswer variable and move to the next question
        rightAnswer += 1;
        totalscore += 20;
        questionArrayCounter += 1;
        e.style.backgroundColor  = "green";
        e.style.color = "white";
        setTimeout(() => {
            loadquestions();
        }, 2000);
    }
    else{
        wrongAnswer += 1;
        totalscore -= 5;
        questionArrayCounter += 1;
        e.style.backgroundColor = "red";
        e.style.color = "white";
        setTimeout(() => {
            loadquestions();
        }, 2000);
    }
   
 }
 