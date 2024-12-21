import { CardContainer, Description, Titulo, Nota, Infos } from "./styles";
import Tag from "../Tag";
import estrela from "../../assets/images/estrela.png";
import { ButtonLink } from "../Button/styles";
import { CloseButton } from "../PopUp/styles";

const Card = ({
  image,
  nome,
  description,
  variant = "default",
  infos,
  score,
  buttonText,
  buttonPath = "/perfil",
  onButtonClick,
  buttonIcon,
  price,
  onClose,
}) => (
  <CardContainer className="container" variant={variant}>
    <img src={image} alt={nome} />
    <Infos>
      {infos && infos.map((info, index) => <Tag key={index}>{info}</Tag>)}
    </Infos>
    <Description variant={variant}>
      <Titulo>
        <h2>{nome}</h2>
        <Nota>
          {score ? (
            <>
              <p>{score}</p>
              <img src={estrela} alt="estrela" />
            </>
          ) : onClose ? (
            <CloseButton onClick={onClose}>
              <span className="material-symbols-outlined">close</span>
            </CloseButton>
          ) : (
            ""
          )}
        </Nota>
      </Titulo>
      <p>{description ? description : price ? <span>R$ {price}</span> : ""}</p>
      <ButtonLink to={buttonPath} variant={variant} onClick={onButtonClick}>
        {buttonIcon ? (
          <span className="material-symbols-outlined">delete</span>
        ) : (
          buttonText
        )}
      </ButtonLink>
    </Description>
  </CardContainer>
);

export default Card;
