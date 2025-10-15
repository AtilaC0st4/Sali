import React, { useContext } from "react";
import { ProdutoContexto } from "../ProdutoContexto";
import Card from "./Card";



function Produto(){

const [produtos] = useContext(ProdutoContexto)

return(


<Card produtos={produtos}></Card>
    

   /* <div className="produtos">
        {produtos.map((produto) => { return(
            <div className="cardProduto" key={produto.id}>
                <img alt={produto.name} src={produto.imagem}></img>                
                <h3>{produto.nome}</h3>
                <span>R$ {produto.preco.toFixed(2)}</span>
                </div>
        )})}
    </div>
     */
)



}export default Produto;