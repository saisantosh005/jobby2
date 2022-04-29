import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { RiFolder5Fill } from "react-icons/ri";

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
  @media screen and (max-width: 767px) {
    display: none;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
`;
const LinkAndButtonContainerTwo = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
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
const HomeIconContainer = styled(Link)`
  display: inline;
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  margin-right: 10px;
`;
const JobsIconContainer = styled(Link)`
  display: inline;
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  margin-right: 10px;
`;
const LogoutContainer = styled.div``;
const HomeIcon = styled(AiFillHome)``;
const JobsIcon = styled(RiFolder5Fill)``;
const Logout = styled(FiLogOut)``;
const HomeLink = styled(Link)``;
export {
  HeaderContainer,
  Logo,
  LinkAndButtonContainer,
  LinkAndButtonContainerTwo,
  LinkContainer,
  LinkElement,
  Button,
  HomeIconContainer,
  JobsIconContainer,
  LogoutContainer,
  HomeIcon,
  JobsIcon,
  Logout,
  HomeLink
};
