let quadro = document.getElementById("pixel-board");

function square(num) {
  for(let index = 0; index < num; index += 1) {
    let linha = document.createElement('div');
    linha.className = 'pixel';
    quadro.appendChild(linha);
    
  }
}
square(5);
