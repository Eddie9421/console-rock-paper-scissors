let humanScore = 0;
let computerScore = 0;

function generateRandomNumAToB(minimumBound, maximumBound)
{
    return Math.floor(Math.random() * (maximumBound - minimumBound + 1) + minimumBound);
}

function getComputerChoice()
{
    let computerChoiceNum = generateRandomNumAToB(0, 2);
    switch (computerChoiceNum)
    {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function getHumanChoice()
{
    return prompt("Rock, paper, or scissors?").toLowerCase();
}

function playRound(humanChoice, computerChoice) 
{
    const playerActionDiv = document.querySelector(".player-action");
    const computerActionDiv = document.querySelector(".computer-action");
    const resultDiv = document.querySelector(".result");
    playerActionDiv.textContent = `You threw ${humanChoice}.`;
    computerActionDiv.textContent = `Computer threw ${computerChoice}.`;

    switch (humanChoice)
    {
        case "rock":
            if (computerChoice == "scissors")
            {
                resultDiv.textContent = "You win. Rock beats scissors.";
                humanScore++;
            }
            else if (computerChoice == "paper")
            {
                resultDiv.textContent = "You lose. Paper beats rock.";
                computerScore++;
            }
            else
            {
                resultDiv.textContent = "No winner.";
            }
            break;

        case "paper":
            if (computerChoice == "rock")
            {
                resultDiv.textContent = "You win. Paper beats rock.";
                humanScore++;
            }
            else if (computerChoice == "scissors")
            {
                resultDiv.textContent = "You lose. Scissors beats paper.";
                computerScore++;
            }
            else
            {
                resultDiv.textContent = "No winner.";
            }
            break;

        case "scissors":
            if (computerChoice == "paper")
            {
                resultDiv.textContent = "You win. Scissors beats paper.";
                humanScore++;
            }
            else if (computerChoice == "rock")
            {
                resultDiv.textContent = "You lose. Rock beats scissors.";
                computerScore++;
            }
            else
            {
                resultDiv.textContent = "No winner.";
            }
            break;
    }
}

window.addEventListener("load", () => {
    const optionsDiv = document.querySelector(".options");
    optionsDiv.addEventListener("click", (event) => {
        playRound(event.target.textContent.toLowerCase(), getComputerChoice());
    });
    // const rockButton = document.querySelector("#rock-button");
    // const paperButton = document.querySelector("#paper-button");
    // const scissorsButton = document.querySelector("#scissors-button");
});