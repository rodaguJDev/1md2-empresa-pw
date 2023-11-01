const PRODUCTS = [
    document.getElementById("prod1"),
    document.getElementById("prod2"),
    document.getElementById("prod3"),
    document.getElementById("prod4")
]

for (const p of PRODUCTS) {
    const precoFixo = p.querySelector(".produto-preco");
    const produtoInput = p.querySelector(".prod-qt");
    precoFixo.innerHTML = formatDecimal(p.dataset.price);
    updateProductPrice(produtoInput, p);

    produtoInput.addEventListener("input", () => {
        updateProductPrice(produtoInput, p);
    })
}

function updateProductPrice(produtoInput, produto) {
    const newPrice = calculateNewPrice(
        produto.dataset.price,
        produtoInput.value
    );
    const displayTotal = produto.querySelector(".produto-total");
    displayTotal.innerHTML = formatDecimal(newPrice);
}

function calculateNewPrice(basePrice, count) {
    return parseFloat(basePrice)*(parseInt(count))
}

function formatDecimal(decimal) {
    return parseFloat(decimal).toFixed(2).replace(".", ",");
}