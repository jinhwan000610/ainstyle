// src/components/Functionbtn.tsx
import React from "react";
import styled from "styled-components";
import axios from "axios";
import fetchGPTRecommendations from "../services/gptService";
import { useStyleContext } from "../context/StyleContext";

interface FunctionbtnProps {
  userData: {
    height: string;
    weight: string;
    size: string;
    fit: string;
    tpo: string[];
    mood: string[];
    gender: string;
  };
  weatherData: {
    desc: string;
    temp: number;
  } | null;
}

const Functionbtn: React.FC<FunctionbtnProps> = ({ userData, weatherData }) => {
  const { setStyleType, setGender } = useStyleContext();

  const handleButtonClick = async () => {
    if (userData && weatherData) {
      console.log("User Data:", userData);
      console.log("Weather Data:", weatherData);

      const isDataComplete = Object.values(userData).every((value) => {
        if (Array.isArray(value)) {
          return value.length > 0;
        }
        return value !== "";
      });

      if (isDataComplete) {
        try {
          // Combine user data and weather data
          const combinedData = { ...userData, weather: weatherData };
          const { formattedResponse, styleType } = await fetchGPTRecommendations(combinedData);

          console.log("GPT Result (Style Type):", styleType); // GPT 응답 확인
          console.log("Formatted GPT Response:", formattedResponse); // 포맷된 GPT 응답 확인

          // 스타일 타입 설정
          setStyleType(styleType);
          setGender(userData.gender);

          // 크롤링 요청
          const response = await axios.post('http://localhost:8080/api/crawl/images', { styleType, gender: userData.gender });
          console.log("Crawling Response:", response.data); // 크롤링 응답 확인

          // 이미지 로직은 Crawler에서 처리하고, 팝업은 아래와 같이 띄웁니다.
          const width = 600;
          const height = 400;
          const left = (window.screen.width / 2) - (width / 2);
          const top = (window.screen.height / 2) - (height / 2);

          const newWindow = window.open("", "_blank", `width=${width},height=${height},top=${top},left=${left}`);
          if (newWindow) {
            newWindow.document.write(`
              <html>
                <head>
                  <title>Recommendation</title>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      margin: 0;
                      padding: 0;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                      height: 100vh;
                      background-color: #f0f0f0;
                    }
                    h1 {
                      color: #333;
                    }
                    p {
                      font-size: 18px;
                      color: #666;
                      text-align: center;
                      max-width: 80%;
                    }
                    #continueButton {
                      padding: 10px 20px;
                      font-size: 16px;
                      font-weight: bold;
                      color: #fff;
                      background-color: #0077ff;
                      border: none;
                      border-radius: 5px;
                      cursor: pointer;
                      margin-top: 20px;
                    }
                    #continueButton:hover {
                      background-color: #005bb5;
                    }
                  </style>
                </head>
                <body>
                  <h1>Recommendation Result</h1>
                  <p>${formattedResponse}</p>
                  <button id="continueButton">계속하기</button>
                  <script>
                    document.getElementById('continueButton').addEventListener('click', function() {
                      window.opener.location.href = '/StyleCrawlerPage';
                      window.close();
                    });
                  </script>
                </body>
              </html>
            `);
          }
        } catch (error) {
          console.error("Failed to fetch recommendation:", error);
        }
      } else {
        alert("Please fill all the required data.");
      }
    } else {
      alert("Please fill all the required data.");
    }
  };

  return <StyledButton onClick={handleButtonClick}>Get Recommendation</StyledButton>;
};

const StyledButton = styled.button`
  position: fixed;
  top: 100px;
  right: 30px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #0077ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

export default Functionbtn;
