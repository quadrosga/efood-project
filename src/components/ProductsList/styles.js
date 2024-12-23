import styled from "styled-components";
import { colors } from "../../styles";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
`;

export const Banner = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  color: ${colors.white};
  font-size: 32px;
  position: relative;
  margin-bottom: 24px;
`;

export const BannerP = styled.p`
  padding-top: 24px;
  padding-left: 170px;
  font-weight: 100;
`;

export const BannerTitle = styled.div`
  position: absolute;
  bottom: 32px;
  left: 170px;
  font-weight: 900;
`;
