import { CardContainer, Description, Titulo, Nota, Infos } from "./styles";
import Tag from "../Tag";
import estrela from "../../assets/images/estrela.png";
import { ButtonLink } from "../Button/styles";

const Card = ({
  image,
  nome,
  description,
  variant = "default",
  infos,
  score,
}) => (
  <CardContainer variant={variant}>
    <img src={image} alt={nome} />
    <Infos>
      {infos && infos.map((info, index) => <Tag key={index}>{info}</Tag>)}
    </Infos>
    <Description>
      <Titulo>
        <h2>{nome}</h2>
        <Nota>
          {score !== undefined && (
            <>
              <p>{score}</p>
              <img src={estrela} alt="estrela" />
            </>
          )}
        </Nota>
      </Titulo>
      <p>{description}</p>
      <ButtonLink to="/perfil" variant={variant}>
        Saiba mais
      </ButtonLink>
    </Description>
  </CardContainer>
);

export default Card;
