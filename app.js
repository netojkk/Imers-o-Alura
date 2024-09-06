let section = document.getElementById("resultados-pesquisa")
console.log(section)

let resultados = ""

for (filme of filmes) {
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
}
section.innerHTML = resultados
