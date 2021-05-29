(function (doc) {

  'use strict';
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.
  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.
  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false
  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */
  function DOM(element) {
    this.elements = document.querySelectorAll(element);
  }

  DOM.prototype.on = function on(event, callback) {
    this.elements.forEach(function (element) {
      element.addEventListener(event, callback, false);
    });
  }

  DOM.prototype.off = function off(event, callback) {
    this.elements.forEach(function (element) {
      element.removeEventListener(event, callback, false);
    });
  }

  DOM.prototype.get = function get() {
    return this.elements;
  }

  DOM.prototype.forEach = function forEach(callback) {
    return Array.prototype.forEach.call(this.elements, callback);
  }

  DOM.prototype.map = function map(callback) {
    return Array.prototype.map.call(this.elements, callback);
  }

  DOM.prototype.filter = function filter(callback) {
    return Array.prototype.filter.call(this.elements, callback);
  }

  DOM.prototype.reduce = function reduce(callback) {
    return Array.prototype.reduce.call(this.elements, callback);
  }

  DOM.prototype.reduceRight = function reduceRight(callback) {
    return Array.prototype.reduceRight.call(this.elements, callback);
  }

  DOM.prototype.every = function every(callback) {
    return Array.prototype.every.call(this.elements, callback);
  }

  DOM.prototype.some = function some(callback) {
    return Array.prototype.some.call(this.elements, callback);
  }

  DOM.prototype.typeOf = function typeOf(element) {
    return Object.prototype.toString.call(element).slice(8, -1)
  }

  DOM.prototype.isArray = function isArray(element) {
    return this.typeOf(element) === 'Array';
  }

  DOM.prototype.isFunction = function isFunction(element) {
    return this.typeOf(element) === 'Function';
  }

  DOM.prototype.isObject = function isObject(element) {
    return this.typeOf(element) === 'Object';
  }

  DOM.prototype.isNumber = function isNumber(element) {
    return this.typeOf(element) === 'Number';
  }

  DOM.prototype.isString = function isString(element) {
    return this.typeOf(element) === 'String';
  }
  
  DOM.prototype.isBoolean = function isBoolean(element) {
    return this.typeOf(element) === 'Boolean';
  }
  
  DOM.prototype.isNull = function isNull(element) {
    return this.typeOf(element) === 'Null' ? true : undefined;
  }

})(document);
