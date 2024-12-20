import { useState } from "react";
import Card from "../Card";
import { List } from "./styles";
import PopUp from "../PopUp";

const ProductsList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenPopUp = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopUp = () => {
    setSelectedProduct(null);
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
          <div className="popup-content">
            <PopUp product={selectedProduct} />
            <button onClick={handleClosePopUp}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
