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
  display: flex;
  text-decoration: none;
  justify-content: center;

  ${(props) =>
    props.variant === "default" &&
    `
    width: 21%;
    `}

  ${(props) =>
    props.variant === "products" &&
    `
      background-color: ${colors.lightPink};
      color: ${colors.hotPink};
      padding: 4px auto;
    `}

  ${(props) =>
    props.variant === "pop-up" &&
    `
        background-color: ${colors.lightPink};
        color: ${colors.hotPink};
        padding: 4px auto;
        width: 33%;
      `}
`;
