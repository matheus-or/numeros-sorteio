function mostrarResultado() {

    let numerosSorteados = [];
    let qtdNumeros = document.getElementById("qtdNumeros").value;

    if (qtdNumeros > 6) {
        alert("No máximo 6 números");
    } else {
        while (numerosSorteados.length < qtdNumeros) {
            let sorteado = Math.floor(Math.random() * (60 - 1) + 1);

            if (numerosSorteados.length === 0 || !verificarDuplicidade(sorteado, numerosSorteados)) {
                numerosSorteados.push(sorteado);
            }
        }

        if (qtdNumeros.length === 0) {
            alert('Digite a quantidade de números a ser sorteada!');
        } else {
            numerosSorteados.sort(function (a, b) {
                return a - b
            });
            document.getElementById('resultado').innerHTML = 'Números sorteados: ' + numerosSorteados;
        }
    }
}

function verificarDuplicidade(sorteado, numerosSorteados) {
    numerosSorteados.forEach(x => {
        return x === sorteado;
    });
}