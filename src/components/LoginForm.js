import { Component } from "react";
import { Form } from "./styledComponents";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
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

  render() {
    return (
      <Form className="form-container">
        <div>
          <label for="username">username</label>
          <input type="username" />
        </div>
        <div>
          <label for="password">password</label>
          <input type="password" />
        </div>
      </Form>
    );
  }
}
export default LoginForm;

// import styled from "styled-components";

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// export { Form };

// const Logiform =(props)=>{
//   const {} = props

//   return <></>
// }
