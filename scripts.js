let valor = 0
let imc = valor.toFixed(1)
result.innerHTML = `${imc}`

let inputMassa = document.getElementById("massa")
let inputAltura = document.getElementById("altura")
let btnCalc = document.querySelector(".btn")
let result = document.querySelector(".IMC")
let classificacao = document.querySelector(".resultt")

function update(calc) {
    imc = calc
    result.innerHTML = `${imc.toFixed(1)}`
    if (imc < 18.5) {
        classificacao.innerHTML = `<p style="color: yellow;" class="classificacao">Baixo peso</p>`
        console.log(`${imc.toFixed(1)} você é Baixo peso`)
    } else if (imc >= 18.5 && imc < 24.99) {
        classificacao.innerHTML = `<p style="color: green;" class="classificacao">Normal</p>`
        console.log(`${imc.toFixed(1)} Normal`)
    } else if (imc >= 25 && imc < 29.99) {
        classificacao.innerHTML = `<p style="color: orange;" class="classificacao">Sobrepeso</p>`
        console.log(`${imc.toFixed(1)} Sobrepeso`)
    } else {
        classificacao.innerHTML = `<p style="color: red;" class="classificacao">Obesidade</p>`
        console.log(`${imc.toFixed(1)} Obesidade`)
    }
}

btnCalc.addEventListener("click", () => {
    let calc = inputMassa.value / (inputAltura.value * inputAltura.value)

    if (inputMassa.value > 0 && inputAltura.value > 0) {
        let calc = inputMassa.value / (inputAltura.value * inputAltura.value);
        imc = calc;
        update(calc);
    } else {
        alert("Digite valores válidos para massa e altura.");
    }
})





