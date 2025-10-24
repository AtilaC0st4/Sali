import Card from "./Card"


function Beneficios() {


        return (
                <>
                        <h2>Porque escolher Sali?</h2>

                        <div className="produtos" >

                                <div className="cardProduto">
                                        <img src="/artesanal.png" alt="artesanal" ></img>
                                        <h3>Artesanal</h3>
                                        <p>Descrição</p>
                                </div>

                                <div className="cardProduto">
                                        <img src="/sustentavel.png" alt="sustentável" ></img>
                                        <h3>Sustentável</h3>
                                        <p>Descrição</p>
                                </div>

                                <div className="cardProduto">
                                        <img src="/aromas.png" alt="aromas naturais" ></img>
                                        <h3>Aromas naturais</h3>
                                        <p>Descrição</p>
                                </div>

                        </div>
                </>

        )


} export default Beneficios