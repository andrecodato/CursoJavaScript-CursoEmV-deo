function contarPassos() {
    // Declaração dos campos
    var campoInicio = document.getElementById('campoInicio').value
    var campoFim = document.getElementById('campoFim').value
    var campoPassos = document.getElementById('campoPassos').value

    // Conversão de valores
    var inicio = Number(campoInicio)
    var fim = Number(campoFim)
    var passos = Number(campoPassos)

    // Declaração do paragrafo de resultado
    var contagem = document.getElementById('contagem')
    contagem.innerHTML = 'Contando:<br>👉'

    /* Algoritmos */

    // Validação dos campos
    if (campoInicio.length == 0 || campoFim.length == 0 || campoPassos.length == 0) {
        alert('Verifique os dados e tente novamente!')
        return
    } else if (campoPassos == '0') {
        alert('Passo inválido! Considerando PASSO 1')
        passos = 1
    }

    // Contagem
    if (inicio > fim) {
        // Crescente
        for (; inicio >= fim ; inicio -= passos) {
            contagem.innerHTML += inicio + ' 👉'
        }
    } else {
        // Decrescente
        for (; inicio <= fim ; inicio += passos) {
            contagem.innerHTML += inicio + ' 👉'
        }
    }

    contagem.innerHTML += '🏁'
    
} 