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
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0px;

  & div {
    background-color: skyblue;
    font-weight: 800;
    border-radius: 10px;
    padding: 10px;
  }
`;

const Wrap = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 20px;
`;

const InputWrapper = styled.div`
  margin-left: 20px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  background-color: #fff;
  border-radius: 10px;

  & input {
    margin-left: 40px;
    border: 2px solid #000;
  }
`;

const TitleRight = styled.div`
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  width: 240px;
  padding: 0 8px;
  border-bottom: 15px solid #ffffff;
  margin-top: 5px;
  margin-bottom: 20px;
`;

const TitleLeft = styled.div`
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  width: 140px;
  padding: 0 8px;
  border-bottom: 15px solid #ffffff;
  position: absolute;
  left: 0px;
  top: 5px;
`;

const RightSection = styled.div`
  background-color: #e2e2e2;
  width: 48%;
  height: 100%;
  position: relative;
  font-size: 20px;
  display: inline-flex;
  flex-direction: column;
`;

const LeftSection = styled.div`
  background-color: #e2e2e2;
  width: 48%;
  height: 100%;
  position: relative;
`;

const SelectSectionWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export default SelectSection;
