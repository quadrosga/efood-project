import Card from "../Card";
import { List } from "./styles";

const ProductsList = ({ products }) => (
  <div className="container">
    <List>
      {products.map((product) => (
        <li key={product.id}>
          <Card
            variant="products"
            image={product.image}
            nome={product.name}
            description={product.description}
          />
        </li>
      ))}
    </List>
  </div>
);

export default ProductsList;
