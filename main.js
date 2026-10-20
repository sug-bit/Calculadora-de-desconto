function calcular () {
    let compra =
parseFloat(document.getElementById('compra').value);

    let desconto = 0;

    if (compra > 500) {
    desconto = compra * 0.1 // 10%
} else if (compra > 100) {
    desconto = compra * 0.05 // 5% 
}

    let valorComDesconto = compra - desconto;

    document.getElementById('resultado').innerHTML =
        "Valor da compra; R$ " +
    compra.toFixed(2) + "<br>" +
        "Valor do desconto: R$ " +
    desconto.toFixed(2) + "<br>" +
        "Valor com desconto: R$ " +
    valorComDesconto.toFixed(2)
}
