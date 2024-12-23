import styled from "styled-components";
import { colors } from "../../styles";

export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #000000cc;
  width: 100%;
  height: 100%;
`;

export const FormContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  padding: 12px 8px;
  background-color: ${colors.hotPink};
  width: 360px;
  color: ${colors.lightPink};
  font-weight: bold;
  display: block;
`;

export const FormTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 16px;
  margin-top: 20px;
`;

export const FormItems = styled.div`
  margin-bottom: 24px;

  label {
    font-size: 14px;
  }
  input {
    background-color: ${colors.lightPink};
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    display: inline-block;
    border: none;
    color: ${colors.grey};
    font-weight: bold;
  }

  input[id="cnum"] {
    width: 228px;
  }

  input[id="cvv"] {
    width: 87px;
  }

  ${(props) =>
    props.variant === "order-id" &&
    `
      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
      }`}
`;

export const NestedDivs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const NestedDivOne = styled.div`
  display: block;
`;

export const NestedDivTwo = styled.div`
  display: block;
`;

export const ErrorMessage = styled.span`
  color: ${colors.offWhite};
  font-size: 12px;
  margin-top: 4px;
  display: block;
  margin-bottom: 8px;
  font-style: italic;
  font-weight: normal;
`;
