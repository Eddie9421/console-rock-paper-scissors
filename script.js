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
    let userChoiceNum = parseInt(prompt("Pick 1 for rock, 2 for paper, and 3 for scissors."));
    switch (userChoiceNum)
    {
        case 1:
            return "rock";
        case 2:
            return "paper";
        default:
            return "scissors";
    }
}