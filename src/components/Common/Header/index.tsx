import React from "react";
import * as S from "./style";
import Logo from "../../../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <S.Header>
        <S.HeaderTitle src={Logo} onClick={() => navigate("/")}></S.HeaderTitle>
        <S.HeaderCategories>
          <S.Element onClick={() => navigate("/Accident")}>사건등록</S.Element>
          <S.Element onClick={() => navigate("/VictimRegistration")}>
            희생자등록
          </S.Element>
        </S.HeaderCategories>
      </S.Header>
    </header>
  );
}
