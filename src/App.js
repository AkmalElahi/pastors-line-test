import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import ModalA from "./screens/ModalA/ModalA";
import ModalB from "./screens/ModalB/ModalB";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/modalA">
            <ModalA />
          </Route>
          <Route exact path="/modalB">
            <ModalB />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
