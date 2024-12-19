import { Link } from "react-router-dom";
import { Image, TituloContainer, HeaderContainer } from "./styles";
import headerImg from "../../assets/images/banner.png";
import logo from "../../assets/images/logo.png";

const Header = () => (
  <Image style={{ backgroundImage: `url(${headerImg})` }}>
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <TituloContainer>
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
      </TituloContainer>
    </HeaderContainer>
  </Image>
);

export default Header;
