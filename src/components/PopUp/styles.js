import styled from "styled-components";

export const PopUpContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000cc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopUpContent = styled.div`
  position: absolute;
`;

export const CloseContainer = styled.div`
  position: relative;
`;
export const CloseButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`;
