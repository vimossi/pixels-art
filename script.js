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


// a partir daqui eu só consegui fazer observando o repositorio do Felipe Carvalho : https://github.com/tryber/sd-011-project-pixels-art/tree/felipe-carvalho-project-pixels-art

const selectableColors = document.querySelectorAll('.color');
function makeSelected(event) {
  const colorSelected = event;
  document.querySelectorAll('.selected')[0].className = 'color';
  colorSelected.target.className = 'color selected';
}
for (let index = 0; index < selectableColors.length; index += 1) {
  selectableColors[index].addEventListener('click', makeSelected);
}
// ele armazenou a seleção do .color e criou uma função evento, fazendo que todos com classe .selected index fossem atribuidas a 'color'. Depois criou um laço de repetição para que o evento funcionasse com todos da mesma classe. 
function colorindo(event) {
  const pixel = event.target;
  pixel.style.backgroundColor = document.querySelectorAll('.selected')[0].id;
}
const pixels = document.querySelectorAll('.pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', colorindo);
}
// estudo // vou refatorar com outro codigo 
