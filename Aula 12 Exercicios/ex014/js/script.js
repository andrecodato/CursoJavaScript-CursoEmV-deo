function carregar() {
    var mensagem = document.getElementById('mensagem')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 30

    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        // BOM DIA!
        imagem.src = 'img/fotomanha.png'
        document.body.style.background = '#C3B296'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        imagem.src = 'img/fototarde.png'
        document.body.style.background = '#F7A941'
    } else if (hora >= 18 && hora < 23) {
        // BOA NOITE!
        imagem.src = 'img/fotonoite.png'
        document.body.style.background = '#16283F'
    } else if (hora >= 0 && hora < 5) {
        // BOA MADRUGADA!
        imagem.src = 'img/fotomadrugada.png'
        document.body.style.background = '#323232'
    } else {
        mensagem.innerText = '[ERRO] Verifique os dados!'
    }
}