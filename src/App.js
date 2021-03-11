import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoMatch from "./Components/No Match/NoMatch";
import TeamDetails from "./Components/TeamDetails/TeamDetails";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/team/:teamId">
            <TeamDetails></TeamDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
