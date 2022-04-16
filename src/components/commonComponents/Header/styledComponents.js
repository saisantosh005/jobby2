import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2c364c;
  margin: 0px;
  padding: 20px;
  color: #ffffff;
`;
const Logo = styled.img`
  width: 100px;
`;

const LinkAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
`;
const LinkContainer = styled.div`
  /* display: flex;
  align-items: center;
  flex-grow: 1; */
`;

const LinkElement = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-family: "sans-serif";
  font-size: 20px;
  margin-right: 10px;
  margin-left: 10px;
`;
const Button = styled.button`
  background-color: #6366f1;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  padding: 8px 20px;
`;
export {
  HeaderContainer,
  Logo,
  LinkAndButtonContainer,
  LinkContainer,
  LinkElement,
  Button
};
