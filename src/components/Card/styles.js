import styled from "styled-components";
import { colors } from "../../styles";

export const CardContainer = styled.div`
  border: solid 1px ${colors.hotPink};
  background-color: ${colors.white};
  margin-top: 48px;
  position: relative;

  img:first-child {
    width: 472px;
    height: 217px;
    object-fit: cover;
  }

  ${(props) =>
    props.variant === "products"
      ? `
      background-color: ${colors.hotPink};
      color: ${colors.lightPink};

      img:first-child {
        width: 304px;
        height: 167px;
        object-fit: cover;
      }
    `
      : ""}
`;

export const Description = styled.div`
  padding: 8px;
  font-size: 14px;

  p {
    margin: 16px 0;
  }
`;

export const Titulo = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nota = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0;
  }

  img {
    height: 20px;
    margin-left: 8px;
  }
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  gap: 8px;
`;
