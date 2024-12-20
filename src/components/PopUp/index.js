import Card from "../Card";
import { CloseButton, PopUpContainer, PopUpContent } from "./styles";
import close from "../../assets/images/close.png";

const PopUp = ({ product, onClose }) => {
  console.log("PopUp is rendered");

  return (
    <PopUpContainer>
      <PopUpContent>
        <CloseButton onClick={onClose}>
          <img src={close} alt="close" />
        </CloseButton>
        <Card
          variant="pop-up"
          image={product.image}
          nome={product.name}
          description={product.description}
          buttonText="Adicionar ao carrinho"
        />
      </PopUpContent>
    </PopUpContainer>
  );
};

export default PopUp;
