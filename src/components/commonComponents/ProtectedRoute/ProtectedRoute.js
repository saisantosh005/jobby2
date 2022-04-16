import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const token = Cookies.get("jwtToken");
  console.log(Cookies, "sadf");
  if (token === undefined) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
