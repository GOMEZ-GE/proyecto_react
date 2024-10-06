const ContactoPages = (props) => {
    return (

        <div className="container_contacto">
            <div className="p-4 text-primary titulo_contacto">
                <h2 class="fw-bold ">Contacto</h2>
            </div>
            <div className="container_section_contacto">
                <section className="container container_info_consultas">
                    <div className="container mb-0 container_info_consultas_1">
                        <p>A continuación ingresá tus datos para realizar una consulta o solicitar información, Te responderemos a la mayor brevedad posible.</p>

                        <p>
                            No dudes en comunicarte también por nuestra vía telefónica desde Capital y GBA al (011)
                            4891-9191 o
                            desde el interior del país al 0810 – 777 – 7787 de lunes a viernes de 9 a 18 hs.</p>
                    </div>
                </section>

                <section class="container container_consultas">
                    <form action="#" method="post" className="iniciar_consulta" id="form_reg">
                        <div class="mb-3 text-start">
                            <label for="exampleInputEmail1" class="form-label p-2">Nombre y Apellido</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                name="registroNombre" />
                        </div>
                        <div class="mt-1 mb-3 text-start">
                            <label for="email" class="form-label p-2">Email</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                                name="registroEmail" />
                        </div>
                        <div class="mt-1 mb-4 text-start">
                            <label for="comentario" class="p-2"> Mensaje: </label>
                            <textarea name="comentario" id="" class="form-control contacto_imput" cols="25"
                                rows="4"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Consultar</button>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default ContactoPages;