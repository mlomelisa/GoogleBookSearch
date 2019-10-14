import React from "react";
import NavTabs from "./components/NavTabs";
import GoogleContainer from "./pages/googleBooksContainer.js";
import Jumbotron from "./components/jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={GoogleContainer} />
          <Route exact path="/Search" component={GoogleContainer} />
        </Switch>
      </div>
    </Router>
  ) ;
}

export default App;

