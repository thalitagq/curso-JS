function on(element, event, callback) {
  element.addEventListener(event, callback, false);
}
function off(element, event, callback) {
  element.removeEventListener(event, callback, false);
}

var $input = document.querySelector('[data-js="input"]');

on($input, 'paste', function() {
  alert('Ctrl+c Cntrl+v detected!');
});

function focus() {
  alert('Focus!');
  off($input, 'focus', focus);
}

on($input, 'focus', focus);

on($input, 'pointerover', function () {
  alert('Pointer over input!');
})

