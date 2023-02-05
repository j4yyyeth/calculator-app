const screen = document.querySelector('.screen');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

equals.onclick = () => {
    console.log("=");
}

clear.onclick = () => {
    console.log("Clear!");
    screen.innerHTML = 0;
}