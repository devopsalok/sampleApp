import React from "react";
import "./App.less";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import { isDesktopContext } from "./utils/detectViewportContext";

function App() {
  return (
    <div className="main-app">
      <isDesktopContext.Provider value={window.innerWidth > 750}>
        <Router>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/test"} component={Home} />
          </Switch>
        </Router>
      </isDesktopContext.Provider>
    </div>
  );
}

export default App;
