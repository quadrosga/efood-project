import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button`
  padding: 4px 6px;
  background-color: ${colors.lightPink};
  color: ${colors.hotPink};
  font-weight: bold;
  display: flex;
`;

export const ButtonLink = styled(Link)`
  padding: 4px 6px;
  background-color: ${colors.hotPink};
  color: ${colors.lightPink};
  font-weight: bold;
  display: block;
  text-decoration: none;

  ${(props) =>
    props.variant === "products" &&
    `
      background-color: ${colors.lightPink};
      color: ${colors.hotPink};
      display: flex;
      padding: 4px auto;
      justify-content: center;
    `}
`;
