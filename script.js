const Questions=[
    {
        question :"The function which is called to render HTML to a web page in react ?",
        answer:[
            {text:"render()", correct:true },
            {text:"ReactDOM_render()", correct:false},
            {text:"render_DOM()",correct:false},
            {text:"DOM_HTML()",correct:false}

        ]
    },
    {
        question :"Using which of the following can prevent default behaviour at in react ?",
        answer:[
            {text:"avoidDefault()", correct:false },
            {text:"preventDefault()", correct:true},
            {text:"revokeDefault",correct:false},
            {text:"None of the above",correct:false}

        ]
    },
    {
        question :"What are arbitrary inputs of components in react also known as ?",
        answer:[
            {text:"Elements", correct:false },
            {text:"Props", correct:true},
            {text:"Keys",correct:false},
            {text:"Ref",correct:false}

        ]
    },
    {
        question :"What happens if you render an input element with disabled={false}",
        answer:[
            {text:"it will be rendered as enabled", correct:true },
            {text:"it will be rendered as disabled", correct:false},
            {text:"it will not be rendered at all",correct:false},
            {text:"None of the above",correct:false}

        ]
    }
]
const QuestionEle=document.querySelector("#Question")
const AnswerEle=document.querySelector(".answers")
const NextBtn=document.querySelector("#next-btn")
let index=0;
let score=0;
function render_Question(index){
    const current_Question=Questions[index].question;
    QuestionEle.innerText=current_Question
    const ans=Questions[index].answer;
    ans.forEach((prop)=>{
        const AnsOption=document.createElement("button");
        AnsOption.innerText=prop.text
        AnsOption.classList.add('btn')
        AnswerEle.appendChild(AnsOption)
        CheckAns(AnsOption,prop.correct)

    })
}
function CheckAns(AnsOption,isCorrect){
    AnsOption.addEventListener("click",function(){
          if(isCorrect){
            AnsOption.classList.add("correct")
            score++
          }
          else{
            AnsOption.classList.add("incorrect")
            score--;
          }
    })
}
NextBtn.addEventListener("click",()=>{
    NextBtn.innerText='Next'
    AnswerEle.innerHTML=""
    console.log(Questions.length)
    console.log(index)
    if(index+1>Questions.length){
        NextBtn.innerText='End'
       QuestionEle.innerText=`Quiz Ended with score ${score}/4`
       AnswerEle.innerHTML=''
    }
    render_Question(index)
    index++
})
