function btnPesq() {
    let item = document.getElementById("alimentos");
    let campo = document.getElementById("campo-pesq").value.toLowerCase(); // Pegando o valor do campo de pesquisa
    let resultLanches = "";
    let encontrouLanches = false; // Flag para verificar se há lanches correspondentes

for (let lanche of lanches) {
    if (lanche != null) {
        if (lanche.Titulo.toLowerCase().includes(campo.toLowerCase())) {
            if (!encontrouLanches) {
                resultLanches += `<span class="categoria">LANCHES</span>`; // Adiciona o título "LANCHES" apenas uma vez
                encontrouLanches = true;
            }
            resultLanches +=
            `
                <div id="item">
                    <ul>
                        <li>
                            <img src="${lanche.Imagem}" alt="${lanche.Titulo}"/>
                            <div class="info">
                                <a id="title">${lanche.Titulo}</a>
                                <a id="Ingredientes">${lanche.Ingredientes}</a>
                                <a id="valor">${lanche.Valor}</a>
                            </div>
                        </li>
                    </ul>
                </div>
            `;
        }
    }
}

// Se nenhum lanche foi encontrado, adicione a mensagem "Nenhum Resultado"
if (!encontrouLanches) {
    resultLanches += `<p>Nenhum Resultado</p>`;
}


    let resultBebidas = "";
    let encontrouBebidas = false; // Flag para verificar se há bebidas correspondentes

    // Filtra e exibe as bebidas que correspondem à pesquisa
    for (let bebida of bebidas) {
        if (bebida.Titulo.toLowerCase().includes(campo)) { // Comparação com valor convertido para lowercase
            if (!encontrouBebidas) {
                resultBebidas += `<span class="categoria">BEBIDAS</span>`; // Adiciona o título "BEBIDAS" apenas uma vez
                encontrouBebidas = true;
            }
            resultBebidas +=
            `
            <div id="item">
                <ul>
                    <li>
                        <img src="${bebida.Imagem}" alt="${bebida.Titulo}"/>
                        <div class="info">
                            <a id="title">${bebida.Titulo}</a>
                            <a id="Ingredientes">${bebida.Tamanho}</a>
                            <a id="valor">${bebida.Valor}</a>
                        </div>
                    </li>
                </ul>
            </div>
            `;
        }
    }
    
    // Combina os resultados dos lanches e bebidas no mesmo container
    item.innerHTML = resultLanches + resultBebidas;
}


// Executa a função de pesquisa automaticamente ao carregar a página
window.onload = function() {
    btnPesq(); // Executa a pesquisa ao carregar a página
};

function abrirwpp() {
    var numeroTelefone = '4191483325'; // Coloque o número no formato internacional, sem símbolos
    var url = 'https://wa.me/' + numeroTelefone;
    window.open(url, '_blank'); // Abre o link em uma nova aba
}

function abririnsta() {
    var url = 'https://www.instagram.com/_comidadibuteco/?hl=en';
    window.open(url, '_blank'); // Abre o link em uma nova aba
}

function abrirface() {
    var url = 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjYyeuS-6-IAxVtqJUCHe-pJusQFnoECA4QAQ&url=https%3A%2F%2Fwww.facebook.com%2Fcomidaereceitas%2F%3Flocale%3Dpt_BR&usg=AOvVaw2KkS16PQWG1UaKQpX2qffU&opi=89978449';
    window.open(url, '_blank'); // Abre o link em uma nova aba
}

