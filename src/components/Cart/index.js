import { ButtonLink } from "../Button/styles";
import Card from "../Card";
import { CartContainer, CartContent, Price, CloseCart } from "./styles";
import close from "../../assets/images/close.png";

const Cart = ({ products, onClose }) => (
  <CartContainer>
    <CartContent>
      <CloseCart onClick={onClose} className="close-cart">
        <img src={close} alt="close" />
      </CloseCart>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Card
              variant="cart-item"
              image={product.image}
              nome={product.name}
              price={product.price}
              buttonIcon
            />
          </li>
        ))}
      </ul>
      <Price>
        <p>Valor total</p>
        <span>
          R$ {products.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
        </span>
      </Price>
      <ButtonLink variant="cart">Continuar com a entrega</ButtonLink>
    </CartContent>
  </CartContainer>
);

export default Cart;
