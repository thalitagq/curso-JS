(function (DOM, doc) {
  'use strict';
  /*
  Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
  coluna na tabela, com um botão de remover.
  Ao clicar nesse botão, a linha da tabela deve ser removida.
  Faça um pull request no seu repositório, na branch `challenge-31`, e cole
  o link do pull request no `console.log` abaixo.
  Faça um pull request, também com a branch `challenge-31`, mas no repositório
  do curso, para colar o link do pull request do seu repo.
  */
  
  function app() {
    var $form = new DOM('[data-js="form"]');
    var $table = new DOM('[data-js="table-body"]');
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

      addNewCar: function addNewCar(car) {
        var newCar = this.populateCarInfo(car)
        var button = doc.createElement('td')
        button.innerHTML = '<button data-js="remove">Remover</button>'
        newCar.insertAdjacentElement('beforeend', button)
        $table.get()[0].appendChild(newCar);
        this.resetInputs();
        this.handleRemoveCar();
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


      populateCarInfo: function populateCarInfo(car){
        var newCar = doc.createElement('tr');
        for (const key in car) {
          var td = doc.createElement('td');
          if (key === 'img') {
            var img = doc.createElement('img');
            img.src = car[key];
            td.appendChild(img);
          } else {
            td.appendChild(doc.createTextNode(car[key]));
          }
          newCar.appendChild(td);
        }
        return newCar;
      },

      resetInputs: function resetInput() {
        Array.prototype.forEach.call(inputs, function (item) {
          if (item.value) {
            item.value = '';
          }
        });
      },

      handleRemoveCar: function handleRemoveCar() {
        var buttons = new DOM('[data-js="remove"]');
        buttons.forEach(function (item) {
          item.addEventListener('click', function () {
            item.parentElement.parentElement.replaceWith('')
          });
        })
      }

    }
  }

  app().init();

})(window.DOM, document);