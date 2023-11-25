let resultado = document.querySelector('#resultado');
let altura = document.querySelector('#altura');
let peso = document.querySelector('#peso');

function calcIMC() {
    if (altura.value != '' && peso.value != '') {
        let imc = (peso.value / (altura.value * altura.value)).toFixed(2);
        let classification = ''

        if (imc < 18.5) {
            classification = '<strong>abaixo do peso</strong>'
        } else if (imc < 25) {
            classification = 'com peso <strong>normal</strong>'
        } else if (imc < 35) {
            classification = 'com <strong>obesidade grau I</strong>'
        } else if (imc < 41) {
            classification = 'com <strong>obesidade grau II</strong>'
        } else {
            classification = 'com <strong>obesidade grau III</strong>'
        }

        resultado.innerHTML = `O seu IMC é: ${imc}.<br> O que indica que você está ${classification}.`
    } else {
        resultado.innerHTML = 'Há campos em branco.<br><strong>Preencha os campos!</strong>'
    }
}