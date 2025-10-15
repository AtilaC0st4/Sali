import React from "react";
import Cabecalho from "./componentes/Cabecalho";
import "./sali.css"
import { ProdutoProvider } from "./ProdutoContexto";
import Destaques from "./componentes/Destaques";
import Banner from "./componentes/Banner";
import Beneficios from "./componentes/Beneficios";
import Produto from "./componentes/Produto";


function Sali() {

    return (
        <>
            <ProdutoProvider>
                <Cabecalho></Cabecalho>

                <Produto></Produto>

                { /*  
                <Banner></Banner>

                
                
                <Beneficios> </Beneficios>
                
                */}
            </ProdutoProvider>
        </>
    )

}

export default Sali;