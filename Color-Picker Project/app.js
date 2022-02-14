const color1 = document.querySelector(".btn-1")
const color2 = document.querySelector(".btn-2")
const container = document.querySelector(".container")
const text = document.querySelector("#text")
const text0 = document.querySelector("#text0")
const randomBtn = document.getElementById("random-button")
const midDiv = document.querySelector(".containerMid")


const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"]


function randomColorArrays() {

    let randomColor = "#"

    while (randomColor.length < 7) {
        randomColor = randomColor + hexArray[Math.floor(Math.random() * hexArray.length)]


    }
    return randomColor
}








randomBtn.addEventListener("click", function () {

    let hex1 = randomColorArrays()
    let hex2 = randomColorArrays()
    container.style.background = `linear-gradient(to right, ${hex1}, ${hex2})`
    text.textContent = `${hex1}
    ${hex2}`

    refreshPage()
    return hex1, hex2
})

function refreshPage() {
    let hex1 = randomColorArrays()
    let hex2 = randomColorArrays()
    container.style.background = `linear-gradient(to right, ${hex1}, ${hex2})`
    text.textContent = `${hex1}
    ${hex2}`
    color1.value = hex1
    color2.value = hex2

    let red = parseInt(hex1[1] + hex1[2], 16);
    let green = parseInt(hex1[3] + hex1[4], 16);
    let blue = parseInt(hex1[5] + hex1[6], 16);
    console.log(red, green, blue);

    let red1 = Math.floor(red / 2)
    let green1 = Math.floor(green / 2)
    let blue1 = Math.floor(blue / 2)

    let midColor = `${red1}, ${green1}, ${blue1}`
    container.style.border = `10px solid rgb(${midColor})`;



    randomBtn.style.boxShadow = `20px 20px 50px 10px rgb(${midColor}) inset`


}


function mergeArrayObjects(hexArray) {
    let randomArray = changeHexCodes(hexArray)


}


/// SAYFA YÜKLENDİĞİNDE ÇALIŞACAK FUNCTİON
document.addEventListener("DOMContentLoaded", function () {
    text.style.width = "100px"
    text.style.height = "40px"
    text0.textContent = "Linear Gradient"


    refreshPage()
    hexMessage()

})


// / 1. color picker'ın rengini container'ın arka plan rengi yapan function

color1.addEventListener("input", function () {


    let renk1 = color1.value;
    container.style.background = `linear-gradient(to right, ${renk1}, ${color2.value})`
    hexMessage()
});

// / 2. color picker'ın rengini container'ın arka plan rengi yapan function

color2.addEventListener("input", function () {
    let renk2 = color2.value;
    container.style.background = `linear-gradient(to left, ${renk2}, ${color1.value})`
    console.log(color1.value)
    hexMessage()
});


function hexMessage() {
    text.textContent = `${color1.value} ${color2.value}`
    text.style.boxShadow = "10px"

}

