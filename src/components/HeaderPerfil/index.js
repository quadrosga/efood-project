import logo from "../../assets/images/logo.png";
import { HeaderBar, Title, LinkCart } from "./styles";
import headerBarImg from "../../assets/images/banner.png";
import { Link } from "react-router-dom";

const HeaderPerfil = () => {
  console.log("HeaderPerfil rendered");
  <HeaderBar style={{ backgroundImage: `url(${headerBarImg})` }}>
    <Title>
      <p>Restaurantes</p>
    </Title>
    <div>
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
    </div>
    <LinkCart href="#">0 - produtos no carrinho</LinkCart>
  </HeaderBar>;
};

export default HeaderPerfil;
