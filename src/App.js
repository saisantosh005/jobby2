import "./styles.css";
import LoginForm from "./components/LoginRoute/LoginForm";
import Home from "./components/HomeRoute/Home";
import ProtectedRoute from "./components/commonComponents/ProtectedRoute/ProtectedRoute";
import JobDetailsRoute from "./components/JobDetailsRoute/JobDetailsRoute/JobDetailsRoute";
import JobRoute from "./components/JobsRoute/JobRoute/JobRoute";
import NotFound from "./components/NotFoundRoute/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/jobs" component={JobRoute} />
      <Route exact path="/jobs/:id" component={JobDetailsRoute} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default App;
