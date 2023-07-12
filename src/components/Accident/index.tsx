import React from "react";
import * as S from "./style";
import Header from "../../components/Common/Header/index";

export default function Accident() {
  return (
    <div>
      <Header />
      <S.InformationCreationContainer>
        <S.BigTitle>사건등록하기</S.BigTitle>
        <div>
          <S.Title>사건명</S.Title>
          <S.Input1 type="text" placeholder="사건명을 입력해주세요." />
        </div>

        <S.NumElement>
          <S.Element>
            <S.Title>사상자</S.Title>
            <S.Input2
              type="number"
              placeholder="사상자수를 입력해주세요."
            ></S.Input2>
          </S.Element>
          <S.Element>
            <S.Title>부상자</S.Title>
            <S.Input2
              type="number"
              placeholder="부상자수를 입력해주세요."
            ></S.Input2>
          </S.Element>
          <S.Element>
            <S.Title>실종자</S.Title>
            <S.Input2
              type="number"
              placeholder="실종자수를 입력해주세요."
            ></S.Input2>
          </S.Element>
        </S.NumElement>
        <S.OtherElement>
          <S.Element>
            <S.Title>날짜</S.Title>
            <S.Input2 type="date" />
          </S.Element>
          <S.Element>
            <S.Title>사고위치</S.Title>
            <S.Input2 type="text" placeholder="사고위치를 입력해주세요." />
          </S.Element>
        </S.OtherElement>

        <div>
          <S.Title>사고내용</S.Title>
          <S.Textarea placeholder="사고내용을 입력해주세요." />
        </div>
        <S.SubmitBtn>사건 등록하기</S.SubmitBtn>
      </S.InformationCreationContainer>
    </div>
  );
}
