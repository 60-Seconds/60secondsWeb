import styled from "styled-components";

export const TitleImg = styled.img`
  position: relative;
  margin-top: 4.6%;
  width: 100%;
  height: 500px;
  filter: brightness(40%);
  opacity: 0.85;
`;

export const MemorialHall = styled.div`
  position: absolute;
  margin-top: -28%;
  margin-left: 80%;

  width: 15%;
  height: 30%;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--ffffff, #fff);
  box-shadow: 0px -1px 20px 0px rgba(114, 114, 114, 0.1);
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Flower = styled.img`
  width: 60%;
  height: 60%;
  transform: rotate(-30deg);
  flex-shrink: 0;
  margin-top: -5%;
`;
export const Flower2 = styled.img`
  width: 60%;
  height: 60%;
  transform: rotate(-30deg);
  flex-shrink: 0;
  margin-top: 4%;
`;

export const Info1 = styled.h4`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -5%;
`;
export const Info2 = styled.h6`
  margin-top: 10px;
  color: var(--727272, #727272);
  text-align: center;
  font-family: Inter;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Info3 = styled.h6`
  width: 80%;
  margin-top: 10px;
  color: var(--727272, #727272);

  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Bar = styled.div`
  margin-left: 19%;
  width: 140px;
  height: 2px;
  background: var(--f-2-f-2-f-2, #f2f2f2);
`;

export const Bar2 = styled.div`
  margin-left: 40%;
  width: 140px;
  height: 2px;
  background: var(--f-2-f-2-f-2, #f2f2f2);
`;

export const TitleBox = styled.div`
  margin-top: -8%;
  position: relative;
  flex-shrink: 0;
  width: 800px;
  height: 270px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--ffffff, #fff);
  box-shadow: 0px -1px 20px 0px rgba(114, 114, 114, 0.1);
`;
export const Day = styled.h4`
  color: var(--727272, #727272);
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Name = styled.h4`
  margin-top: -15px;
  color: var(--000000, #000);
  text-align: center;
  font-family: Noto Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Location = styled.h4`
  margin-top: -15px;
  color: var(--727272, #727272);
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`;

export const NumBox = styled.div`
  display: flex;
  margin-left: 34%;
`;

export const NumElement = styled.div`
  margin-right: 10%;
  align-items: center;
  justify-content: baseline;
  text-align: center;
`;

export const NumTitle = styled.h4`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1px;
`;
export const NumValue = styled.h4`
  margin-top: -10px;
  color: var(--727272, #727272);
  text-align: center;
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1px;
`;

export const InfoBox = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const InfoTitle = styled.h1`
  margin-top: 5%;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Cause = styled.h4`
  margin-top: -10px;
  display: flex;
  width: 1200px;
  flex-direction: column;
  flex-shrink: 0;
  color: var(--000000, #000);
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const VictimBox = styled.div`
  margin-bottom: 2%;
  display: flex;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const VictimElement = styled.div`
  margin-left: 1%;
  margin-right: 1%;
  width: 190px;
  height: auto;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--ffffff, #fff);

  /* shadow */
  box-shadow: 0px -1px 20px 0px rgba(114, 114, 114, 0.1);
`;

export const VictimName = styled.h4`
  margin-top: -5px;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const VictimAge = styled.h4`
  margin-top: -13px;
  color: var(--727272, #727272);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const VictimDetails = styled.h4`
  display: flex;
  width: 200px;
  flex-direction: column;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
