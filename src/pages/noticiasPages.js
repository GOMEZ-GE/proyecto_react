const NoticiasPages = (props) => {
    return (

        <div>
            <div>
                <h2 >Noticias</h2>
            </div>

            <div >
                <div>
                    <div>
                        <img src="./images/noticias/carrusel_1.webp" width={100}  alt="..." />
                        <div>
                            <h4>Victoria ante Central en la Bombonera</h4>
                            <p>Boca ganó 2-1 con los primeros goles de Lema y Aguirre en el club.</p>
                        </div>
                    </div>
                    <div>
                        <img src="./images/noticias/carrusel_2.jpg" width={100} alt="..." />
                        <div>
                            <h4>Nuevo refuerzo de Boca</h4>
                            <p>Juan Barinaga es nuevo refuerzo de Boca y fue presentado este viernes en conferencia de
                                prensa junto a Juan Román Riquelme. </p>
                        </div>
                    </div>
                    <div>
                        <img src="./images/noticias/carrusel_3.webp" width={100} alt="..." />
                        <div>
                            <h4>Partido de Copa Argentina</h4>
                            <p>Se pusieron a la venta las entradas para el proximo partido de Copa
                                Argentina ante Talleres de Cordoba .</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default NoticiasPages;