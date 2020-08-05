let text = document.getElementById('text-input');
text.addEventListener('input',function(){
    let note = document.getElementById('meme-text');
    note.innerHTML = text.value;
});


const photoInsert = document.getElementById('meme-insert')
const memeImage = document.getElementById('meme-image')


photoInsert.addEventListener('change',function(){
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.style.maxWidth ='100%';
    memeImage.onload = function(){
        URL.revokeObjectURL(memeImage.src)
    }
});
