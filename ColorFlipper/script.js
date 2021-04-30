const btn = document.getElementById("btn").addEventListener("click",colorFlipper)
const color = document.querySelector(".color")
    
const hex = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0,'F', 'E', 'D', 'C', 'B', 'A']

function colorFlipper(){
    let hexColor = "#"
    let randomIndex;
    for (i=1;i<7;i++){
        randomIndex = Math.floor(Math.random()* hex.length)
        hexColor += (hex[randomIndex])
    }
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
}