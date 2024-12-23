import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderBar = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 82px 170px;
  font-size: 18px;
  font-weight: 900;
`;

export const Title = styled.div`
  color: ${colors.hotPink};
`;

export const LinkCart = styled.a`
  display: flex;
  text-decoration: none;
  color: ${colors.hotPink};
`;
