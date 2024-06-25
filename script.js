let inputField = document.querySelector(".input-field");
let mainDiv = document.querySelector(".main-div")
let question = document.querySelector(".question")

let resultContainer = document.createElement("h2")
let attemptContainer = document.createElement("p")
attemptContainer.setAttribute("class", "attempts")

let firstPlayerNumber,
    secondPlayerNumber,
    result,
    attemptMessage,
    lastTry;

let playerTurn = "first";
let attempt = 0;
let maxRange = 50;
let minRange = 0;

const getSecondPlayerNumber = () => {
    resultat_1 = inputField.value
    return inputField.value;
}

const didIWin = (secondPlayerNumber, numberToFind) => {
    numberToFind<secondPlayerNumber ? result="Smaller." : minRange=secondPlayerNumber;
    numberToFind>secondPlayerNumber ? result="Bigger." : maxRange=secondPlayerNumber;
    if (secondPlayerNumber == numberToFind) {
        return true
    } else {
        return false
    }
}


const updateResult = () => {
    resultContainer.innerHTML = result
    attemptMessage = `number of attempts: ${attempt}`
    attemptContainer.innerHTML = attemptMessage
    mainDiv.appendChild(resultContainer).appendChild(attemptContainer)
    question.innerHTML = `Guess a number between <span>${minRange} and ${maxRange}.</span>`
    clearField()
}

const endGame = () => {
    mainDiv.innerHTML = `<h1>You are <span>AMAZING!</span></h1>${attemptMessage}`
}

const playerOneNumber = () => {
    firstPlayerNumber = parseInt(inputField.value)
    if (firstPlayerNumber >= 0 && firstPlayerNumber <= 50) {
        question.innerHTML = `Guess a number between <span>${minRange} and ${maxRange}.</span>`
        playerTurn = "second";
        return
    } else {
        // question.innerHTML = "Pick a number between <span>0 and 50.</span>" 
    }
}

const clearField = () => inputField.value=""

const gamePlay = () => {
    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            if (inputField.value !== "") {
                if (playerTurn === "first") {
                    playerOneNumber()
                    clearField()
                } else {
                    attempt++;
                    if (didIWin(getSecondPlayerNumber(), firstPlayerNumber)) {
                        updateResult()
                        endGame()
                    } else {
                        updateResult()
                    }
                }
            }
        }
    })
}

gamePlay()