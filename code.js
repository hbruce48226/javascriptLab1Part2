// Task: Expand on the game by adding functions that allow the user to start the game and get a number to
// use as damage.
// Functions:
// Rearrange your code to include these functions.
// 1. startGame function. This function will
//      a. Prompt the user if they would like to play and if they say yes...
//          i. Allow the user to enter the character’s name.
//          ii. Call the startCombat function.
// 2. startCombat function. When executed, this will run the entire loop you created in Part One.
// 3. getDamage function. This will return a number between one and five that will be used to decide
// how much damage the user and Grant will deal during each round.


// Additional Changes:
// 1. Each iteration of the loop will include a prompt that will ask the user if they would like to
//    “attack” or “quit”.
// 2. If the user decides to attack, adjust the character’s health points and Grant’s health points based
//    on the getDamage function.
// 3. If the user decides to quit, figure out a way to exit out of the loop and function.

// prompt begin!!
// start = prompt("BEGIN");
// if (start === "BEGIN") {
//     startGame();
// }

function startGame() {
    const start = prompt("Do you want to play?");
    if (start === 'y' || 'yes' || 'Yes' ||  'Y' ||  'YES') {
        const player = prompt("What is your name?"); // allow the user to enter the character's name
        startCombat(player);                               // call the startCombat function
    }
}



function startCombat(player) {
    let playerPoints = 40;
    let grantPoints = 10;
    let playerWins = 0;
    while (playerPoints > 0 && playerWins < 3) {
        if (grantPoints <= 0) {
            playerWins += 1;
            grantPoints = 10;
        }


        // playerPoints -= (Math.floor(Math.random() * 2) + 1);
        // grantPoints -= (Math.floor(Math.random() * 2) + 1);
        console.log(`${player}'s points: ${playerPoints}`);
        console.log(`Grant's points: ${grantPoints}`);
        console.log(`playerWins: ${playerWins}`);

        let choice = prompt("ATTACK or QUIT");
        if (choice === 'attack' || choice === 'ATTACK') {
            playerPoints -= getDamage();
            grantPoints -= getDamage();
        } else if (choice === 'quit' || choice === 'QUIT') {
            break;
        }


    }
    
    if (playerPoints === 0) {
        console.log("Grant the Almight wins!");
    }

    if (playerWins === 3) {
        console.log("YOU WIN!!");
    }
}



function getDamage() {
    let damagePoints = (Math.floor(Math.random() * 5) + 1);
    return damagePoints;
}





