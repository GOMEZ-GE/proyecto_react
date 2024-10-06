import Nav from "./Nav";

const Header = (props) => {
    return (

        <header>
            
            <div className="container_header">
                <div className="container_header_img">
                    <img src="./images/logo/CA Boca Juniors.svg" alt="Boca Juniors Logo" />
                </div>

                <Nav></Nav>

            </div>

        </header>

    );
}

export default Header;