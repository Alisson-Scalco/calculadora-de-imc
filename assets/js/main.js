// Capturar evento de submit do formulário
const form = document.querySelector('#formulario')



form.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputPeso = document.querySelector('#peso')
    const inputAltura = document.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    if (!peso) {
        InformarResultado('Digite um <b>Peso</b> válido', false)
        return
    }
    if (!altura) {
        InformarResultado('Digite uma <b>Altura</b> válida', false)
        return
    }

    const imc = getImc(peso, altura)
    const nivel = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivel}).`;


    InformarResultado(msg, true)
    getTBNivelImc(imc)

})


getTBNivelImc = (imc) => {
    const pnivel1 = document.getElementById('nvl1')
    const pnivel1R = document.getElementById('nvl1R')
    const pnivel2 = document.getElementById('nvl2')
    const pnivel2R = document.getElementById('nvl2R')
    const pnivel3 = document.getElementById('nvl3')
    const pnivel3R = document.getElementById('nvl3R')
    const pnivel4 = document.getElementById('nvl4')
    const pnivel4R = document.getElementById('nvl4R')
    const pnivel5 = document.getElementById('nvl5')
    const pnivel5R = document.getElementById('nvl5R')
    const pnivel6 = document.getElementById('nvl6')
    const pnivel6R = document.getElementById('nvl6R')


    if (imc < 18.5) {
        pnivel1.classList.add('select-tb-resultado')
        pnivel1R.classList.add('select-tb-resultado')
    }
    if (imc >= 18.5 && imc <= 24.9) {
        pnivel2.classList.add('select-tb-resultado')
        pnivel2R.classList.add('select-tb-resultado')
    }
    if (imc >= 25 && imc < 29.9) {
        pnivel3.classList.add('select-tb-resultado')
        pnivel3R.classList.add('select-tb-resultado')
    }
    if (imc >= 30 && imc < 34.9) {
        pnivel4.classList.add('select-tb-resultado')
        pnivel4R.classList.add('select-tb-resultado')
    }
    if (imc >= 35 && imc < 39.9) {
        pnivel5.classList.add('select-tb-resultado')
        pnivel5R.classList.add('select-tb-resultado')
    }
    if (imc >= 40) {
        pnivel6.classList.add('select-tb-resultado')
        pnivel6R.classList.add('select-tb-resultado')
    }
}
getImc = (peso, altura) => {
    const imc = peso / (altura * altura)
    return imc.toFixed(2)
}

getNivelImc = (imc) => {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3']

    if (imc < 18.5) return nivel[0]
    if (imc >= 18.5 && imc <= 24.9) return nivel[1]
    if (imc >= 25 && imc < 29.9) return nivel[2]
    if (imc >= 30 && imc < 34.9) return nivel[3]
    if (imc >= 35 && imc < 39.9) return nivel[4]
    if (imc >= 40) return nivel[5]
}

InformarResultado = (msg, isValid) => {
    const resultado = document.querySelector('#resultado')
    if (isValid) {
        resultado.innerHTML = `<p class="paragrafo-resultado">${msg}<p/>`
    } else {
        resultado.innerHTML = `<p class="bad">${msg}<p/>`
    }
}


// calcularImc = () => {
//     const imc = peso / (altura * altura)
//     return imc
// }






