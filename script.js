const paletas = document.getElementById("color-palete").style.display = "inline-block";
const color = document.getElementsByClassName(".color")
color.style.border = "1px solid black";
color.style.width = "40px";
color.style.height = "40px";




// insere cores
const createColors = document.querySelectorAll('.color');
const selectedColor = ['black', 'yellow', 'brown', 'green'];

for (let index in selectedColor) {
  createColors[index].style.backgroundColor = selectedColor[index];
}
createColors[0].classList.add("selected");
