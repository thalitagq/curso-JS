(function (DOM, doc) {
  'use strict';
  
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
        var newCar = this.populateCarInfo(car)
        $table.get()[0].appendChild(newCar);
        this.resetInputs();
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
          return newCar.appendChild(td);
        }
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