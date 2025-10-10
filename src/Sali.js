import React from "react";
import Cabecalho from "./componentes/Cabecalho";
import "./sali.css"
import Produto from "./componentes/Produto";
import Banner from "./componentes/Banner";



function Sali(){

    return(
    <>
        <Cabecalho></Cabecalho>

        <Banner></Banner>
        
        <Produto></Produto>
    </>    
    )

}

export default Sali;