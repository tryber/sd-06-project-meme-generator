let text = document.getElementById('text-input');
text.addEventListener('input',function(){
    let note = document.getElementById('meme-text');
    note.innerHTML = text.value;
});

let image = function (image_input) {
    let output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(image_input.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src)
    }
};