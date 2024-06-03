let userScore = 0;
let compScore = 0;

const Choices = document.querySelectorAll(".Choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText ="Game Was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (UserWin, UserChoice, compChoice) => {
    if(UserWin) {
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText = `you win! Your ${UserChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lost. ${compChoice} beats Your ${UserChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (UserChoice) => {
    console.log("user Choice = ", UserChoice);
    const compChoice = genCompChoice();
    console.log("comp Choice = ", compChoice);

    if(UserChoice === compChoice) {
        drawGame();
    } else {
        let UserWin = true;
        if(UserChoice === "rock") {
            UserWin = compChoice === "paper" ? false : true;
        }else if(UserChoice === "paper") {
            UserWin = compChoice === "scissors" ? false : true;
        } else {
             UserWin = compChoice === "rock" ? false : true;
        }
        showWinner(UserWin, UserChoice, compChoice);

    }
};

Choices.forEach((Choice) => {
    Choice.addEventListener("click" , () => {
        const UserChoice = Choice.getAttribute("id");
        playGame(UserChoice);

    });
});