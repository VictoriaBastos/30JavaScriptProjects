const questions = document.querySelectorAll(".question-container");

questions.forEach(function(question){
    let button = question.querySelector(".btn")
    button.addEventListener("click", function(){
        questions.forEach(function(item){
            let answer = item.querySelector(".question-answer") 
            if(item === question){
            answer.classList.toggle("show-answer")
            }else{
            answer.classList.remove("show-answer")
            } 
        })
    })
})


// In the following code the previous questions remain opened.

// const btns = document.querySelectorAll(".btn");
// console.log(btns)

// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         let question = e.currentTarget.parentElement.parentElement
//         let answer = question.querySelector(".question-answer")
//         answer.classList.toggle("show-answer")
//     })
// })
