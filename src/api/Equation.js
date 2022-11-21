function getEquation() {
  const operations = ['+', '-', '*', '/'];
  let operationIndex = randomIntFromInterval(0, operations.length - 1);
  let operation = operations[operationIndex];
  let first = randomIntFromInterval(0, 99);
  let second;

  switch (operation) {
    case '/':
      if (first === 0) {
        second = randomIntFromInterval(1, 99);
      } else {
        let divisors = getIntegerDivisors(first);
        let divisorIndex = randomIntFromInterval(1, divisors.length - 1);

        second = divisors[divisorIndex];
      }
      break;

    case '*':
      second = randomIntFromInterval(0, 11);
      break;

    case '-':
      second = randomIntFromInterval(1, first);
      break;

    default:
      second = randomIntFromInterval(0, 99);
  }

  let answer = solveEquation({first, second, operation});

  return {
    first: first,
    second: second,
    operation: operation,
    expression: `${first} ${operation} ${second}`,
    answer: answer
  }
}

function solveEquation({first, second, operation}) {
  switch (operation) {
    case '+':
      return first + second;

    case '-':
      return first - second;

    case '*':
      return first * second;

    case '/':
      return first / second;

    default: return null;
  }
}

function getIntegerDivisors(number) {
  let divisors = [];

  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export {
  getEquation,
  randomIntFromInterval,
  solveEquation
};