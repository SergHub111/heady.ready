let burgerOpenBtn = document.querySelector('.header__burger-btn-open');
let burgerBox = document.querySelector('.header__links');
let burgerItems = document.querySelectorAll('.header__links-item');
let elemBody = document.querySelector('body');


// burgerOpenBtn.addEventListener('click', function(){
//     burgerBox.classList.toggle('active');
//     burgerOpenBtn.classList.toggle('active');
// });

burgerOpenBtn.onclick = function() {
    burgerBox.classList.toggle('active');
    burgerOpenBtn.classList.toggle('active');
    elemBody.classList.toggle('scroll-none')
}

burgerItems.forEach(function(elem){
    elem.onclick = function() {
        burgerBox.classList.toggle('active');
        burgerOpenBtn.classList.toggle('active');
        elemBody.classList.toggle('scroll-none')
    }
})





