import { Link } from "react-router-dom";
import {
  HeaderBar,
  Title,
  LinkCart,
  Banner,
  BannerP,
  BannerTitle,
} from "./styles";
import logo from "../../assets/images/logo.png";
import headerBarImg from "../../assets/images/banner.png";
import headerBanner from "../../assets/images/imagem_fundo.png";
import { restaurantes } from "../../pages/Home";

const HeaderPerfil = () => {
  const restaurant = restaurantes[1];

  return (
    <>
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
      </HeaderBar>
      <Banner style={{ backgroundImage: `url(${headerBanner})` }}>
        <BannerP>{restaurant.infos[0]}</BannerP>
        <BannerTitle>{restaurant.name}</BannerTitle>
      </Banner>
    </>
  );
};

export default HeaderPerfil;
