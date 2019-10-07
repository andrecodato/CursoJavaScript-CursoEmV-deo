let valores = []
let campoNumero, numero, select, maior, soma = 0, media = 0

function captura () {
    campoNumero = document.getElementById('campoNumero')
    numero = Number(campoNumero.value)
    select = document.getElementById('select')
}

function adicionarNumero () {
    captura()

    if (numero < 1 || numero > 100 || campoNumero.value.length == 0 ) {
        alert('[ERRO] Confira o número informado!')
    } else if (valores.indexOf(numero) > -1) {
        alert('[ALERTA] Valor ja adicionado!')
    } else {
        valores.push(numero)
        select.innerHTML += `<option>Valor ${numero} adicionado.</option>`
    }

    document.getElementById('resultado').innerHTML = ''
    campoNumero.value = ''
    campoNumero.focus()
}

function finalizarAnalize () {
    valores.sort(function(a, b) {return a-b})

    if (valores.length == 0) {
        alert('Favor cadastrar dados!')
    }

    for (i in valores) {
        maior = valores[i]
        soma += valores[i]
        media = soma / valores.length
    }

    document.getElementById('resultado').innerHTML =
    `<p>Ao todo, temos ${valores.length} números cadastrados</p>` +
    `<p>O maior valor informado foi ${maior}</p>` +
    `<p>O menor valor informado foi ${valores[0]}</p>` +
    `<p>Somando todos os valores, temos ${soma}</p>` +
    `<p>A média dos valores digitados é ${media}</p>`
}