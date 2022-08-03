const button = document.querySelector('.user');
const popup = document.querySelector('.profile')
const closepop = document.querySelector('.close-up')
button.addEventListener('click', ()=>{
    popup.style.display = 'block';
});
closepop.addEventListener('click',()=>{
    popup.style.display = 'none';
})