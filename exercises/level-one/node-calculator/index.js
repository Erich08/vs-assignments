let readLineSync = require('readline-sync');

let num1;
let num2;

const userPrompt = parseInt(
  readLineSync.keyIn(
    'Press 1 for addition, 2 for subraction, 3 for multiplication, and 4 for division: ',
    { limit: `$<1-4>` }
  )
);

if (userPrompt === 1) {
  num1 = parseInt(
    readLineSync.question('What is the first number you would like to add? ')
  );

  //Checks for NaN and will continue to prompt user until a number is entered.
  while (isNaN(num1)) {
    num1 = parseInt(readLineSync.question('Please enter a number: '));
  }
  num2 = parseInt(
    readLineSync.question('What is the second number you would like to add?  ')
  );
  while (isNaN(num2)) {
    num2 = parseInt(readLineSync.question('Please enter a number: '));
  }

  console.log(`The result is: ${addNumbers(num1, num2)}.`);
} else if (userPrompt === 2) {
  num1 = parseInt(
    readLineSync.question(
      'Which is the first number you would like to subtract? '
    )
  );

  while (isNaN(num1)) {
    num1 = parseInt(readLineSync.question('Please enter a number: '));
  }
  num2 = parseInt(
    readLineSync.question(
      'Which is the second number you would like to subtract? '
    )
  );

  while (isNaN(num2)) {
    num2 = parseInt(readLineSync.question('Please enter a number: '));
  }

  console.log(`The result is: ${subtractNumbers(num1, num2)}.`);
} else if (userPrompt === 3) {
  num1 = parseInt(
    readLineSync.question(
      'Which is the first number you would like to multiply? '
    )
  );

  while (isNaN(num1)) {
    num1 = parseInt(readLineSync.question('Please enter a number: '));
  }
  num2 = parseInt(
    readLineSync.question(
      'Which is the second number you would like to multiply? '
    )
  );

  while (isNaN(num2)) {
    num2 = parseInt(readLineSync.question('Please enter a number: '));
  }

  console.log(`The result is: ${multiplyNumbers(num1, num2)}.`);
} else {
  num1 = parseInt(
    readLineSync.question(
      'Which is the first number you would like to divide? '
    )
  );
  while (isNaN(num1)) {
    num1 = parseInt(readLineSync.question('Please enter a number: '));
  }

  num2 = parseInt(
    readLineSync.question(
      'Which is the second number you would like to divide? '
    )
  );
  while (isNaN(num2)) {
    num2 = parseInt(readLineSync.question('Please enter a number: '));
  }

  console.log(`The result is: ${divideNumbers(num1, num2)}.`);
}

function addNumbers(num1, num2) {
  return num1 + num2;
}

function subtractNumbers(num1, num2) {
  return num1 - num2;
}

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

function divideNumbers(num1, num2) {
  const result = num1 / num2;
  return result.toFixed(2);
}
