


function Card(props){

    return(
        
        <div className="produtos">
        {props.produtos.map((produto) => { return(
            <div className="cardProduto" key={produto.id}>
                <img alt={produto.name} src={produto.imagem}></img>                
                <h3>{produto.nome}</h3>
                <span>R$ {produto.preco.toFixed(2)}</span>
                </div>
        )})}
    </div>
    
    )

}export default Card;