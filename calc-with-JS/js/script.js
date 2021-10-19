const number = document.querySelectorAll(".btn");
const screen = document.getElementById("screen");
const sign = document.querySelectorAll(".sign");
let number1 = 0;
let operation = "";
let number2 = 0;
let content = '';


// start new fun
number.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (btn.innerText !== "=") {
            if (number1 === 0 && btn.classList.contains('num')) {
                screen.value += btn.innerText;
            } else if (btn.classList.contains('sign')) {
                number1 = screen.value;
                screen.value += btn.innerText;
                operation = btn.innerText;
            } else if (operation !== '' && btn.classList.contains('num')) {
                screen.innerText = '';
                content += btn.innerText;
                screen.value = content;
                number2 = content;
                console.log(number1, operation, number2);
            }
        } else {
            show();
            reset();
        }
    });
});
// end new fun


function calculation() {
    if (operation === "+") {
        return parseInt(number1) + parseInt(number2);
    } else if (operation === "-") {
        return parseInt(number1) - parseInt(number2);
    } else if (operation === "*") {
        return parseInt(number1) * parseInt(number2);
    } else if (operation === "/") {
        return parseInt(number1) / parseInt(number2);
    }
}

function reset() {
    number1 = 0;
    number2 = 0;
    operation = "";
    content = '';
}

function show() {
    screen.value = calculation();
}

const clear_btn = document.querySelector(".clear");
clear_btn.addEventListener("click", () => {
    screen.value = "";
});