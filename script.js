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


function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) 
    {
        console.log(`You threw ${humanChoice}.`);
        console.log(`Computer threw ${computerChoice}.`);
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

    for (let i = 0; i < 5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore)
    {
        console.log(`You win with ${humanScore} points. The computer had ${computerScore} points.`);
    }
    else if (computerScore > humanScore)
    {
        console.log(`You lose with ${humanScore} points. The computer had ${computerScore} points.`);
    }
    else
    {
        console.log(`Tie. Both you and the computer had ${computerScore} points.`);
    }
}

playGame();