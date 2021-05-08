const quadro = document.getElementById('pixel-board');
function square(num) {
  for (let index = 0; index < num; index += 1) {
    const linha = document.createElement('div');
    quadro.appendChild(linha);
  for (let index = 0; index < num; index +=1) {
  const coluna = document.createElement('div');
  coluna.className = 'pixel';
  quadro.appendChild(coluna);
  }
}
}
square(5);

const teste = 0;
