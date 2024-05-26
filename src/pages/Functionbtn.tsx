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
    season: string[];
    mood: string[];
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
          const newWindow = window.open("", "_blank", "width=600,height=400");
          if (newWindow) {
            newWindow.document.write(`
              <html>
                <head><title>Recommendation</title></head>
                <body>
                  <h1>Recommendation Result</h1>
                  <p>${result}</p>
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
