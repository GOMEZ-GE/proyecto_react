const NoticiasPages = (props) => {
    return (

        <div class="container_noticias">
            <div class="container p-4 text-primary">
                <h2 class="fw-bold">Noticias</h2>
            </div>

            <div id="carouselExampleAutoplaying" class="carousel slide carrusel_container" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./images/noticias/carrusel_1.webp" class="d-block w-100" alt="..." />
                        <div className="tarjeta_noticias">
                            <h4>Victoria ante Central en la Bombonera</h4>
                            <p>Boca ganó 2-1 con los primeros goles de Lema y Aguirre en el club.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./images/noticias/carrusel_2.jpg" class="d-block w-100" alt="..." />
                        <div className="tarjeta_noticias">
                            <h4>Nuevo refuerzo de Boca</h4>
                            <p>Juan Barinaga es nuevo refuerzo de Boca y fue presentado este viernes en conferencia de
                                prensa junto a Juan Román Riquelme. </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./images/noticias/carrusel_3.webp" class="d-block w-100" alt="..." />
                        <div className="tarjeta_noticias">
                            <h4>Partido de Copa Argentina</h4>
                            <p>Se pusieron a la venta las entradas para el proximo partido de Copa
                                Argentina ante Talleres de Cordoba .</p>
                        </div>
                    </div>
                </div>
            </div>            
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    );
}

export default NoticiasPages;