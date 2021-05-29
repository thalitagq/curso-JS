var sum = function calculateSum(a, b){
  return a + b;
};

sum(3,9);
console.log('A soma de 3 e 9 é igual a ' + sum(3, 9));

console.log('O nome da função que faz a soma é ' + sum.name);

function showName() {
  return 'Thalita';
}

var varShowName = showName;

console.log('A função ' + varShowName.name + ' retorna ' + varShowName());

function calculator(operation) {
  return function (a, b) {
    var result;
    switch (operation) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      case '%':
        result = a % b;
        break;
      default:
        return 'Operação inválida';
    }
    return 'Resultado da operação: ' + a + ' ' + operation + ' ' + b + ' = ' + result;
  }
}

var sum = calculator('+')

console.log(sum(2,5));

var subtraction = calculator('-');
var multiplication = calculator('*');
var division = calculator('/');
var mod = calculator('%');

console.log(subtraction(1,3));
console.log(multiplication(5,7));
console.log(division(9,3));
console.log(mod(6,7));
