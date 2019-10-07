function gerarTabuada() {
    var campoNumero = document.getElementById('campoNumero').value
    var select = document.getElementById('select')
    select.innerHTML = ''

    if (campoNumero.length == 0) {
        alert('Verifique o campo de número!')
        return
    }
    
    for (i = 1 ; i <= 10 ; i++) {
        var resultado = Number(campoNumero) * i
        select.innerHTML += `<option>${campoNumero} X ${i} = ${resultado}</option>`
    }
}