function tabuada() {
    let num = document.getElementById('txtnumber')
    let res = document.getElementById('res')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = '' // Limpa a área do SELECT antes de mostrar uma nova tabuada
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}` // Útil para outras linguagens como PHP para saber qual o VALUE do item
            tab.appendChild(item)
        }
    }
}

/*

CÓDIGO DE TABUADA PARA RODAR NO TERMINAL

let num = 4
let res = 0

for(let c = 0; c <= 10; c++) {
    res = (num * c)
    console.log(`${num} x ${c} = ${res}`)
}
*/