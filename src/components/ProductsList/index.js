import { useState } from "react";
import Card from "../Card";
import { List } from "./styles";
import PopUp from "../PopUp";
import Cart from "../Cart";

const ProductsList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleOpenPopUp = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopUp = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setSelectedProduct(null);
    setIsCartVisible(true);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((product) => product !== productToRemove)
    );
  };

  const handleCloseCart = () => {
    setIsCartVisible(false);
  };

  return (
    <div className="container">
      <List>
        {products.map((product) => (
          <li key={product.id}>
            <Card
              variant="products"
              image={product.image}
              nome={product.name}
              description={product.description}
              buttonText="Adicionar ao carrinho"
              onButtonClick={() => handleOpenPopUp(product)}
            />
          </li>
        ))}
      </List>

      {selectedProduct && (
        <div className="popup-overlay">
          <PopUp
            product={selectedProduct}
            onClose={handleClosePopUp}
            onAddToCart={handleAddToCart}
          />
        </div>
      )}

      {isCartVisible && (
        <aside className="cart-aside">
          <Cart
            products={cartItems}
            onClose={handleCloseCart}
            onRemove={handleRemoveFromCart}
          />
        </aside>
      )}
    </div>
  );
};

export default ProductsList;
