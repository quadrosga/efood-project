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

      ${(props) =>
    props.variant === "cart-item" &&
    `
        background-color: ${colors.lightPink};
        color: ${colors.hotPink};
        font-weight: 100;
        width: 16px;
        height: 16px;
        position: absolute;
        bottom: 16px;
        right: 8px;
        `}

        ${(props) =>
    props.variant === "cart" &&
    `
        background-color: ${colors.lightPink};
        color: ${colors.hotPink};
        font-size: 14px;
        font-weight: bold;
        `}
`;
