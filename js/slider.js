let mediaSmPhone = 500;
let mediaPhone = 576;
let mediaTablet = 768;
let mediaNotebook = 992;
let mediaDesctop = 1200;

let windowInnerWidth = window.innerWidth

let slider = document.querySelector('.product-slider__box')

if(windowInnerWidth <= mediaNotebook ){
    console.log('its desc')
    slider.setAttribute( 'slides-per-view', 2 );
}

if(windowInnerWidth <= mediaPhone ){
    console.log('its desc')
    slider.setAttribute( 'slides-per-view', 1 );
}