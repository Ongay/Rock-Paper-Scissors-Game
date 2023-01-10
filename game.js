var mas = ["rock", "paper", "scissors"];

function rule(a, b) {
    var winner = null;

    if ((a == mas[0] && b == mas[1]) ||
        (a == mas[1] && b == mas[2]) ||
        (a == mas[2] && b == mas[0])) {
        winner = b;
    }
    else if ((b == mas[0] && a == mas[1]) ||
        (b == mas[1] && a == mas[2]) ||
        (b == mas[2] && a == mas[0])) {
        winner = a;
    }
    else {
        winner = "draw";
    }
    return winner;
}

function computerChoice() {
    var choice;
    var n = (Math.random() * (mas.length - 1)).toFixed();
    choice = mas[n];
    return choice;
}

function play() {
    var winner = null;
    var playerChoice,
        choice = +prompt("Ввeдите цифру от 0 до 2: \n 0 - rock; 1 - paper; 2 - scissors \n Или -1 для выхода");

    if (choice == -1) {
        return;
    }
    else if ((choice < 0 || choice > 2) || isNaN(choice)) {
        console.log(choice);
        console.log("Wrong");
        return play();
    }

    playerChoice = mas[choice];
    var compChoice = computerChoice();

    winner = rule(playerChoice, compChoice);

    if (winner == playerChoice) {
        // console.log("Your choice is " + playerChoice);
        // console.log("Computer choice is " + compChoice);
        // console.log("Player wins");
        alert("Your choice is " + playerChoice + "\n" + "Computer choice is " + compChoice + "\n" + "You win");
    }
    else if (winner == compChoice) {
        // console.log("Your choice is " + playerChoice);
        // console.log("Computer choice is " + compChoice);
        // console.log("Computer wins");
        alert("Your choice is " + playerChoice + "\n" + "Computer choice is " + compChoice + "\n" + "You lose");
    }
    else {
        // console.log("Your choice is " + playerChoice);
        // console.log("Computer choice is " + compChoice);
        // console.log("Draw");
        alert("Your choice is " + playerChoice + "\n" + "Computer choice is " + compChoice + "\n" + "Draw");
    }
    return winner;
}

play();

