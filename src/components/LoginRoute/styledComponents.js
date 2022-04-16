import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #2c364c;
  padding: 20px;
  color: #ffffff;
`;
const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
const Image = styled.img`
  width: 100px;
`;
const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
const Label = styled.label`
  font-size: 12px;
  font-family: "Roboto";
`;

const Input = styled.input`
  background-color: inherit;
  color: #64748b;
  border: 1px solid #64748b;
  padding: 5px;
  margin: 3px;
  outline: none;
`;
const LoginButton = styled.button`
  background-color: #6366f1;
  color: #ffffff;
  border-radius: 3px;
  font-weight: bold;
  border: none;
  padding: 8px;
`;
const ErrorMessage = styled.p`
  color: #ff0b37;
`;

export {
  MainContainer,
  Form,
  ImageContainer,
  Image,
  LabelContainer,
  Label,
  Input,
  LoginButton,
  ErrorMessage
};
