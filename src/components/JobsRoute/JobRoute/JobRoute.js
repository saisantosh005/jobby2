import { Component } from "react";
import Header from "../../commonComponents/Header/Header";
import Profile from "../Profile/Profile";
import {
  JobRouteMainContainer,
  JobRouteDetailsContainer
} from "./styledComponents";

class JobRoute extends Component {
  render() {
    return (
      <JobRouteMainContainer>
        <Header />
        <JobRouteDetailsContainer>
          <Profile />
        </JobRouteDetailsContainer>
      </JobRouteMainContainer>
    );
  }
}
export default JobRoute;
