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
  border: 2px solid red;
`;
const FilterAndJobListContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  display: flex;
  align-self: center;
  border: 2px solid red;
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
  /* background: red; */
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
  JobListContainer
};
