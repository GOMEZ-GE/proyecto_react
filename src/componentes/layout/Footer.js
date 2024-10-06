import Footer_contacto from "./Footer_contacto";
import Footer_asociados from "./Footer_asociados";
import Footer_redes from "./Footer_redes";
import Footer_copyright from "./Footer_copyright";

const Footer = (props) => {
    return (
        <div className="container_footer">
            <Footer_contacto></Footer_contacto>
            <Footer_asociados></Footer_asociados>
            <Footer_redes></Footer_redes>
            <Footer_copyright></Footer_copyright>
        </div>
    );
}

export default Footer;