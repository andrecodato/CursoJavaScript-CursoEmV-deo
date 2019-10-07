function contarPassos() {
    let inicio = document.getElementById('campoInicio')
    let fim = document.getElementById('campoFim')
    let passos = document.getElementById('campoPassos')
    let resultado = document.getElementById('resultado')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: '
        let iniN = Number(inicio.value)
        let fimN = Number(fim.value)
        let pasN = Number(passos.value)

        if (iniN < fimN) {
            for (let c = iniN ; c <= fimN ; c += pasN) {
                resultado.innerHTML += `${c} 👉`
            }
        } else {
            for (let c = iniN ; c >= fimN ; c -= pasN){
                resultado.innerHTML += `${c} 👉`
            }
        }

        resultado.innerHTML += '🏁'
        
    }
}