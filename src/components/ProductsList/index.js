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
          <PopUp product={selectedProduct} onClose={handleClosePopUp} />
        </div>
      )}
    </div>
  );
};

export default ProductsList;
