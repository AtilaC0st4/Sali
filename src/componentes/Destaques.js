import { useContext } from "react"
import { ProdutoContexto } from "../ProdutoContexto"



function Destaques() {

    const [produtos] = useContext(ProdutoContexto)

    const destaques = produtos.filter((p) => p.destaque )


    return (
        <div className="produtos">

          {destaques.map(destaque =>    { return(<h1>{destaque.nome}</h1>)})}
        

        </div>
    )



} export default Destaques