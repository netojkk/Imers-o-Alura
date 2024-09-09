function search() {
    console.log('serach funcioando')


    //Captura um espaço do HTML, no caso a section e sincroniza aqui com js
    let section = document.getElementById("resultados-pesquisa")

    //Capturando o texto no barra de pesquisa do HTML e atribuindo uma variavel aqui no Js. Obs: Estava com um problema quando escrevia os titulos dos filmes corretamente(com inicias maiusculas) então atribui o lowercase aqui também. RESOLVEU
    const capturaPesquisa = document.getElementById("captura-pesquisa").value.toLowerCase()
    
    if (capturaPesquisa == "" || capturaPesquisa == " ") {
        return section.innerHTML = `
            <p class="descricao-erro"> ERRO! nada foi digitado ou encontrado. </p>
        `

    }
    //Variavel que vai guardar todos os resultados, evitando a chamada desorganizada do innerHTML
    let resultados = "";
    let encontrado = false

    //utiliza um for para percorrer por todos os filmes da base de dados e facilitar a atribuicão dos atributos para cada um, como titulo, descrição e etc.
    for (let filme of filmes) {

        let titulo = filme.titulo.toLowerCase()
        let descricao = filme.descricao.toLowerCase()
        let tags = []

        //Deixando todas as tags em minusculo (apenas para praticar uma nova lógica) de uma forma diferente, pois o lowerCase não funciona em arrays
        for (let i; i < filme.tags.length; i++){
             tags.slice().push(filme.tags[i].toLowerCase())
        }
        
        //Metodo principal
        if (titulo.includes(capturaPesquisa) || descricao.includes(capturaPesquisa) || tags.includes(capturaPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2> ${filme.titulo} </h2>
                
                    <p class="descricao-meta">${filme.descricao} 
                    </p> 
                            
                    <p>
                        Diretor: ${filme.diretor}
                    </p>
                    <p>
                        Ano de Lançamento: ${filme.anoLancamento}
                    </p>
                </div>
                `
            
            encontrado = true
            
        } if (encontrado) {
            //chama a o nosso conteiner HTML que foi sicronizado aqui no js e usa o innerHTML para adicionar as variaveis dos filmes na tela 
            section.innerHTML = resultados
            
        } else {
            section.innerHTML = `
                <p class="descricao-erro"> Nenhum filme encontrado! </p>
                `
        }

    }

}

function showAll() {
    console.log('Botão "Mostrar todos" clicado');
    let section = document.getElementById("resultados-pesquisa");

    // Variável para armazenar todos os resultados
    let resultados = "";

    // Ordenar os filmes por título em ordem alfabética, utilizando o metodo slice para criar um novo Array sem afetar o original no nosso caso original = filmes e novArray = filmesOrdenados. Utilizando o sort que é um método de ordenação de fato e ainda utilizamos o localeCompare que é um método de comparação próprio para string.
    let filmesOrdenados = filmes.slice().sort((a, b) => {
        // Comparar os títulos em minúsculas para garantir uma ordenação correta
        return a.titulo.toLowerCase().localeCompare(b.titulo.toLowerCase());
    })

    // Percorre todos os filmes e adiciona ao HTML
    for (let filme of filmesOrdenados) {
        resultados += `
            <div class="item-resultado">
                <h2>${filme.titulo}</h2>
                <p class="descricao-meta">${filme.descricao}</p>
                <p>Diretor: ${filme.diretor}</p>
                <p>Ano de Lançamento: ${filme.anoLancamento}</p>
            </div>
        `;
    }

    // Atualiza o HTML da seção com todos os resultados
    section.innerHTML = resultados;


}
function cleanbtn() {
    let section = document.getElementById("resultados-pesquisa");

    section.innerHTML = ``

    const capturaPesquisa = document.getElementById("captura-pesquisa").value = ""

}



