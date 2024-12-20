import Card from "../Card";

const PopUp = ({ product }) => {
  console.log("PopUp is rendered");

  return (
    <Card
      variant="pop-up"
      image={product.image}
      nome={product.name}
      description={product.description}
    />
  );
};

export default PopUp;
