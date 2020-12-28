const products = document.querySelector(".products");
const clip = document.querySelector(".clip-path");
//console.log(clip);


function imageChange(something) {
     document.querySelector(".pepsi").src = something;
}

function changeClipColor(color) {
    const circle = document.querySelector( ".clip-path");
    circle.style.background = color;
}

function changeButtonColor(color) {
    const button = document.querySelector( ".products");
    button.style.background = color;
}

// function changeBackground(color) {
//     const container = document.querySelector('.container');
//     container.style.background = color;
// }