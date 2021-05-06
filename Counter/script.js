let count = 0

let countTag = document.querySelector("#number")
let btns = document.querySelectorAll(".btn")

btns.forEach(activeBtn)
    
function activeBtn(btn) { 
    
    btn.addEventListener("click", function(element){
    let val = element.currentTarget.classList
    if(val.contains("decrease")){
        count --
    } else if( val.contains("increase")){
        count++
    } else if( val.contains("reset")){
        count = 0
    }

    color()

    countTag.textContent = count
})
}

function color(){
    if(count > 0){
        countTag.style.color = "green"
    }else if( count < 0){
        countTag.style.color = "red"
    }else{
        countTag.style.color = "#222"
    }
}
    
