import styled from "styled-components";

const JobRouteMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #272727;
  min-height: 100vh;
`;
const JobRouteDetailsContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  width: 40vw;
`;
const FilterAndJobListContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  display: flex;
  align-self: center;
  margin: 20px;
`;
const EmployementListContainer = styled.div`
  color: #ffffff;
  padding: 10px;
  margin: 10px 0px;
  border-bottom: 2px solid #64748b;
`;
const Heading = styled.h1`
  font-size: 16px;
  margin: 0px;
  margin-bottom: 6px;
`;
const LableInputContainer = styled.div``;
const Input = styled.input``;
const Label = styled.label`
  margin-left: 5px;
`;
const JobListContainer = styled.div`
  width: 80%;
  padding: 20px;
  margin: 10px;
`;
const NoJobDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SpecialImage = styled.img`
  width: 90%;
  padding: 20px;
`;

const HeadingTwo = styled.h1`
  text-align: center;
  color: #ffffff;
`;
const Text = styled.p`
  color: #ffffff;
  text-align: center;
`;
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  background-color: #6366f1;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  padding: 8px 20px;
`;

export {
  JobRouteMainContainer,
  JobRouteDetailsContainer,
  FilterAndJobListContainer,
  EmployementListContainer,
  LableInputContainer,
  Heading,
  Input,
  Label,
  JobListContainer,
  SpecialImage,
  Text,
  HeadingTwo,
  NoJobDetails,
  ErrorContainer,
  Button
};
