// src/services/gptService.ts
import axios from 'axios';

interface GPTRequestData {
  height: string;
  weight: string;
  size: string;
  fit: string;
  tpo: string[];
  season: string[];
  mood: string[];
  weather: {
    desc: string;
    temp: number;
  };
}

const fetchGPTRecommendations = async (data: GPTRequestData): Promise<string> => {
  try {
    console.log("API Key used:", process.env.REACT_APP_OPENAI_API_KEY);
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: '아래 보기에서 하나씩 선택해 추천해 주세요: 상의: 니트/스웨터, 후드 티셔츠, 맨투맨/스웨트셔츠, 긴소매 티셔츠, 셔츠/블라우스, 피케/카라 티셔츠, 반소매 티셔츠, 민소매 티셔츠, 스포츠 상의. 아우터: 없음, 후드 집업, 블루종/MA-1, 레더/라이더스 재킷, 무스탕/퍼, 트러커 재킷, 슈트/블레이저 재킷, 카디건, 플리스/뽀글이, 트레이닝 재킷, 스타디움 재킷, 환절기 코트, 겨울 싱글 코트, 겨울 더블 코트, 롱패딩/롱헤비 아우터, 숏패딩/숏헤비 아우터. 패딩 베스트. 바지: 데님 팬츠, 코튼 팬츠, 슈트 팬츠/슬랙스, 트레이닝/조거 팬츠, 숏 팬츠, 레깅스, 점프 슈트/오버올, 스포츠 하의.'
          },
          {
            role: 'system',
            content: '결과는 다음과 같이 나타내어 주세요: 상의 : ??, 하의 : ??, 아우터 : ??'
          },
          {
            role: 'user',
            content: `키: ${data.height}cm, 몸무게: ${data.weight}kg, 사이즈: ${data.size}, 핏: ${data.fit}, TPO: ${data.tpo.join(', ')}, 시즌: ${data.season.join(', ')}, 무드: ${data.mood.join(', ')}, 날씨: ${data.weather.desc}, 온도: ${data.weather.temp}도에 어울리는 의류를 추천해 주세요. 각각 상의, 아우터, 바지 중 하나씩 선택해 주세요.`
          }
        ],
        max_tokens: 400, // gpt 최대 응답 길이 조절
        temperature: 0.0, // 0~1 사이에서 조절 0이 높을 시 확률이 높은 응답 1이 높을 시 창의적인 응답
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data);
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error fetching GPT recommendations:', error);
    throw error;
  }
};

export default fetchGPTRecommendations;
