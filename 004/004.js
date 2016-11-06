var entered = [];
var total = 0;

document.getElementById('clear').onclick = function () {
  document.getElementById('screen').value = "";
};

document.getElementById('allClear').onclick = function () {
  document.getElementById('screen').value = "";
};

document.getElementById('one').onclick = function () {
  entered.push(1);
  console.log(entered);
  document.getElementById('screen').value = '1';
};

document.getElementById('two').onclick = function () {
  document.getElementById('screen').value = '2';
};

document.getElementById('three').onclick = function () {
  document.getElementById('screen').value = '3';
};

document.getElementById('four').onclick = function () {
  document.getElementById('screen').value = '4';
};

document.getElementById('five').onclick = function () {
  document.getElementById('screen').value = '5';
};

document.getElementById('six').onclick = function () {
  document.getElementById('screen').value = '6';
};

document.getElementById('seven').onclick = function () {
  document.getElementById('screen').value = '7';
};

document.getElementById('eight').onclick = function () {
  document.getElementById('screen').value = '8';
};

document.getElementById('nine').onclick = function () {
  document.getElementById('screen').value = '9';
};

document.getElementById('zero').onclick = function () {
  document.getElementById('screen').value = '0';
};
