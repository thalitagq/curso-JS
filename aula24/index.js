(function (win, doc) {
  'use strict';
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:
  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;
  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */
  var $numbers = doc.querySelectorAll('button');
  var $input = doc.querySelector('[data-js="input"]');
  $input.value = 0;
  $numbers.forEach(function (item) {
    return item.addEventListener('click', function (event) {
      insert(item.dataset.js);
    })
  })

  function insert(item) {
    var addItem = '';
    switch (item) {
      case 'add':
        addItem = '+';
        break;
      case 'sub':
        addItem = '-';
        break;
      case 'mult':
        addItem = 'x';
        break;
      case 'div':
        addItem = '÷';
        break;
      case 'reset':
        reset();
        break;
      case 'result':
        evaluate();
        break;
      default:
        addItem = item;
        break;
    }
    checkInsert(addItem);
  }

  function isNumber(item) {
    return /\d/.test(item);
  }

  function reset() {
    $input.value = 0;
  }

  function removeLast() {
    $input.value = $input.value.slice(0, $input.value.length - 1);
  }

  function getLastValue(){
    return $input.value.substring($input.value.length - 1);
  }

  function checkInsert(item){
    if ($input.value.length === 1 ) {
      if (getLastValue() === '0') {
        return $input.value = item;
      }
    }

    if (!isNumber(getLastValue()) && !isNumber(item)) {
      if (getLastValue() === item) {
        return
      }
      removeLast();
    }

    $input.value += item;
  }

  function evaluate() {

    if (!isNumber(getLastValue())) {
      removeLast();
    }

    var multExp = /((?:[0-9]*[.])?[0-9]+)x((?:[0-9]*[.])?[0-9]+)/g;
    var divExp = /((?:[0-9]*[.])?[0-9]+)÷((?:[0-9]*[.])?[0-9]+)/g;
    var addExp = /((?:[0-9]*[.])?[0-9]+)\+((?:[0-9]*[.])?[0-9]+)/g;
    var subAdd = /((?:[0-9]*[.])?[0-9]+)-((?:[0-9]*[.])?[0-9]+)/g;

    $input.value = $input.value.replace(multExp, function (exp, num1, num2) {
      return Number(num1) * Number(num2);
    }).replace(divExp, function (exp, num1, num2) {
      return Number(num1) / Number(num2);
    }).replace(addExp, function (exp, num1, num2) {
      return Number(num1) + Number(num2);
    }).replace(subAdd, function (exp, num1, num2) {
      return Number(num1) - Number(num2);
    });
  }

})(window, document);