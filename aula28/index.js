(function (doc) {
  'use strict';

  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */


  var $input = doc.querySelector('[data-id="input"]');
  var $submitButton = doc.querySelector('[data-id="submit"]');
  var $status = doc.querySelector('[data-id="status"]');
  var $addressInfo = doc.querySelectorAll('[data-js="address"]');

  $submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    sendReq($input.value);
  }, false);
  
  var ajax = new XMLHttpRequest();
  function sendReq(cep) {
    var url = 'https://viacep.com.br/ws/' + transformCep(cep) + '/json/';
    ajax.open('GET', url);
    ajax.send();
  }

  ajax.addEventListener('readystatechange', function () {
    setMessage();
  })

  function transformCep(cep) {
    if(!isCepValid(cep))
      return alert('Cep inválido!');  
    var regexCep = /(\d+)/g;
    var cepStr = cep.match(regexCep).join('');
    if (!has8numbers(cepStr))
      return alert('Cep deve ter 8 números!');
    return cepStr;
  }

  function has8numbers(cepStr) {
    if(cepStr.length !== 8)
      return false;
    return true;  
  }

  function isCepValid(cep) {
    if(cep.length === 0)
      return false;
    return true;  
  }

  function setMessage() {
    var message = '';
    if (ajax.readyState === 0) {
      message = 'Buscando informções para o cep ' + $input.value;
    }
    if (ajax.readyState === 4) {
      var resp = JSON.parse(ajax.response)
      if (!resp.erro) {
        populateInfo(resp);
        message = 'Endereço referente ao CEP: ' + $input.value;
      }
      else{
        clearInputs();
        message = 'Não encontramos o endereço para o CEP ' + $input.value;
      }
    }
    $status.value = message;
  }

  function populateInfo(response) {
    var keys = Object.keys(response);
    $addressInfo.forEach(function (item) {
      keys.forEach(function (key) {
        if (item.dataset.id === key) {
          item.value = response[key];
        }
      })
    })
  }

  function clearInputs(params) {
    $addressInfo.forEach(function (item) {
      item.value = ''
    })
  }

})(document);