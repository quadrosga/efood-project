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
