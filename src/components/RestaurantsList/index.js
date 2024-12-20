import { List } from "./styles";
import Card from "../Card";

const Restaurants = ({ restaurants }) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Card
            infos={restaurant.infos}
            image={restaurant.image}
            nome={restaurant.name}
            score={restaurant.score}
            description={restaurant.description}
            buttonText="Saiba mais"
            buttonPath="/perfil"
          />
        </li>
      ))}
    </List>
  </div>
);

export default Restaurants;
