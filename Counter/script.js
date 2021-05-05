/* BUTTONS */

btnDecrease = document.getElementById("decrease");
btnDecrease.addEventListener("click",decrease)

btnIncrease = document.getElementById("increase");
btnIncrease.addEventListener("click",increase)

btnReset = document.getElementById("reset")
btnReset.addEventListener("click",reset)


/* FUNCTION */

let number = document.getElementById("number")
let i = 0
let zero = 0

function decrease(){
    i --
    number.innerText= i
    if(i<0){
        number.style.color= "red"
    }else if(i>0){
        number.style.color= "green"
    }else{
        number.style.color="black"
    }
}

function increase(){
    i ++
    number.innerText = i
    if(i<0){
        number.style.color= "red"
    }else if(i>0){
        number.style.color= "green"
    }else{
        number.style.color="black"
    }
}

function reset(){
    i = 0
    number.innerText = i
    number.style.color="black"

}
