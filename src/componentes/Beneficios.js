import Card from "./Card"


function Beneficios() {


        return (
                <div className="containerBeneficios">

                        <h2 className="titulo">Porque escolher Sali?</h2>

                        <div className="beneficios" >

                                <div className="cardBeneficio" id="artesanal">
                                        <img src="/artesanal.png" alt="artesanal" ></img>
                                        <h3>Artesanal</h3>
                                        <p>Descrição</p>
                                </div>

                                <div className="cardBeneficio" id="sustentavel">
                                        <img src="/sustentavel.png" alt="sustentável" ></img>
                                        <h3>Sustentável</h3>
                                        <p>Descrição</p>
                                </div>

                                <div className="cardBeneficio" id="aromas">
                                        <img src="/aromas.png" alt="aromas naturais" ></img>
                                        <h3>Aromas naturais</h3>
                                        <p>Descrição</p>
                                </div>

                        </div>
                </div>

        )


} export default Beneficios