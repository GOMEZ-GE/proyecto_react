import Nav from "./Nav";

const Header = (props) => {
    return (

        <div>

            <div><strong>HEADER</strong></div>

            <div>
                <img src="./images/logo/CA Boca Juniors.svg" width={100} alt="Boca Juniors Logo" />
            </div>

                <Nav></Nav>

        </div>

    );
}

export default Header;