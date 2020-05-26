import React from "react";
import "./App.less";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import { isDesktopContext } from "./utils/detectViewportContext";

function App() {
  return (
    <div className="main-app">
      <Router>
        <Switch>
          <Route path={"/"}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
