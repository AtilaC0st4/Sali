import { useContext } from "react"
import { ProdutoContexto } from "../ProdutoContexto"
import Card from "./Card"



function Destaques() {

  const [produtos] = useContext(ProdutoContexto)

  const destaques = produtos.filter((p) => p.destaque)

  if (!destaques || destaques.length === 0) {
    return (<h1>não tem destaques</h1>)
  }


  return (
    <div className="destaque">
      <h2>Produtos mais vendidos</h2>
      
      <Card produtos={destaques}></Card>

        <h3>Ver mais</h3>

    </div>

  )



} export default Destaques