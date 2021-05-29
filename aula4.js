var isTruthy = function (x){
  return !!x;
};

isTruthy(undefined);
isTruthy(null);
isTruthy(0);
isTruthy(-0);
isTruthy('');
isTruthy(NaN);
isTruthy(false);

isTruthy('a');
isTruthy(1);
isTruthy(true);
isTruthy([]);
isTruthy({});
isTruthy('0');
isTruthy('undefined');
isTruthy(1.2);
isTruthy(' ');
isTruthy(-2);

var carro = {
  marca: 'Fiat',
  modelo: 'Mobi',
  placa: 'Err4004',
  ano: '2021',
  cor: 'preto',
  quantasPortas: '4',
  assentos: 5,
  quantidadePessoas: 0
};

carro.mudarCor = function(novaCor){
  carro.cor = novaCor;
};

carro.obterCor = function() {
  return carro.cor;
};

carro.obterModelo = function () {
  return carro.modelo;
};

carro.obterMarca = function () {
  return carro.marca;
};

carro.obterMarcaModelo = function () {
  return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModelo();
};

carro.adicionarPassageiro = function(quantidadePassageiros){
  var p = 'pessoas';
  if (carro.quantidadePessoas === carro.assentos && quantidadePassageiros > 0) {
    return "O carro já está lotado!";
  }
  else if ((carro.assentos - carro.quantidadePessoas) < quantidadePassageiros) {
    if ((carro.assentos - carro.quantidadePessoas) === 1) {
      p = 'pessoa';
    }
    return "Só cabem mais " + (carro.assentos - carro.quantidadePessoas) + " " + p + "!";
  }

  if (quantidadePassageiros < 0 && (carro.quantidadePessoas + quantidadePassageiros < 0) ) {
    carro.quantidadePessoas = 0;
  }
  else{
    carro.quantidadePessoas += quantidadePassageiros;
  }
  return "Já temos " + carro.quantidadePessoas + " pessoas no carro!";
}

carro.obterCor();//preto

carro.mudarCor('vermelho');

carro.obterCor();//vermelho

carro.mudarCor('verde musgo');

carro.obterCor();//verde musgo

carro.obterMarcaModelo();

carro.adicionarPassageiro(2);

carro.adicionarPassageiro(4);

carro.adicionarPassageiro(3);

carro.adicionarPassageiro(-4);

carro.adicionarPassageiro(10);

carro.quantidadePessoas;//1
