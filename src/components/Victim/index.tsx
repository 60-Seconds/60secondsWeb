import React, { useState } from "react";
import * as S from "./style";
import Header from "../../components/Common/Header/index";
import API from "../../../src/util/api";
import { VictimType } from "../../types/Victim";

export default function Victim() {
  const [post, setPost] = useState<VictimType>({
    idx: 0,
    disasterIdx: 0,
    name: "",
    gender: "",
    age: 0,
    info: "",
  });

  const handleChangerData = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
    console.log(name + value);
  };

  const handleSubmitPost = () => {
    API.post(`/v2/victim/register`, post)
      .then(() => {
        alert("희생자등록이 완료되었습니다.");
      })
      .catch((e) => {
        alert(
          "희생자 등록에 실패했습니다. 정보를 모두 입력했는지 확인해주세요."
        );
        console.log(e);
      });
  };

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
                name="name"
                value={post.name}
                onChange={handleChangerData}
              ></S.Input2>
            </S.Element>
            <S.Element>
              <S.Input2
                type="number"
                placeholder="만 나이를 입력해주세요."
                name="age"
                value={post.age}
                onChange={handleChangerData}
              ></S.Input2>
            </S.Element>
            <S.Element>
              <S.Select
                name="gender"
                value={post.gender}
                onChange={handleChangerData}
              >
                <option>남성</option>
                <option>여성</option>
              </S.Select>
            </S.Element>
          </S.NumElement>
        </div>

        <div>
          <S.Title>희생자 이야기</S.Title>
          <S.Textarea
            placeholder="내용을 입력해주세요."
            name="info"
            value={post.info}
            onChange={handleChangerData}
          />
        </div>
        <S.SubmitBtn onClick={handleSubmitPost}>희생자 등록하기</S.SubmitBtn>
      </S.InformationCreationContainer>
    </div>
  );
}
