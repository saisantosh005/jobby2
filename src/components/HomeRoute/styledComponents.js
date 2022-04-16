import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const HomeDetailsContainer = styled.div`
  background-image: url("https://assets.ccbp.in/frontend/react-js/home-lg-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  flex-grow: 1;
  padding: 20px;
`;
const Heading = styled.h1`
  font-size: 20px;
  color: #ffffff;
`;
const Description = styled.p`
  color: #ffffff;
`;

const Button = styled.button`
  background-color: #6366f1;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  padding: 8px 20px;
`;
export { HomeContainer, HomeDetailsContainer, Heading, Description, Button };
