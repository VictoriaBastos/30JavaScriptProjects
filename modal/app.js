const modal = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");
const btns = document.querySelectorAll(".btn");

btns.forEach( function (btn){
    btn.addEventListener("click",function(element){
        if(element.currentTarget.classList.contains("open-btn")){
            modal.classList.add("active-modal")
            overlay.classList.add("active-overlay")
        }else if(element.currentTarget.classList.contains("close-btn")){
            modal.classList.remove("active-modal")
            overlay.classList.remove("active-overlay")
        }
    })
})



// const openModal = document.querySelector(".open-btn");
// const closeModal = document.querySelector(".close-btn");

// const modal = document.querySelector(".modal-container");
// const overlay = document.querySelector(".overlay");

// openModal.addEventListener("click", function(){
//     modal.classList.add("active-modal");
//     overlay.classList.add("active-overlay");
// })

// closeModal.addEventListener("click", function(){
//     modal.classList.remove("active-modal");
//     overlay.classList.remove("active-overlay");
// })
