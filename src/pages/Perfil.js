import ProductsList from "../components/ProductsList";
import Product from "../models/Products";

import sushi from "../assets/images/sushi.png";
import shrimp from "../assets/images/camarao.png";
import pizza from "../assets/images/pizza.png";
import burger from "../assets/images/burger.jpg";

const products = [
  new Product(
    1,
    sushi,
    "Sushi",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  ),
  new Product(
    2,
    shrimp,
    "Camarão",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  ),
  new Product(
    3,
    pizza,
    "Pizza",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  ),
  new Product(
    4,
    burger,
    "Humburguer",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  ),
  new Product(
    5,
    burger,
    "Humburguer",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  ),
  new Product(
    6,
    burger,
    "Humburguer",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  ),
];

const Perfil = () => <ProductsList products={products} />;

export default Perfil;
