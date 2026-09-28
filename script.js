const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

async function buscarCotacao() {

    try {

        const resposta = await fetch(url);

        const dados = await resposta.json();

        const dolar = dados.USDBRL;

        const valorAtual = parseFloat(dolar.bid);
        const maiorDia = parseFloat(dolar.high);
        const menorDia = parseFloat(dolar.low);

        document.getElementById("valor-atual").textContent =
            `R$ ${valorAtual.toFixed(2)}`;

        document.getElementById("maior-dia").textContent =
            `R$ ${maiorDia.toFixed(2)}`;

        document.getElementById("menor-dia").textContent =
            `R$ ${menorDia.toFixed(2)}`;

    } catch (erro) {

        console.error("Erro ao buscar a cotação:", erro);

        document.getElementById("valor-atual").textContent =
            "Erro";

        document.getElementById("maior-dia").textContent =
            "Erro";

        document.getElementById("menor-dia").textContent =
            "Erro";
    }
}

buscarCotacao();

