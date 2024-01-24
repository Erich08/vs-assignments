let readLineSync = require('readline-sync');

let addFirstNum;
let addSecondNum;
let subtractFirstNum;
let subtractSecondNum;
let multiplyFirstNum;
let multiplySecondNum;
let divideFirstNum;
let divideSecondNum;

const userPrompt = parseInt(
  readLineSync.keyIn(
    'Press 1 for addition, 2 for subraction, 3 for multiplication, and 4 for division: ',
    { limit: `$<1-4>` }
  )
);

if (userPrompt === 1) {
  addFirstNum = parseInt(
    readLineSync.question('What is the first number you would like to add? ')
  );

  //Checks for NaN and will continue to prompt user until a number is entered.
  while (isNaN(addFirstNum)) {
    addFirstNum = parseInt(readLineSync.question('Please enter a number: '));
  }
  addSecondNum = parseInt(
    readLineSync.question('What is the second number you would like to add?  ')
  );
  while (isNaN(addSecondNum)) {
    addSecondNum = parseInt(readLineSync.question('Please enter a number: '));
  }

  console.log(`The result is: ${addNumbers(addFirstNum, addSecondNum)}.`);
} else if (userPrompt === 2) {
  subtractFirstNum = parseInt(
    readLineSync.question(
      'Which is the first number you would like to subtract? '
    )
  );

  while (isNaN(subtractFirstNum)) {
    subtractFirstNum = parseInt(
      readLineSync.question('Please enter a number: ')
    );
  }
  subtractSecondNum = parseInt(
    readLineSync.question(
      'Which is the second number you would like to subtract? '
    )
  );

  while (isNaN(subtractSecondNum)) {
    subtractSecondNum = parseInt(
      readLineSync.question('Please enter a number: ')
    );
  }

  console.log(
    `The result is: ${subtractNumbers(subtractFirstNum, subtractSecondNum)}.`
  );
} else if (userPrompt === 3) {
  multiplyFirstNum = parseInt(
    readLineSync.question(
      'Which is the first number you would like to multiply? '
    )
  );

  while (isNaN(multiplyFirstNum)) {
    multiplyFirstNum = parseInt(
      readLineSync.question('Please enter a number: ')
    );
  }
  multiplySecondNum = parseInt(
    readLineSync.question(
      'Which is the second number you would like to multiply? '
    )
  );

  while (isNaN(multiplySecondNum)) {
    multiplySecondNum = parseInt(
      readLineSync.question('Please enter a number: ')
    );
  }

  console.log(
    `The result is: ${multiplyNumbers(multiplyFirstNum, multiplySecondNum)}.`
  );
} else {
  divideFirstNum = parseInt(
    readLineSync.question(
      'Which is the first number you would like to divide? '
    )
  );

  while (isNaN(divideFirstNum)) {
    divideFirstNum = parseInt(readLineSync.question('Please enter a number. '));
  }

  divideSecondNum = parseInt(
    readLineSync.question(
      'Which is the second number you would like to divide? '
    )
  );

  while (isNaN(divideSecondNum)) {
    divideSecondNum = parseInt(
      readLineSync.question('Please enter a number: ')
    );
  }

  console.log(
    `The result is: ${divideNumbers(divideFirstNum, divideSecondNum)}.`
  );
}

function addNumbers(addFirstNum, addSecondNum) {
  return addFirstNum + addSecondNum;
}

function subtractNumbers(subtractFirstNum, subtractSecondNum) {
  return subtractFirstNum - subtractSecondNum;
}

function multiplyNumbers(multiplyFirstNum, multiplySecondNum) {
  return multiplyFirstNum * multiplySecondNum;
}

function divideNumbers(divideFirstNum, divideSecondNum) {
  const result = divideFirstNum / divideSecondNum;
  return result.toFixed(2);
}
