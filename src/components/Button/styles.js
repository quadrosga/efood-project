import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button`
  padding: 4px 6px;
  background-color: ${colors.hotPink};
  color: ${colors.lightPink};
  font-weight: bold;
`;

export const ButtonLink = styled(Link)``;
