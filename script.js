function calcularPorcentagem() {
    const valorIcms = parseFloat(document.getElementById("valorIcms").value);
    const valorTotalDaNota = parseFloat(document.getElementById("valorTotalDaNota").value);

    if (isNaN(valorIcms) || isNaN(valorTotalDaNota) || valorTotalDaNota === 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos!";
        return;
    }

    const porcentagem = (valorIcms / valorTotalDaNota) * 100;
    document.getElementById("resultado").innerText = `Porcentagem: ${porcentagem.toFixed(2)}%`;
}