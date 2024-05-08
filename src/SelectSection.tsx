import { useState } from "react";
import styled from "styled-components";

const SelectSection = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("");
  const [fit, setFit] = useState("");
  const sizeList = ["S", "M", "L", "XL", "2XL"];
  const fitList = ["스키니", "정핏", "오버핏", "맥시"];
  return (
    <SelectSectionWrapper>
      <LeftSection>
        <TitleLeft>위치선택</TitleLeft>
      </LeftSection>
      <RightSection>
        <TitleRight>사용자 정보입력</TitleRight>
        <Wrap>
          <InputWrapper>
            <div>키</div>
            <span>
              <input
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
              />
              cm
            </span>
          </InputWrapper>
          <InputWrapper>
            <div>몸무게</div>
            <span>
              <input
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
              />
              kg
            </span>
          </InputWrapper>
        </Wrap>
        <Wrap>
          <InputWrapper>
            <div>평소 사이즈</div>
            <ListWrap>
              {sizeList.map((s) => (
                <div
                  key={s}
                  onClick={() => setSize(s)}
                  style={{ backgroundColor: size === s ? "skyblue" : "gray" }}
                >
                  {s}
                </div>
              ))}
            </ListWrap>
          </InputWrapper>
          <InputWrapper>
            <div>원하는 핏</div>
            <ListWrap>
              {fitList.map((f) => (
                <div
                  key={f}
                  onClick={() => setFit(f)}
                  style={{ backgroundColor: fit === f ? "skyblue" : "gray" }}
                >
                  {f}
                </div>
              ))}
            </ListWrap>
          </InputWrapper>
        </Wrap>
      </RightSection>
    </SelectSectionWrapper>
  );
};

const ListWrap = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0;

  & div {
    background-color: #cccccc;
    font-weight: bold;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    white-space: nowrap; // Prevent text wrapping
    min-width: 70px; // Minimum width for each option

    &:hover {
      background-color: #a0a0a0;
    }

    &.active {
      background-color: #0077ff;
      color: #ffffff;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  & > div {
    margin-bottom: 5px;
  }

  & input {
    padding: 8px;
    width: calc(100% - 16px); // To accommodate padding
    border: 1px solid #cccccc;
    border-radius: 5px;
    font-size: 16px;
  }
`;

const TitleRight = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  background-color: #ffffff;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const TitleLeft = styled.div`
font-size: 24px;
font-weight: bold;
color: #333333;
background-color: #ffffff;
padding: 10px 20px;
margin-bottom: 20px;
border-radius: 5px;
`;
const RightSection = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const LeftSection = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const SelectSectionWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
`;

export default SelectSection;
