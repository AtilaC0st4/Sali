import React, { useContext } from "react";
import { ProdutoContexto } from "../ProdutoContexto";
import Card from "./Card";



function Produto(){

const [produtos] = useContext(ProdutoContexto)

return(


<Card produtos={produtos}></Card>
    
)



}export default Produto;