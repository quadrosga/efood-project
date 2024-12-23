import { useState } from "react";
import Card from "../Card";
import { List } from "./styles";
import PopUp from "../PopUp";
import Cart from "../Cart";
import DeliveryForm from "../DeliveryForm";
import PayForm from "../PayForm";
import OrderId from "../OderId";

const ProductsList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isDeliveryFormVisible, setIsDeliveryFormVisible] = useState(false);
  const [isPayFormVisible, setIsPayFormVisible] = useState();
  const [isOrderIdVisible, setIsOrderIdVisible] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

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

  const handleOpenDeliveryForm = (price) => {
    setIsCartVisible(false);
    setIsDeliveryFormVisible(true);
    setTotalPrice(price);
  };

  const handleOpenPayForm = () => {
    console.log("Opening PayForm...");
    setIsDeliveryFormVisible(false);
    setIsPayFormVisible(true);
  };

  const handleOpenOrderId = () => {
    setIsPayFormVisible(false);
    setIsOrderIdVisible(true);
  };

  const handleBackToCart = () => {
    setIsDeliveryFormVisible(false);
    setIsCartVisible(true);
  };

  const handleGoBackToDelivery = () => {
    setIsPayFormVisible(false);
    setIsDeliveryFormVisible(true);
  };

  const handleCloseOrderId = () => {
    setIsOrderIdVisible(false);
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
            onOpenDelivery={handleOpenDeliveryForm}
            onOpenPay={handleOpenPayForm}
          />
        </aside>
      )}

      {isDeliveryFormVisible && (
        <aside className="delivery-form">
          <DeliveryForm
            onOpenPay={handleOpenPayForm}
            onBackToCart={handleBackToCart}
          />
        </aside>
      )}

      {isPayFormVisible && (
        <aside className="pay-form">
          <PayForm
            onOpenOrderId={handleOpenOrderId}
            onBackToDelivery={handleGoBackToDelivery}
            totalPrice={totalPrice}
          />
        </aside>
      )}

      {isOrderIdVisible && (
        <aside className="order-id">
          <OrderId
            onOpenOrderId={handleOpenOrderId}
            onCloseOrderId={handleCloseOrderId}
          />
        </aside>
      )}
    </div>
  );
};

export default ProductsList;
