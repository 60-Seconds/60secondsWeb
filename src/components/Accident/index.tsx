import React, { useState } from "react";
import * as S from "./style";
import Header from "../../components/Common/Header/index";
import { AccidentType } from "../../types/Accident";
import API from "../../util/api";

export default function Accident() {
  const [post, setPost] = useState<AccidentType>({
    name: "",
    type: "",
    dead: 0,
    injury: 0,
    missing: 0,
    datetime: "",
    location: "",
    info: "",
  });

  const handleChangerData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
    console.log(name + value);
  };
  const handleChangerTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
    console.log(name + value);
  };

  const handleSubmitPost = () => {
    API.post(`/v2/disaster/register`, post)
      .then(() => {
        alert("새로운 사고가 등록되었습니다.");
      })
      .catch((e) => {
        alert("사고 등록에 실패했습니다. 정보를 모두 입력했는지 확인해주세요.");
        console.log(e);
      });
  };
  return (
    <div>
      <Header />
      <S.InformationCreationContainer>
        <S.BigTitle>사건등록하기</S.BigTitle>
        <div>
          <S.Title>사건명</S.Title>
          <S.Input1
            name="name"
            type="text"
            placeholder="사건명을 입력해주세요."
            value={post.name}
            onChange={handleChangerData}
          />
        </div>

        <S.NumElement>
          <S.Element>
            <S.Title>사상자</S.Title>
            <S.Input2
              name="dead"
              type="number"
              placeholder="사상자수를 입력해주세요."
              value={post.dead}
              onChange={handleChangerData}
            ></S.Input2>
          </S.Element>
          <S.Element>
            <S.Title>부상자</S.Title>
            <S.Input2
              name="injury"
              type="number"
              value={post.injury}
              placeholder="부상자수를 입력해주세요."
              onChange={handleChangerData}
            ></S.Input2>
          </S.Element>
          <S.Element>
            <S.Title>실종자</S.Title>
            <S.Input2
              name="missing"
              type="number"
              value={post.missing}
              placeholder="실종자수를 입력해주세요."
              onChange={handleChangerData}
            ></S.Input2>
          </S.Element>
        </S.NumElement>
        <S.OtherElement>
          <S.Element>
            <S.Title>날짜</S.Title>
            <S.Input2
              name="datetime"
              type="date"
              value={post.datetime}
              onChange={handleChangerData}
            />
          </S.Element>
          <S.Element>
            <S.Title>사고위치</S.Title>
            <S.Input2
              name="location"
              type="text"
              placeholder="사고위치를 입력해주세요."
              value={post.location}
              onChange={handleChangerData}
            />
          </S.Element>
        </S.OtherElement>

        <div>
          <S.Title>사고내용</S.Title>
          <S.Textarea
            name="info"
            placeholder="사고내용을 입력해주세요."
            value={post.info}
            onChange={handleChangerTextArea}
          />
        </div>
        <S.SubmitBtn onClick={handleSubmitPost}>사건 등록하기</S.SubmitBtn>
      </S.InformationCreationContainer>
    </div>
  );
}
