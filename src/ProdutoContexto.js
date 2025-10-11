import { createContext, useEffect, useState } from "react";
import produtosData from "../src/data/produtos.json"



export const ProdutoContexto = createContext();

export function ProdutoProvider(props) {

    const [produtos, setProdutos] = useState([])


    useEffect(() => {
        setProdutos(produtosData)
    }, [])

    return (
        <ProdutoContexto.Provider value={[produtos, setProdutos]}>
            {props.children}
        </ProdutoContexto.Provider>
    )


}