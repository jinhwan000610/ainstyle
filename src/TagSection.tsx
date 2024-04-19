import { useState } from "react";
import styled from "styled-components";

const TagSection = () => {
  const [selectedTPOList, setSelectedTPOList] = useState<string[]>([]);
  const [selectedSeasonList, setSelectedSeasonList] = useState<string[]>([]);
  const [selectedMoodList, setSelectedMoodList] = useState<string[]>([]);
  const tpoList = [
    "바다",
    "여행",
    "캠퍼스",
    "카페",
    "데이트",
    "결혼식",
    "출근",
    "데일리",
  ];
  const seasonList = ["봄", "여름", "가을", "겨울"];
  const moodList = [
    "미니멀",
    "이지캐주얼",
    "비지니스캐주얼",
    "아에카지",
    "스트릿",
    "시티보이",
    "원마일웨어",
    "스포티",
    "유니크",
    "레트로",
    "러블리",
    "모던캐주얼",
  ];

  const handleSelectTPO = (tpo: string) => {
    const isSelected = selectedTPOList.includes(tpo);
    if (isSelected) {
      setSelectedTPOList(selectedTPOList.filter((item) => item !== tpo));
    } else {
      setSelectedTPOList([...selectedTPOList, tpo]);
    }
  };

  const handleSelectSeason = (season: string) => {
    const isSelected = selectedSeasonList.includes(season);
    if (isSelected) {
      setSelectedSeasonList(
        selectedSeasonList.filter((item) => item !== season)
      );
    } else {
      setSelectedSeasonList([...selectedSeasonList, season]);
    }
  };

  const handleSelectMood = (mood: string) => {
    const isSelected = selectedMoodList.includes(mood);
    if (isSelected) {
      setSelectedMoodList(selectedMoodList.filter((item) => item !== mood));
    } else {
      setSelectedMoodList([...selectedMoodList, mood]);
    }
  };

  return (
    <ClosetSectionWrapper>
      <HeaderWrapper>
        <Title>태그선택</Title>
        <Select>선택 사항 없음</Select>
      </HeaderWrapper>
      <BodyWrapper>
        <ItemBox>
          <ItemTitle>TPO</ItemTitle>
          <TagWrapper>
            {tpoList.map((tpo, index) => (
              <TagLabel key={index}>
                <TagItem
                  type="checkbox"
                  checked={selectedTPOList.includes(tpo)}
                  onChange={() => handleSelectTPO(tpo)}
                />
                <CustomCheckbox selected={selectedTPOList.includes(tpo)} />
                <TagName>{tpo}</TagName>
              </TagLabel>
            ))}
          </TagWrapper>
        </ItemBox>
        <ItemBox>
          <ItemTitle>SEASON</ItemTitle>
          <TagWrapper>
            {seasonList.map((season, index) => (
              <TagLabel key={index}>
                <TagItem
                  type="checkbox"
                  checked={selectedSeasonList.includes(season)}
                  onChange={() => handleSelectSeason(season)}
                />
                <CustomCheckbox
                  selected={selectedSeasonList.includes(season)}
                />
                <TagName>{season}</TagName>
              </TagLabel>
            ))}
          </TagWrapper>
        </ItemBox>
        <ItemBox>
          <ItemTitle>MOOD</ItemTitle>
          <TagWrapper>
            {moodList.map((mood, index) => (
              <TagLabel key={index}>
                <TagItem
                  type="checkbox"
                  checked={selectedMoodList.includes(mood)}
                  onChange={() => handleSelectMood(mood)}
                />
                <CustomCheckbox selected={selectedMoodList.includes(mood)} />
                <TagName>{mood}</TagName>
              </TagLabel>
            ))}
          </TagWrapper>
        </ItemBox>
      </BodyWrapper>
    </ClosetSectionWrapper>
  );
};

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
`;

const TagLabel = styled.label`
  flex: 0 1 calc(50% - 10px);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const TagItem = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const CustomCheckbox = styled.span<{ selected: boolean }>`
  width: 16px;
  height: 16px;
  border: 2px solid #999;
  border-radius: 4px;
  margin-right: 8px;
  display: inline-block;
  background-color: ${({ selected }) => (selected ? "#4caf50" : "transparent")};
  &:after {
    content: ${({ selected }) => (selected ? '"✓"' : '""')};
    color: white;
    display: block;
    text-align: center;
    line-height: 12px;
  }
`;

const TagName = styled.span`
  padding: 5px 0;
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`;

const ItemTitle = styled.div`
  color: gray;
  margin-top: 8px;
  margin-left: 20px;
`;

const ItemBox = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 20px;
  margin: 0 10px;
  height: 100%;

  // 첫 번째와 마지막 칸의 margin을 조정하여 전체적으로 균등한 간격을 유지합니다.
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const BodyWrapper = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100%;
`;

const Select = styled.div``;
const Title = styled.div`
  font-size: 20px;
  color: #fff;
`;

const HeaderWrapper = styled.div`
  width: calc(100% - 40px);
  display: inline-flex;
  justify-content: space-between;
  padding: 0px 20px;
`;

const ClosetSectionWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: inline-flex;
  display: inline-flex;
  flex-direction: column;
  margin-top: 20px;
  background-color: #000;
`;

export default TagSection;
