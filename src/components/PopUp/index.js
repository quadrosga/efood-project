import Card from "../Card";
import { PopUpContainer, PopUpContent } from "./styles";

const PopUp = ({ product, onClose, onAddToCart }) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <PopUpContainer>
      <PopUpContent>
        <Card
          variant="pop-up"
          image={product.image}
          nome={product.name}
          description={product.description}
          buttonText={`Adicionar ao carrinho - R$ ${product.price.toFixed(2)}`}
          onButtonClick={handleAddToCart}
          onClose={onClose}
        />
      </PopUpContent>
    </PopUpContainer>
  );
};

export default PopUp;
