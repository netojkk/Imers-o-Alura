let section = document.getElementById("resultados-pesquisa")
console.log(section)

section.innerHTML = `
    <div class="item-resultado">
        <h2> ${filmes[0].titulo} </h2>
    
        <p class="descricao-meta">${filmes[0].descricao} 
        </p> 
                
        <p>
            Diretor: ${filmes[0].diretor}
        </p>
        <p>
            Ano de Lançamento: 2010
        </p>
    </div>
`