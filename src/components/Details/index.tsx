import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../util/api";
import { HomeType } from "../../types/Home";
import { VictimType } from "../../types/Victim";
import Header from "../Common/Header";
import * as S from "./stlye";
import Img from "../../assets/성수대교 붕괴 사고 1995-1.png";
import Img2 from "../../assets/국화꽃png-removebg-preview.png";
import { useNavigate, useLocation } from "react-router-dom";

const Details: React.FC = () => {
  const { idxValue } = useParams<{ idxValue: string }>();
  const [accidentData, setAccidentData] = useState<HomeType | null>(null);
  const [victimData, setVictimData] = useState<VictimType[]>([]);
  const [victimClick, setVictimClick] = useState(false);
  const [victimInfo, setVictimInfo] = useState<VictimType | null>(null);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/v2/disaster/get?idx=${idxValue}`);
        const { data } = response.data;
        setAccidentData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [idxValue]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/v2/victim/getList?disaster=3`);
        const { data } = response.data;
        setVictimData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [idxValue]);

  const handleImgMouseClick = async (idx: number) => {
    setVictimClick(true);
    try {
      const response = await API.get(`/v2/victim/get?idx=${idx}`);
      const { data } = response.data;
      setVictimInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangerPage = () => {
    const url = `http://172.16.1.136:3000/?disaster=${idxValue}`;
    window.location.href = url;
  };

  if (!victimData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <S.TitleImg src={Img} alt="error" />
      <S.MemorialHall onClick={() => handleChangerPage()}>
        <S.Flower src={Img2} />
        <S.Info1>
          여러분의 국화 한 송이가
          <br /> 유가족분들께 큰 힘이 됩니다
        </S.Info1>
        <S.Bar />
        <S.Info2>
          국화 한 번 클릭 시, 한 송이가 추가되고
          <br /> 3D 납골당으로 넘어갑니다
        </S.Info2>
      </S.MemorialHall>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        {accidentData && (
          <S.TitleBox>
            <S.Day>{accidentData.datetime}</S.Day>
            <S.Name>{`"${accidentData.name}"`}</S.Name>
            <S.Location>{accidentData.location}</S.Location>
            <S.Bar2 />
            <S.NumBox>
              <S.NumElement>
                <S.NumTitle>사상자</S.NumTitle>
                <S.NumValue>{accidentData.dead}</S.NumValue>
              </S.NumElement>
              <S.NumElement>
                <S.NumTitle>부상자</S.NumTitle>
                <S.NumValue>{accidentData.injury}</S.NumValue>
              </S.NumElement>
              <S.NumElement>
                <S.NumTitle>실종자</S.NumTitle>
                <S.NumValue>{accidentData.missing}</S.NumValue>
              </S.NumElement>
            </S.NumBox>
          </S.TitleBox>
        )}
      </div>
      <div>
        <S.InfoBox>
          <S.InfoTitle>원인</S.InfoTitle>
        </S.InfoBox>
        <S.InfoBox>
          <S.Cause>{accidentData?.info}</S.Cause>
        </S.InfoBox>
      </div>
      <S.InfoBox>
        <S.InfoTitle>희생자</S.InfoTitle>
      </S.InfoBox>

      <S.VictimBox>
        {victimData.map(
          (item, idx) =>
            idx < 5 && (
              <S.VictimElement
                key={idx}
                onClick={() => handleImgMouseClick(idx)}
              >
                <S.Flower src={Img2} />
                <S.VictimName>{item.name}</S.VictimName>
                <S.VictimAge>{item.age}</S.VictimAge>
                {victimClick && victimInfo && idx === victimInfo.idx && (
                  <div>
                    <S.InfoBox>
                      <S.Info3>{victimInfo.info}</S.Info3>
                    </S.InfoBox>
                  </div>
                )}
              </S.VictimElement>
            )
        )}
      </S.VictimBox>

      <S.VictimBox>
        {victimData.map(
          (item, idx) =>
            idx > 5 && (
              <S.VictimElement
                key={idx}
                onClick={() => handleImgMouseClick(idx)}
              >
                <S.Flower src={Img2} />
                <S.VictimName>{item.name}</S.VictimName>
                <S.VictimAge>{item.age}</S.VictimAge>
                {victimClick && victimInfo && idx === victimInfo.idx && (
                  <div>
                    <S.Info3>{victimInfo.info}</S.Info3>
                  </div>
                )}
              </S.VictimElement>
            )
        )}
      </S.VictimBox>
    </div>
  );
};

export default Details;
