function soma(a, b){
  return a + b;
}
var x = soma(4,8) + 5;
17
var y;

function adicionaValor(){
  y = 10;
  return 'O valor da variável agora é' + y;
}
adicionaValor();
/* O retorno da função é O valor da variável agora é 10*/

function f(a, b ,c){
  if (!a || !b || !c) {
    return 'Preencha todos os valores corretamente!';
  }
  else{
    return (a * b * c) + 2;
  }
}

f(2,5);
//O valor retornado é Preencha todos os valores corretamente!

f(2, 5, 7);
//O valor retornado é 72

function f2(a, b, c){
  if (a && !b && !c) {
    return a;
  }
  else if(a && b && !c){
    return a + b;
  }
  else if(a && b && c){
    return (a + b) / c;
  }
  else if (!a && !b && !c){
    return false;
  }
  else{
    null;
  }
}

f2()//false
f2(2,3)//5
f2(1,6,3)//2.3333333333333335
