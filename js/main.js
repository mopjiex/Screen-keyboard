const textarea = document.querySelector('.keyboard__textarea');
const key = document.querySelectorAll('.keyboard__key');
const caps = document.querySelector('.key-caps');

key.forEach(item => {
    item.addEventListener('click', ()=> {
        if(item.classList.contains('key-caps')) {
            item.classList.toggle('active');
        } else {
            if(caps.classList.contains('active')) {
                textarea.value += item.dataset.key.toUpperCase()
            } else {
                textarea.value += item.dataset.key;
            }
        }
    })
})