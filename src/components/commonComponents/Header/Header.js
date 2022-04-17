import Component from "react";
import { withRouter } from "react-router-dom";
import Cookie from "js-cookie";
import {
  HeaderContainer,
  Logo,
  LinkAndButtonContainer,
  LinkContainer,
  LinkElement,
  Button
} from "./styledComponents";
const Header = (props) => {
  const { history } = props;
  const onLogout = () => {
    Cookie.remove("jwt_token");
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
    </HeaderContainer>
  );
};

export default withRouter(Header);
