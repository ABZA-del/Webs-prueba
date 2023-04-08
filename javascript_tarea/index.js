const exercise = document.getElementById("cuadro_texto")
const btn_calcular = document.getElementById("btn_result")
const resultado = document.getElementById("resultado")
let numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let operations = ["+", "-", "*", "/"]
btn_calcular.addEventListener("click", calcular)


calcular()

function calcular() {
    let num1 = "0"
    let num2 = "0"
    let operator = ""
    let result = ""
    if (exercise != "") {
        for (let i of exercise.value) {
            if (operations.includes(i) == true && operator == "") { operator += i }
            else if (numeros.includes(i) == true && operator == "") { num1 += i }
            else if (numeros.includes(i) == true && operator != "") { num2 += i }

        }
    }
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (num1 && num2 != NaN) {
        switch (operator) {
            case "+":
                result = num1 + num2
                break
            case "-":
                result = num1 - num2
                break
            case "/":
                result = num1 / num2
                break
            case "*":
                result = num1 * num2
                break
        }
        resultado.innerText = "El resultado es " + result
    }







}




