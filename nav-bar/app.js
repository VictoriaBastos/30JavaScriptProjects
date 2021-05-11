const btnToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

btnToggle.addEventListener("click",function(){
    links.classList.toggle("show-links")
})

// btnToggle.addEventListener("click",function(){
//     if(links.classList.contains("show-links")){
//         links.classList.remove("show-links")
//     }else{
//         links.classList.add("show-links")
//     }
// })
