import Menu from "./Menu";

function Cabecalho(props){

    return(
        <header className="cabecalho" >
            <img src="/logo.png" alt="Logo" className="logo"/> 
            <Menu links={['Página Principal','Produtos','Sobre Nós','Contato']}></Menu>
        </header>
    )

}export default Cabecalho;