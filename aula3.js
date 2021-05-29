var x = {};

var pessoa = {
  nome: 'Thalita', 
  sobrenome: 'Gonçalves', 
  sexo: 'Feminino', 
  idade: 27,
  altura: 1.59,
  peso: 48,
  andando: false,
  caminhouQuantosMetros: 0
}

pessoa.fazerAniversario = function () {
  pessoa.idade++;
}

pessoa.andar = function(metrosCaminhados){
  pessoa.caminhouQuantosMetros += metrosCaminhados;
  pessoa.andando = true;
}

pessoa.parar = function() {
  pessoa.andando = false;
}

pessoa.nomeCompleto = function () {
  return "Olá! Meu nome é " + pessoa.nome + " " + pessoa.sobrenome + "!";
}

pessoa.mostrarIdade = function() {
  return "Olá, eu tenho " + pessoa.idade + " anos!";
}

pessoa.mostrarPeso = function () {
  return "Eu peso " + pessoa.peso + 'Kg';
}

pessoa.mostrarAltura = function() {
  return "Minha altura é " + pessoa.altura + " m"
}

pessoa.nomeCompleto(); //"Olá! Meu nome é Thalita Gonçalves!

pessoa.mostrarIdade();//Olá, eu tenho 27 anos!

pessoa.mostrarPeso();//Eu peso 48kg

pessoa.mostrarAltura();// Minha altura é 1.59

pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

pessoa.mostrarIdade();//Olá, eu tenho 30 anos!

pessoa.andar(10);
pessoa.andar(6);
pessoa.andar(18);

pessoa.andando;//true

pessoa.parar()

pessoa.andando;//false

pessoa.caminhouQuantosMetros;//34

pessoa.apresentacao = function () {
  var artigo = 'o'
  var idadeAnos = 'anos'
  var distancia = 'metros'

  if (pessoa.sexo.toLocaleLowerCase() === 'feminino'){
    artigo = 'a'
  }
  if(pessoa.idade === 1){
    idadeAnos = 'ano'
  }
  if(pessoa.caminhouQuantosMetros === 1){
    distancia = 'metro'
  }
  return "Olá, eu sou " + artigo + ' ' + pessoa.nome + " " + pessoa.sobrenome + ", tenho " + pessoa.idade + " " + idadeAnos + ", "+ pessoa.altura + ", meu peso é " + pessoa.altura + " e, só hoje, eu já caminhei " + pessoa.caminhouQuantosMetros + " "+ distancia + "!"

}

pessoa.apresentacao()