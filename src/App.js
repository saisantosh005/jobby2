import "./styles.css";
import LoginForm from "./components/LoginRoute/LoginForm";
import Home from "./components/HomeRoute/Home";
import ProtectedRoute from "./components/commonComponents/ProtectedRoute/ProtectedRoute";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/about" component={Home} />
    </Switch>
  </Router>
);
export default App;
