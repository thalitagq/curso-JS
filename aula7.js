
var array = ['string', 1, {key: 'value'}, function(){}, false]

function addItem(item){
  return array.push(item);
}

addItem([true, 'anotherString', 2]);
console.log(array);

console.log('O segundo elemento do segundo array é ' + array[array.length-1][1])

console.log('O primeiro array tem ' + array.length + ' itens.');

console.log('O segundo array tem ' + array[array.length - 1].length + ' itens.');

console.log('Números pares entre 10 e 20:');
var num = 10;
while (num <= 20) {
  console.log(num);
  num++;
}

console.log('Números ímpares entre 10 e 20:');
var num = 10;
while(num <= 20){
  var x = num % 2;
  x !== 0 ? console.log(num) : '';
  num++;
}

console.log('Números pares entre 100 e 120:');
for (let index = 100; index <= 120 ; index++) {
  index % 2 === 0 ? console.log(index) : '';
}

console.log('Números ímpares entre 111 e 125:');
for (let index = 111; index <= 125; index++) {
  index % 2 !== 0 ? console.log(index) : '';
}