const divConvertedDecimalElement = document.getElementById('convertedDecimal');
const divConvertedBinaryElement = document.getElementById('convertedBinary');


function convertBinaryToDecimal() {
  let binary = document.getElementById('binary').value;
  let binarySplit = binary.split('').map(x=>+x).reverse();
  let decimal = binarySplit.reduce((total, next, index) => {
    return (total  +  ((2  **  index)  *  next))
  });

  renderDecimal(decimal);
}

function renderDecimal(decimal) {
  divConvertedDecimalElement.innerHTML = '';
  let convertedDecimalElement = document.createElement('h1');
  let convertedDecimalText = document.createTextNode(decimal);

  convertedDecimalElement.appendChild(convertedDecimalText);
  divConvertedDecimalElement.appendChild(convertedDecimalElement);
}

document.getElementById('binary')
    .addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      convertBinaryToDecimal();
    }
});

function convertDecimalToBinary() {
  let decimal = document.getElementById('decimal').value;
  let binary = [];
  if(decimal === 0)
    return renderBinary(decimal);
  while(decimal>1)  {
    binary.push(decimal%2);
    decimal = Math.floor(decimal/2);
  }
  binary.push(decimal);
  binary.reverse();
  renderBinary(binary.join(''));
}

function renderBinary(binary) {
  divConvertedBinaryElement.innerHTML = '';
  let convertedBinaryElement = document.createElement('h1');
  let convertedBinaryText = document.createTextNode(binary);

  convertedBinaryElement.appendChild(convertedBinaryText);
  divConvertedBinaryElement.appendChild(convertedBinaryElement);
}

document.getElementById('decimal')
    .addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      convertDecimalToBinary();
    }
});
