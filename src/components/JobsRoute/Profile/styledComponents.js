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
  border-radius: 50%;
`;
const Name = styled.h1`
  font-size: 20px;
  color: #6366f1;
`;
const Bio = styled.p`
  color: #b6c5ff;
`;

export { ProfileContainer, Image, Name, Bio };
