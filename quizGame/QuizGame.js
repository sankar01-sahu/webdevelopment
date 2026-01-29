let questionBook =[
    {
        id:"QA-1",
        question:"What is the full-form of JS?",
        options:["Java Selenium","Java Support","Java Spring","JavaScript"],
        correctAnswer:"JavaScript"
    },{
        id:"QA-2",
        question:"What is the full-form of DOM?",
        options:["Domain Object Model","Document Object Manipulation","Document Object Model","Design Object Module"],
        correctAnswer:"Document Object Model"
    },{
        id:"QA-3",
        question:"What is the full-form of BOM?",
        options:["Browser Object Model","BackEnd Of Master","Back Object Model","Browser Of Module"],
        correctAnswer:"Browser Object Model"
    },{
        id:"QA-4",
        question:"What is the full-form of TDZ?",
        options:["Time Dead Zone","Temporal Dead Zone","Tiger Dead Zone","Titanic Dead Zone"],
        correctAnswer:"Temporal Dead Zone"
    },{
        id:"QA-5",
        question:"What is the full-form of ES?",
        options:["EasyScript","EcmaScript","Error Syntax","Non of these"],
        correctAnswer:"EcmaScript"
    }
]

let questionElement =document.getElementById("question");
let optionElement =document.getElementById("option");
let scoreElement =document.getElementById("score");
let currentQuestion = 0;
let score=0;

function displayQuestion(){
    let {id,question,options,correctAnswer} = questionBook[currentQuestion]
    // console.log(id);    
    // console.log(question);    
    // console.log(options);    
    // console.log(correctAnswer);    
    questionElement.textContent = question;
    options = shuffleQuestion([...options])
    options.map((opt,i)=>{
        let btn = document.createElement("button")
        btn.textContent = opt;
        btn.setAttribute("class","optionButtons")
        optionElement.append(btn)
        
        btn.addEventListener("click",()=>{
            if(opt==correctAnswer){
                btn.style.backgroundColor ="green"
                score += 1;
            }else{
                btn.style.backgroundColor = "red";
                score -= 0.25;
            }
            // console.log(score);
            setTimeout(()=>{
                nextQuestion();
            },1500)
            scoreElement.textContent = `Score:${score}/${questionBook.length}`
            let allbtn = document.querySelectorAll(".optionButtons");
            allbtn.forEach((b)=> b.disabled=true)
        })
    })
}
displayQuestion()

function nextQuestion(){
    currentQuestion++;
    optionElement.textContent = " ";
    if(currentQuestion == questionBook.length){
        questionElement.textContent ="Quiz completed Successfully!!👍👍🥰";
    }
    else{
        displayQuestion();
    }
}

function shuffleQuestion(arr){
    for(let i=arr.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    return arr;
}
