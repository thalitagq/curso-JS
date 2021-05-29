
var championship = 'Campeonato Cearense';
console.log(championship);

var teams = ['Ferroviário', 'Fortaleza', 'Atlético-CE', 'Ceará SC', 'Pacajus'];

console.log('Times que estão participando do campeonato:', teams);

function showTeamPosition(posicao){
  if(posicao <= 5 && posicao > 0){
    return 'O time que está em ' + posicao + 'º' + ' lugar é o ' + team[posicao-1] + '.'; 
  }

  return 'Não temos a informação do time que está nessa posição.';
}

showTeamPosition(1)
showTeamPosition(2)
showTeamPosition(3)
showTeamPosition(4)
showTeamPosition(1)
showTeamPosition(6)

var counter = 20 
while(counter <= 30){
  console.log(counter);
  counter++;
}

function convertToHex(cor){
  var frase = 'O hexadecimal para a cor ' + cor + ' é ';
  switch (cor) {
    case 'red':
      console.log(frase + '#ff0000');
      break;
    case 'black':
      console.log(frase + '#000000');
      break;
    case 'white':
      console.log(frase + '#ffffff');
      break;
    case 'blue':
      console.log(frase + '#0000ff');
      break;
    case 'green':
      console.log(frase + '#00ff00');
      break;
    default: 
      console.log('Não temos o equivalente hexadecimal para ' + cor);
      break;
  }
}

convertToHex('red');
convertToHex('blue');
convertToHex('green');
convertToHex('yellow');
convertToHex('black');
convertToHex('white');
convertToHex('purple');
convertToHex('cyan');
