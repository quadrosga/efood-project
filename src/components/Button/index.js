import { ButtonContainer, ButtonLink } from "./styles";

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = "default",
}) => {
  if (type === "button") {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        variant={variant}
      >
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
