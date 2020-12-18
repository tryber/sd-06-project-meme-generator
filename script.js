/** @format */

function loadImage(event) {
  let output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
}

function loadPreLoadImage(srcURL) {
  document.getElementById('meme-image').src = srcURL;
}

function memeChangeBorder(borderType) {
  document.getElementById('meme-image-container').className = `border-${borderType}`;
}

const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const fireBtn = document.getElementById('fire');
const waterBtn = document.getElementById('water');
const earthBtn = document.getElementById('earth');

textInput.addEventListener('input', memeTextInsert);
fireBtn.addEventListener('click', () => memeChangeBorder('fire'));
waterBtn.addEventListener('click', () => memeChangeBorder('water'));
earthBtn.addEventListener('click', () => memeChangeBorder('earth'));

function memeTextInsert() {
  memeText.innerHTML = textInput.value;
}
