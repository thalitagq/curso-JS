var array = [1,'Javascript', NaN, 10, true];

function retornaArray(param){
  return param;
}

console.log(retornaArray()[1]);

function retornaValorIndice(arr, numero) {
  return arr[numero];
}

var novoArray = ['string', 1, false, {a: 1}, [1,2]];

retornaValorIndice(novoArray, 0);
retornaValorIndice(novoArray, 1);
retornaValorIndice(novoArray, 2);
retornaValorIndice(novoArray, 3);
retornaValorIndice(novoArray, 4);

function book(nomeLivro){
  var listaLivros = {
    livro1: {
      quantidadePaginas: 1000,
      autor: 'G.R.R Martin',
      editora: 'Editora 1'
    },
    livro2: {
      quantidadePaginas: 300,
      autor: 'J.K . Rolling',
      editora: 'Editora 2'
    },
    livro3: {
      quantidadePaginas: 1000,
      autor: 'Victor Hugo',
      editora: 'Editora 3'
    }
  };
 
  if(!nomeLivro){
    return listaLivros;
  }

  return { nomeLivro: nomeLivro, info: listaLivros[nomeLivro] };
}

book();

var livro = book('livro1');
"O livro " + livro.nomeLivro + " tem " + livro.info.quantidadePaginas + " páginas!";

"O autor do livro " + livro.nomeLivro + " é " + livro.info.autor;

"O livro " + livro.nomeLivro + " foi publicado pela editora " + livro.info.editora + "."