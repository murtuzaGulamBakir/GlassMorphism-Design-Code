import "./App.css";
import Countries from "./components/Countries";
import Players from "./components/Players";
import Matches from "./components/Matches";
import Result from "./components/Result";
import Score from "./components/Score";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Countries />
          </Route>
          <Route exact path="/players">
            <Players />
          </Route>
          <Route exact path="/matches">
            <Matches />
          </Route>
          <Route exact path="/results">
            <Result />
          </Route>
          <Route exact path="/score">
            <Score />
          </Route>
          <Route path="/">
            <Countries />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
