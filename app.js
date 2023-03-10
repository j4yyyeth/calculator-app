const screen = document.querySelector('.screen');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const operationBtn = document.querySelectorAll('[data-operation]');
const numBtn = document.querySelectorAll('[data-num]');

let plusArr = [];
let minusArr = [];
let timesArr = [];
let divideArr = [];

function clearScreen() {
    screen.innerHTML = null;
}

function add() {
    plusArr.push(+(screen.innerHTML));
    clearScreen();
    // screen.innerHTML += plusArr[0] + 5;
    console.log(plusArr);
}

equals.onclick = () => {
    plusArr.push(+(screen.innerHTML));
    if (plusArr.length < 2) {
        plusArr.forEach((num)=>{
            +(num);
        });
        screen.innerHTML = plusArr[0] + plusArr[1];
    }
    screen.innerHTML = plusArr[0] + plusArr[1];
    console.log(screen.innerHTML);
    console.log(typeof plusArr[1]);
}

clear.onclick = () => {
    clearScreen();
    plusArr = [];
}

// operation buttons
operationBtn.forEach((btn)=>{
    btn.onclick = () => {
        if (btn.innerHTML === "+") {
            add();
        }
        if (btn.innerHTML === "-") {
            console.log("MINUS");
        }
        if (btn.innerHTML === "x") {
            console.log("TIMES");
        }
        if (btn.innerHTML === "÷") {
            console.log("DIVIDE");
        }
        if (btn.innerHTML === "%") {
            //
        }
        // if (btn.innerHTML === ".") {
        //     screen.innerHTML += ".";
        // }
    }
})

// number buttons
numBtn.forEach((btn)=> {
    clearScreen();
    btn.onclick = () => {
        if (btn.innerHTML === "0") {
            if (screen.innerHTML > 0) {
                screen.innerHTML += 0;
            }
        }
        if (btn.innerHTML === "1") {
            screen.innerHTML += 1;
        }
        if (btn.innerHTML === "2") {
            screen.innerHTML += 2;
        }
        if (btn.innerHTML === "3") {
            screen.innerHTML += 3;
        }
        if (btn.innerHTML === "4") {
            screen.innerHTML += 4;
        }
        if (btn.innerHTML === "5") {
            screen.innerHTML += 5;
        }
        if (btn.innerHTML === "6") {
            screen.innerHTML += 6;
        }
        if (btn.innerHTML === "7") {
            screen.innerHTML += 7;
        }
        if (btn.innerHTML === "8") {
            screen.innerHTML += 8;
        }
        if (btn.innerHTML === "9") {
            screen.innerHTML += 9;
        }
    }
})