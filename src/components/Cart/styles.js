import styled from "styled-components";
import { colors } from "../../styles";

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #000000cc;
  width: 100%;
  height: 100%;
`;

export const CartContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  padding: 12px 8px;
  background-color: ${colors.hotPink};
  width: 360px;
`;

export const Price = styled.div`
  color: ${colors.lightPink};
  font-size: 14px;
  font-weight: bold;
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const CloseCart = styled.div`
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`;
