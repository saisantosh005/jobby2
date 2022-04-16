import { Component } from "react";
import Cookies from "js-cookie";
import {
  MainContainer,
  Form,
  ImageContainer,
  Image,
  LabelContainer,
  Label,
  Input,
  LoginButton,
  ErrorMessage
} from "./styledComponents";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      errorMessage: false
    };
  }

  onChangeUserName = (event) => {
    this.setState({
      userName: event.target.value
    });
  };
  onChangePassword = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { history } = this.props;

    const { userName, password } = this.state;

    const userDetails = {
      username: userName,
      password: password
    };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails)
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
      Cookies.set("jwtToken", responseData.jwt_token, { expires: 30 });
      history.replace("/about");
    } else {
      this.setState({
        errorMessage: "true"
      });
    }
  };

  render() {
    const { userName, password, errorMessage } = this.state;
    return (
      <MainContainer>
        <Form className="form-container">
          <ImageContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="logo"
            />
          </ImageContainer>
          <LabelContainer>
            <Label htmlFor="username">USERNAME</Label>
            <Input
              type="text"
              placeholder="username"
              value={userName}
              onChange={this.onChangeUserName}
            />
          </LabelContainer>
          <LabelContainer>
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={this.onChangePassword}
            />
          </LabelContainer>
          <LoginButton onClick={this.onSubmit}>Login</LoginButton>
          {errorMessage && (
            <ErrorMessage>*Username and Password didn't match</ErrorMessage>
          )}
        </Form>
      </MainContainer>
    );
  }
}
export default LoginForm;

// }
