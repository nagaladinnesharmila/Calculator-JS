const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return 'Cannot divide by zero';
  }
  return num1 / num2;
}

function calculate() {
  console.log('Select operation:');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Exit');

  rl.question('Enter your choice (1-5): ', (choice) => {
    const option = parseInt(choice);

    switch (option) {
      case 1:
        rl.question('Enter first number: ', (num1) => {
          rl.question('Enter second number: ', (num2) => {
            console.log(`Result: ${add(parseFloat(num1), parseFloat(num2))}`);
            calculate();
          });
        });
        break;
      case 2:
        rl.question('Enter first number: ', (num1) => {
          rl.question('Enter second number: ', (num2) => {
            console.log(`Result: ${subtract(parseFloat(num1), parseFloat(num2))}`);
            calculate();
          });
        });
        break;
      case 3:
        rl.question('Enter first number: ', (num1) => {
          rl.question('Enter second number: ', (num2) => {
            console.log(`Result: ${multiply(parseFloat(num1), parseFloat(num2))}`);
            calculate();
          });
        });
        break;
      case 4:
        rl.question('Enter first number: ', (num1) => {
          rl.question('Enter second number: ', (num2) => {
            console.log(`Result: ${divide(parseFloat(num1), parseFloat(num2))}`);
            calculate();
          });
        });
        break;
      case 5:
        rl.close();
        break;
      default:
        console.log('Invalid choice');
        calculate();
    }
  });
}

calculate();
