import React from "react";
import styled from "styled-components";
import fetchGPTRecommendations from "../services/gptService";

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
          const result = await fetchGPTRecommendations(combinedData);

          // Calculate the center position for the popup
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
                  <p>${result}</p>
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
