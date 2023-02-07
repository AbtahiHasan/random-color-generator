let changeColorBtn = document.getElementById("change-color");

changeColorBtn.addEventListener("click", changeColor);

function changeColor() {
    let randomColor = randomColorGenerator ();
    console.log(randomColor)
    let bodyTag = document.body;
    bodyTag.style.backgroundColor = randomColor;
}

function randomColorGenerator () {
    let char = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","f"],
    randomChar = "";
    for(let i = 0; i < char.length; i++) {
        let randomNumber = Math.floor(Math.random() * char.length);
        if(randomChar.length <= 5) {
            randomChar += char[randomNumber];
        }
    }
    return "#" + randomChar;
}
