import Component from "react";
import { withRouter } from "react-router-dom";
import Cookie from "js-cookie";

import {
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
  Logout
} from "./styledComponents";
const Header = (props) => {
  const { history } = props;
  const onLogout = () => {
    localStorage.removeItem("jwt_token");
    // Cookie.remove("jwt_token");
    history.replace("/");
  };
  return (
    <HeaderContainer>
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="logo"
      />
      <LinkAndButtonContainer>
        <LinkContainer>
          <LinkElement to="/home">Home</LinkElement>
          <LinkElement to="/jobs">Jobs</LinkElement>
        </LinkContainer>
        <Button onClick={onLogout}>Logout</Button>
      </LinkAndButtonContainer>
      <LinkAndButtonContainerTwo>
        <HomeIconContainer to="/home">
          <HomeIcon />
        </HomeIconContainer>
        <JobsIconContainer to="/jobs">
          <JobsIcon />
        </JobsIconContainer>
        <LogoutContainer>
          <Logout onClick={onLogout} />
        </LogoutContainer>
      </LinkAndButtonContainerTwo>
    </HeaderContainer>
  );
};

export default withRouter(Header);
