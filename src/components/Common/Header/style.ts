import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  z-index: 1;
  background-color: #fbfbfa;
`;
export const HeaderTitle = styled.img`
  width: 7%;
  height: auto;
  margin-left: 10%;
  cursor: pointer;
`;
export const HeaderCategories = styled.div`
  width: 100%;
  display: flex;
  margin-left: 60%;
`;
export const Element = styled.div`
  margin-left: 15%;
  color: #000;
  font-family: Noto Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  &:hover {
    color: #3d52e3;
  }
`;
