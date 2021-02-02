function contar() {
    var inicio = document.getElementById(`txtstart`)
    var fim = document.getElementById('txtend')
    var passo = document.getElementById(`txtstep`)
    var res = document.querySelector('div#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        // window.alert(`[ERRO] Faltam dados!`)
    } else {
        res.innerHTML = `Contando: <br>`
        // Fazer os valores digitados serem tratados como númemros
        var start = Number(inicio.value)
        var end = Number(fim.value)
        var step = Number(passo.value)
        if(step == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            step = 1
        }
        if(start < end) {
            // Contagem crescente
            for(var c = start; c <= end; c += step) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else if(start > end) {
            // Contagem decrescente
            for(var c = start; c >= end; c-= step) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            window.alert('[ERRO] Por favor digite dados válidos!')
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
