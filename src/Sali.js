import React from "react";
import Cabecalho from "./componentes/Cabecalho";
import "./sali.css"
import { ProdutoProvider } from "./ProdutoContexto";
import Destaques from "./componentes/Destaques";
import Banner from "./componentes/Banner";
import Beneficios from "./componentes/Beneficios";
import Rodape from "./componentes/Rodape";


function Sali() {

    return (
        <>
            <ProdutoProvider>
                <Cabecalho></Cabecalho>

                <Banner></Banner>
                <Destaques></Destaques>
                <Beneficios> </Beneficios>
                <Rodape></Rodape>
                
            </ProdutoProvider>
        </>
    )

}

export default Sali;