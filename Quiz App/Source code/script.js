const questions=
[
    {
        "Question" : "What is the capital of India ?",
        "a":"Uttrakhand",
        "b":"New Delhi",
        "c":"Kerela",
        "d":"Mumbai",
        "correct":"b"
    },
    {
        "Question" : "What is the full form of ATM ?",
        "a":"Automatic Transfer Machine",
        "b":"Auto Teller Machine",
        "c":"Automated teller machine",
        "d":"Auto Tester Machine",
        "correct":"c"
    },
    {
        "Question" : "What is the name of the President od India ?",
        "a":"Draupadi Murmu",
        "b":"Sanjay Leela Bansali ",
        "c":"Ram Nath Kovind",
        "d":"Narendra Modi",
        "correct":"a"
    },
    {
        "Question" : "Who is Known as father of mordern computer ?",
        "a":"George Peacock",
        "b":"William Hopkins",
        "c":"Charles Babbage",
        "d":"William Thomson",
        "correct":"c"

    },
    {
        "Question" : "DRDL stands for",
        "a":"Defence Research and Development Laboratary",
        "b":"Differential Research and Documentation Laboratary",
        "c":"Department of Research and Development Laboratory",
        "d":"None of the above",
        "correct":"a"
    },
    {
        "Question" : "Fathometer is used to measure",
        "a":"Rainfall",
        "b":"Ocean depth",
        "c":"Sound intensity",
        "d":"Earthquakes",
        "correct":"b"
    },
    {
        "Question" : "Headquarters of UNO are situated at",
        "a":"Paris",
        "b":"Geneva",
        "c":"Haque (Netherlands)",
        "d":"New York, USA",
        "correct":"d"
    },
    {
        "Question" : "For seeing objects at the surface of water from a submarine under water, the instrument used is",
        "a":"periscope",
        "b":"telescope",
        "c":"kaleidoscope",
        "d":"spectroscope",
        "correct":"a"
    },
    {
        "Question" : "Ozonosphere is depleted by",
        "a":"CFCs",
        "b":"excess CO2",
        "c":"ozone",
        "d":"ozone",
        "correct":"a"
    },
    {
        "Question" : "________ is also called as a bio gas",
        "a":"bio butanol",
        "b":"biodiesel",
        "c":"bio ethanol",
        "d":"bio methane",
        "correct":"d"
    }

    

]
let index = 0;

let correct=0,score=0,length=questions.length;


const ques = document.getElementById("question");
const label = document.querySelectorAll(".opt");
const viewScore = document.getElementById("score")
const radio = document.querySelectorAll(".option_input");
const btn=document.getElementById("button");

displayQuestion();
function displayQuestion()
{
    const data = questions[index];
    ques.innerHTML=`${index+1}) ${data.Question}`;
    label[0].innerHTML=data.a;
    label[1].innerText=data.b;
    label[2].innerText=data.c;
    label[3].innerText=data.d;
    viewScore.innerHTML=`Score : ${score}`;
}

btn.addEventListener('click',submit);

function submit()
{
    
    
    let answer = getAnswer();
    const data = questions[index];
    console.log("answer ="+answer);
    let ans1= data.correct;
    console.log(typeof(answer),typeof(ans1));
    if(answer==ans1)
    {
        score++;
        console.log("yes");
    }
    check();
    reset();
    if(index>=questions.length)
    {
        end();
        return;
    }
    displayQuestion();
  
}

function getAnswer()
{
    for (let i = 0; i < radio.length; i++) {
      if(radio[i].checked)
      {
        console.log(i+"yes")
        return radio[i].value;
      }
    }
}

function check()
{
    viewScore.innerHTML=`Score : ${score}`;
    index++;
}
function reset ()
{
    for (let i = 0; i < radio.length; i++) {
        if(radio[i].checked)
        {
           radio[i].checked=false;
        }
      }
}
function end()
{
    const box = document.getElementById("inner_box");
    box.innerHTML=`<h1>Quiz Ended</h1>
                    <h1>Your Total score is : ${score} out of ${questions.length} `;
}

