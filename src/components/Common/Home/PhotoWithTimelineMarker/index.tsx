import React, { useEffect, useState } from "react";
import * as S from "./style";
import Img1 from "../../../../assets/광주 화정 아이파크 붕괴 사고 1.png";
import Img2 from "../../../../assets/성수대교 붕괴 사고 1995.png";
import Img3 from "../../../../assets/삼풍백화점 붕괴 사고 1.png";
import Img4 from "../../../../assets/금릉 버스 추락 사고 1968.png";
import Img5 from "../../../../assets/서해안고속도로서해대교 29중 추돌사고 1.png";
import Img6 from "../../../../assets/대구 지하철 화제 사고 1.png";
import Img7 from "../../../../assets/국화꽃png-removebg-preview.png";
import API from "../../../../util/api";
import { HomeType } from "../../../../types/Home";
import { useNavigate } from "react-router-dom";
import Details from "../../../Details";

export default function PhotoWithTimelineMarker() {
  const navigate = useNavigate();
  const [getItem, setGetItem] = useState<HomeType[]>([
    {
      idx: 0,
      type: "",
      name: "",
      datetime: "",
      location: "",
      dead: "",
      injury: "",
      missing: "",
      info: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/v2/disaster/getList?type=nul`);
        const { data } = response.data;
        console.log("data", data);
        setGetItem(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("getitem");
    console.log(getItem);
  }, [getItem]);

  const [hoveredImageName, setHoveredImageName] = useState("");
  const [selectedCircle, setSelectedCircle] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleImgMouseEnter = (imageName: string) => {
    setHoveredImageName(imageName);
    setIsHovered(true);
  };

  const handleImgMouseLeave = () => {
    setHoveredImageName("");
    setIsHovered(false);
  };

  const handleCircleMouseEnter = (circleName: string) => {
    setSelectedCircle(circleName);
    setIsHovered(true);
  };

  const handleCircleMouseLeave = () => {
    setSelectedCircle("");
    setIsHovered(false);
  };

  const handleChangerPage = (idx: number) => {
    navigate(`/Details/${idx}`);
  };

  return (
    <>
      <S.ImgBox>
        <S.ImgContainer>
          <S.Img
            className="1"
            src={Img1}
            alt="error"
            onMouseEnter={() => handleImgMouseEnter("1")}
            onMouseLeave={handleImgMouseLeave}
            style={{
              opacity:
                hoveredImageName === "1" || selectedCircle === "1"
                  ? "0.4"
                  : "10",
            }}
            onClick={() => handleChangerPage(getItem[0].idx)}
          ></S.Img>
          <div>
            {(hoveredImageName === "1" || selectedCircle === "1") &&
              isHovered && <S.Flower src={Img7} alt="error" />}
          </div>
          <S.Img
            className="2"
            src={Img2}
            alt="error"
            onMouseEnter={() => handleImgMouseEnter("2")}
            onMouseLeave={handleImgMouseLeave}
            style={{
              opacity:
                hoveredImageName === "2" || selectedCircle === "2"
                  ? "0.4"
                  : "10",
            }}
            onClick={() => handleChangerPage(getItem[1].idx)}
          />
          <div>
            {(hoveredImageName === "2" || selectedCircle === "2") &&
              isHovered && <S.Flower src={Img7} alt="error" />}
          </div>
          <S.Img
            className="3"
            src={Img3}
            alt="error"
            onMouseEnter={() => handleImgMouseEnter("3")}
            onMouseLeave={handleImgMouseLeave}
            style={{
              opacity:
                hoveredImageName === "3" || selectedCircle === "3"
                  ? "0.4"
                  : "10",
            }}
            onClick={() => handleChangerPage(getItem[2].idx)}
          />
          <div>
            {(hoveredImageName === "3" || selectedCircle === "3") &&
              isHovered && <S.Flower src={Img7} alt="error" />}
          </div>
        </S.ImgContainer>
        <div style={{ marginBottom: "5%" }}>
          <S.Bar1></S.Bar1>
          <S.CircleContainer>
            <S.Circle
              className="1"
              style={{
                backgroundColor:
                  hoveredImageName === "1" || selectedCircle === "1"
                    ? "#3D52E3"
                    : "#d9d9d9",
              }}
              onMouseEnter={() => handleCircleMouseEnter("1")}
              onMouseLeave={handleCircleMouseLeave}
              onClick={() => handleChangerPage(getItem[0].idx)}
            ></S.Circle>
            <S.Circle
              className="2"
              style={{
                backgroundColor:
                  hoveredImageName === "2" || selectedCircle === "2"
                    ? "#3D52E3"
                    : "#d9d9d9",
              }}
              onMouseEnter={() => handleCircleMouseEnter("2")}
              onMouseLeave={handleCircleMouseLeave}
              onClick={() => handleChangerPage(getItem[1].idx)}
            ></S.Circle>
            <S.Circle
              className="3"
              style={{
                backgroundColor:
                  hoveredImageName === "3" || selectedCircle === "3"
                    ? "#3D52E3"
                    : "#d9d9d9",
              }}
              onMouseEnter={() => handleCircleMouseEnter("3")}
              onMouseLeave={handleCircleMouseLeave}
              onClick={() => handleChangerPage(getItem[2].idx)}
            ></S.Circle>
          </S.CircleContainer>
          <S.DataInfoBox>
            {getItem.map(
              (item, idx) =>
                idx < 3 && (
                  <S.Data key={idx}>
                    <S.DayText>{item.datetime}</S.DayText>
                    <h4>{item.name}</h4>
                  </S.Data>
                )
            )}
          </S.DataInfoBox>
        </div>

        <S.ImgContainer>
          <S.Img
            className="4"
            src={Img4}
            alt="error"
            onMouseEnter={() => handleImgMouseEnter("4")}
            onMouseLeave={handleImgMouseLeave}
            style={{
              opacity:
                hoveredImageName === "4" || selectedCircle === "4"
                  ? "0.4"
                  : "10",
            }}
            onClick={() => handleChangerPage(getItem[3].idx)}
          />
          <div>
            {(hoveredImageName === "4" || selectedCircle === "4") &&
              isHovered && <S.Flower src={Img7} alt="error" />}
          </div>

          <S.Img
            className="5"
            src={Img5}
            alt="error"
            onMouseEnter={() => handleImgMouseEnter("5")}
            onMouseLeave={handleImgMouseLeave}
            style={{
              opacity:
                hoveredImageName === "5" || selectedCircle === "5"
                  ? "0.4"
                  : "10",
            }}
            onClick={() => handleChangerPage(getItem[4].idx)}
          />
          <div>
            {(hoveredImageName === "5" || selectedCircle === "5") &&
              isHovered && <S.Flower src={Img7} alt="error" />}
          </div>
          <S.Img
            className="6"
            src={Img6}
            alt="error"
            onMouseEnter={() => handleImgMouseEnter("6")}
            onMouseLeave={handleImgMouseLeave}
            style={{
              opacity:
                hoveredImageName === "6" || selectedCircle === "6"
                  ? "0.4"
                  : "10",
            }}
            onClick={() => handleChangerPage(getItem[5].idx)}
          />
          <div>
            {(hoveredImageName === "6" || selectedCircle === "6") &&
              isHovered && <S.Flower src={Img7} alt="error" />}
          </div>
        </S.ImgContainer>
        <div style={{ marginBottom: "5%" }}>
          <S.Bar2></S.Bar2>
          <S.CircleContainer>
            <S.Circle
              className="4"
              style={{
                backgroundColor:
                  hoveredImageName === "4" || selectedCircle === "4"
                    ? "#3D52E3"
                    : "#d9d9d9",
              }}
              onMouseEnter={() => handleCircleMouseEnter("4")}
              onMouseLeave={handleCircleMouseLeave}
              onClick={() => handleChangerPage(getItem[3].idx)}
            ></S.Circle>
            <S.Circle
              className="5"
              style={{
                backgroundColor:
                  hoveredImageName === "5" || selectedCircle === "5"
                    ? "#3D52E3"
                    : "#d9d9d9",
              }}
              onMouseEnter={() => handleCircleMouseEnter("5")}
              onMouseLeave={handleCircleMouseLeave}
              onClick={() => handleChangerPage(getItem[4].idx)}
            ></S.Circle>
            <S.Circle
              className="6"
              style={{
                backgroundColor:
                  hoveredImageName === "6" || selectedCircle === "6"
                    ? "#3D52E3"
                    : "#d9d9d9",
              }}
              onMouseEnter={() => handleCircleMouseEnter("6")}
              onMouseLeave={handleCircleMouseLeave}
              onClick={() => handleChangerPage(getItem[5].idx)}
            ></S.Circle>
          </S.CircleContainer>
          <S.DataInfoBox>
            {getItem.map(
              (item, idx) =>
                idx > 3 && (
                  <S.Data key={idx}>
                    <S.DayText>{item.datetime}</S.DayText>
                    <h4>{item.name}</h4>
                  </S.Data>
                )
            )}
          </S.DataInfoBox>
        </div>
      </S.ImgBox>
    </>
  );
}
