const ContactoPages = (props) => {
    return (

        <div>
            <div>
                <h2>Contacto</h2>
            </div>
            <div>
                <section >
                    <div >
                        <p>A continuación ingresá tus datos para realizar una consulta o solicitar información <br></br>
                            Te responderemos a la mayor brevedad posible.<br></br>
                            No dudes en comunicarte también por nuestra vía telefónica desde Capital y GBA al (011)
                            4891-9191 o
                            desde el interior del país al 0810 – 777 – 7787 de lunes a viernes de 9 a 18 hs.</p>
                    </div>
                </section>

                <section>
                    <form >
                        <div >
                            <label >Nombre y Apellido</label>
                            <input />
                        </div>
                        <div>
                            <label>Email</label>
                            <input />
                        </div>
                        <div>
                            <label> Mensaje: </label>
                            <textarea></textarea>
                        </div>
                        <button >Consultar</button>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default ContactoPages;