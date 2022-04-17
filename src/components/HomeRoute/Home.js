import { Component } from "react";
import Header from "../commonComponents/Header/Header";
import {
  Heading,
  Description,
  Button,
  HomeContainer,
  HomeDetailsContainer
} from "./styledComponents";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickFind = () => {
    const { history } = this.props;
    history.replace("/jobs");
  };

  render() {
    return (
      <HomeContainer>
        <Header />
        <HomeDetailsContainer>
          <Heading>Find The Job That Fits Your Life</Heading>
          <Description>
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits abilities and potential.
          </Description>
          <Button onClick={this.onClickFind}>Find Jobs</Button>
        </HomeDetailsContainer>
      </HomeContainer>
    );
  }
}

export default Home;
