import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface TagSectionProps {
  onSelectTagData: (data: { tpo: string[]; season: string[]; mood: string[] }) => void;
}

const TagSection: React.FC<TagSectionProps> = ({ onSelectTagData }) => {
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
    "스포츠",
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

  // Handlers to update state and call onSelectTagData
  const handleSelectTPO = (tpo: string) => {
    const updatedList = selectedTPOList.includes(tpo)
      ? selectedTPOList.filter((item) => item !== tpo)
      : [...selectedTPOList, tpo];
    setSelectedTPOList(updatedList);
    onSelectTagData({ tpo: updatedList, season: selectedSeasonList, mood: selectedMoodList });
  };

  const handleSelectSeason = (season: string) => {
    const updatedList = selectedSeasonList.includes(season)
      ? selectedSeasonList.filter((item) => item !== season)
      : [...selectedSeasonList, season];
    setSelectedSeasonList(updatedList);
    onSelectTagData({ tpo: selectedTPOList, season: updatedList, mood: selectedMoodList });
  };

  const handleSelectMood = (mood: string) => {
    const updatedList = selectedMoodList.includes(mood)
      ? selectedMoodList.filter((item) => item !== mood)
      : [...selectedMoodList, mood];
    setSelectedMoodList(updatedList);
    onSelectTagData({ tpo: selectedTPOList, season: selectedSeasonList, mood: updatedList });
  };

  return (
    <ClosetSectionWrapper>
      <HeaderWrapper>
        <Title>태그선택</Title>
        {selectedTPOList.length > 0 || selectedSeasonList.length > 0 || selectedMoodList.length > 0 ? (
          <Select>{[...selectedTPOList, ...selectedSeasonList, ...selectedMoodList].join(', ')}</Select>
        ) : (
          <Select>선택 사항 없음</Select>
        )}
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
  flex: 1 0 25%;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 5px 0;
`;

const TagItem = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const CustomCheckbox = styled.span<{ selected: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid #555;
  border-radius: 4px;
  margin-right: 10px;
  display: inline-block;
  background-color: ${({ selected }) => (selected ? "#4caf50" : "transparent")};
  &:after {
    content: ${({ selected }) => (selected ? '"✓"' : '""')};
    color: white;
    display: block;
    text-align: center;
    line-height: 16px;
  }
`;

const TagName = styled.span`
  flex-grow: 1;
`;

const ItemTitle = styled.div`
  color: #666;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 20px;
`;

const ItemBox = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  padding: 20px;
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`;

const Select = styled.div``;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  background-color: #eee;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ClosetSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
`;

export default TagSection;
