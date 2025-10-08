import React, { useEffect, useState } from "react";
import produtosData from "../data/produtos.json"


function Produto(){

const [produtos, setProdutos] = useState([])


useEffect(()=>{
    setProdutos(produtosData)
},[])

return(

    <div>
        {produtos.map((produto) => { return(
            <div key={produto.id}>{produto.nome}</div>
        )})}
    </div>

)



} export default Produto;