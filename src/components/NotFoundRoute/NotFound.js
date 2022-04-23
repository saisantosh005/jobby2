import Header from "../commonComponents/Header/Header";

import {
  NotFoundMainContainer,
  Image,
  Heading,
  Text,
  DetailsContainer
} from "./styledComponents";

const NotFound = (props) => {
  return (
    <NotFoundMainContainer>
      <Header />
      <DetailsContainer>
        <Image src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png" />
        <Heading>Page Not Found</Heading>
        <Text>We're sorry, the page you requested could not be found.</Text>
      </DetailsContainer>
    </NotFoundMainContainer>
  );
};
export default NotFound;
