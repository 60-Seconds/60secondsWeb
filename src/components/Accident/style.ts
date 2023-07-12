import styled from "styled-components";

export const InformationCreationContainer = styled.div`
  margin-top: 6%;
  margin-left: 27%;
`;

export const BigTitle = styled.h1`
  display: flex;
  margin-left: 23%;
`;

export const Title = styled.h4`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input1 = styled.input`
  width: 60%;
  height: 40px;
  flex-shrink: 0;

  border-radius: 10px;
  border: 1px solid var(--f-2-f-2-f-2, #f2f2f2);
  background: var(--fbfbfa, #fbfbfa);
`;

export const Input2 = styled.input`
  width: 110%;
  height: 30px;
  flex-shrink: 0;
  margin-right: 10%;

  border-radius: 2px;
  border: 1px solid var(--f-2-f-2-f-2, #f2f2f2);
  background: var(--fbfbfa, #fbfbfa);
`;

export const NumElement = styled.div`
  display: flex;
`;

export const Element = styled.div`
  margin-right: 5%;
`;

export const OtherElement = styled.div`
  display: flex;
`;

export const Textarea = styled.textarea`
  width: 60%;
  height: 250px;
  flex-shrink: 0;

  border-radius: 2px;
  border: 1px solid var(--f-2-f-2-f-2, #f2f2f2);
  background: var(--fbfbfa, #fbfbfa);
`;

export const SubmitBtn = styled.button`
  width: 12%;
  height: 40px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--3-d-52-e-3, #3d52e3);
  color: #fff;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 2%;
`;
