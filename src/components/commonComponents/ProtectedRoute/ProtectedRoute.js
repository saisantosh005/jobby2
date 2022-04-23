import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const token = localStorage.getItem("jwt_token");
  console.log(token);
  if (token === null) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
