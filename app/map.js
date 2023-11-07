function aplicarDescontoLivros (livros){
    const desconto = 0.3
    aplicarDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return aplicarDesconto
}