function mostrarResultado() {

    let numerosSorteados = [];
    let qtdNumeros = document.getElementById("qtdNumeros").value;

    if (qtdNumeros > 6) {
        alert("No máximo 6 números");
    } else {
        while (numerosSorteados.length < qtdNumeros) {
            let sorteado = Math.floor(Math.random() * (60 - 1) + 1);
            numerosSorteados.push(sorteado);
            numerosSorteados = [...new Set(numerosSorteados)];
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