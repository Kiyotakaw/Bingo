console.log("Hello World.");

generateRandomNumber(15);

function generateRandomNumber (max) {
    // return random number 0 to 10;
    let randomNum = Math.floor(Math.random() * max) + 1;

    // if ... else if ... else statement
    // if (condition) {block of code to execute}
    // ==, ! =, >, <, > =, < =, &&, ||

    if(randomNum < 15){
      return console.log(`Random number ${randomNum} is in B. 1 - 15`);
    } 
    else if (randomNum > 16 && randomNum < 30) {
      return console.log(`Random number ${randomNum} is in I. 16 - 30`);
    } 
    else if (randomNum > 31 && randomNum < 45) {
      return console.log(`Random number ${randomNum} is in N. 31 - 45`);
    }
    else if (randomNum > 46 && randomNum < 60) {
      return console.log(`Random number ${randomNum} is in G. 46 - 60`);
    }
    else if (randomNum > 61 && randomNum < 75) {
      return console.log(`Random number ${randomNum} is in O. 61 - 75`);
    }

    else {
     console.log(`Random number is invalid.`);
    }
    
    return console.log(randomNum);
}