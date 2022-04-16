import "./styles.css";
import LoginForm from "./components/LoginRoute/LoginForm";
import Home from "./components/Home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/about" component={Home} />
    </Switch>
  </Router>
);
export default App;
