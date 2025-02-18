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
    const roundResultDiv = document.querySelector(".round-result");
    const scoreDiv = document.querySelector(".score");
    const gameResultDiv = document.querySelector(".game-result");
    playerActionDiv.textContent = `You threw ${humanChoice}.`;
    computerActionDiv.textContent = `Computer threw ${computerChoice}.`;
    scoreDiv.textContent = `Player score: ${humanScore} | Computer score: ${computerScore}`;
    switch (humanChoice)
    {
        case "rock":
            if (computerChoice == "scissors")
            {
                roundResultDiv.textContent = "You win. Rock beats scissors.";
                humanScore++;
            }
            else if (computerChoice == "paper")
            {
                roundResultDiv.textContent = "You lose. Paper beats rock.";
                computerScore++;
            }
            else
            {
                roundResultDiv.textContent = "No winner.";
            }
            break;

        case "paper":
            if (computerChoice == "rock")
            {
                roundResultDiv.textContent = "You win. Paper beats rock.";
                humanScore++;
            }
            else if (computerChoice == "scissors")
            {
                roundResultDiv.textContent = "You lose. Scissors beats paper.";
                computerScore++;
            }
            else
            {
                roundResultDiv.textContent = "No winner.";
            }
            break;

        case "scissors":
            if (computerChoice == "paper")
            {
                roundResultDiv.textContent = "You win. Scissors beats paper.";
                humanScore++;
            }
            else if (computerChoice == "rock")
            {
                roundResultDiv.textContent = "You lose. Rock beats scissors.";
                computerScore++;
            }
            else
            {
                roundResultDiv.textContent = "No winner.";
            }
            break;
            
    }
    scoreDiv.textContent = `Player score: ${humanScore} | Computer score: ${computerScore}`;
    if (humanScore == 5)
    {
        gameResultDiv.textContent = "You won.";
    }
    else if (computerScore == 5)
    {
        gameResultDiv.textContent = "Computer won.";
    }
}

window.addEventListener("load", () => {
    const optionsDiv = document.querySelector(".options");
    optionsDiv.addEventListener("click", (event) => {
        if (humanScore < 5 && computerScore < 5)
        {
            playRound(event.target.textContent.toLowerCase(), getComputerChoice());
        }
        
    });
    // const rockButton = document.querySelector("#rock-button");
    // const paperButton = document.querySelector("#paper-button");
    // const scissorsButton = document.querySelector("#scissors-button");
});