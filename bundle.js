"use strict";

var divConvertedDecimalElement = document.getElementById('convertedDecimal');
var divConvertedBinaryElement = document.getElementById('convertedBinary');

function convertBinaryToDecimal() {
  var binary = document.getElementById('binary').value;
  var binarySplit = binary.split('').map(function (x) {
    return +x;
  }).reverse();
  var decimal = binarySplit.reduce(function (total, next, index) {
    return total + Math.pow(2, index) * next;
  });
  renderDecimal(decimal);
}

function renderDecimal(decimal) {
  divConvertedDecimalElement.innerHTML = '';
  var convertedDecimalElement = document.createElement('h1');
  var convertedDecimalText = document.createTextNode(decimal);
  convertedDecimalElement.appendChild(convertedDecimalText);
  divConvertedDecimalElement.appendChild(convertedDecimalElement);
}

document.getElementById('binary').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    convertBinaryToDecimal();
  }
});

function convertDecimalToBinary() {
  var decimal = document.getElementById('decimal').value;
  var binary = [];
  if (decimal === 0) return renderBinary(decimal);

  while (decimal > 1) {
    binary.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  binary.push(decimal);
  binary.reverse();
  renderBinary(binary.join(''));
}

function renderBinary(binary) {
  divConvertedBinaryElement.innerHTML = '';
  var convertedBinaryElement = document.createElement('h1');
  var convertedBinaryText = document.createTextNode(binary);
  convertedBinaryElement.appendChild(convertedBinaryText);
  divConvertedBinaryElement.appendChild(convertedBinaryElement);
}

document.getElementById('decimal').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    convertDecimalToBinary();
  }
});
