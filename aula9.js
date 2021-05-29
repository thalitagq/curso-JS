
(function(){
  function myFunction() {
    var number1 = 10;
    var number2 = 20;
    console.log('Na função `myFunction`, o primeiro número é', number1);
    console.log('Na função `myFunction`, o segundo número é', number2);
    return number1 + number2;
  }
  myFunction();

  /*
      myFunction2();
  */
  function myFunction2() {
    var number1 = 10;
    var number2 = 20;
    var sum = function sum() {
      return number1 + number2;
    };
    console.log('A soma de 10 e 20 é igual a', sum ? sum() : undefined);
    return sum();
  }
  myFunction2();

  /*
      myFunction3();
  */
  function myFunction3() {
    var number1 = 40;
    var number2 = 50;
    console.log('A soma de 40 e 50 é igual a', sum());
    console.log('Na função myFunction3, number1 é igual a', number1);
    return sum();

    function sum() {
      return number1 + number2;
    };
  }
  myFunction3();

  function calculator(a, b) {
    return function(callback){
      return callback(a, b);
    }
  }

  var sum = calculator(4,6)

  console.log('O resultado da soma é:', sum(function(x, y){return x + y}));

  var subtraction = calculator(2, 2)
  var multiplication = calculator(5, 2)
  var division = calculator(4, 1)
  var mod = calculator(7, 3)

  console.log('O resultado da subtração é:', subtraction(function(x, y){return x - y}));

  console.log('O resultado da multiplicação é:', multiplication(function(x, y){return x * y}));

  console.log('O resultado da divisão é:', division(function(x, y){return x / y}));

  console.log('O resto da divisão é:', mod(function(x, y){return x % y}));
})();