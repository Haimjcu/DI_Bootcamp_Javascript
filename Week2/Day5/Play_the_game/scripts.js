let computerNumber=0;
let userNumber=0;
function playTheGame() {
    let start=confirm('Would you like to play the game?')
    if(!start) {
        console.log('No problem, Goodbye');
        return;
    }
    else {
        userNumber=parseInt(prompt('Enter a number between 0 and 10'));
        if (isNaN(userNumber)) {
            console.log('Sorry Not a number, Goodbye');
            return;
        }
        else if (userNumber<0 || userNumber>10) {
            console.log('Sorry Not a good number, Goodbye');
            return;            
        }
        else {
           computerNumber=Math.floor(Math.random() * 11);
           compareNumbers(userNumber,computerNumber);
        }
    }
    return;
}

function compareNumbers(userNumber,computerNumber) {
    let numberOfGuesses=0;
    while (numberOfGuesses<3) {
        if (userNumber===computerNumber) {
            alert('WINNER');
            return;
        }
        else if (userNumber>computerNumber) {
            userNumber=parseInt(prompt('Your number is bigger then the computer’s, guess again'));
        }
        else {
            userNumber=parseInt(prompt('Your number is smaller then the computer’s, guess again'));
        }
        numberOfGuesses++;
    } 
    alert('out of chances');
    return;
}