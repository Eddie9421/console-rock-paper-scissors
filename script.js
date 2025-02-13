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
    switch (humanChoice)
    {
        case "rock":
            if (computerChoice == "scissors")
            {
                console.log("You win. Rock beats scissors.");
                humanScore++;
            }
            else if (computerChoice == "paper")
            {
                console.log("You lose. Paper beats rock.");
                computerScore++;
            }
            else
            {
                console.log("No winner.");
            }
            break;

        case "paper":
            if (computerChoice == "rock")
            {
                console.log("You win. Paper beats rock.");
                humanScore++;
            }
            else if (computerChoice == "scissors")
            {
                console.log("You lose. Scissors beats paper.");
                computerScore++;
            }
            else
            {
                console.log("No winner.");
            }
            break;

        case "scissors":
            if (computerChoice == "paper")
            {
                console.log("You win. Scissors beats paper.");
                humanScore++;
            }
            else if (computerChoice == "rock")
            {
                console.log("You lose. Rock beats scissors.");
                computerScore++;
            }
            else
            {
                console.log("No winner.");
            }
            break;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);