const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const value3 = document.getElementById("value3");

const startButton = document.getElementById("startButton");
const result = document.getElementById("result");
const values = ["🍒", "🍋", "🍇", "🍉", "🍓"];

let animationId;

function getRandomValue() {
    return values[Math.floor(Math.random() * values.length)];
    //math.floor convert floor to int values since random generate float values
    //math.rando*values.length will generate a random value within values.length limit
}

function startSlotMachine() {
    // result.remove();
    animationId = setInterval(() => {
        value1.innerText = getRandomValue();
        value2.innerText = getRandomValue();
        value3.innerText = getRandomValue();

    }, 100);

    setTimeout(() => {
        clearInterval(animationId);
        checkResult();

        
    }, 1000);
}
// console.log("hello")

function checkResult() {
    const val1 = value1.innerText;
    const val2 = value2.innerText;
    const val3 = value3.innerText;

    if (val1 == val2 && val2 == val3) {
        result.textContent = "JackPot!!!";
        result.style.color = "gold";
    }else {
        result.textContent = "Try Again";
        result.style.color = "Black";
    }

}

startButton.addEventListener("click", startSlotMachine);
