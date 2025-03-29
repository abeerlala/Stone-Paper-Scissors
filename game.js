let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".inner");

const genChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

const displayWin = (userWin, msg, userChoice, compChoice) => {
    if (userWin == true) {
        msg.innerText = `"User Won, ${userChoice} beats ${compChoice}"`;
        msg.style.backgroundColor = "green";
        userScore++;
        document.querySelector(".userScoreh3").innerText = userScore;
    } else {
        msg.innerText = `"Computer Won, ${compChoice} beats ${userChoice}"`;
        msg.style.backgroundColor = "red";
        compScore++;
        document.querySelector(".compScoreh3").innerText = compScore;
    }
}

const checkWinner = (userChoice, compChoice) => {
    const msg = document.querySelector("#msg");
    if (userChoice === compChoice) {
        msg.innerText = "It's A Draw"; 
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        displayWin(userWin, msg, userChoice, compChoice);
    }
}

const playGame = (userChoice) => {
    console.log(userChoice);
    const compChoice = genChoice();
    console.log(compChoice);
    checkWinner(userChoice, compChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});