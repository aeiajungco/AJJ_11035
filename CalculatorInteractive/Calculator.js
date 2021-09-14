var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var plus = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var answer = document.getElementById("answer");

plus.addEventListener("click", function () {
    var ans = parseInt(num1.value) + parseInt(num2.value);   
    answer.innerText = ans;
})

subtract.addEventListener("click", function () {
    var ans = parseInt(num1.value) - parseInt(num2.value);
    answer.innerText = ans;
})

multiply.addEventListener("click", function () {
    var ans = parseInt(num1.value) * parseInt(num2.value);
    answer.innerText = ans;
})

divide.addEventListener("click", function () {
    var ans = parseInt(num1.value) / parseInt(num2.value);
    answer.innerText = ans;
})

