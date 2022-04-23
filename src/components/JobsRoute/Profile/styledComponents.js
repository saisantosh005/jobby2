import styled from "styled-components";

const ProfileContainer = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/profile-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
`;
const Image = styled.img`
  width: 60px;
  max-width: 200px;
  min-height: 80px;
  border-radius: 50%;
`;
const Name = styled.h1`
  font-size: 20px;
  color: #6366f1;
`;
const Bio = styled.p`
  color: #b6c5ff;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
`;
const Button = styled.button`
  background: #6366f1;
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
`;
export { ProfileContainer, Image, Name, Bio, ButtonContainer, Button };
