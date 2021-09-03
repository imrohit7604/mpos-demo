import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormPage from "./form/FormPage";
import ResultPage from "./result/ResultPage";
function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={FormPage} />
          <Route path="/result/:id" component={ResultPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
