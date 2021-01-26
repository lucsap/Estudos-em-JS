function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    // var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = `morning.png`
        document.body.style.background = `#e2ddda`
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = `afternoon.png`
        document.body.style.background = `#8ea271`
    } else {
        // BOA NOITE!
        img.src = `night.png`
        document.body.style.background = `#343330`
    }
}
