const HistoriaPages = (props) => {
    return (

        <div className="container_historia">
            <div className="container p-4 text-primary">
                <h2 className="fw-bold">Historia</h2>
            </div>

            <div className="container_historia_gral">
                <div className="container_item_historia">
                    <div className="container">
                        <h4>Fundación</h4>
                    </div>
                    <div className="container_item_historia_img">
                        <img src="./images/historia/fundacion_1905.jpg" className="img-fluid img-fluid-historia" alt="Fundadores de Boca Juniors" />
                    </div>
                    <div class="container_item_historia_p">
                        <p>Boca Juniors fue fundado en Buenos Aires el 3 de abril de 1905, en una década fundacional en
                            la
                            que se crearon no menos de 300 clubes de fútbol.Para entonces hacía casi cuarenta años que
                            se
                            practicaba el fútbol en la Argentina y catorce años desde la creación de la liga amateur, la
                            tercera liga más antigua del mundo, luego de la inglesa y la escocesa. La fundación de Boca
                            Juniors fue obra de seis adolescentes, hijos de italianos y vecinos de La Boca, barrio de
                            trabajadores inmigrantes y fuerte identidad genovesa («xeneize» en dialecto): Esteban
                            Baglietto,
                            Alfredo Scarpati, Santiago Sana, Tomás Movio, los hermanos Juan Antonio Farenga y José
                            Teodoro
                            Farenga, Luis De Harenne y otros.</p>
                    </div>

                </div>

                <div className="con-estrellas-arriba"></div>

                <div class="container_item_historia">
                    <div class="container">
                        <h4>Elección de la camiseta</h4>
                    </div>
                    <div class="container_row_reverse_historia">
                        <div class="container_item_historia_img">
                            <img src="./images/historia/colores_boca.webp" className="img-fluid img-fluid-historia" alt="Fundadores de Boca Juniors" />
                        </div>
                        <div class="container_item_historia_p">
                            <p>La elección de los colores definitivos del equipo fue dejada al azar. Juan Rafael
                                Brichetto,
                                presidente del club el año anterior (lo sería nuevamente en 1910-13), propuso adoptar
                                los
                                colores de la bandera del primer buque al que él le diera paso al día siguiente;
                                Brichetto
                                era
                                operador de uno de los puentes del puerto.El barco resultó ser sueco y fue así que el
                                club
                                adoptó los colores azul y amarillo («azul y oro») de la bandera sueca. Sin embargo no
                                fue
                                esa la
                                camiseta definitiva, pues hasta 1913 Boca utilizó un diseño de fondo azul con una franja
                                diagonal de izquierda a derecha. Ese año el club decidió un nuevo diseño, que con pocas
                                diferencias sería mantenida en adelante: azul, con una amplia franja horizontal amarilla
                                al
                                medio.</p>
                        </div>
                    </div>
                </div>

                <div class="con-estrellas-arriba"></div>

                <div class="container_item_historia">
                    <div class="container">
                        <h4>Primer partido (1905)</h4>
                    </div>
                    <div class="container_item_historia_img">
                        <img src="./images/historia/primer_partido.jpg" class="img-fluid img-fluid-historia" alt="Fundadores de Boca Juniors" />
                    </div>
                    <div className="container_item_historia_p">
                        <p>El primer partido que disputó Boca, fue el 21 de abril de 1905; un amistoso contra el club
                            Mariano Moreno utilizando la indumentaria blanca con tiras negras. El partido se jugó en la
                            Dársena Sur y Boca ganó 4:0, con dos goles de Juan Farenga, uno de su hermano José Farenga y
                            uno
                            de Santiago Sana.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HistoriaPages;