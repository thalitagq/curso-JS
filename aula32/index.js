(function (DOM, doc) {
  'use strict';
  /*
  Já temos as funcionalidades de adicionar e remover um carro. Agora, vamos persistir esses dados, 
  salvando-os temporariamente na memória de um servidor.
  Nesse diretório do `challenge-32` tem uma pasta `server`. É um servidor simples, em NodeJS, para 
  que possamos utilizar para salvar as informações dos nossos carros.
  Para utilizá-lo, você vai precisar fazer o seguinte:
  - Via terminal, acesse o diretório `server`;
  - execute o comando `npm install` para instalar as dependências;
  - execute `node app.js` para iniciar o servidor.
  Ele irá ser executado na porta 3000, que pode ser acessada via browser no endereço: 
  `http://localhost:3000`
  O seu projeto não precisa estar rodando junto com o servidor. Ele pode estar em outra porta.
  As mudanças que você irá precisar fazer no seu projeto são:
  - Para listar os carros cadastrados ao carregar o seu projeto, faça um request GET no endereço
  `http://localhost:3000/car`
  - Para cadastrar um novo carro, faça um POST no endereço `http://localhost:3000/car`, enviando
  os seguintes campos:
    - `image` com a URL da imagem do carro;
    - `brandModel`, com a marca e modelo do carro;
    - `year`, com o ano do carro;
    - `plate`, com a placa do carro;
    - `color`, com a cor do carro.
  Após enviar o POST, faça um GET no `server` e atualize a tabela para mostrar o novo carro cadastrado.
  Crie uma branch `challenge-32` no seu projeto, envie um pull request lá e cole nesse arquivo a URL
  do pull request.
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
        this.getCars();
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
        app().saveCar(car);
      },

      populateCarInfo: function populateCarInfo(car){
        var newCar = doc.createElement('tr');
        for (const key in car) {
          var td = doc.createElement('td');
          if (key === 'image') {
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
      },

      getCars: function getCars() {
        var get = new XMLHttpRequest();
        get.open('GET', 'http://localhost:3000/car')
        get.send();
        get.addEventListener('readystatechange' , function () {
          if (get.readyState === 4) {
            var resp = JSON.parse(get.response)
            if (resp.length > 0) {
              app().populateTable(resp);
            }
          }
        })
      },

      saveCar: function saveCar(car) {
        var post = new XMLHttpRequest();
        post.open('POST', 'http://localhost:3000/car');
        post.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var sendStr = ''
        for (const key in car) {
          sendStr += key+'='+car[key]+'&';
        }
        post.send(sendStr);

        post.onreadystatechange = function () {
          if (post.readyState === 4) {
            console.log(post.responseText);
          }
        }
      },

      populateTable: function populateTable(cars) {
        cars.forEach(function (car) {
          app().addNewCar(car)
        })
      }
    }
  }

  app().init();

})(window.DOM, document);