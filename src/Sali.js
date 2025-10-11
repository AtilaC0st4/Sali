import React from "react";
import Cabecalho from "./componentes/Cabecalho";
import "./sali.css"
import { ProdutoProvider } from "./ProdutoContexto";
import Destaques from "./componentes/Destaques";



function Sali() {

    return (
        <>
            <ProdutoProvider>
                <Cabecalho></Cabecalho>

                <Destaques></Destaques>

                

            </ProdutoProvider>
        </>
    )

}

export default Sali;