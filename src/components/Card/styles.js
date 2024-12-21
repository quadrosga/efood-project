import styled from "styled-components";
import { colors } from "../../styles";

export const CardContainer = styled.div`
  border: solid 1px ${colors.hotPink};
  background-color: ${colors.white};
  margin-top: 48px;
  position: relative;

  img:first-child {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  ${(props) =>
    props.variant === "products" &&
    `
      background-color: ${colors.hotPink};
      color: ${colors.lightPink};
      line-height: 22px;
      text-align: left;
      margin-top: 32px;

      img:first-child {
        width: 100%;
        height: 167px;
        object-fit: cover;
        padding: 8px;
      }
    `}

  ${(props) =>
    props.variant === "pop-up" &&
    `
        background-color: ${colors.hotPink};
        color: ${colors.lightPink};
        padding: 32px;
        display: flex;
  
        img:first-child {
          width: 280px;
          height: 280px;
          object-fit: cover;
        }
      `}

    ${(props) =>
    props.variant === "cart-item" &&
    `
      background-color: ${colors.lightPink};
      padding: 8px;
      margin-top: 8px;
      display: flex;
      width: 344px;

      img:first-child {
          width: 80px;
          height: 80px;
          object-fit: cover ;
        }
      `}
`;

export const Description = styled.div`
  font-size: 14px;
  padding: 8px;

  p {
    margin: 16px 0;
    line-height: 22px;
  }

  ${(props) =>
    props.variant === "products" &&
    `
      h2 {
        font-size: 16px;
      }
      
      p {
        font-size: 14px;
        line-height: 22px;
        text-align: left;

      }
    `}

  ${(props) =>
    props.variant === "pop-up" &&
    `
    padding: 0;
    margin-left: 24px;
        h2 {
          font-size: 18px;
        }
        
        p {
          font-size: 14px;
          line-height: 22px;
          text-align: left;        
          }
      `}

      ${(props) =>
    props.variant === "cart-item" &&
    `
          h2 {
            font-size: 18px;
          }
          
          p {
            font-size: 14px;
            line-height: 22px;
            text-align: left;
    
          }
        `}
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

  ${(props) =>
    props.variant === "pop-up" &&
    `
          img {
            height: 16px;
            width: 16px;
  }
        `}
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  gap: 8px;
`;
