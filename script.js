let text = document.getElementById('text-input');
text.addEventListener('input',function(){
    let note = document.getElementById('meme-text');
    note.innerHTML = text.value;
});
