import React from "react";
import * as S from "./style";
import Header from "../../components/Common/Header/index";

export default function Victim() {
  return (
    <div>
      <Header />
      <S.InformationCreationContainer>
        <S.BigTitle>희생자등록하기</S.BigTitle>
        <div>
          <S.Title>희생자 정보</S.Title>
          <S.NumElement>
            <S.Element>
              <S.Input2
                type="text"
                placeholder="이름을 입력해주세요."
              ></S.Input2>
            </S.Element>
            <S.Element>
              <S.Input2
                type="number"
                placeholder="나이를 입력해주세요."
              ></S.Input2>
            </S.Element>
            <S.Element>
              <S.Input2
                type="text"
                placeholder="성별을 선택해주세요."
              ></S.Input2>
            </S.Element>
          </S.NumElement>
        </div>

        <div>
          <S.Title>희생자 이야기</S.Title>
          <S.Textarea placeholder="내용을 입력해주세요." />
        </div>
        <S.SubmitBtn>희생자 등록하기</S.SubmitBtn>
      </S.InformationCreationContainer>
    </div>
  );
}
