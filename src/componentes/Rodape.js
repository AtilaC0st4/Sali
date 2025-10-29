import Menu from "./Menu";
import RedesSociais from "./RedesSocias";


function Rodape() {
    return (
        <div className="rodapeContainer">
            <img src="/logo.png" alt="Logo" className="logo" />
            <div className="rodapeConteudo">

                <Menu links={['Página Principal', 'Produtos', 'Sobre Nós', 'Contato']}></Menu>
                <RedesSociais icons={['instagram.svg', 'facebook.svg', 'whatsapp.svg']}></RedesSociais>
                 
                
            </div>
            
                <span className="copy"> Sali </span>


        </div>

    )

} export default Rodape;