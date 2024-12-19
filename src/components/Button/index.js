import { ButtonContainer, ButtonLink } from "./styles";

const Button = ({ type, title, to, onClick, children }) => {
  if (type === "button") {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    );
  }
  return (
    <ButtonLink to={to} title={title}>
      {children}
    </ButtonLink>
  );
};

export default Button;
