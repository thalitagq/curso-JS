(function (DOM, doc) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"
  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.
  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.
  Essas informações devem ser adicionadas no HTML via Ajax.
  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.
  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */
  function app() {
    var $form = new DOM('[data-js="form"]');
    var inputs = $form.get()[0].children;

    return {
      init: function init() {
        this.getCompanyInfo();
        this.initEvents();
      },

      setCompanyInfo: function setCompanyInfo(info) {
        var $companyName = new DOM('[data-js="company-name"]');
        var $companyPhone = new DOM('[data-js="company-phone"]');
        $companyName.get()[0].textContent = info.name;
        $companyPhone.get()[0].textContent = info.phone;
      },

      initEvents: function initEvents() {
        var $submitButton = new DOM('[data-js="submit"]');
        $submitButton.on('click', this.handleSubmit);
      },

      getCompanyInfo: function getCompanyInfo() {
        var ajax = new XMLHttpRequest();
        ajax = new XMLHttpRequest();
        ajax.open('GET', './company.json');
        ajax.send();
        ajax.addEventListener('readystatechange', function () {
          if (ajax.readyState === 4)
            app().setCompanyInfo(JSON.parse(ajax.response))
        });
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var car = {};
        Array.prototype.forEach.call(inputs, function (item) {
          if (item.value) {
            car[item.dataset.js] = item.value;
          }
        });
        if (Object.keys(car).length !== 5) {
          return alert('Preencha todos os campos!');
        }
        app().addNewCar(car);
      },

      addNewCar: function addNewCar(car) {
        var $table = new DOM('[data-js="table-body"]');
        var newCar = doc.createElement('tr');
        for (const key in car) {
          var td = doc.createElement('td');
          if(key === 'img'){
            var img = doc.createElement('img');
            img.src = car[key];
            td.appendChild(img); 
          }
          else{
            td.appendChild(doc.createTextNode(car[key]));
          }
          newCar.appendChild(td);
        }
        $table.get()[0].appendChild(newCar);
        this.resetInputs();
      },

      resetInputs: function resetInput() {
        Array.prototype.forEach.call(inputs, function (item) {
          if (item.value) {
            item.value = '';
          }
        });
      }
    }
  }
   
  app().init();

})(window.DOM, document);